import React, { useState } from 'react';
import './AvanceDrawer.css';
import iconSi from '../assets/icon-si.svg';
import iconNo from '../assets/icon-no.svg';
import iconNA from '../assets/icon-na.svg';

export default function AvanceDrawer({ conteo, progreso }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className={`avance-drawer${open ? ' open' : ' closed'}`}>
        {open && (
          <>
            <div className="avance-header">
              <span className="avance-header-title">Avance</span>
            </div>
            <div className="avance-icons">
              <div className="avance-icon">
                <img src={iconSi} alt="Sí" width={42} height={42} />
                <span>Sí: <b>{conteo['Sí']}</b></span>
              </div>
              <div className="avance-icon">
                <img src={iconNo} alt="No" width={42} height={42} />
                <span>No: <b>{conteo['No']}</b></span>
              </div>
              <div className="avance-icon">
                <img src={iconNA} alt="No Aplica" width={42} height={42} />
                <span>No Aplica: <b>{conteo['No Aplica']}</b></span>
              </div>
            </div>
            <div className="avance-bar-container">
              <div className="avance-bar" style={{width: progreso + '%'}} />
            </div>
            <div className="avance-bar-label">{progreso}% completado</div>
          </>
        )}
        <button
          className={`avance-toggle ${open ? 'cerrar' : 'abrir'}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Cerrar avance' : 'Abrir avance'}
        >
          {open ? <span style={{fontSize:'2em',display:'block',transform:'rotate(180deg)'}}>&#x25B6;</span> : <span style={{fontSize:'2em',display:'block'}}>&#x25B6;</span>}
        </button>
      </div>
    </>
  );
}

