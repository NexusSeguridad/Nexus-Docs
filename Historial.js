import React from 'react';

const Historial = ({ historial }) => (
  <div className="historial">
    <h2>Historial de Formularios</h2>
    {historial.length === 0 ? (
      <p>No hay formularios registrados aún.</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Razón Social</th>
            <th>CUIT</th>
            <th>Domicilio</th>
            <th>Localidad</th>
            <th>Provincia</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Responsable</th>
            <th>Cargo</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((item, idx) => (
            <tr key={idx}>
              <td>{item.razonSocial}</td>
              <td>{item.cuit}</td>
              <td>{item.domicilio}</td>
              <td>{item.localidad}</td>
              <td>{item.provincia}</td>
              <td>{item.telefono}</td>
              <td>{item.email}</td>
              <td>{item.nombreResponsable}</td>
              <td>{item.cargoResponsable}</td>
              <td>{item.fecha}</td>
              <td>{item.descripcion}</td>
              <td>{new Date(item.fechaRegistro).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default Historial;
