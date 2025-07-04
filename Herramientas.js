import React, { useState } from 'react';
import './Herramientas.css';

const preguntas = [
  {
    texto: '¿Las herramientas están en estado de conservación adecuado?',
    normativa: 'Art. 3, Dec. 1338/96',
  },
  {
    texto: '¿La empresa provee herramientas aptas y seguras?',
    normativa: 'Art. 9 b), Ley 19587',
  },
  {
    texto: '¿Las herramientas corto-punzantes poseen fundas o vainas?',
    normativa: 'Cap. 15, Art. 110, Dec. 351/79',
  },
  {
    texto: '¿Existe un lugar destinado para la ubicación ordenada de las herramientas?',
    normativa: 'Art. 5, Dec. 1338/96',
  },
];

const opciones = ['Sí', 'No', 'No Aplica'];

export default function Herramientas({ onGuardar, initialData = {} }) {
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
    // Validación: todas las respuestas deben estar completas
    if (respuestas.some(r => !r.respuesta)) {
      setError('Por favor, responda todas las preguntas.');
      return;
    }
    setError(null);
    if (onGuardar) onGuardar(respuestas);
    alert('Respuestas guardadas correctamente.');
  };
  return (
    <div className="bloque-herramientas">
      <h2>Herramientas</h2>
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
                  name={`respuesta_${idx}`}
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
