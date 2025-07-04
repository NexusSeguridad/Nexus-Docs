import React, { useState } from 'react';
import './Herramientas.css';

const preguntas = [
  { texto: '¿Tienen todas las máquinas y herramientas protecciones para evitar riesgos al trabajador?', normativa: 'Art. 62, Dec. 351/79' },
  { texto: '¿Existen dispositivos de parada de emergencia?', normativa: 'Art. 62, Dec. 351/79' },
  { texto: '¿Se han previsto sistemas de bloqueo de la máquina para operaciones de mantenimiento?', normativa: 'Art. 62, Dec. 351/79' },
  { texto: '¿Tienen las máquinas eléctricas sistema de puesta a tierra?', normativa: 'Art. 62, Dec. 351/79' },
  { texto: '¿Están identificadas conforme a normas IRAM las partes peligrosas de máquinas y equipos?', normativa: 'Art. 62, Dec. 351/79' }
];

const opciones = ['Sí', 'No', 'No Aplica'];

export default function Maquinas({ onGuardar, initialData = {} }) {
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
      <h2>Máquinas</h2>
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
                  name={`respuesta_maquinas_${idx}`}
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
