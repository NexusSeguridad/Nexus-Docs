import React, { useState, useRef, useEffect } from 'react';
import FormularioRGRL from './components/FormularioRGRL';
import Historial from './components/Historial';
import Estadisticas from './components/Estadisticas';
import './App.css';
import SidebarDrawer from './components/SidebarDrawer';
import SeccionRGRL from './components/SeccionRGRL';
import { rgrlSecciones } from './rgrlSecciones';
import Toast from './components/Toast';
import AvanceDrawer from './components/AvanceDrawer';
import AppHeader from './components/AppHeader';
import ReporteRGRL from './components/ReporteRGRL';

function App() {
  const [historial, setHistorial] = useState(() => {
    const data = localStorage.getItem('rgrl_historial_v2');
    return data ? JSON.parse(data) : [];
  });

  // Recuperar avance guardado
  const [seccion, setSeccion] = useState(() => {
    const s = localStorage.getItem('rgrl_seccion_actual');
    return s ? parseInt(s, 10) : 0;
  });
  const [respuestasSecciones, setRespuestasSecciones] = useState(() => {
    const rs = localStorage.getItem('rgrl_respuestas_v2');
    return rs ? JSON.parse(rs) : Array(rgrlSecciones.length).fill(null);
  });

  const agregarRegistro = (registro) => {
    const nuevoHistorial = [registro, ...historial];
    setHistorial(nuevoHistorial);
    localStorage.setItem('rgrl_historial_v2', JSON.stringify(nuevoHistorial));
  };

  // Calcular avance y estadísticas
  // Ignorar sección 0 (Datos Generales) en estadísticas
  const completadas = respuestasSecciones.map((r, idx) => idx === 0 ? false : !!r);
  const seccionesCompletas = completadas.slice(1).filter(Boolean).length;
  const totalPreguntas = rgrlSecciones.slice(1).reduce((acc, sec) => acc + sec.preguntas.length, 0);
  const preguntasRespondidas = respuestasSecciones.slice(1).reduce((acc, r, idx) => {
    if (!r) return acc;
    return acc + r.filter(x => x.respuesta && x.respuesta !== '').length;
  }, 0);
  const progreso = Math.round((seccionesCompletas / (rgrlSecciones.length - 1)) * 100);

  const [toast, setToast] = useState(null);

  const guardarYAvanzar = (resps) => {
    const next = [...respuestasSecciones];
    next[seccion] = resps;
    setRespuestasSecciones(next);
    localStorage.setItem('rgrl_respuestas_v2', JSON.stringify(next));
    setToast(seccion === 0 ? '¡Datos generales guardados! Iniciando relevamiento...' : '¡Sección guardada con éxito!');
    setTimeout(() => setToast(null), 2500);
    if (seccion < rgrlSecciones.length - 1) {
      setSeccion(seccion + 1);
      localStorage.setItem('rgrl_seccion_actual', seccion + 1);
    }
  };

  const [avanceOpen, setAvanceOpen] = useState(false);
  const mainRef = useRef(null);
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [seccion]);

  return (
    <div style={{display:'flex',minHeight:'100vh'}}>

      <SidebarDrawer actual={seccion} onSelect={setSeccion} completadas={completadas} />
      <main style={{flex:1,background:'#f7fafd',padding:'0 0 40px 0',minHeight:'100vh'}}>
        <AppHeader />
        <div ref={mainRef} style={{maxWidth:800,margin:'0 auto',background:'#fff',borderRadius:10,boxShadow:'0 2px 16px #0001',padding:'32px 32px 24px 32px'}}>
          {seccion === 0 ? (
            <FormularioRGRL onSubmit={valores => {
              guardarYAvanzar(valores);
            }} />
          ) : (
            <>
              <SeccionRGRL
                seccion={rgrlSecciones[seccion]}
                respuestas={respuestasSecciones[seccion]}
                onGuardar={resps => {
                  guardarYAvanzar(resps);
                }}
              />
              {/* Mostrar botón de reporte solo si todas las secciones están completas */}
              {respuestasSecciones.slice(1).every(r => Array.isArray(r) && r.every(x => x && x.respuesta)) && (
                <div style={{textAlign:'center'}}>
                  <ReporteRGRL
                    datosGenerales={respuestasSecciones[0] && respuestasSecciones[0][0] ? respuestasSecciones[0][0] : {}}
                    respuestasSecciones={respuestasSecciones}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <AvanceDrawer
        conteo={{
          'Sí': respuestasSecciones.slice(1).flat().filter(x => x && x.respuesta === 'Sí').length,
          'No': respuestasSecciones.slice(1).flat().filter(x => x && x.respuesta === 'No').length,
          'No Aplica': respuestasSecciones.slice(1).flat().filter(x => x && x.respuesta === 'No Aplica').length,
        }}
        progreso={progreso}
      />
      <Toast message={toast} onClose={() => setToast(null)} />
    </div>
  );
}

export default App;
