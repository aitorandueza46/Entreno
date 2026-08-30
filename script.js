
const EXERCISES = [{"id": "flexiones", "nombre": "Flexiones", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Lunes/Jueves", "rep_min": 6, "rep_max": 10, "inc_peso": 2.5, "objetivo": 20, "unidad_obj": "kg", "ej_peso": 5, "ej_rep": 8, "nota": "Lastre con chaleco/cinturon. Rango 6-10 (asuncion documentada)."}, {"id": "fondos", "nombre": "Fondos lastrados", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Lunes/Jueves", "rep_min": 4, "rep_max": 8, "inc_peso": 2.5, "objetivo": 50, "unidad_obj": "kg", "ej_peso": 5, "ej_rep": 8, "nota": "Objetivo LP explicito del usuario: +50 kg."}, {"id": "press_hombros", "nombre": "Press de hombros", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Lunes/Jueves", "rep_min": 6, "rep_max": 10, "inc_peso": 4, "objetivo": 28, "unidad_obj": "kg", "ej_peso": 16, "ej_rep": 8, "nota": "Kettlebell: incrementos de 4 kg (asuncion documentada)."}, {"id": "dominadas_lastradas", "nombre": "Dominadas lastradas", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Martes/Viernes", "rep_min": 3, "rep_max": 6, "inc_peso": 2.5, "objetivo": 40, "unidad_obj": "kg", "ej_peso": 5, "ej_rep": 6, "nota": "Objetivo LP explicito del usuario: +40 kg."}, {"id": "dominada_biceps", "nombre": "Dominada biceps", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Martes/Viernes", "rep_min": 3, "rep_max": 6, "inc_peso": 2.5, "objetivo": 30, "unidad_obj": "kg", "ej_peso": 5, "ej_rep": 5, "nota": "Objetivo LP configurable."}, {"id": "remo", "nombre": "Remo", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Martes/Viernes", "rep_min": 20, "rep_max": 20, "inc_peso": 2.5, "objetivo": 25, "unidad_obj": "kg", "ej_peso": 5, "ej_rep": 20, "nota": "Esquema 3x20 fijo (no modificar). Solo progresa el peso."}, {"id": "sentadilla", "nombre": "Sentadilla", "tipo": "RM", "grupo": ["Fuerza", "Piernas"], "dia": "Miercoles", "rep_min": 3, "rep_max": 6, "inc_peso": 4, "objetivo": 40, "unidad_obj": "kg", "ej_peso": 12, "ej_rep": 5, "nota": "Kettlebell/goblet: incrementos de 4 kg (asuncion documentada)."}, {"id": "rdl", "nombre": "Peso muerto rumano", "tipo": "RM", "grupo": ["Fuerza", "Piernas"], "dia": "Miercoles", "rep_min": 3, "rep_max": 6, "inc_peso": 5, "objetivo": 60, "unidad_obj": "kg", "ej_peso": 20, "ej_rep": 5, "nota": "Barra: incrementos de 5 kg (asuncion documentada)."}, {"id": "gemelo_dinamico", "nombre": "Gemelo dinamico", "tipo": "RM", "grupo": ["Piernas"], "dia": "Miercoles", "rep_min": 8, "rep_max": 12, "inc_peso": 5, "objetivo": 40, "unidad_obj": "kg", "ej_peso": 20, "ej_rep": 10, "nota": "Peso referencia y objetivo configurables."}, {"id": "nordic_curl", "nombre": "Nordic Curl", "tipo": "RM", "grupo": ["Piernas"], "dia": "Miercoles", "rep_min": 4, "rep_max": 8, "inc_peso": 0, "objetivo": 8, "unidad_obj": "reps", "ej_peso": 0, "ej_rep": 5, "nota": "Peso extra = 0 (peso corporal). Objetivo: 8 reps con maxima calidad."}, {"id": "curl_biceps", "nombre": "Curl de biceps", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Martes/Viernes", "rep_min": 8, "rep_max": 12, "inc_peso": 2, "objetivo": 20, "unidad_obj": "kg", "ej_peso": 13, "ej_rep": 9, "nota": "Mancuernas: incrementos de 2 kg."}, {"id": "curl_martillo", "nombre": "Curl martillo", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Martes/Viernes", "rep_min": 8, "rep_max": 12, "inc_peso": 2, "objetivo": 20, "unidad_obj": "kg", "ej_peso": 13, "ej_rep": 9, "nota": "Mancuernas: incrementos de 2 kg."}, {"id": "elev_laterales", "nombre": "Elevaciones laterales", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Lunes/Jueves", "rep_min": 8, "rep_max": 15, "inc_peso": 1, "objetivo": 14, "unidad_obj": "kg", "ej_peso": 8, "ej_rep": 10, "nota": "Rango 8-15 explicito del usuario."}, {"id": "vuelos_posteriores", "nombre": "Vuelos posteriores", "tipo": "RM", "grupo": ["Fuerza"], "dia": "Lunes/Jueves", "rep_min": 8, "rep_max": 12, "inc_peso": 1, "objetivo": 12, "unidad_obj": "kg", "ej_peso": 6, "ej_rep": 9, "nota": "Mancuernas: incrementos de 1 kg."}, {"id": "curl_muneca", "nombre": "Curl de muneca", "tipo": "RM", "grupo": ["Agarre"], "dia": "Martes/Viernes", "rep_min": 12, "rep_max": 20, "inc_peso": 1, "objetivo": 16, "unidad_obj": "kg", "ej_peso": 8, "ej_rep": 15, "nota": "Alta repeticion, incrementos de 1 kg."}, {"id": "sujetar_discos", "nombre": "Sujetar discos (pinch)", "tipo": "TIEMPO", "grupo": ["Agarre"], "dia": "Martes/Viernes", "umbral": 30, "paso": 2, "inc_peso": 1.25, "objetivo": 20, "unidad_obj": "kg", "ej_peso": 10, "ej_met": 15, "accion": "Subir peso y reiniciar el tiempo objetivo", "nota": "Umbral 30 s antes de subir peso (asuncion documentada)."}, {"id": "dead_hang", "nombre": "Colgarse de la barra (dead hang)", "tipo": "TIEMPO", "grupo": ["Agarre"], "dia": "Martes/Viernes", "umbral": 90, "paso": 3, "inc_peso": 2.5, "objetivo": 60, "unidad_obj": "s + lastre", "ej_peso": 0, "ej_met": 30, "accion": "Anadir lastre y reiniciar el tiempo objetivo", "nota": "0 kg = solo peso corporal. Umbral 90 s antes de lastrar."}, {"id": "towel_hang", "nombre": "Colgarse con toalla", "tipo": "TIEMPO", "grupo": ["Agarre"], "dia": "Martes/Viernes", "umbral": 60, "paso": 2, "inc_peso": 0, "objetivo": 45, "unidad_obj": "s", "ej_peso": 0, "ej_met": 15, "accion": "Usar una toalla mas fina o pasar a una mano asistida", "nota": "Umbral 60 s antes de aumentar dificultad."}, {"id": "press_isometrico", "nombre": "Press isometrico", "tipo": "TIEMPO", "grupo": ["Isometria"], "dia": "Lunes/Jueves", "umbral": 30, "paso": 2, "inc_peso": 0, "objetivo": 30, "unidad_obj": "s", "ej_peso": 0, "ej_met": 10, "accion": "Aumentar la dificultad de la posicion (mas amplitud/carga)", "nota": "Ejercicio isometrico a peso corporal."}, {"id": "remo_isometrico", "nombre": "Remo isometrico", "tipo": "TIEMPO", "grupo": ["Isometria"], "dia": "Martes/Viernes", "umbral": 40, "paso": 3, "inc_peso": 2.5, "objetivo": 25, "unidad_obj": "s + kg", "ej_peso": 5, "ej_met": 20, "accion": "Subir peso y reiniciar el tiempo objetivo", "nota": "Umbral 40 s antes de subir peso."}, {"id": "sentadilla_isometrica", "nombre": "Sentadilla isometrica", "tipo": "TIEMPO", "grupo": ["Isometria", "Piernas"], "dia": "Miercoles", "umbral": 60, "paso": 3, "inc_peso": 0, "objetivo": 60, "unidad_obj": "s", "ej_peso": 0, "ej_met": 20, "accion": "Progresar a sentadilla isometrica a una pierna (asistida)", "nota": "Isometrico a peso corporal."}, {"id": "gemelo_isometrico", "nombre": "Gemelo isometrico", "tipo": "TIEMPO", "grupo": ["Isometria", "Piernas"], "dia": "Miercoles", "umbral": 45, "paso": 3, "inc_peso": 0, "objetivo": 45, "unidad_obj": "s", "ej_peso": 0, "ej_met": 20, "accion": "Pasar a una pierna o anadir peso", "nota": "Isometrico a peso corporal."}, {"id": "plancha", "nombre": "Plancha", "tipo": "TIEMPO", "grupo": ["Isometria"], "dia": "Martes/Viernes", "umbral": 120, "paso": 5, "inc_peso": 0, "objetivo": 120, "unidad_obj": "s", "ej_peso": 0, "ej_met": 45, "accion": "Progresar a plancha con peso o plancha a una mano", "nota": "Isometrico de core, a peso corporal."}, {"id": "farmer_walk", "nombre": "Farmer Walk", "tipo": "DIST", "grupo": ["Agarre"], "dia": "Martes/Viernes", "umbral": 40, "paso": 5, "inc_peso": 8, "objetivo": 60, "unidad_obj": "m", "ej_peso": 24, "ej_met": 20, "accion": "Subir peso y reiniciar la distancia objetivo", "nota": "Kettlebells por mano: incrementos de 8 kg (par)."}, {"id": "suitcase_carry", "nombre": "Suitcase Carry", "tipo": "DIST", "grupo": ["Agarre", "Piernas"], "dia": "Miercoles", "umbral": 40, "paso": 5, "inc_peso": 4, "objetivo": 50, "unidad_obj": "m", "ej_peso": 16, "ej_met": 20, "accion": "Subir peso y reiniciar la distancia objetivo", "nota": "Carga unilateral: incrementos de 4 kg."}, {"id": "pica", "nombre": "Flexion de pica (progresiones)", "tipo": "VARIANTE", "grupo": ["Calistenia"], "dia": "Lunes/Jueves", "umbral": 10, "paso": 1, "unidad_met": "reps", "objetivo": "HSPU libre x5", "variantes": ["Pike push-up (rodillas elevadas)", "Pike push-up (pies elevados)", "Pike push-up (pies muy elevados)", "Wall HSPU (asistido)", "HSPU libre"], "ej_var": "Pike push-up (rodillas elevadas)", "ej_met": 8, "nota": "Progresion de handstand push-up. Umbral 10 reps por variante."}, {"id": "front_lever", "nombre": "Front Lever", "tipo": "VARIANTE", "grupo": ["Calistenia", "Isometria"], "dia": "Martes/Viernes", "umbral": 15, "paso": 2, "unidad_met": "s", "objetivo": "Full (15 s)", "variantes": ["Tuck", "Advanced Tuck", "One Leg", "Straddle", "Full"], "ej_var": "Tuck", "ej_met": 8, "nota": "Progresion clasica de Front Lever. Umbral 15 s por variante."}, {"id": "cmj", "nombre": "CMJ (Counter Movement Jump)", "tipo": "PLIO", "grupo": ["Potencia", "Piernas"], "dia": "Lunes/Jueves", "unidad_met": "cm", "objetivo": 70, "ej_met": 55, "nota": "Objetivo LP explicito del usuario: 70 cm."}, {"id": "broad_jump", "nombre": "Broad Jump", "tipo": "PLIO", "grupo": ["Potencia", "Piernas"], "dia": "Miercoles", "unidad_met": "cm", "objetivo": 220, "ej_met": 180, "nota": "Distancia en cm. Objetivo configurable."}, {"id": "box_jump", "nombre": "Box Jump", "tipo": "PLIO", "grupo": ["Potencia", "Piernas"], "dia": "Miercoles", "unidad_met": "cm", "objetivo": 80, "ej_met": 50, "nota": "Altura de la caja utilizada, en cm."}, {"id": "depth_jump", "nombre": "Depth Jump", "tipo": "PLIO", "grupo": ["Potencia", "Piernas"], "dia": "Miercoles", "unidad_met": "cm", "objetivo": 40, "ej_met": 30, "nota": "Altura de la caja de partida, en cm. Prioriza calidad, no la altura."}];
const ROUTINE_DAYS = [["Lunes - PUSH", [["CMJ", "Potencia", "4x3", "altura de salto", "-", "cmj"], ["Flexiones pliometricas", "Potencia", "3x5", "explosivo, sin fallo", "-", null], ["Flexiones", "Fuerza", "3x8", "8", "+5 kg", "flexiones"], ["Fondos lastrados", "Fuerza", "4x6", "6", "+5 kg", "fondos"], ["Flexion de pica (progresiones)", "Fuerza", "3x8", "8", "-", "pica"], ["Press de hombros", "Fuerza", "3x8", "8", "16 kg", "press_hombros"], ["Press isometrico", "Isometria", "3x10 s", "10 s", "-", "press_isometrico"], ["Elevaciones laterales", "Hipertrofia", "4x15", "15", "8 kg", "elev_laterales"], ["Vuelos posteriores", "Hipertrofia", "2x10", "10", "6 kg", "vuelos_posteriores"], ["Legs Raise", "Core", "2x10", "10", "-", null], ["Hollow Rock", "Core", "2x30", "30", "-", null]]], ["Martes - PULL", [["Dominadas explosivas", "Potencia", "3x3", "explosivo, sin fallo", "-", null], ["Dominadas lastradas", "Fuerza", "4x6", "6", "+5 kg", "dominadas_lastradas"], ["Dominada biceps", "Fuerza", "3x6", "6", "+5 kg", "dominada_biceps"], ["Remo", "Fuerza", "3x20", "20", "+5 kg", "remo"], ["Front Lever (progresiones)", "Isometria/Calistenia", "3x5 s", "5 s", "-", "front_lever"], ["Remo isometrico", "Isometria", "3x20 s", "20 s", "+5 kg", "remo_isometrico"], ["Plancha", "Core", "1x60 s", "60 s", "-", "plancha"], ["Curl de biceps", "Hipertrofia", "3x8-12", "8-12", "13 kg", "curl_biceps"], ["Curl martillo", "Hipertrofia", "2-3x8-12", "8-12", "13 kg", "curl_martillo"], ["Colgarse de la barra con toalla", "Agarre", "3x20 s", "20 s", "-", "towel_hang"], ["Colgarse de la barra", "Agarre", "3x30 s", "30 s", "Max", "dead_hang"], ["Curl de muneca x2", "Agarre", "2x2xMax", "Max", "Max", "curl_muneca"], ["Sujetar discos", "Agarre", "3x15", "15", "Max", "sujetar_discos"], ["Farmer Walk", "Agarre", "3x20 m", "20 m", "Max", "farmer_walk"]]], ["Miercoles - LEGS", [["Depth Jump", "Potencia/Pliometria", "3x4", "explosivo, sin fallo", "-", "depth_jump"], ["Broad Jump", "Potencia/Pliometria", "3x4", "mejor distancia", "-", "broad_jump"], ["Box Jump", "Potencia/Pliometria", "3x3", "altura", "-", "box_jump"], ["Sentadilla", "Fuerza", "4x6", "6", "12 kg", "sentadilla"], ["Peso muerto rumano", "Fuerza", "3x6", "6", "-", "rdl"], ["Gemelo dinamico", "Fuerza (pantorrilla)", "3x10", "10", "-", "gemelo_dinamico"], ["Sentadilla isometrica", "Isometria", "3x20 s", "20 s", "-", "sentadilla_isometrica"], ["Gemelo isometrico", "Isometria", "3x30 s", "30 s", "-", "gemelo_isometrico"], ["Nordic Curl", "Hipertrofia/cadena posterior", "2x6", "6", "-", "nordic_curl"], ["Suitcase Carry", "Core/estabilidad", "3x20 m", "20 m", "-", "suitcase_carry"]]], ["Jueves - PUSH (identico al lunes)", [["CMJ", "Potencia", "4x3", "altura de salto", "-", "cmj"], ["Flexiones pliometricas", "Potencia", "3x5", "explosivo, sin fallo", "-", null], ["Flexiones", "Fuerza", "3x8", "8", "+5 kg", "flexiones"], ["Fondos lastrados", "Fuerza", "4x6", "6", "+5 kg", "fondos"], ["Flexion de pica (progresiones)", "Fuerza", "3x8", "8", "-", "pica"], ["Press de hombros", "Fuerza", "3x8", "8", "16 kg", "press_hombros"], ["Press isometrico", "Isometria", "3x10 s", "10 s", "-", "press_isometrico"], ["Elevaciones laterales", "Hipertrofia", "4x15", "15", "8 kg", "elev_laterales"], ["Vuelos posteriores", "Hipertrofia", "2x10", "10", "6 kg", "vuelos_posteriores"], ["Legs Raise", "Core", "2x10", "10", "-", null], ["Hollow Rock", "Core", "2x30", "30", "-", null]]], ["Viernes - PULL (identico al martes)", [["Dominadas explosivas", "Potencia", "3x3", "explosivo, sin fallo", "-", null], ["Dominadas lastradas", "Fuerza", "4x6", "6", "+5 kg", "dominadas_lastradas"], ["Dominada biceps", "Fuerza", "3x6", "6", "+5 kg", "dominada_biceps"], ["Remo", "Fuerza", "3x20", "20", "+5 kg", "remo"], ["Front Lever (progresiones)", "Isometria/Calistenia", "3x5 s", "5 s", "-", "front_lever"], ["Remo isometrico", "Isometria", "3x20 s", "20 s", "+5 kg", "remo_isometrico"], ["Plancha", "Core", "1x60 s", "60 s", "-", "plancha"], ["Curl de biceps", "Hipertrofia", "3x8-12", "8-12", "13 kg", "curl_biceps"], ["Curl martillo", "Hipertrofia", "2-3x8-12", "8-12", "13 kg", "curl_martillo"], ["Colgarse de la barra con toalla", "Agarre", "3x20 s", "20 s", "-", "towel_hang"], ["Colgarse de la barra", "Agarre", "3x30 s", "30 s", "Max", "dead_hang"], ["Curl de muneca x2", "Agarre", "2x2xMax", "Max", "Max", "curl_muneca"], ["Sujetar discos", "Agarre", "3x15", "15", "Max", "sujetar_discos"], ["Farmer Walk", "Agarre", "3x20 m", "20 m", "Max", "farmer_walk"]]]];

/* ============================================================
   ESTADO Y PERSISTENCIA
   ============================================================ */
const STORAGE_KEY = "training_tracker_state_v1";
const LS_KEY = "training_tracker_state_local_v1";

let neonSql = null;

function neonConfigured(){
  try{
    return typeof NEON_DATABASE_URL !== "undefined" && !!NEON_DATABASE_URL;
  }catch(e){ return false; }
}
function initNeon(){
  if(!neonConfigured() || typeof window.neon === "undefined") return;
  try{
    neonSql = window.neon(NEON_DATABASE_URL);
  }catch(e){ neonSql = null; }
}
function isCloudActive(){ return !!neonSql; }

function normalizeState(raw){
  if(!raw || typeof raw !== "object") return null;
  return {
    marcas: Array.isArray(raw.marcas) ? raw.marcas : [],
    configOverrides: raw.configOverrides && typeof raw.configOverrides === "object" ? raw.configOverrides : {},
    objetivoOverrides: raw.objetivoOverrides && typeof raw.objetivoOverrides === "object" ? raw.objetivoOverrides : {},
  };
}

async function cloudFetchState(){
  if(!isCloudActive()) return null;
  try{
    const rows = await neonSql`select state from user_data where id = ${APP_ID}::uuid`;
    if(rows && rows.length > 0 && rows[0].state){
      const st = typeof rows[0].state === "string" ? JSON.parse(rows[0].state) : rows[0].state;
      return normalizeState(st);
    }
  }catch(e){}
  return null;
}
async function cloudSaveState(stateObj){
  if(!isCloudActive()) return false;
  try{
    await neonSql`
      insert into user_data (id, state, updated_at)
      values (${APP_ID}::uuid, ${JSON.stringify(stateObj)}::jsonb, now())
      on conflict (id) do update set state = excluded.state, updated_at = now()`;
    return true;
  }catch(e){ return false; }
}

function localStorageLoad(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : null;
  }catch(e){ return null; }
}
function localStorageSave(stateObj){
  try{ localStorage.setItem(LS_KEY, JSON.stringify(stateObj)); return true; }
  catch(e){ return false; }
}
async function claudeStorageLoad(){
  if(typeof window.storage === "undefined") return null;
  try{
    const res = await window.storage.get(STORAGE_KEY, false);
    if(res && res.value) return normalizeState(JSON.parse(res.value));
  }catch(e){}
  return null;
}
async function claudeStorageSave(stateObj){
  if(typeof window.storage === "undefined") return false;
  try{ await window.storage.set(STORAGE_KEY, JSON.stringify(stateObj), false); return true; }
  catch(e){ return false; }
}

async function migrarLocalANube(){
  // si hay datos en localStorage y no hay nada en la nube, los subimos
  if(!isCloudActive()) return;
  const local = localStorageLoad();
  if(!local || (local.marcas.length===0)) return;
  const cloud = await cloudFetchState();
  if(cloud) return; // la nube ya tiene datos: es la fuente de verdad
  const ok = await cloudSaveState(local);
  if(ok) setStorageStatus("Datos locales subidos a la nube");
}

let STATE = {
  marcas: [],              // [{mes:"2026-09", pesoCorporal:73, data:{exId:{...}}}]
  configOverrides: {},      // { exId: {min,max,paso,incPeso,accion} }
  objetivoOverrides: {}     // { exId: value }
};

function defaultExampleMonth(){
  const data = {};
  EXERCISES.forEach(ex=>{
    if(ex.tipo === "VARIANTE") data[ex.id] = {variante: ex.ej_var, metrica: ex.ej_met};
    else if(ex.tipo === "PLIO") data[ex.id] = {metrica: ex.ej_met};
    else data[ex.id] = {peso: ex.ej_peso, metrica: (ex.ej_rep !== undefined ? ex.ej_rep : ex.ej_met)};
  });
  return {mes:"2026-09", pesoCorporal:73, data};
}

async function loadState(){
  initNeon();

  // 1) nube (Supabase) si está configurada
  if(isCloudActive()){
    const cloud = await cloudFetchState();
    if(cloud && cloud.marcas.length > 0){
      STATE = cloud;
      setStorageStatus("En la nube · " + new Date().toLocaleTimeString());
      return;
    }
  }

  // 2) localStorage (respaldo offline)
  const local = localStorageLoad();
  if(local && local.marcas.length > 0){
    STATE = local;
    if(isCloudActive()){
      const ok = await cloudSaveState(STATE);
      setStorageStatus(ok ? "En la nube (datos subidos desde este navegador)"
                          : "Guardado en este navegador (no se pudo subir a la nube)");
    } else {
      setStorageStatus("Guardado en este navegador · configura la nube para sincronizar");
    }
    return;
  }

  // 3) artefacto original de Claude (window.storage), por compatibilidad
  const claude = await claudeStorageLoad();
  if(claude && claude.marcas.length > 0){
    STATE = claude;
    setStorageStatus("Datos importados (guardado anterior)");
    return;
  }

  // 4) sin datos previos -> sembramos el mes de ejemplo
  //    (SOLO en este navegador: no escribimos en la nube datos de relleno,
  //     para que el primer dispositivo con datos reales sea la fuente de verdad)
  STATE.marcas = [defaultExampleMonth()];
  localStorageSave(STATE);
  setStorageStatus(isCloudActive() ? "Sin datos todavía · listo para sincronizar"
                                       : "Guardado solo en este navegador (configura la nube para sincronizar)");
}

async function saveState(){
  // 1) nube
  if(isCloudActive()){
    const ok = await cloudSaveState(STATE);
    if(ok){ setStorageStatus("En la nube · " + new Date().toLocaleTimeString()); return; }
    setStorageStatus("No se pudo guardar en la nube · usa Exportar para no perder tus datos");
    return;
  }
  // 2) localStorage
  if(localStorageSave(STATE)){
    setStorageStatus(isCloudActive()
      ? "Guardado en este navegador · revisa las claves de la nube"
      : "Guardado en este navegador · usa Exportar como respaldo");
    return;
  }
  // 3) artefacto Claude
  const ok = await claudeStorageSave(STATE);
  if(ok){ setStorageStatus("Guardado en tu cuenta de Claude"); return; }
  setStorageStatus("No se pudo guardar · usa Exportar para no perder tus datos");
}

function setStorageStatus(txt){
  const el = document.getElementById("storageStatus");
  if(el) el.textContent = txt;
}

/* ============================================================
   HELPERS DE CONFIGURACION / OBJETIVOS (con overrides editables)
   ============================================================ */
function getCfg(ex){
  const o = STATE.configOverrides[ex.id] || {};
  if(ex.tipo === "RM"){
    return {
      min: o.min !== undefined ? o.min : ex.rep_min,
      max: o.max !== undefined ? o.max : ex.rep_max,
      incPeso: o.incPeso !== undefined ? o.incPeso : ex.inc_peso,
    };
  }
  if(ex.tipo === "TIEMPO" || ex.tipo === "DIST"){
    return {
      umbral: o.umbral !== undefined ? o.umbral : ex.umbral,
      paso: o.paso !== undefined ? o.paso : ex.paso,
      incPeso: o.incPeso !== undefined ? o.incPeso : ex.inc_peso,
      accion: o.accion !== undefined ? o.accion : ex.accion,
    };
  }
  if(ex.tipo === "VARIANTE"){
    return {
      umbral: o.umbral !== undefined ? o.umbral : ex.umbral,
      paso: o.paso !== undefined ? o.paso : ex.paso,
    };
  }
  return {};
}
function getObjetivo(ex){
  const o = STATE.objetivoOverrides[ex.id];
  return (o !== undefined && o !== null && o !== "") ? o : ex.objetivo;
}

/* ============================================================
   ACCESO A MARCAS (orden cronologico por 'mes' YYYY-MM)
   ============================================================ */
function marcasOrdenadas(){
  return [...STATE.marcas].sort((a,b)=> a.mes < b.mes ? -1 : (a.mes > b.mes ? 1 : 0));
}
function lastN(n){
  const arr = marcasOrdenadas();
  return arr.slice(Math.max(0, arr.length-n));
}
function ultimaMarcaCon(exId){
  const arr = marcasOrdenadas();
  for(let i=arr.length-1; i>=0; i--){
    const v = arr[i].data[exId];
    if(v !== undefined && v !== null) return {marca:arr[i], valor:v, index:i};
  }
  return null;
}
function marcaAnteriorA(idx, exId){
  const arr = marcasOrdenadas();
  for(let i=idx-1; i>=0; i--){
    const v = arr[i].data[exId];
    if(v !== undefined && v !== null) return {marca:arr[i], valor:v};
  }
  return null;
}

/* ============================================================
   MOTORES DE PROGRESION  (misma logica que las formulas del Excel)
   ============================================================ */
function round0(n){ return Math.round(n); }

function computeProgresion(ex){
  const cfg = getCfg(ex);
  const found = ultimaMarcaCon(ex.id);
  const result = {
    tieneDatos: !!found, variante: "-", peso: "-", metrica: "-", unidad: "",
    weeks: [], estado: "-", record: "N/D", progresoPct: null,
  };
  if(!found) { result.estado = "Introduce tu primera marca en 'Marca mensual'."; return result; }

  const v = found.valor;
  const prevInfo = marcaAnteriorA(found.index, ex.id);

  if(ex.tipo === "RM"){
    const P = v.peso, R = v.metrica;
    result.peso = P; result.metrica = R; result.unidad = "reps";
    const maxed = R >= cfg.max;
    for(let n=0;n<4;n++){
      const peso = maxed ? P + cfg.incPeso : P;
      const met = maxed ? Math.min(cfg.min+n, cfg.max) : Math.min(R+n, cfg.max);
      result.weeks.push({peso, metrica: met});
    }
    result.estado = maxed ? "SUBIR PESO Y REINICIAR REPS" : "Progresión en el rango (+1 rep/semana)";
    result.estadoTipo = maxed ? "subir" : "ok";
    if(!prevInfo) result.record = "N/D (1er registro)";
    else{
      const pv = prevInfo.valor;
      result.record = (P > pv.peso || (P===pv.peso && R>pv.metrica)) ? "RECORD" : "-";
    }
    result.progresoPct = (cfg.incPeso>0) ? P/getObjetivo(ex) : R/getObjetivo(ex);
  }

  else if(ex.tipo === "TIEMPO" || ex.tipo === "DIST"){
    const P = v.peso, R = v.metrica;
    result.peso = P; result.metrica = R;
    result.unidad = ex.tipo === "TIEMPO" ? "s" : "m";
    const maxed = R >= cfg.umbral;
    const frac = ex.tipo === "TIEMPO" ? 0.6 : 0.5;
    const base = round0(cfg.umbral*frac);
    for(let n=0;n<4;n++){
      const peso = maxed ? P + cfg.incPeso : P;
      const met = maxed ? base + cfg.paso*n : Math.min(R + cfg.paso*n, cfg.umbral);
      result.weeks.push({peso, metrica: met});
    }
    result.estado = maxed ? cfg.accion : "Progresando hacia el umbral";
    result.estadoTipo = maxed ? "subir" : "ok";
    if(!prevInfo) result.record = "N/D (1er registro)";
    else{
      const pv = prevInfo.valor;
      result.record = (P > pv.peso || (P===pv.peso && R>pv.metrica)) ? "RECORD" : "-";
    }
    result.progresoPct = R/getObjetivo(ex);
  }

  else if(ex.tipo === "VARIANTE"){
    const Var = v.variante, R = v.metrica;
    result.variante = Var; result.metrica = R;
    result.unidad = ex.unidad_met;
    const maxed = R >= cfg.umbral;
    const base = round0(cfg.umbral*0.5);
    for(let n=0;n<4;n++){
      const met = maxed ? base + cfg.paso*n : Math.min(R + cfg.paso*n, cfg.umbral);
      result.weeks.push({peso:null, metrica: met});
    }
    const idx = ex.variantes.indexOf(Var);
    const nextVar = (idx>=0 && idx < ex.variantes.length-1) ? ex.variantes[idx+1] : "variante máxima alcanzada";
    result.estado = maxed ? ("Pasar a la siguiente variante: " + nextVar) : "Progresando en la variante actual";
    result.estadoTipo = maxed ? "subir" : "ok";
    if(!prevInfo) result.record = "N/D (1er registro)";
    else{
      const pv = prevInfo.valor;
      const prevIdx = ex.variantes.indexOf(pv.variante);
      result.record = (R > pv.metrica || (Var!==pv.variante && idx>prevIdx)) ? "RECORD" : "-";
    }
    const total = ex.variantes.length;
    result.progresoPct = idx>=0 ? (idx+1)/total : null;
    result.progresoLabel = idx>=0 ? `${idx+1} / ${total} niveles` : "-";
  }

  else if(ex.tipo === "PLIO"){
    const R = v.metrica;
    result.metrica = R; result.unidad = ex.unidad_met;
    result.estado = "Marca mensual (sin objetivo semanal): prioriza calidad y velocidad máxima.";
    result.estadoTipo = "ok";
    if(!prevInfo) result.record = "N/D (1er registro)";
    else result.record = (R > prevInfo.valor.metrica) ? "RECORD" : "-";
    result.progresoPct = R/getObjetivo(ex);
  }

  return result;
}

function computeHistBest(ex){
  const arr = marcasOrdenadas().filter(m=> m.data[ex.id] !== undefined && m.data[ex.id] !== null);
  if(arr.length===0) return {label:"-", mes:"-"};
  if(ex.tipo === "VARIANTE"){
    let best=-1, bestMes=null, bestMet=null;
    arr.forEach(m=>{
      const idx = ex.variantes.indexOf(m.data[ex.id].variante);
      if(idx>best){ best=idx; bestMes=m.mes; bestMet=m.data[ex.id].metrica; }
    });
    return {label: best>=0 ? `${ex.variantes[best]} (${bestMet} ${ex.unidad_met})` : "-", mes:bestMes};
  }
  if(ex.tipo === "PLIO"){
    let best=null, bestMes=null;
    arr.forEach(m=>{ const val=m.data[ex.id].metrica; if(best===null||val>best){best=val; bestMes=m.mes;} });
    return {label: best!==null ? `${best} ${ex.unidad_met}` : "-", mes:bestMes};
  }
  const basis = (ex.tipo==="RM" && ex.inc_peso===0) ? "metrica" : "peso";
  let best=null, bestMes=null;
  arr.forEach(m=>{
    const val = m.data[ex.id][basis];
    if(best===null || val>best){ best=val; bestMes=m.mes; }
  });
  const unidad = basis==="peso" ? "kg" : (ex.tipo==="RM" ? "reps" : (ex.tipo==="TIEMPO"?"s":"m"));
  return {label: best!==null ? `${best} ${unidad}` : "-", mes:bestMes};
}

/* ============================================================
   HELPERS DE PRESENTACION
   ============================================================ */
const MESES_ES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
                   "Septiembre","Octubre","Noviembre","Diciembre"];
function mesLabel(mesStr){
  if(!mesStr || mesStr==="-") return "-";
  const [y,m] = mesStr.split("-").map(Number);
  return `${MESES_ES[m-1]} ${y}`;
}
function mesLabelShort(mesStr){
  if(!mesStr || mesStr==="-") return "-";
  const [y,m] = mesStr.split("-").map(Number);
  return `${MESES_ES[m-1].slice(0,3)} ${y}`;
}
function fmtWeekVal(ex, wk){
  if(ex.tipo==="RM") return `${wk.peso} kg  ${wk.metrica}`;
  if(ex.tipo==="TIEMPO") return `${wk.peso} kg · ${wk.metrica}s`;
  if(ex.tipo==="DIST") return `${wk.peso} kg · ${wk.metrica}m`;
  if(ex.tipo==="VARIANTE") return `${wk.metrica} ${ex.unidad_met}`;
  return "-";
}
function fmtActual(ex, r){
  if(ex.tipo==="RM") return `${r.peso} <span class="u">kg</span>  ${r.metrica} <span class="u">reps</span>`;
  if(ex.tipo==="TIEMPO") return `${r.peso} <span class="u">kg</span> · ${r.metrica} <span class="u">s</span>`;
  if(ex.tipo==="DIST") return `${r.peso} <span class="u">kg</span> · ${r.metrica} <span class="u">m</span>`;
  if(ex.tipo==="VARIANTE") return `${r.variante}<br><span class="u">${r.metrica} ${ex.unidad_met}</span>`;
  if(ex.tipo==="PLIO") return `${r.metrica} <span class="u">${ex.unidad_met}</span>`;
  return "-";
}
function fmtActualPlain(ex, r){
  if(!r.tieneDatos) return "";
  if(ex.tipo==="RM") return `${r.peso} kg  ${r.metrica} reps`;
  if(ex.tipo==="TIEMPO") return `${r.peso} kg · ${r.metrica} s`;
  if(ex.tipo==="DIST") return `${r.peso} kg · ${r.metrica} m`;
  if(ex.tipo==="VARIANTE") return `${r.variante} · ${r.metrica} ${ex.unidad_met}`;
  if(ex.tipo==="PLIO") return `${r.metrica} ${ex.unidad_met}`;
  return "-";
}
function pillGroup(g){ return `<span class="pill ${g}">${g}</span>`; }
function primaryGroup(ex){ return ex.grupo[0]; }
function clamp01(x){ return Math.max(0, Math.min(1, x)); }

function svgSparkline(points, color){
  // points: array of {x:label, y:number}
  const valid = points.filter(p=> typeof p.y === "number" && !isNaN(p.y));
  if(valid.length < 2){
    return `<div style="color:var(--dim2);font-size:12px;padding:20px 0;text-align:center">
      Necesitas al menos 2 meses con datos para ver la gráfica.</div>`;
  }
  const W = 320, H = 100, PAD = 8;
  const ys = valid.map(p=>p.y);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const rangeY = (maxY - minY) || 1;
  const stepX = (W - PAD*2) / (valid.length - 1);
  const coords = valid.map((p,i)=>{
    const x = PAD + i*stepX;
    const y = H - PAD - ((p.y - minY)/rangeY) * (H - PAD*2);
    return [x,y];
  });
  const path = coords.map((c,i)=> (i===0?"M":"L") + c[0].toFixed(1) + "," + c[1].toFixed(1)).join(" ");
  const dots = coords.map((c,i)=>
    `<circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="2.6" fill="${color}"><title>${valid[i].x}: ${valid[i].y}</title></circle>`
  ).join("");
  const last = coords[coords.length-1];
  return `<svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    <path d="${path}" fill="none" stroke="${color}" stroke-width="2" vector-effect="non-scaling-stroke"/>
    ${dots}
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="4" fill="${color}"/>
  </svg>
  <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim2);margin-top:2px">
    <span>${valid[0].x}</span><span>${valid[valid.length-1].x}</span>
  </div>`;
}
function seriesFor(exId, field){
  return marcasOrdenadas()
    .filter(m=> m.data[exId] !== undefined && m.data[exId] !== null)
    .map(m=> ({x: mesLabel(m.mes).slice(0,3)+" "+m.mes.slice(2,4), y: m.data[exId][field]}));
}
function seriesPesoCorporal(){
  return marcasOrdenadas()
    .filter(m=> m.pesoCorporal !== undefined && m.pesoCorporal !== null && m.pesoCorporal !== "")
    .map(m=> ({x: mesLabel(m.mes).slice(0,3)+" "+m.mes.slice(2,4), y: Number(m.pesoCorporal)}));
}

/* ============================================================
   RENDER: DASHBOARD
   ============================================================ */
function renderDashboard(){
  const el = document.getElementById("view-dashboard");
  const arr = marcasOrdenadas();
  const last = arr[arr.length-1];
  const nMeses = arr.length;
  let records = 0, objetivosOk = 0;
  EXERCISES.forEach(ex=>{
    const r = computeProgresion(ex);
    if(r.record === "RECORD") records++;
    if(r.progresoPct !== null && r.progresoPct >= 1) objetivosOk++;
  });
  const pesoActual = last && last.pesoCorporal ? last.pesoCorporal + " kg" : "-";

  let html = `
  <div class="hero">
    <h2>Hola  esto es lo que llevas hasta ahora</h2>
    <p>${nMeses} mes${nMeses===1?"":"es"} registrado${nMeses===1?"":"s"} desde septiembre de 2026 · última marca: <b>${mesLabel(last?last.mes:null)}</b></p>
  </div>

  <div class="section-title">Resumen general</div>
  <div class="grid cols-summary">
    <div class="stat"><div class="label">Mes actual</div><div class="value">${mesLabelShort(last?last.mes:null)}</div></div>
    <div class="stat"><div class="label">Peso corporal</div><div class="value">${pesoActual}</div></div>
    <div class="stat"><div class="label">Récords este mes</div><div class="value" style="color:var(--objetivo)">${records}</div></div>
    <div class="stat"><div class="label">Objetivos 100%</div><div class="value" style="color:var(--real)">${objetivosOk} / ${EXERCISES.length}</div></div>
  </div>`;

  const groups = ["Fuerza","Potencia","Calistenia","Isometria","Agarre","Piernas"];
  html += `<div class="section-title">Por categoría</div><div class="grid cols-2">`;
  groups.forEach(g=>{
    const exs = EXERCISES.filter(ex=> ex.grupo.includes(g));
    html += `<div class="card accent-${g}"><h3 style="margin-bottom:8px">${pillGroup(g)}</h3>`;
    exs.forEach(ex=>{
      const r = computeProgresion(ex);
      html += `<div style="display:flex;justify-content:space-between;gap:8px;font-size:12.5px;padding:3px 0;border-bottom:1px dashed var(--border)">
        <span style="color:var(--dim)">${ex.nombre}</span>
        <span class="num">${fmtActualPlain(ex,r)}</span>
      </div>`;
    });
    html += `</div>`;
  });
  html += `</div>`;

  html += `<div class="section-title">Evolución (marcas reales)</div><div class="grid cols-2">`;
  const charts = [
    ["Peso corporal", seriesPesoCorporal(), "var(--agarre)"],
    ["CMJ (cm)", seriesFor("cmj","metrica"), "var(--potencia)"],
    [" Dominadas lastradas (kg)", seriesFor("dominadas_lastradas","peso"), "var(--fuerza)"],
    [" Front Lever (s)", seriesFor("front_lever","metrica"), "var(--calistenia)"],
    [" Fondos lastrados (kg)", seriesFor("fondos","peso"), "var(--fuerza)"],
    [" Farmer Walk (m)", seriesFor("farmer_walk","metrica"), "var(--isometria)"],
  ];
  charts.forEach(([title, data, color])=>{
    html += `<div class="chart-wrap"><h4>${title}</h4>${svgSparkline(data, color)}</div>`;
  });
  html += `</div>`;

  el.innerHTML = html;
}

/* ============================================================
   RENDER: RUTINA
   ============================================================ */
const BLOCK_COLOR = {
  "Potencia":"var(--potencia)", "Potencia/Pliometria":"var(--potencia)",
  "Fuerza":"var(--fuerza)", "Fuerza (pantorrilla)":"var(--fuerza)",
  "Isometria":"var(--calistenia)", "Isometria/Calistenia":"var(--calistenia)",
  "Hipertrofia":"var(--piernas)", "Hipertrofia/cadena posterior":"var(--piernas)",
  "Agarre":"var(--agarre)", "Core":"var(--dim2)", "Core/estabilidad":"var(--dim2)",
};
function renderRutina(){
  const el = document.getElementById("view-rutina");
  let html = `<div class="note">La rutina es estable durante años: Potencia  Fuerza  Isometría  Hipertrofia.
    El CMJ es el primer ejercicio del lunes/jueves. El remo se mantiene en 320 tal cual (no se fuerza el rango 3-6).</div>`;
  ROUTINE_DAYS.forEach(([dayName, exs])=>{
    html += `<div class="dayblock"><h3>${dayName}</h3><div class="rows">`;
    exs.forEach(([nombre,bloque,series,reps,peso,tracked])=>{
      const color = BLOCK_COLOR[bloque] || "var(--border)";
      html += `<div class="rutina-row" style="border-left-color:${color}">
        <div class="nombre">${nombre}${tracked?"":'<small>técnica · sin marca mensual</small>'}</div>
        <div class="meta">
          <div>Bloque<b style="font-weight:600;font-family:var(--sans);font-size:11.5px">${bloque}</b></div>
          <div>Series<b>${series}</b></div>
          <div>Reps/Tiempo<b>${reps}</b></div>
          <div>Peso ref.<b>${peso}</b></div>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });

  html += `<div class="section-title">Reglas de entrenamiento</div><div class="grid cols-2">`;
  const REGLAS = [
    ["Potencia","Detener antes de perder velocidad/explosividad. No llegar al fallo."],
    ["Fuerza","Usar una resistencia que permita completar las repeticiones con buena técnica. Progresar al alcanzar el máximo del rango."],
    ["Isometría","Buscar máxima tensión durante aprox. 5–10 s cuando el objetivo sea fuerza. Progresar aumentando dificultad/variante, no solo duración."],
    ["Hipertrofia","Trabajar cerca del fallo técnico, dejando aprox. 1–3 repeticiones en reserva."],
    ["Progresión","La progresión propuesta es una guía. La siguiente marca mensual real sustituye a la anterior como nuevo punto de partida."],
  ];
  REGLAS.forEach(([t,d])=>{ html += `<div class="card"><h3 style="font-size:13px;margin-bottom:4px">${t}</h3><p style="font-size:12.5px;color:var(--dim);margin:0">${d}</p></div>`; });
  html += `</div>`;
  el.innerHTML = html;
}

/* ============================================================
   RENDER: MARCA MENSUAL
   ============================================================ */
let editingMes = null; // si no es null, "Guardar" sobreescribe ese mes

function inputsForExercise(ex){
  if(ex.tipo === "VARIANTE"){
    const opts = ex.variantes.map(v=>`<option value="${v}">${v}</option>`).join("");
    return `<div class="exrow-inputs">
      <div class="field"><label>Variante</label>
        <select id="inp_${ex.id}_variante"><option value=""></option>${opts}</select></div>
      <div class="field"><label>${ex.unidad_met==="s"?"Segundos":"Reps"}</label>
        <input type="number" step="1" id="inp_${ex.id}_metrica" placeholder="ej. ${ex.ej_met}"></div>
    </div>`;
  }
  if(ex.tipo === "PLIO"){
    return `<div class="exrow-inputs single">
      <div class="field"><label>Marca (${ex.unidad_met})</label>
        <input type="number" step="0.5" id="inp_${ex.id}_metrica" placeholder="ej. ${ex.ej_met}"></div>
    </div>`;
  }
  const metLabel = ex.tipo==="RM" ? "Reps" : (ex.tipo==="TIEMPO" ? "Segundos" : "Distancia (m)");
  const metEj = ex.tipo==="RM" ? ex.ej_rep : ex.ej_met;
  return `<div class="exrow-inputs">
    <div class="field"><label>Peso (kg)</label>
      <input type="number" step="0.5" id="inp_${ex.id}_peso" placeholder="ej. ${ex.ej_peso}"></div>
    <div class="field"><label>${metLabel}</label>
      <input type="number" step="1" id="inp_${ex.id}_metrica" placeholder="ej. ${metEj}"></div>
  </div>`;
}

function renderMarca(){
  const el = document.getElementById("view-marca");
  const groups = ["Fuerza","Potencia","Calistenia","Isometria","Agarre","Piernas"];
  let html = `
  <div class="note">Introduce <b>una vez al mes</b> tu marca real por ejercicio (la mejor serie del mes). No hace falta
  rellenar los 31  deja en blanco lo que no hayas entrenado ese mes. Las marcas anteriores nunca se borran.</div>
  <div class="card" style="margin-bottom:14px">
    <div class="exrow-inputs">
      <div class="field"><label>Mes</label><input type="month" id="inp_mes" value="${nextMonthGuess()}"></div>
      <div class="field"><label>Peso corporal (kg)</label><input type="number" step="0.1" id="inp_pesoCorporal" placeholder="ej. 73"></div>
    </div>
  </div>`;

  groups.forEach(g=>{
    const exs = EXERCISES.filter(ex=> ex.grupo.includes(g));
    html += `<details class="group"><summary>${pillGroup(g)} <span style="color:var(--dim);font-weight:400">(${exs.length} ejercicios)</span></summary>
      <div class="group-body">`;
    exs.forEach(ex=>{
      html += `<div><div style="font-size:12.5px;font-weight:600;margin-bottom:4px">${ex.nombre}</div>${inputsForExercise(ex)}</div>`;
    });
    html += `</div></details>`;
  });

  html += `<div style="display:flex; gap:8px; margin:14px 0 24px">
    <button class="btn" id="btnGuardarMes"> Guardar mes</button>
    <button class="btn ghost" id="btnCancelarEdicion" style="display:none">Cancelar edición</button>
  </div>`;

  html += `<div class="section-title">Meses registrados</div><div class="tablewrap"><table>
    <thead><tr><th>Mes</th><th>Peso corporal</th><th># Ejercicios</th><th>Acciones</th></tr></thead><tbody>`;
  marcasOrdenadas().slice().reverse().forEach(m=>{
    const n = Object.keys(m.data).filter(k=> m.data[k] && Object.values(m.data[k]).some(v=>v!==undefined && v!=="" && v!==null)).length;
    html += `<tr>
      <td>${mesLabel(m.mes)}</td>
      <td class="num">${m.pesoCorporal || "-"}</td>
      <td class="num">${n} / ${EXERCISES.length}</td>
      <td>
        <button class="btn small ghost" onclick="cargarMesEnFormulario('${m.mes}')">Editar</button>
        <button class="btn small ghost" onclick="eliminarMes('${m.mes}')" style="color:var(--descenso)">Eliminar</button>
      </td>
    </tr>`;
  });
  html += `</tbody></table></div>`;

  el.innerHTML = html;
  document.getElementById("btnGuardarMes").onclick = guardarMes;
  document.getElementById("btnCancelarEdicion").onclick = ()=>{ editingMes=null; renderMarca(); };
}

function nextMonthGuess(){
  const arr = marcasOrdenadas();
  if(arr.length===0) return "2026-09";
  const [y,m] = arr[arr.length-1].mes.split("-").map(Number);
  const d = new Date(y, m-1+1, 1);
  return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0");
}

function guardarMes(){
  const mes = document.getElementById("inp_mes").value;
  if(!mes){ alert("Elige un mes."); return; }
  const existing = STATE.marcas.find(m=>m.mes===mes);
  if(existing && editingMes !== mes){
    if(!confirm(`Ya existe un registro para ${mesLabel(mes)}. ¿Sobrescribirlo?`)) return;
  }
  const pesoCorporal = document.getElementById("inp_pesoCorporal").value;
  const data = {};
  EXERCISES.forEach(ex=>{
    if(ex.tipo === "VARIANTE"){
      const variante = document.getElementById(`inp_${ex.id}_variante`).value;
      const metrica = document.getElementById(`inp_${ex.id}_metrica`).value;
      if(variante && metrica!=="") data[ex.id] = {variante, metrica:Number(metrica)};
    } else if(ex.tipo === "PLIO"){
      const metrica = document.getElementById(`inp_${ex.id}_metrica`).value;
      if(metrica!=="") data[ex.id] = {metrica:Number(metrica)};
    } else {
      const peso = document.getElementById(`inp_${ex.id}_peso`).value;
      const metrica = document.getElementById(`inp_${ex.id}_metrica`).value;
      if(peso!=="" && metrica!=="") data[ex.id] = {peso:Number(peso), metrica:Number(metrica)};
    }
  });
  const entry = {mes, pesoCorporal: pesoCorporal!=="" ? Number(pesoCorporal) : null, data};
  STATE.marcas = STATE.marcas.filter(m=>m.mes!==mes);
  STATE.marcas.push(entry);
  editingMes = null;
  saveState();
  renderAll();
  switchTab("dashboard");
}

function cargarMesEnFormulario(mes){
  switchTab("marca");
  editingMes = mes;
  setTimeout(()=>{
    const m = STATE.marcas.find(x=>x.mes===mes);
    if(!m) return;
    document.getElementById("inp_mes").value = m.mes;
    document.getElementById("inp_pesoCorporal").value = m.pesoCorporal ?? "";
    EXERCISES.forEach(ex=>{
      const v = m.data[ex.id];
      if(!v) return;
      if(ex.tipo==="VARIANTE"){
        document.getElementById(`inp_${ex.id}_variante`).value = v.variante || "";
        document.getElementById(`inp_${ex.id}_metrica`).value = v.metrica ?? "";
      } else if(ex.tipo==="PLIO"){
        document.getElementById(`inp_${ex.id}_metrica`).value = v.metrica ?? "";
      } else {
        document.getElementById(`inp_${ex.id}_peso`).value = v.peso ?? "";
        document.getElementById(`inp_${ex.id}_metrica`).value = v.metrica ?? "";
      }
    });
    document.getElementById("btnCancelarEdicion").style.display = "inline-block";
  }, 30);
}

function eliminarMes(mes){
  if(!confirm(`¿Eliminar el registro de ${mesLabel(mes)}? Esta acción no se puede deshacer.`)) return;
  STATE.marcas = STATE.marcas.filter(m=>m.mes!==mes);
  saveState();
  renderAll();
}

/* ============================================================
   RENDER: PROGRESION  (tarjeta = elemento firma de la app)
   ============================================================ */
let progFiltro = "Todos";
function renderProgresion(){
  const el = document.getElementById("view-progresion");
  const groups = ["Todos","Fuerza","Potencia","Calistenia","Isometria","Agarre","Piernas"];
  let html = `<div class="note">Progresión propuesta para las próximas 4 semanas, calculada a partir de tu última marca real.
    Al añadir un nuevo mes en 'Marca mensual', esta tabla se recalcula sola.</div>`;
  html += `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">`;
  groups.forEach(g=>{
    html += `<button class="btn small ${g===progFiltro?'':'ghost'}" onclick="setProgFiltro('${g}')">${g}</button>`;
  });
  html += `</div><div class="grid cols-2">`;

  EXERCISES.filter(ex=> progFiltro==="Todos" || ex.grupo.includes(progFiltro)).forEach(ex=>{
    const r = computeProgresion(ex);
    const g = primaryGroup(ex);
    html += `<div class="excard">
      <div class="head" style="border-left-color:${BLOCK_COLOR[ex.grupo[0]]||'var(--border)'}">
        <h3>${ex.nombre}</h3>
        <span class="pill ${g}">${g}</span>
      </div>
      <div class="body">`;
    if(!r.tieneDatos){
      html += `<p style="color:var(--dim2);font-size:12.5px">Sin marca todavía. Añádela en "Marca mensual".</p>`;
    } else {
      html += `<div class="current"><span class="v">${fmtActual(ex,r)}</span></div>`;
      html += `<div class="weekstrip">`;
      r.weeks.forEach((wk,i)=>{
        html += `<div class="wk"><div class="n">S${i+1}</div><div class="m">${fmtWeekVal(ex,wk)}</div></div>`;
      });
      html += `</div>`;
      const recPill = r.record==="RECORD" ? `<span class="pill record"> récord</span>` :
                       (r.record==="N/D (1er registro)" ? "" : "");
      html += `<div class="estado ${r.estadoTipo==='subir'?'subir':''}">${r.estado} ${recPill}</div>`;
    }
    html += `</div></div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}
function setProgFiltro(g){ progFiltro = g; renderProgresion(); }

/* ============================================================
   RENDER: HISTORIAL
   ============================================================ */
function renderHistorial(){
  const el = document.getElementById("view-historial");
  let html = `<div class="note">Tu mejor marca histórica de cada ejercicio y el mes en que la conseguiste.
    Nada se borra nunca en "Marca mensual", así que este récord es siempre fiable.</div>`;
  html += `<div class="dayblock"><div class="rows">`;
  EXERCISES.forEach(ex=>{
    const h = computeHistBest(ex);
    const color = `var(--${primaryGroup(ex).toLowerCase()})`;
    html += `<div class="rutina-row" style="border-left-color:${color}">
      <div class="nombre">${ex.nombre}<small>${primaryGroup(ex)}</small></div>
      <div class="meta">
        <div>Mejor marca<b>${h.label}</b></div>
        <div>Conseguida<b>${mesLabel(h.mes)}</b></div>
      </div>
    </div>`;
  });
  html += `</div></div>`;
  el.innerHTML = html;
}

/* ============================================================
   RENDER: OBJETIVOS  +  MAPA CORPORAL (heatmap SVG)
   ============================================================ */
const BODY_ZONES = [
  {id:"hombros",    nombre:"Hombros",   exs:["press_hombros","elev_laterales","vuelos_posteriores","pica","press_isometrico"]},
  {id:"pecho",      nombre:"Pecho",     exs:["flexiones","fondos","press_isometrico","pica"]},
  {id:"biceps",     nombre:"Bíceps",    exs:["curl_biceps","curl_martillo"]},
  {id:"triceps",    nombre:"Tríceps",   exs:["fondos","flexiones"]},
  {id:"agarre",     nombre:"Antebrazos / Agarre", exs:["curl_muneca","sujetar_discos","dead_hang","towel_hang","farmer_walk","suitcase_carry"]},
  {id:"core",       nombre:"Core / Abdominales", exs:["plancha","front_lever","sentadilla_isometrica"]},
  {id:"traps",      nombre:"Trapecio",  exs:["press_hombros","remo","remo_isometrico","pica"]},
  {id:"espalda",    nombre:"Espalda",   exs:["dominadas_lastradas","dominada_biceps","remo","remo_isometrico","front_lever"]},
  {id:"gluteos",    nombre:"Glúteos",   exs:["sentadilla","rdl","nordic_curl","cmj","broad_jump","box_jump","depth_jump"]},
  {id:"cuadriceps", nombre:"Cuádriceps",exs:["sentadilla","sentadilla_isometrica","cmj","broad_jump","box_jump","depth_jump"]},
  {id:"femoral",    nombre:"Femoral / Isquios", exs:["rdl","nordic_curl","sentadilla"]},
  {id:"gemelos",    nombre:"Gemelos",   exs:["gemelo_dinamico","gemelo_isometrico","cmj","broad_jump","box_jump","depth_jump"]},
  {id:"abductores", nombre:"Abductores / Cadera", exs:["plancha","suitcase_carry","sentadilla"]},
];

function zoneProgress(id){
  const z = BODY_ZONES.find(z=> z.id===id);
  const vals = [];
  z.exs.forEach(exId=>{
    const ex = EXERCISES.find(e=> e.id===exId);
    if(!ex) return;
    const r = computeProgresion(ex);
    if(r.progresoPct !== null && r.progresoPct !== undefined && !isNaN(r.progresoPct)){
      vals.push({nombre: ex.nombre, pct: r.progresoPct});
    }
  });
  if(vals.length === 0) return {media:null, exs:[]};
  const media = vals.reduce((s,v)=> s+v.pct, 0) / vals.length;
  return {media, exs: vals};
}
function clamp01(x){ return Math.max(0, Math.min(1, x)); }

function colorForPct(p){
  // rojo (0%) -> ambar (50%) -> verde (100%)
  const t = clamp01(p);
  let r,g,b;
  if(t < 0.5){
    const k = t/0.5;
    r = Math.round(255);
    g = Math.round(150*k+254*(1-k));
    b = Math.round(50);
  } else {
    const k = (t-0.5)/0.5;
    r = Math.round(255*(1-k)+34*k);
    g = Math.round(254);
    b = Math.round(50*(1-k)+197*k);
  }
  return `rgb(${r},${g},${b})`;
}

function bodyHTML(){
  const makeZ = (id, d, omit) => {
    const p = zoneProgress(id);
    const fill = p.media===null ? "var(--dim2)" : colorForPct(p.media);
    const title = p.media===null
      ? `${id} : Sin datos`
      : `${id} : ${Math.round(p.media*100)}%`;
    const exList = p.exs.length>0
      ? " | " + p.exs.map(e=> `${e.nombre} ${Math.round(e.pct*100)}%`).join(", ")
      : "";
    return `<path data-zone="${id}" class="bz" d="${d}" fill="${fill}">`+
           `<title>${title}${exList}</title></path>`;
  };
  const H = 560, W = 300, CX = 150;
  return `<svg class="body-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa de progreso corporal">
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="rgba(255,255,255,.10)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="${W}" height="${H}" fill="url(#bgGlow)"/>
    <g class="body-shape">` +
    // ==== SILUETA DE CONTORNO (curvas suaves) ====
    // torso (pera con cintura estrecha)
    `<path d="M${CX-13} 66 C ${CX-18} 70 ${CX-24} 76 ${CX-33} 84 `+
    `C ${CX-46} 78 ${CX-55} 82 ${CX-58} 94 C ${CX-62} 108 ${CX-62} 126 ${CX-52} 148 `+
    `C ${CX-47} 160 ${CX-46} 176 ${CX-52} 194 C ${CX-56} 208 ${CX-56} 224 ${CX-50} 242 `+
    `C ${CX-44} 256 ${CX-26} 262 ${CX} 262 C ${CX+26} 262 ${CX+44} 256 ${CX+50} 242 `+
    `C ${CX+56} 224 ${CX+56} 208 ${CX+52} 194 C ${CX+46} 176 ${CX+47} 160 ${CX+52} 148 `+
    `C ${CX+62} 126 ${CX+62} 108 ${CX+58} 94 C ${CX+55} 82 ${CX+46} 78 ${CX+33} 84 `+
    `C ${CX+24} 76 ${CX+18} 70 ${CX+13} 66 C ${CX+8} 66 ${CX-8} 66 ${CX-13} 66 Z" `+
    `fill="var(--dim2)" opacity=".06" stroke="var(--dim2)" stroke-width="1.5" stroke-opacity=".22"/>`+
    // cabeza
    `<ellipse cx="${CX}" cy="40" rx="23" ry="25" fill="var(--dim2)" opacity=".07" stroke="var(--dim2)" stroke-width="1.5" stroke-opacity=".22"/>`+
    // cuello
    `<path d="M${CX-11} 62 C ${CX-11} 70 ${CX-13} 76 ${CX-26} 86 C ${CX-16} 90 ${CX+16} 90 ${CX+26} 86 C ${CX+13} 76 ${CX+11} 70 ${CX+11} 62 Z" fill="var(--dim2)" opacity=".06"/>`+
    // brazo izq
    `<path d="M${CX-56} 94 C ${CX-64} 106 ${CX-70} 128 ${CX-68} 152 C ${CX-67} 172 ${CX-62} 188 ${CX-56} 200 `+
    `C ${CX-56} 222 ${CX-56} 238 ${CX-56} 246 C ${CX-56} 252 ${CX-49} 254 ${CX-44} 253 `+
    `C ${CX-44} 238 ${CX-45} 218 ${CX-47} 200 C ${CX-51} 180 ${CX-51} 158 ${CX-47} 140 `+
    `C ${CX-46} 128 ${CX-50} 108 ${CX-56} 94 Z" fill="var(--dim2)" opacity=".06" stroke="var(--dim2)" stroke-width="1.5" stroke-opacity=".22"/>`+
    // brazo der
    `<path d="M${CX+56} 94 C ${CX+64} 106 ${CX+70} 128 ${CX+68} 152 C ${CX+67} 172 ${CX+62} 188 ${CX+56} 200 `+
    `C ${CX+56} 222 ${CX+56} 238 ${CX+56} 246 C ${CX+56} 252 ${CX+49} 254 ${CX+44} 253 `+
    `C ${CX+44} 238 ${CX+45} 218 ${CX+47} 200 C ${CX+51} 180 ${CX+51} 158 ${CX+47} 140 `+
    `C ${CX+46} 128 ${CX+50} 108 ${CX+56} 94 Z" fill="var(--dim2)" opacity=".06" stroke="var(--dim2)" stroke-width="1.5" stroke-opacity=".22"/>`+
    // pierna izq
    `<path d="M${CX-8} 262 C ${CX-24} 262 ${CX-40} 268 ${CX-46} 282 C ${CX-52} 300 ${CX-50} 336 ${CX-46} 372 `+
    `C ${CX-44} 404 ${CX-40} 434 ${CX-42} 462 C ${CX-43} 478 ${CX-44} 492 ${CX-42} 504 `+
    `C ${CX-41} 512 ${CX-34} 516 ${CX-26} 514 C ${CX-18} 513 ${CX-12} 508 ${CX-10} 500 `+
    `C ${CX-9} 480 ${CX-8} 440 ${CX-8} 400 C ${CX-8} 350 ${CX-8} 300 ${CX-8} 262 Z" fill="var(--dim2)" opacity=".06" stroke="var(--dim2)" stroke-width="1.5" stroke-opacity=".22"/>`+
    // pierna der
    `<path d="M${CX+8} 262 C ${CX+24} 262 ${CX+40} 268 ${CX+46} 282 C ${CX+52} 300 ${CX+50} 336 ${CX+46} 372 `+
    `C ${CX+44} 404 ${CX+40} 434 ${CX+42} 462 C ${CX+43} 478 ${CX+44} 492 ${CX+42} 504 `+
    `C ${CX+41} 512 ${CX+34} 516 ${CX+26} 514 C ${CX+18} 513 ${CX+12} 508 ${CX+10} 500 `+
    `C ${CX+9} 480 ${CX+8} 440 ${CX+8} 400 C ${CX+8} 350 ${CX+8} 300 ${CX+8} 262 Z" fill="var(--dim2)" opacity=".06" stroke="var(--dim2)" stroke-width="1.5" stroke-opacity=".22"/>`+
    // pies
    `<path d="M${CX-8} 514 L ${CX-40} 516 C ${CX-52} 517 ${CX-55} 524 ${CX-46} 528 C ${CX-34} 533 ${CX-18} 534 ${CX-8} 533 Z" fill="var(--dim2)" opacity=".25"/>`+
    `<path d="M${CX+8} 514 L ${CX+40} 516 C ${CX+52} 517 ${CX+55} 524 ${CX+46} 528 C ${CX+34} 533 ${CX+18} 534 ${CX+8} 533 Z" fill="var(--dim2)" opacity=".25"/>`+
    `</g>`+
    // ==== ZONAS MUSCULARES (formas orgánicas con curvas) ====
    `<g class="body-zones" fill-opacity=".85">`+
    // trapecio (sube del cuello a los hombros, cónico)
    makeZ("traps", `M${CX-4} 64 C ${CX-5} 70 ${CX-14} 76 ${CX-30} 82 C ${CX-18} 86 ${CX} 88 ${CX+30} 82 C ${CX+14} 76 ${CX+5} 70 ${CX+4} 64 C ${CX} 62 ${CX-0} 62 ${CX-4} 64 Z`)+
    // deltoides (hombros redondeados tipo bola)
    makeZ("hombros", `M${CX-40} 84 C ${CX-54} 82 ${CX-66} 90 ${CX-70} 104 C ${CX-74} 118 ${CX-70} 133 ${CX-62} 142 C ${CX-55} 150 ${CX-46} 152 ${CX-40} 148 C ${CX-44} 132 ${CX-46} 112 ${CX-44} 94 Z `+
      `M${CX+40} 84 C ${CX+54} 82 ${CX+66} 90 ${CX+70} 104 C ${CX+74} 118 ${CX+70} 133 ${CX+62} 142 C ${CX+55} 150 ${CX+46} 152 ${CX+40} 148 C ${CX+44} 132 ${CX+46} 112 ${CX+44} 94 Z`)+
    // dorsales (alas laterales del torso)
    makeZ("espalda", `M${CX-54} 96 C ${CX-60} 110 ${CX-60} 132 ${CX-56} 154 C ${CX-54} 168 ${CX-52} 182 ${CX-52} 194 C ${CX-52} 202 ${CX-44} 204 ${CX-40} 198 C ${CX-42} 178 ${CX-44} 150 ${CX-46} 124 C ${CX-47} 112 ${CX-50} 102 ${CX-54} 96 Z `+
      `M${CX+54} 96 C ${CX+60} 110 ${CX+60} 132 ${CX+56} 154 C ${CX+54} 168 ${CX+52} 182 ${CX+52} 194 C ${CX+52} 202 ${CX+44} 204 ${CX+40} 198 C ${CX+42} 178 ${CX+44} 150 ${CX+46} 124 C ${CX+47} 112 ${CX+50} 102 ${CX+54} 96 Z`)+
    // pectorales (escudo con picos inferiores)
    makeZ("pecho", `M${CX} 92 C ${CX-16} 90 ${CX-30} 96 ${CX-38} 108 C ${CX-46} 120 ${CX-46} 140 ${CX-42} 156 C ${CX-40} 166 ${CX-34} 174 ${CX-26} 177 C ${CX-17} 180 ${CX-9} 175 ${CX} 170 C ${CX+9} 175 ${CX+17} 180 ${CX+26} 177 C ${CX+34} 174 ${CX+40} 166 ${CX+42} 156 C ${CX+46} 140 ${CX+46} 120 ${CX+38} 108 C ${CX+30} 96 ${CX+16} 90 ${CX} 92 Z`)+
    // bíceps (forma de huso con la protuberancia central)
    makeZ("biceps", `M${CX-48} 148 C ${CX-52} 164 ${CX-54} 186 ${CX-52} 206 C ${CX-51} 214 ${CX-44} 218 ${CX-38} 214 C ${CX-37} 200 ${CX-38} 180 ${CX-42} 158 C ${CX-43} 152 ${CX-46} 150 ${CX-48} 148 Z `+
      `M${CX+48} 148 C ${CX+52} 164 ${CX+54} 186 ${CX+52} 206 C ${CX+51} 214 ${CX+44} 218 ${CX+38} 214 C ${CX+37} 200 ${CX+38} 180 ${CX+42} 158 C ${CX+43} 152 ${CX+46} 150 ${CX+48} 148 Z`)+
    // antebrazos / agarre (se estrechan hacia la muñeca)
    makeZ("agarre", `M${CX-44} 206 C ${CX-48} 220 ${CX-50} 236 ${CX-50} 248 C ${CX-50} 254 ${CX-42} 255 ${CX-38} 252 C ${CX-38} 240 ${CX-40} 222 ${CX-42} 208 C ${CX-42} 203 ${CX-44} 203 ${CX-44} 206 Z `+
      `M${CX+44} 206 C ${CX+48} 220 ${CX+50} 236 ${CX+50} 248 C ${CX+50} 254 ${CX+42} 255 ${CX+38} 252 C ${CX+38} 240 ${CX+40} 222 ${CX+42} 208 C ${CX+42} 203 ${CX+44} 203 ${CX+44} 206 Z`)+
    // core / abdominales (recto abdominal con forma de escudo invertido)
    makeZ("core", `M${CX-30} 154 C ${CX-34} 166 ${CX-34} 184 ${CX-28} 198 C ${CX-23} 207 ${CX-12} 210 ${CX} 210 C ${CX+12} 210 ${CX+23} 207 ${CX+28} 198 C ${CX+34} 184 ${CX+34} 166 ${CX+30} 154 C ${CX+20} 158 ${CX-20} 158 ${CX-30} 154 Z`)+
    // abductores (gota en la cadera exterior)
    makeZ("abductores", `M${CX-50} 208 C ${CX-56} 220 ${CX-58} 236 ${CX-54} 248 C ${CX-53} 254 ${CX-45} 254 ${CX-40} 250 C ${CX-43} 238 ${CX-46} 224 ${CX-48} 210 C ${CX-49} 206 ${CX-50} 206 ${CX-50} 208 Z `+
      `M${CX+50} 208 C ${CX+56} 220 ${CX+58} 236 ${CX+54} 248 C ${CX+53} 254 ${CX+45} 254 ${CX+40} 250 C ${CX+43} 238 ${CX+46} 224 ${CX+48} 210 C ${CX+49} 206 ${CX+50} 206 ${CX+50} 208 Z`)+
    // glúteos (zona redondeada de la cadera)
    makeZ("gluteos", `M${CX-30} 208 C ${CX-36} 216 ${CX-38} 230 ${CX-34} 244 C ${CX-31} 252 ${CX-22} 254 ${CX-14} 252 C ${CX-12} 240 ${CX-14} 224 ${CX-20} 212 C ${CX-23} 206 ${CX-27} 205 ${CX-30} 208 Z `+
      `M${CX+30} 208 C ${CX+36} 216 ${CX+38} 230 ${CX+34} 244 C ${CX+31} 252 ${CX+22} 254 ${CX+14} 252 C ${CX+12} 240 ${CX+14} 224 ${CX+20} 212 C ${CX+23} 206 ${CX+27} 205 ${CX+30} 208 Z`)+
    // cuádriceps (muslo frontal con 4 cabezas)
    makeZ("cuadriceps", `M${CX-6} 262 C ${CX-20} 262 ${CX-34} 268 ${CX-38} 282 C ${CX-42} 300 ${CX-38} 330 ${CX-30} 356 C ${CX-28} 360 ${CX-14} 360 ${CX-6} 358 C ${CX-7} 330 ${CX-7} 300 ${CX-6} 262 Z `+
      `M${CX+6} 262 C ${CX+20} 262 ${CX+34} 268 ${CX+38} 282 C ${CX+42} 300 ${CX+38} 330 ${CX+30} 356 C ${CX+28} 360 ${CX+14} 360 ${CX+6} 358 C ${CX+7} 330 ${CX+7} 300 ${CX+6} 262 Z`)+
    // isquios / femoral (detrás del muslo, representado exterior)
    makeZ("femoral", `M${CX-36} 262 C ${CX-47} 270 ${CX-50} 300 ${CX-44} 340 C ${CX-43} 350 ${CX-40} 358 ${CX-32} 362 C ${CX-32} 340 ${CX-40} 300 ${CX-36} 262 Z `+
      `M${CX+36} 262 C ${CX+47} 270 ${CX+50} 300 ${CX+44} 340 C ${CX+43} 350 ${CX+40} 358 ${CX+32} 362 C ${CX+32} 340 ${CX+40} 300 ${CX+36} 262 Z`)+
    // gemelos (pantorrilla en forma de rombo/gota)
    makeZ("gemelos", `M${CX-8} 360 C ${CX-22} 360 ${CX-34} 372 ${CX-36} 392 C ${CX-38} 412 ${CX-32} 432 ${CX-22} 448 C ${CX-16} 456 ${CX-10} 460 ${CX-6} 458 C ${CX-9} 440 ${CX-10} 400 ${CX-8} 360 Z `+
      `M${CX+8} 360 C ${CX+22} 360 ${CX+34} 372 ${CX+36} 392 C ${CX+38} 412 ${CX+32} 432 ${CX+22} 448 C ${CX+16} 456 ${CX+10} 460 ${CX+6} 458 C ${CX+9} 440 ${CX+10} 400 ${CX+8} 360 Z`)+
    // delimitadores de definición muscular (líneas finas)
    `<path class="body-def" d="M${CX} 92 L${CX} 170 M${CX-9} 140 L${CX+9} 140 M${CX-9} 158 L${CX+9} 158" stroke="rgba(0,0,0,.16)" stroke-width="1" fill="none"/>`+
    `<path class="body-def" d="M${CX-11} 260 L${CX+11} 260" stroke="rgba(0,0,0,.14)" stroke-width="1" fill="none"/>`+
    `</g>`+
    `</svg>`;
}

function renderObjetivos(){
  const el = document.getElementById("view-objetivos");
  let html = `<div class="note">Metas orientativas a varios años. Puedes editarlas cuando quieras  no son fechas límite.</div>`;

  html += `<div class="section-title">Progreso corporal</div>
  <div class="body-card">
    ${bodyHTML()}
    <div class="body-legend">
      <h4>Cada parte del cuerpo muestra tu avance hacia el objetivo</h4>
      <p>Pasa el cursor por una zona para ver los ejercicios que la componen y su progreso individual.</p>
      <div class="legend-scale">
        <span class="ls" style="color:${colorForPct(0)}">0%</span>
        <div class="ls-gradient"></div>
        <span class="ls" style="color:${colorForPct(1)}">100%</span>
      </div>
      <div class="legend-hint">
        <span class="dot" style="background:var(--dim2)"></span> Sin datos
      </div>
    </div>
  </div>
  <div id="bodyTooltip" class="body-tooltip"></div>`;

  html += `<div class="grid cols-2">`;
  EXERCISES.forEach(ex=>{
    const r = computeProgresion(ex);
    const obj = getObjetivo(ex);
    const pct = r.progresoPct;
    const pctLabel = ex.tipo==="VARIANTE" ? (r.progresoLabel||"-") : (pct!==null && !isNaN(pct) ? Math.round(pct*100)+"%" : "-");
    const barPct = pct!==null && !isNaN(pct) ? Math.round(clamp01(pct)*100) : 0;
    const unidad = ex.tipo==="VARIANTE" ? "" : (ex.unidad_obj||"");
    html += `<div class="card accent-${primaryGroup(ex)}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <h3 style="font-size:13px">${ex.nombre}</h3><span class="pill ${primaryGroup(ex)}">${primaryGroup(ex)}</span>
      </div>
      <div style="font-size:12px;color:var(--dim);margin-bottom:6px">Marca actual: <span class="num" style="color:var(--text)">${fmtActualPlain(ex,r)}</span></div>
      <div class="exrow-inputs">
        <div class="field"><label>Objetivo LP</label>
          <input type="${ex.tipo==='VARIANTE'?'text':'number'}" data-obj="${ex.id}" value="${obj}" onchange="setObjetivo('${ex.id}', this.value)"></div>
        <div class="field"><label>Unidad</label><input value="${unidad}" disabled></div>
      </div>
      <div class="pbar"><i style="width:${barPct}%; background:${barPct>=100?'var(--real)':'var(--fuerza)'}"></i></div>
      <div style="text-align:right;font-size:11px;color:var(--dim);margin-top:2px">${pctLabel}</div>
    </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
  initBodyTooltip();
}
function initBodyTooltip(){
  const tips = {};
  BODY_ZONES.forEach(z=>{
    const p = zoneProgress(z.id);
    tips[z.id] = `<div class="bt-title">${z.nombre} <span class="bt-pct">${p.media===null?"sin datos":Math.round(p.media*100)+"%"}</span></div>`+
      (p.exs.length>0 ? `<div class="bt-list">`+ p.exs.map(e=>
        `<div class="bt-item"><span>${e.nombre}</span><b>${Math.round(e.pct*100)}%</b></div>`).join("") +`</div>` : "");
  });
  const tooltip = document.getElementById("bodyTooltip");
  document.querySelectorAll(".bz").forEach(path=>{
    const zoneId = path.getAttribute("data-zone");
    path.addEventListener("mousemove", (ev)=>{
      if(!tooltip) return;
      tooltip.innerHTML = tips[zoneId] || "";
      tooltip.style.opacity = 1;
      // posicionar con coordenas de viewport (fixed), junto al cursor
      const pad = 14, off = 12;
      const tw = tooltip.offsetWidth || 180, th = tooltip.offsetHeight || 40;
      let x = ev.clientX + off, y = ev.clientY - th - off;
      // clamp horizontal
      if(x + tw > window.innerWidth - pad) x = ev.clientX - tw - off;
      if(x < pad) x = pad;
      // clamp vertical: si no cabe arriba, ponerlo debajo
      if(y < pad) y = ev.clientY + off;
      if(y + th > window.innerHeight - pad) y = window.innerHeight - th - pad;
      tooltip.style.left = x + "px";
      tooltip.style.top = y + "px";
    });
    path.addEventListener("mouseleave", ()=>{ if(tooltip) tooltip.style.opacity = 0; });
  });
}
function setObjetivo(exId, value){
  STATE.objetivoOverrides[exId] = value===""? undefined : (isNaN(Number(value)) ? value : Number(value));
  saveState();
  renderObjetivos();
  renderDashboard();
}

/* ============================================================
   RENDER: CONFIGURACION
   ============================================================ */
const TIPO_LABELS = {RM:"Fuerza / Hipertrofia", TIEMPO:"Isometría / Agarre (tiempo)",
                      DIST:"Agarre (distancia)", VARIANTE:"Calistenia (variante)",
                      PLIO:"Potencia / Pliometría"};
const TIPO_DESC = {
  RM:"Se registra peso (kg) y reps. Al llegar al máximo de reps del rango, sube el peso y reinicia las reps en el mínimo.",
  TIEMPO:"Se registra peso (kg) y tiempo (s). Al llegar al umbral de tiempo, realiza la acción indicada (subir peso o cambiar variante).",
  DIST:"Se registra peso (kg) y distancia (m). Al llegar al umbral, sube el peso.",
  VARIANTE:"Es una progresión por variantes (niveles). Al superar el umbral de una variante, pasas a la siguiente.",
  PLIO:"Solo se registra la mejor marca mensual (cm). No tiene parámetros de progresión semanal."
};
const TIPO_ORDEN = ["RM","TIEMPO","DIST","VARIANTE","PLIO"];

function renderConfig(){
  const el = document.getElementById("view-config");
  const color = ex=> `var(--${primaryGroup(ex).toLowerCase()})`;

  let html = `<div class="note">Aquí controlas la lógica de progresión automática de cada ejercicio.
    Cada tipo de ejercicio tiene sus propios parámetros. Guarda los cambios tocando en cada valor: se aplican al instante
    y se recalculan las progresiones.</div>`;

  TIPO_ORDEN.forEach(tipo=>{
    const exs = EXERCISES.filter(ex=> ex.tipo === tipo);
    if(exs.length === 0) return;
    html += `
      <div class="section-title">${TIPO_LABELS[tipo]}</div>
      <div class="dayblock"><div class="rows">
        <div class="config-intro"><p>${TIPO_DESC[tipo]}</p></div>`;
    exs.forEach(ex=>{
      const cfg = getCfg(ex);
      html += `<div class="rutina-row" style="border-left-color:${color(ex)}">
        <div class="nombre">${ex.nombre}<small>${TIPO_LABELS[ex.tipo]}</small></div>
        <div class="meta config-meta">`;
      if(ex.tipo==="RM"){
        html += `
          <div class="cfg-field"><label>Mín de reps</label><b>${inp(ex,"min",cfg.min,60)}</b></div>
          <div class="cfg-field"><label>Máx de reps</label><b>${inp(ex,"max",cfg.max,60)}</b></div>
          <div class="cfg-field"><label>Paso / semana</label><b><span class="cfg-static">1 rep</span></b></div>
          <div class="cfg-field"><label>Subida de peso</label><b>${inp(ex,"incPeso",cfg.incPeso,60)} <span class="cfg-unit">kg</span></b></div>`;
      } else if(ex.tipo==="TIEMPO"){
        html += `
          <div class="cfg-field"><label>Umbral de tiempo</label><b>${inp(ex,"umbral",cfg.umbral,60)} <span class="cfg-unit">s</span></b></div>
          <div class="cfg-field"><label>Paso / semana</label><b>${inp(ex,"paso",cfg.paso,60)} <span class="cfg-unit">s</span></b></div>
          <div class="cfg-field"><label>Subida de peso</label><b>${inp(ex,"incPeso",cfg.incPeso,60)} <span class="cfg-unit">kg</span></b></div>
          <div class="cfg-field"><label>Acción al llegar al umbral</label><b>${inpText(ex,"accion",cfg.accion,200)}</b></div>`;
      } else if(ex.tipo==="DIST"){
        html += `
          <div class="cfg-field"><label>Umbral de distancia</label><b>${inp(ex,"umbral",cfg.umbral,60)} <span class="cfg-unit">m</span></b></div>
          <div class="cfg-field"><label>Paso / semana</label><b>${inp(ex,"paso",cfg.paso,60)} <span class="cfg-unit">m</span></b></div>
          <div class="cfg-field"><label>Subida de peso</label><b>${inp(ex,"incPeso",cfg.incPeso,60)} <span class="cfg-unit">kg</span></b></div>
          <div class="cfg-field"><label>Acción al llegar al umbral</label><b>${inpText(ex,"accion",cfg.accion,200)}</b></div>`;
      } else if(ex.tipo==="VARIANTE"){
        html += `
          <div class="cfg-field"><label>Umbral de la variante</label><b>${inp(ex,"umbral",cfg.umbral,60)} <span class="cfg-unit">${ex.unidad_met}</span></b></div>
          <div class="cfg-field"><label>Paso / semana</label><b>${inp(ex,"paso",cfg.paso,60)} <span class="cfg-unit">${ex.unidad_met}</span></b></div>`;
      } else {
        html += `<div class="cfg-field-full"><span class="cfg-static">Solo mejor marca mensual (${ex.unidad_met}). Sin parámetros de progresión.</span></div>`;
      }
      html += `</div></div>`;
    });
    html += `</div></div>`;
  });

  el.innerHTML = html;
}

function inp(ex, field, val, w){
  if(val===null || val===undefined) return `<span class="cfg-static">-</span>`;
  return `<input style="width:${w||60}px;padding:4px 6px;text-align:right" type="number" step="any" value="${val}" onchange="setCfg('${ex.id}','${field}',this.value)">`;
}
function inpText(ex, field, val, w){
  if(val===null || val===undefined) return `<input style="width:${w||200}px;padding:4px 6px" type="text" value="" placeholder="Escribe la acción cuando se alcance el umbral…" onchange="setCfg('${ex.id}','${field}',this.value)">`;
  const esc = val.replace(/"/g,'&quot;');
  return `<input style="width:${w||200}px;padding:4px 6px" type="text" value="${esc}" onchange="setCfg('${ex.id}','${field}',this.value)">`;
}
function setCfg(exId, field, value){
  if(!STATE.configOverrides[exId]) STATE.configOverrides[exId] = {};
  const stored = (value==="" || value===null || value===undefined) ? undefined
                : (field==="accion" ? String(value) : Number(value));
  STATE.configOverrides[exId][field] = stored;
  saveState();
  renderConfig();
  renderProgresion();
}

/* ============================================================
   RENDER: ENTRENAR (sesión diaria, estilo Hevy)
   ============================================================ */
function schemeSets(scheme){
  const s = String(scheme||"");
  const m = s.match(/^\s*(\d+)(?:\s*-\s*(\d+))?/);
  const b = m ? (m[2] ? +m[2] : +m[1]) : 3;
  return Math.max(1, b);
}
let sesionDay = 0;
const SESSION = {};
let sesionTimer = {};
function sesionMonth(){
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0");
}
function sesionLastMark(ex){
  const f = ultimaMarcaCon(ex.id);
  return f ? f.valor : null;
}
function sesionSetDefaults(ex){
  // valores por defecto: última marca del mes, o vacío si no hay
  const v = sesionLastMark(ex);
  if(!v) return {p:null, m:null, var:null};
  if(ex.tipo === "VARIANTE") return {p:null, m:v.metrica!==undefined?v.metrica:null, var:v.variante||null};
  if(ex.tipo === "PLIO") return {p:null, m:v.metrica!==undefined?v.metrica:null, var:null};
  return {p:v.peso!==undefined?v.peso:null, m:v.metrica!==undefined?v.metrica:null, var:null};
}
function sesionKey(dayIdx, ri){ return dayIdx + ":" + ri; }

function trSetRowHtml(dayIdx, ri, si, ex, tipo, defaults){
  const k = sesionKey(dayIdx, ri);
  const rec = (SESSION[k] && SESSION[k].sets && SESSION[k].sets[si]) || {done:false};
  const p = rec.p !== undefined ? rec.p : (defaults ? defaults.p : null);
  const m = rec.m !== undefined ? rec.m : (defaults ? defaults.m : null);
  const vr = rec.v !== undefined ? rec.v : (defaults ? defaults.var : null);
  const done = !!rec.done;
  const dname = `ts_${dayIdx}_${ri}_${si}`;
  const unitM = tipo==="TIEMPO" ? "s" : (tipo==="DIST" ? "m" : (tipo==="PLIO" ? ex.unidad_met : "reps"));
  let inner = "";
  if(tipo === "none"){
    inner = `<span style="color:var(--dim);font-size:12px">Marcar como hecho</span>`;
  } else if(tipo === "PLIO"){
    inner = `<div class="tr-field"><label>Marca (${ex.unidad_met})</label>
      <input type="number" step="0.5" id="${dname}_m" onchange="sesionSet('${dayIdx}','${ri}','${si}','m',this.value)" value="${m===null?'':m}"></div>`;
  } else if(tipo === "VARIANTE"){
    const opts = ex.variantes.map(v=>`<option value="${v}" ${v===vr?'selected':''}>${v}</option>`).join("");
    inner = `<div class="tr-field"><label>Variante</label>
      <select id="${dname}_v" onchange="sesionSet('${dayIdx}','${ri}','${si}','v',this.value)"><option value=""></option>${opts}</select></div>
      <div class="tr-field"><label>${ex.unidad_met==="s"?"Segundos":"Reps"} (${ex.unidad_met})</label>
      <input type="number" step="1" id="${dname}_m" onchange="sesionSet('${dayIdx}','${ri}','${si}','m',this.value)" value="${m===null?'':m}"></div>`;
  } else if(tipo === "TIEMPO"){
    inner = `<div class="tr-field"><label>Peso (kg)</label>
      <input type="number" step="0.5" id="${dname}_p" onchange="sesionSet('${dayIdx}','${ri}','${si}','p',this.value)" value="${p===null?'':p}"></div>
      <div class="tr-field"><label>Tiempo (s)</label>
        <span class="tr-timer">
          <input type="number" step="0.1" id="${dname}_m" onchange="sesionSet('${dayIdx}','${ri}','${si}','m',this.value)" value="${m===null?'':m}" style="width:74px">
          <button type="button" class="tr-timer-btn" id="${dname}_btn">▶</button>
        </span>
      </div>`;
  } else if(tipo === "DIST"){
    inner = `<div class="tr-field"><label>Peso (kg)</label>
      <input type="number" step="0.5" id="${dname}_p" onchange="sesionSet('${dayIdx}','${ri}','${si}','p',this.value)" value="${p===null?'':p}"></div>
      <div class="tr-field"><label>Distancia (m)</label>
      <input type="number" step="0.5" id="${dname}_m" onchange="sesionSet('${dayIdx}','${ri}','${si}','m',this.value)" value="${m===null?'':m}"></div>`;
  } else { // RM
    inner = `<div class="tr-field"><label>Peso (kg)</label>
      <input type="number" step="0.5" id="${dname}_p" onchange="sesionSet('${dayIdx}','${ri}','${si}','p',this.value)" value="${p===null?'':p}"></div>
      <div class="tr-field"><label>Reps</label>
      <input type="number" step="1" id="${dname}_m" onchange="sesionSet('${dayIdx}','${ri}','${si}','m',this.value)" value="${m===null?'':m}"></div>`;
  }
  return `<div class="tr-setrow ${done?'done':''}" id="tsrow_${dname}">
    <span class="tr-setnum">${si+1}</span>
    <input type="checkbox" class="tr-chk" id="${dname}_done" onchange="sesionDone('${dayIdx}','${ri}','${si}',this.checked)" ${done?'checked':''}>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${inner}</div>
  </div>`;
}

function trProgHtml(ex, r){
  let html = `<div class="tr-prog">
    <h5>Progresión propuesta (4 semanas)</h5>`;
  if(!r.tieneDatos){
    html += `<p style="color:var(--dim2);font-size:11.5px;margin:0">Aún no hay marca. Guarda la marca y aparecerá aquí.</p>`;
  } else {
    html += `<div class="weekstrip">`;
    r.weeks.forEach((wk,i)=>{
      html += `<div class="wk"><div class="n">S${i+1}</div><div class="m">${fmtWeekVal(ex,wk)}</div></div>`;
    });
    html += `</div><div class="estado ${r.estadoTipo==='subir'?'subir':''}">${r.estado}</div>`;
  }
  const hist = marcasOrdenadas().filter(mm=> mm.data[ex.id] && Object.values(mm.data[ex.id]).some(v=>v!==undefined && v!=="" && v!==null));
  if(hist.length){
    html += `<h5 style="margin-top:10px">Marcas históricas</h5><div class="hist">` +
      hist.map(mm=> `<div>${mesLabel(mm.mes)} <b>${fmtActualPlain(ex,{tieneDatos:true,peso:mm.data[ex.id].peso,metrica:mm.data[ex.id].metrica,variante:mm.data[ex.id].variante})}</b></div>`).join("") +
      `</div>`;
  }
  html += `</div>`;
  return html;
}

function renderEntrenar(){
  const el = document.getElementById("view-entrenar");
  const [dayName, rows] = ROUTINE_DAYS[sesionDay];
  let html = `<div class="note">Selecciona el día y completa tus series con el peso y las repeticiones (o tiempo/distancia) reales.
    Al guardar, se escribe la <b>mejor serie de cada ejercicio</b> como <b>marca mensual</b> de <b>${mesLabel(sesionMonth())}</b> si la superas.
    El día se vacía después, listo para el siguiente entrenamiento.</div>`;

  html += `<div class="day-picker">`;
  ROUTINE_DAYS.forEach(([name], i)=>{
    html += `<button class="${i===sesionDay?'active':''}" onclick="setSesionDay(${i})">${name.replace(" (identico al lunes)","").replace(" (identico al martes)","")}</button>`;
  });
  html += `</div>`;

  html += `<div class="tr-session-head">
    <div>
      <div class="tr-month">Mes objetivo: <b>${mesLabel(sesionMonth())}</b></div>
    </div>
  </div>`;

  rows.forEach(([nombre, bloque, series, reps, pesoRef, exId], ri)=>{
    const color = BLOCK_COLOR[bloque] || "var(--border)";
    const ex = exId ? EXERCISES.find(e=> e.id===exId) : null;
    const tipo = ex ? ex.tipo : "none";
    const nSets = schemeSets(series);
    const defaults = ex ? sesionSetDefaults(ex) : null;

    html += `<div class="tr-ex" style="border-left-color:${color}">
      <div class="tr-head" style="border-left-color:${color}">
        <div class="nombre">${nombre}<small>${bloque} · ${series}${ex?' · objetivo '+getObjetivo(ex)+' '+ex.unidad_obj:''}</small></div>
        <div class="tr-target">Target: ${pesoRef} · ${reps}</div>
      </div>
      <div class="tr-body">`;

    if(tipo === "none"){
      html += trSetRowHtml(sesionDay, ri, 0, null, "none", null);
    } else {
      for(let si=0; si<nSets; si++){
        html += trSetRowHtml(sesionDay, ri, si, ex, tipo, defaults);
      }
    }

    if(ex){
      const r = computeProgresion(ex);
      html += `<details class="tr-progcard" style="margin-top:8px;border-top:1px dashed var(--glass-border);padding-top:8px">
        <summary class="tr-toggle" style="border:none;padding:0">▾ Progresión concreta de ${nombre}</summary>
        <div style="margin-top:8px">${trProgHtml(ex, r)}</div>
      </details>`;
    }

    html += `</div></div>`;
  });

  html += `<div class="tr-savebar">
    <button class="btn" id="btnGuardarSesion">Guardar marcas</button>
    <button class="btn ghost" id="btnResetSesion">Vaciar</button>
  </div>`;

  el.innerHTML = html;

  el.querySelectorAll(".tr-timer-btn").forEach(btn=>{
    btn.onclick = ()=> toggleTimer(btn.id.replace("_btn",""));
  });

  document.getElementById("btnGuardarSesion").onclick = saveSesion;
  document.getElementById("btnResetSesion").onclick = ()=>{ resetSesionDia(); renderEntrenar(); };
}

function toggleTimer(dname){
  const btn = document.getElementById(dname + "_btn");
  const inp = document.getElementById(dname + "_m");
  const parts = dname.split("_"); // ts, dayIdx, ri, si
  const dayIdx = parts[1], ri = parts[2], si = parts[3];
  const running = sesionTimer[dname];
  if(running){
    clearInterval(running.iv);
    delete sesionTimer[dname];
    if(btn){ btn.textContent = "▶"; btn.classList.remove("running"); }
    if(inp && inp.value!=="") sesionSet(dayIdx, ri, si, "m", inp.value);
    return;
  }
  if(!inp || !btn) return;
  let secs = inp.value === "" || isNaN(Number(inp.value)) ? 0 : Number(inp.value);
  const tick = ()=>{
    secs = Math.round((secs + 0.1) * 10) / 10;
    inp.value = secs;
    sesionSet(dayIdx, ri, si, "m", secs);
  };
  tick();
  const iv = setInterval(tick, 100);
  btn.textContent = "■";
  btn.classList.add("running");
  sesionTimer[dname] = {iv};
}

function setSesionDay(i){
  sesionDay = i;
  renderEntrenar();
}

function sesionSet(dayIdx, ri, si, field, val){
  const k = sesionKey(dayIdx, ri);
  if(!SESSION[k]) SESSION[k] = {sets:[]};
  while(SESSION[k].sets.length <= si) SESSION[k].sets.push({done:false});
  const num = (field==="v") ? val : (val==="" || val===null || val===undefined ? null : Number(val));
  SESSION[k].sets[si][field] = num;
}
function sesionDone(dayIdx, ri, si, checked){
  const k = sesionKey(dayIdx, ri);
  if(!SESSION[k]) SESSION[k] = {sets:[]};
  while(SESSION[k].sets.length <= si) SESSION[k].sets.push({done:false});
  SESSION[k].sets[si].done = checked;
  const row = document.getElementById("tsrow_ts_" + dayIdx + "_" + ri + "_" + si);
  if(row) row.classList.toggle("done", checked);
}
function resetSesionDia(){
  ROUTINE_DAYS[sesionDay][1].forEach((row, ri)=>{ delete SESSION[sesionKey(sesionDay,ri)]; });
}

/* comparador: a es estrictamente mejor que b ? */
function betterThan(ex, a, b){
  if(!b) return true;
  if(ex.tipo === "PLIO"){
    return (a.metrica||0) > (b.metrica||0);
  }
  if(ex.tipo === "VARIANTE"){
    const ia = ex.variantes.indexOf(a.variante), ib = ex.variantes.indexOf(b.variante);
    if(ia !== ib) return ia > ib;
    return (a.metrica||0) > (b.metrica||0);
  }
  if(ex.tipo === "TIEMPO" || ex.tipo === "DIST"){
    if((a.metrica||0) !== (b.metrica||0)) return (a.metrica||0) > (b.metrica||0);
    return (a.peso||0) > (b.peso||0);
  }
  // RM: peso primero, luego reps
  if((a.peso||0) !== (b.peso||0)) return (a.peso||0) > (b.peso||0);
  return (a.metrica||0) > (b.metrica||0);
}

function bestSetFor(ex, sets){
  let best = null;
  sets.forEach(s=>{
    if(!s.done) return;
    let cand;
    if(ex.tipo==="VARIANTE") cand = {variante: s.v, metrica: s.m};
    else if(ex.tipo==="PLIO") cand = {metrica: s.m};
    else cand = {peso: s.p, metrica: s.m};
    if(!best || betterThan(ex, cand, best)) best = cand;
  });
  return best;
}

function saveSesion(){
  const mes = sesionMonth();
  let month = STATE.marcas.find(mm=> mm.mes === mes);
  if(!month){
    month = {mes, pesoCorporal: null, data:{}};
    STATE.marcas.push(month);
  }
  const nuevas = [];
  ROUTINE_DAYS[sesionDay][1].forEach((row, ri)=>{
    const [nombre, bloque, series, reps, pesoRef, exId] = row;
    if(!exId) return;
    const ex = EXERCISES.find(e=> e.id===exId);
    if(!ex) return;
    const k = sesionKey(sesionDay, ri);
    const rec = SESSION[k];
    if(!rec || !rec.sets || !rec.sets.some(s=> s.done)) return;
    const best = bestSetFor(ex, rec.sets);
    if(!best) return;
    const cur = month.data[ex.id];
    let prev = null;
    if(cur){
      if(ex.tipo==="VARIANTE") prev = {variante:cur.variante, metrica:cur.metrica};
      else if(ex.tipo==="PLIO") prev = {metrica:cur.metrica};
      else prev = {peso:cur.peso, metrica:cur.metrica};
    }
    const isNew = !cur;
    if(!cur || betterThan(ex, best, prev)){
      month.data[ex.id] = best;
      nuevas.push({ex: ex.nombre, nuevo: !cur, mejor: cur? betterThan(ex,best,prev) : false});
    }
  });
  const nActualizados = nuevas.length;
  saveState();

  // limpiar el día guardado: quitar SESSION del día + cronómetros en marcha
  ROUTINE_DAYS[sesionDay][1].forEach((row, ri)=>{
    for(const dname in sesionTimer){
      if(dname.startsWith("ts_" + sesionDay + "_")){ clearInterval(sesionTimer[dname].iv); delete sesionTimer[dname]; }
    }
    delete SESSION[sesionKey(sesionDay, ri)];
  });
  renderAll();
  renderEntrenar();

  const cnt = nuevas.filter(n=> n.nuevo).length;
  const mejor = nuevas.filter(n=> n.mejor).length;
  if(nActualizados === 0){
    toastMsg("No se guardó nada: marca al menos una serie de un ejercicio.");
  } else {
    let txt = `Marcas actualizadas: ${nActualizados} ejercicio${nActualizados>1?"s":""}`;
    txt += mejor>0 ? ` · <span class="t-rec">${mejor} récord</span>` : "";
    txt += cnt>0 ? ` · <span class="t-nuevo">${cnt} marca nueva</span>` : "";
    toastMsg(txt);
  }
}

function toastMsg(html){
  let t = document.getElementById("trToast");
  if(!t){
    t = document.createElement("div");
    t.id = "trToast";
    t.className = "tr-toast";
    document.body.appendChild(t);
  }
  t.innerHTML = html;
  t.classList.add("show");
  clearTimeout(t._to);
  t._to = setTimeout(()=> t.classList.remove("show"), 4000);
}
/* Fin ENTRENAR */

/* ============================================================
   TABS / NAV
   ============================================================ */
function switchTab(tab){
  document.querySelectorAll("nav.tabs button").forEach(b=> b.classList.toggle("active", b.dataset.tab===tab));
  document.querySelectorAll("section.view").forEach(s=> s.classList.toggle("active", s.id==="view-"+tab));
  window.scrollTo({top:0, behavior:"instant"});
}
document.getElementById("tabs").addEventListener("click", (e)=>{
  const btn = e.target.closest("button[data-tab]");
  if(btn) switchTab(btn.dataset.tab);
});

/* ============================================================
   EXPORT / IMPORT
   ============================================================ */
document.getElementById("btnExport").onclick = ()=>{
  const blob = new Blob([JSON.stringify(STATE, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "progresion_entrenamiento_" + new Date().toISOString().slice(0,10) + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
};
document.getElementById("btnImport").onclick = ()=> document.getElementById("fileImport").click();
document.getElementById("fileImport").addEventListener("change", (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async ()=>{
    try{
      const data = JSON.parse(reader.result);
      if(!data.marcas) throw new Error("Formato no válido");
      STATE = {marcas:data.marcas||[], configOverrides:data.configOverrides||{}, objetivoOverrides:data.objetivoOverrides||{}};
      await saveState();
      renderAll();
      alert("Datos importados correctamente.");
    }catch(err){
      alert("No se pudo leer el archivo: " + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = "";
});

/* ============================================================
   INIT
   ============================================================ */
function renderAll(){
  const arr = marcasOrdenadas();
  const last = arr[arr.length-1];
  document.getElementById("mesActualBadge").textContent = last ? mesLabel(last.mes) : "sin datos";
  renderDashboard();
  renderEntrenar();
  renderRutina();
  renderMarca();
  renderProgresion();
  renderHistorial();
  renderObjetivos();
  renderConfig();
}

(async function init(){
  await loadState();
  renderAll();
})();
