import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function calcularEstadisticas(historial) {
  // Ejemplo: cantidad de formularios por localidad
  const localidades = {};
  historial.forEach(item => {
    localidades[item.localidad] = (localidades[item.localidad] || 0) + 1;
  });
  return Object.entries(localidades).map(([localidad, cantidad]) => ({ localidad, cantidad }));
}

const Estadisticas = ({ historial }) => {
  const data = calcularEstadisticas(historial);
  return (
    <div className="estadisticas">
      <h2>Estadísticas (por Localidad)</h2>
      {data.length === 0 ? (
        <p>No hay datos para mostrar.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="localidad" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Estadisticas;
