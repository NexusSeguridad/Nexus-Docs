import React from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;
  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      left: '50%',
      transform: 'translateX(-50%)',
      minWidth: 250,
      maxWidth: 400,
      background: type === 'success' ? '#e3fcec' : '#ffe3e3',
      color: type === 'success' ? '#257942' : '#c62828',
      border: `1.5px solid ${type === 'success' ? '#2ecc71' : '#e57373'}`,
      borderRadius: 8,
      padding: '18px 26px',
      fontSize: '1.1em',
      fontWeight: 500,
      zIndex: 9999,
      boxShadow: '0 4px 18px #0002',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
      <span style={{fontSize:'1.3em'}}>{type === 'success' ? '✅' : '⚠️'}</span>
      <span>{message}</span>
      <button onClick={onClose} style={{marginLeft:'auto',background:'none',border:'none',fontSize:'1.2em',color:'#888',cursor:'pointer'}}>×</button>
    </div>
  );
}
