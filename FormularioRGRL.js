import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

// Campos basados en el formulario PDF original (puedes agregar más si lo deseas)
const initialValues = {
  razonSocial: '',
  cuit: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  telefono: '',
  email: '',
  nombreResponsable: '',
  cargoResponsable: '',
  fecha: '',
  descripcion: ''
};

const validationSchema = Yup.object({
  razonSocial: Yup.string().required('Requerido'),
  cuit: Yup.string().required('Requerido'),
  domicilio: Yup.string().required('Requerido'),
  localidad: Yup.string().required('Requerido'),
  provincia: Yup.string().required('Requerido'),
  telefono: Yup.string().required('Requerido'),
  email: Yup.string().email('Email inválido').required('Requerido'),
  nombreResponsable: Yup.string().required('Requerido'),
  cargoResponsable: Yup.string().required('Requerido'),
  fecha: Yup.string().required('Requerido'),
  descripcion: Yup.string().required('Requerido'),
});

function exportarPDF(valores) {
  const doc = new jsPDF();
  doc.text('Formulario RGRL', 10, 10);
  Object.entries(valores).forEach(([key, value], idx) => {
    doc.text(`${key}: ${value}`, 10, 20 + idx * 10);
  });
  doc.save('reporte_rgrl.pdf');
}

function exportarExcel(valores) {
  const ws = XLSX.utils.json_to_sheet([valores]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Reporte');
  XLSX.writeFile(wb, 'reporte_rgrl.xlsx');
}

const FormularioRGRL = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit({ ...values, fechaRegistro: new Date().toISOString() });
      resetForm();
    }}
  >
    {({ errors, touched, values }) => (
      <Form className="formulario">
        <label>Razón Social <Field name="razonSocial" /></label>
        {errors.razonSocial && touched.razonSocial && <div className="error">{errors.razonSocial}</div>}
        <label>CUIT <Field name="cuit" /></label>
        {errors.cuit && touched.cuit && <div className="error">{errors.cuit}</div>}
        <label>Domicilio <Field name="domicilio" /></label>
        {errors.domicilio && touched.domicilio && <div className="error">{errors.domicilio}</div>}
        <label>Localidad <Field name="localidad" /></label>
        {errors.localidad && touched.localidad && <div className="error">{errors.localidad}</div>}
        <label>Provincia <Field name="provincia" /></label>
        {errors.provincia && touched.provincia && <div className="error">{errors.provincia}</div>}
        <label>Teléfono <Field name="telefono" /></label>
        {errors.telefono && touched.telefono && <div className="error">{errors.telefono}</div>}
        <label>Email <Field name="email" type="email" /></label>
        {errors.email && touched.email && <div className="error">{errors.email}</div>}
        <label>Nombre del Responsable <Field name="nombreResponsable" /></label>
        {errors.nombreResponsable && touched.nombreResponsable && <div className="error">{errors.nombreResponsable}</div>}
        <label>Cargo del Responsable <Field name="cargoResponsable" /></label>
        {errors.cargoResponsable && touched.cargoResponsable && <div className="error">{errors.cargoResponsable}</div>}
        <label>Fecha <Field name="fecha" type="date" /></label>
        {errors.fecha && touched.fecha && <div className="error">{errors.fecha}</div>}
        <label>Descripción <Field name="descripcion" as="textarea" /></label>
        {errors.descripcion && touched.descripcion && <div className="error">{errors.descripcion}</div>}
        <div className="acciones">
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => exportarPDF(values)}>Descargar PDF</button>
          <button type="button" onClick={() => exportarExcel(values)}>Descargar Excel</button>
        </div>
      </Form>
    )}
  </Formik>
);

export default FormularioRGRL;
