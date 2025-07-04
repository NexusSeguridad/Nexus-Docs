import React, { useState } from 'react';
import NormativaInfo from './NormativaInfo';
import { useEffect } from 'react';


export default function SeccionRGRL({ seccion, respuestas: respuestasProp, onGuardar }) {
  const { nombre, preguntas } = seccion;
  const [respuestas, setRespuestas] = useState(
    respuestasProp && Array.isArray(respuestasProp) && respuestasProp.length === preguntas.length
      ? respuestasProp
      : preguntas.map(() => ({ respuesta: '', observaciones: '', fecha: '' }))
  );

  // Sincroniza respuestas si cambian las preguntas o el prop respuestas
  useEffect(() => {
    if (respuestasProp && Array.isArray(respuestasProp) && respuestasProp.length === preguntas.length) {
      setRespuestas(respuestasProp);
    } else {
      setRespuestas(preguntas.map(() => ({ respuesta: '', observaciones: '', fecha: '' })));
    }
  }, [preguntas, respuestasProp]);
  const [error, setError] = useState(null);

  const handleRespuesta = (idx, valor) => {
    setRespuestas(r => r.map((v, i) => i === idx ? { ...v, respuesta: valor } : v));
  };
  const handleFecha = (idx, valor) => {
    setRespuestas(r => r.map((v, i) => i === idx ? { ...v, fecha: valor } : v));
  };
  const handleObs = (idx, valor) => {
    setRespuestas(r => r.map((v, i) => i === idx ? { ...v, observaciones: valor } : v));
  };

  const validar = () => {
    for (let i = 0; i < preguntas.length; i++) {
      if (preguntas[i].tipo === 'text') {
        if (!respuestas[i].respuesta.trim()) return false;
      } else {
        if (!respuestas[i].respuesta) return false;
      }
    }
    return true;
  };

  const handleGuardar = () => {
    if (!validar()) {
      setError('Debe responder todas las preguntas obligatorias.');
      return;
    }
    setError(null);
    if (onGuardar) onGuardar(respuestas);
  };

  return (
    <div className="seccion-rgrl">
      <h2 style={{marginBottom:16}}>{nombre}</h2>
      <form onSubmit={e => { e.preventDefault(); handleGuardar(); }}>
        {preguntas.map((preg, idx) => {
          const resp = respuestas[idx];
          if (!resp) {
            return (
              <div key={idx} style={{color: 'red', marginBottom: 12}}>
                Error interno: las preguntas y respuestas están desfasadas. Por favor recargue la página.<br/>
                (idx: {idx}, pregunta: {preg.texto})
              </div>
            );
          }
          return (
            <div key={idx} style={{marginBottom:20, borderBottom:'1px solid #e0e0e0', paddingBottom:12}}>
              <div style={{fontWeight:600, marginBottom:4}}>{preg.texto}</div>
              {preg.normativa && (
                <NormativaInfo normativa={preg.normativa} />
              )}
              <div style={{display:'flex',gap:16,alignItems:'center',marginBottom:4}}>
                <input
                  type="date"
                  value={resp.fecha}
                  onChange={e => handleFecha(idx, e.target.value)}
                  style={{padding:'4px 8px',fontSize:'0.97em',border:'1px solid #bcd',borderRadius:4}}
                  required
                />
                {preg.tipo === 'text' ? (
                  <input
                    type="text"
                    value={resp.respuesta}
                    onChange={e => handleRespuesta(idx, e.target.value)}
                    style={{width:'100%',padding:6,fontSize:'1em'}}
                    required
                  />
                ) : (
                  <div style={{display:'flex',gap:16}}>
                    {['Sí','No','No Aplica'].map(op => (
                      <label key={op} style={{cursor:'pointer'}}>
                        <input
                          type="radio"
                          name={`preg_${nombre}_${idx}`}
                          value={op}
                          checked={resp.respuesta===op}
                          onChange={()=>handleRespuesta(idx,op)}
                          required
                        />{' '}{op}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <textarea
                placeholder="Observaciones (opcional)"
                value={resp.observaciones}
                onChange={e => handleObs(idx, e.target.value)}
                style={{width:'100%',minHeight:40,fontSize:'0.97em'}}
              />
            </div>
          );
        })}
        {error && <div style={{color:'red',marginBottom:8}}>{error}</div>}
        <button type="submit" style={{background:'#1976d2',color:'#fff',padding:'0.6em 1.8em',border:'none',borderRadius:4,fontWeight:600,fontSize:'1.1em',marginTop:8}}>Continuar</button>
      </form>
      <footer className="progreso-pie" style={{marginTop:24, display:'flex', gap:24, justifyContent:'center', fontSize:'1.08em', color:'#2d3a4a', fontWeight:500}}>
        {(() => {
          const conteo = { 'Sí': 0, 'No': 0, 'No Aplica': 0 };
          respuestas.forEach(r => {
            if (conteo[r.respuesta] !== undefined) conteo[r.respuesta]++;
          });
          return (
            <>
              <span>✔️ Sí: {conteo['Sí']}</span>
              <span>❌ No: {conteo['No']}</span>
              <span>⏺ No Aplica: {conteo['No Aplica']}</span>
            </>
          );
        })()}
      </footer>
    </div>
  );
}
