import React, { useState } from 'react';
import './Herramientas.css';

const preguntas = [
  { texto: 'Razón social', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' },
  { texto: 'CUIT', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' },
  { texto: 'Actividad principal (CIIU)', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' },
  { texto: 'Domicilio legal', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' },
  { texto: 'Teléfono', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' },
  { texto: 'Email', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' },
  { texto: 'Localidad / Provincia', normativa: 'Art. 7, Dec. 351/79', tipo: 'text' }
];

export default function DatosGenerales({ onGuardar, initialData = {} }) {
  const [respuestas, setRespuestas] = useState(
    preguntas.map((p, i) => initialData[i] || { respuesta: '' })
  );
  const [error, setError] = useState(null);
  const handleChange = (idx, valor) => {
    const nuevas = [...respuestas];
    nuevas[idx].respuesta = valor;
    setRespuestas(nuevas);
  };
  const handleGuardar = () => {
    if (respuestas.some(r => !r.respuesta)) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    setError(null);
    if (onGuardar) onGuardar(respuestas);
    alert('Datos generales guardados.');
  };
  return (
    <div className="bloque-herramientas">
      <h2>Datos Generales del Establecimiento</h2>
      {preguntas.map((p, idx) => (
        <div key={idx} className="pregunta-bloque">
          <div className="pregunta-texto">
            <strong>{p.texto}</strong>
            <span className="normativa">Normativa: {p.normativa}</span>
          </div>
          <input
            type="text"
            className="observaciones"
            placeholder={p.texto}
            value={respuestas[idx].respuesta}
            onChange={e => handleChange(idx, e.target.value)}
          />
        </div>
      ))}
      {error && <div className="error">{error}</div>}
      <button className="guardar-btn" onClick={handleGuardar}>Guardar sección</button>
    </div>
  );
}
