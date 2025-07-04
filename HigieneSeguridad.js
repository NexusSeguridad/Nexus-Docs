import React, { useState } from 'react';
import './Herramientas.css';

const preguntas = [
  { texto: '¿Dispone del Servicio de Higiene y Seguridad?', normativa: 'Art. 9, Ley 19587' },
  { texto: '¿Cumple con las horas profesionales según decreto 1338/96?', normativa: 'Dec. 1338/96' },
  { texto: '¿Posee documentación actualizada sobre análisis de riesgos y medidas preventivas en los puestos de trabajo?', normativa: 'Art. 7, Dec. 351/79' }
];

const opciones = ['Sí', 'No', 'No Aplica'];

export default function HigieneSeguridad({ onGuardar, initialData = {} }) {
  const [respuestas, setRespuestas] = useState(
    preguntas.map((p, i) => initialData[i] || { respuesta: '', observaciones: '' })
  );
  const [error, setError] = useState(null);
  const handleChange = (idx, campo, valor) => {
    const nuevas = [...respuestas];
    nuevas[idx][campo] = valor;
    setRespuestas(nuevas);
  };
  const handleGuardar = () => {
    if (respuestas.some(r => !r.respuesta)) {
      setError('Por favor, responda todas las preguntas.');
      return;
    }
    setError(null);
    if (onGuardar) onGuardar(respuestas);
    alert('Respuestas guardadas.');
  };
  return (
    <div className="bloque-herramientas">
      <h2>Servicio de Higiene y Seguridad en el Trabajo</h2>
      {preguntas.map((p, idx) => (
        <div key={idx} className="pregunta-bloque">
          <div className="pregunta-texto">
            <strong>{p.texto}</strong>
            <span className="normativa">Normativa: {p.normativa}</span>
          </div>
          <div className="opciones">
            {opciones.map(op => (
              <label key={op}>
                <input
                  type="radio"
                  name={`respuesta_higiene_${idx}`}
                  value={op}
                  checked={respuestas[idx].respuesta === op}
                  onChange={e => handleChange(idx, 'respuesta', op)}
                />
                {op}
              </label>
            ))}
          </div>
          <input
            type="text"
            className="observaciones"
            placeholder="Observaciones"
            value={respuestas[idx].observaciones}
            onChange={e => handleChange(idx, 'observaciones', e.target.value)}
          />
        </div>
      ))}
      {error && <div className="error">{error}</div>}
      <button className="guardar-btn" onClick={handleGuardar}>Guardar sección</button>
    </div>
  );
}
