import React from 'react';

import { rgrlSecciones } from '../rgrlSecciones';

export default function SeccionesNav({ actual, onSelect }) {
  return (
    <nav className="nav-secciones" style={{display:'flex',gap:8,marginBottom:24,flexWrap:'wrap'}}>
      {rgrlSecciones.map((sec, idx) => (
        <button
          key={sec.nombre}
          className={actual===idx ? 'nav-activa' : ''}
          style={{
            background: actual===idx ? '#2d3a4a' : '#e8ecf3',
            color: actual===idx ? '#fff' : '#2d3a4a',
            border: 'none',
            borderRadius: 4,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1rem'
          }}
          onClick={()=>onSelect(idx)}
        >
          {sec.nombre}
        </button>
      ))}
    </nav>
  );
}
