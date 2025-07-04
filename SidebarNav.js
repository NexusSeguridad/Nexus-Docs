import React from 'react';
import { rgrlSecciones } from '../rgrlSecciones';
import './SidebarNav.css';

export default function SidebarNav({ actual, onSelect, completadas }) {
  return (
    <aside className="sidebar-nav">
      <div className="sidebar-title">Secciones RGRL</div>
      <ul>
        {rgrlSecciones.map((sec, idx) => {
          let estado = completadas[idx] ? 'completa' : (actual===idx ? 'actual' : 'pendiente');
          return (
            <li key={sec.nombre} className={`nav-item ${estado} ${actual===idx?'nav-activa':''}`}
                onClick={()=>onSelect(idx)}>
              <span className="nav-icon">
                {completadas[idx] ? '✔️' : (actual===idx ? '🟢' : '⚪')}
              </span>
              <span className="nav-label">{idx+1}. {sec.nombre}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
