import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/logo.png';
import { rgrlSecciones } from '../rgrlSecciones';

// Texto institucional breve
const intro = `\
El Registro de Gestión de Riesgos Laborales (RGRL) es una herramienta digital diseñada para documentar y mejorar las condiciones de seguridad, salud y ambiente en los lugares de trabajo. Permite relevar, analizar y gestionar riesgos de manera eficiente, promoviendo la prevención y el cumplimiento normativo.\n\nA continuación se presenta el relevamiento completo realizado mediante el formulario digital RGRL.`;

function generarReportePDF({ datosGenerales, respuestasSecciones }) {
  const doc = new jsPDF();

  // Logo y título
  doc.addImage(logo, 'PNG', 15, 10, 30, 30);
  doc.setFontSize(20);
  doc.setTextColor('#1976d2');
  doc.text('Reporte RGRL', 50, 25);
  doc.setFontSize(12);
  doc.setTextColor(60);
  doc.text(intro, 15, 48, { maxWidth: 180 });

  let y = 68;
  // Datos generales
  doc.setFontSize(14);
  doc.setTextColor('#1976d2');
  doc.text('Datos Generales', 15, y);
  doc.setFontSize(11);
  doc.setTextColor(40);
  y += 7;
  Object.entries(datosGenerales || {}).forEach(([k, v]) => {
    doc.text(`${k}: ${v}`, 18, y);
    y += 6;
  });

  // Por cada sección
  rgrlSecciones.slice(1).forEach((sec, idx) => {
    y += 8;
    doc.setFontSize(13);
    doc.setTextColor('#00c9a7');
    doc.text(sec.nombre, 15, y);
    y += 6;
    doc.setFontSize(10);
    doc.setTextColor(50);
    const resps = respuestasSecciones[idx + 1] || [];
    sec.preguntas.forEach((preg, pi) => {
      const r = resps[pi] || {};
      doc.text(`• ${preg.texto}`, 18, y);
      y += 5;
      doc.text(`   Respuesta: ${r.respuesta || '-'}`, 22, y);
      y += 5;
      if (r.fecha) {
        doc.text(`   Fecha: ${r.fecha}`, 22, y);
        y += 5;
      }
      if (r.observaciones) {
        doc.text(`   Observaciones: ${r.observaciones}`, 22, y);
        y += 5;
      }
    });
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
  });

  // Pie de página
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text('Generado automáticamente por el sistema RGRL', 15, 285);

  doc.save('reporte_rgrl.pdf');
}

export default function ReporteRGRL({ datosGenerales, respuestasSecciones }) {
  return (
    <button
      style={{background:'#1976d2',color:'#fff',padding:'0.7em 2em',border:'none',borderRadius:6,fontWeight:600,fontSize:'1.08em',marginTop:28,boxShadow:'0 2px 12px #00c9a777',cursor:'pointer'}}
      onClick={() => generarReportePDF({ datosGenerales, respuestasSecciones })}
    >
      Descargar Reporte PDF
    </button>
  );
}
