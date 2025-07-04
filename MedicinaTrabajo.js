import React, { useState } from 'react';
import './Herramientas.css';

const preguntas = [
  { texto: '¿Dispone del Servicio de Medicina del Trabajo?', normativa: 'Art. 10, Dec. 1338/96' },
  { texto: '¿Posee documentación sobre acciones como educación sanitaria, socorro, vacunación y estudios de ausentismo?', normativa: 'Art. 10, Dec. 1338/96' },
  { texto: '¿Se realizan los exámenes periódicos?', normativa: 'Art. 10, Dec. 1338/96' }
];

const opciones = ['Sí', 'No', 'No Aplica'];

export default function MedicinaTrabajo({ onGuardar, initialData = {} }) {
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
      <h2>Servicio de Medicina del Trabajo</h2>
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
                  name={`respuesta_medtrab_${idx}`}
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
