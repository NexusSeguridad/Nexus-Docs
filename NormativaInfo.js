import React from 'react';
import './NormativaInfo.css';

export default function NormativaInfo({ normativa }) {
  if (!normativa) return null;
  return (
    <div className="normativa-info">
      <span className="normativa-icon" role="img" aria-label="Normativa">📘</span>
      <span><strong>Normativa:</strong> {normativa}</span>
    </div>
  );
}
