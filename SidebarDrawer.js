import React, { useState } from 'react';
import { rgrlSecciones } from '../rgrlSecciones';
import './SidebarDrawer.css';

/**
 * Menú desplegable tipo drawer para secciones RGRL
 * Muestra solo el botón hamburguesa debajo del header; al abrir, aside vertical con secciones
 */
export default function SidebarDrawer({ actual, onSelect, completadas }) {
  const [open, setOpen] = useState(false);

  // Cierra el menú al seleccionar una sección o al hacer click fuera
  const handleSelect = idx => {
    setOpen(false);
    onSelect(idx);
  };

  return (
    <>
      {/* Botón hamburguesa fijo debajo del header */}
      {!open && (
        <button
          className="sidebar-drawer-toggle"
          onClick={() => setOpen(true)}
          title="Mostrar menú de secciones"
          style={{ position: 'fixed', top: 80, left: 18, zIndex: 2200 }}
          aria-label="Abrir menú de secciones"
        >
          <span aria-hidden>☰</span>
        </button>
      )}
      {/* Drawer vertical con lista de secciones */}
      {open && (
        <>
          <aside
            className="sidebar-drawer open"
            style={{ position: 'fixed', top: 80, left: 0, height: 'calc(100vh - 80px)', zIndex: 2300 }}
            aria-label="Menú de secciones"
          >
            <button
              className="sidebar-drawer-close"
              onClick={() => setOpen(false)}
              title="Cerrar menú"
              style={{ margin: 12, fontSize: 28, background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Cerrar menú"
            >
              ×
            </button>
            <ul className="sidebar-secciones-list">
              {rgrlSecciones.map((sec, idx) => {
                const isActiva = actual === idx;
                const isCompleta = completadas && completadas[idx];
                return (
                  <li
                    key={sec.nombre}
                    className={`sidebar-seccion-item${isActiva ? ' activa' : ''}${isCompleta ? ' completa' : ''}`}
                  >
                    <button
                      className="sidebar-seccion-btn"
                      onClick={() => handleSelect(idx)}
                      aria-current={isActiva ? 'page' : undefined}
                    >
                      <span className="sidebar-seccion-label">{idx + 1}. {sec.nombre}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>
          {/* Overlay para cerrar al hacer click fuera */}
          <div
            className="sidebar-overlay"
            style={{ position: 'fixed', top: 80, left: 0, width: '100vw', height: 'calc(100vh - 80px)', background: 'rgba(44,63,94,0.18)', zIndex: 1199 }}
            onClick={() => setOpen(false)}
            aria-hidden
          />
        </>
      )}
    </>
  );
}
