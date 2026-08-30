# Configuración de la nube con NEON (sin login · solo para ti)

La app sincroniza tus datos entre todos tus dispositivos **sin pantalla de login**,
porque es solo para ti. Usa tu base de datos **Neon** (neon.tech, gratis) con el
**serverless driver**, que funciona directamente desde el navegador.

La "connection string" de tu base de datos es tu **clave privada**: solo quien la
tiene puede leer/escribir tus datos, y solo la tienes tú. Mientras la nube no esté
configurada, la app funciona en **modo local** (guardando en el navegador), sin
perder nada.

---

## Paso 1 · Crear la base de datos en Neon
1. Ve a **https://neon.tech** y crea una cuenta (con tu email o con Google).
2. Crea un proyecto: **New project** → ponle nombre (ej. `progresion-entreno`) →
   elige una **región** cercana a ti → **Create project**. (Plan Free: no hace falta tarjeta.)
3. Cuando el proyecto esté creado, verás un panel con la base de datos por defecto
   (`neondb`). Pulsa **Connect** (arriba a la derecha).
4. En la ventana que se abre, selecciona **Connection string** (PostgreSQL) y cópiala.
   Es algo así:
   ```
   postgresql://Usuario:Contraseña@ep-xxxx.us-east-1.aws.neon.tech/neondb
   ```
5. **Importante**: si la cadena no termina en `?sslmode=require`, añádelo al final
   (es necesario para que funcione desde el navegador):
   ```
   postgresql://Usuario:Contraseña@ep-xxxx.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```
   > Consejo: en esa misma ventana hay una pestaña **"SQL from anywhere" / serverless**,
   > que ya te da la conexión con `sslmode=require` incluido. Puedes copiar la de ahí.

**Guárdate la cadena en un sitio seguro.** Contiene la contraseña de tu base de datos.

---

## Paso 2 · Crear la tabla donde se guardan tus datos
1. En el panel de tu proyecto de Neon → **SQL Editor** (menú izquierdo o botón "Console"),
   dentro de la base `neondb`.
2. Pega este SQL y **ejecútalo** (Run):

```sql
-- Tabla donde se guarda TODO tu estado (una sola fila identificada por tu APP_ID)
create table if not exists user_data (
  id uuid primary key,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
```

No hace falta nada más. Tu `APP_ID` (ya puesto en `config.js`) es el identificador
de la fila, así que aunque alguien viera la tabla no sabría cuál fila es la tuya sin el APP_ID.

---

## Paso 3 · Pegar tu connection string en `config.js`
1. Abre `config.js` y rellena el hueco:

```js
const NEON_DATABASE_URL = "postgresql://Usuario:Contraseña@ep-xxxx.us-east-1.aws.neon.tech/neondb?sslmode=require";
// APP_ID no lo toques: es tu identificador privado.
```

> **IMPORTANTE**: la connection string es tu **contraseña de la base de datos**.
> **NUNCA** la subas a un repositorio público ni se la des a nadie.

---

## Paso 4 · Alojar en GitHub (PC + móvil con la misma URL)

> ⚠️ **Seguridad**: si subes `config.js` (que contiene la contraseña de tu base) a un
> repositorio **público**, cualquiera podría leerla y acceder a tus datos. Como dijiste
> que nadie se va a meter, tienes 2 opciones:

**Opción A (recomendada): repositorio PRIVADO**
1. Crea un repositorio **PRIVADO** en https://github.com (gratis).
2. Sube los 4 archivos: `Progresion_Entrenamiento.html`, `styles.css`, `script.js`, `config.js`.
3. GitHub → **Settings** → **Pages** → Source `Deploy from a branch` → `main` → `/ (root)` → Save.
4. Recibirás una URL `https://TU-USUARIO.github.io/NOMBRE-REPO/`. Abre esa URL en PC y móvil
   y verás tus mismos datos.

**Opción B: repo público, pero `config.js` fuera**
1. Crea el repo (público o privado) y sube solo `Progresion_Entrenamiento.html`,
   `styles.css` y `script.js` (SIN `config.js`). La página funcionará en **modo local**
   (guardando en cada navegador) pero no sincronizará entre dispositivos.
   Para sincronizar de verdad, la página necesita `config.js` con tus datos.

**Resumen**: para tu caso, **repo privado + config.js incluido** da la mejor relación
comodidad/privacidad. Si quieres máxima seguridad (ni el que inspeccione la página
podría leerla), haría falta un backend propio, que es mucho más lío y no lo pediste.

---

## Paso 5 · Probar la sincronización
1. Recarga la web: abajo verás el estado. Si configuraste bien, dirá **"En la nube"**.
2. Guarda una marca → se escribe en la nube (Neon).
3. **En el móvil** abre la misma URL de GitHub Pages → verás tus mismos datos ya guardados,
   sin introducir nada (no hay login).
4. Cada vez que guardes en un dispositivo, cuando abras el otro verás los datos actualizados.

---

## Resolución de problemas
- **El estado dice "Guardado en este navegador"** → la connection string de `config.js`
  está vacía, mal pegada, o los scripts no se cargan (mira la consola con F12).
- **"No se pudo guardar en la nube"** → revisa: (1) ejecutaste el **SQL del Paso 2**,
  (2) la connection string es correcta y termina en `?sslmode=require`,
  (3) hay conexión a internet.
- **Error de CORS en consola** → al abrir el archivo directamente (doble clic) algunos
  navegadores bloquean peticiones. **Ábrela siempre desde la URL de GitHub Pages**,
  o usa un pequeño servidor local (`npx serve`).
- **No aparece nada / pantalla en blanco** → recarga con internet activa (el driver se
  carga de un CDN). Si sigues sin ver nada, abre la consola (F12) y dime el error.

---

## Notas del cambio
- Sustituí **Supabase + login de Google** por **Neon** (serverless driver `neon()` over HTTP).
- Se eliminó todo el sistema de login (botones, panel de usuario, estilos asociados).
- Los datos se guardan en la tabla `user_data` con una fila por tu `APP_ID`.
- Se mantiene el **modo local** (localStorage) como respaldo si la nube no está configurada,
  y los botones **Exportar / Importar** para copias de seguridad manuales.