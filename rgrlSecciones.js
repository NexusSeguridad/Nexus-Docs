// Configuración centralizada de secciones y preguntas del RGRL
export const rgrlSecciones = [
  {
    nombre: 'Datos Generales del Establecimiento',
    preguntas: [
      { texto: 'Razón social', tipo: 'text' },
      { texto: 'CUIT', tipo: 'text' },
      { texto: 'Actividad principal (CIIU)', tipo: 'text' },
      { texto: 'Domicilio legal', tipo: 'text' },
      { texto: 'Teléfono', tipo: 'text' },
      { texto: 'Email', tipo: 'text' },
      { texto: 'Localidad / Provincia', tipo: 'text' }
    ]
  },
  {
    nombre: 'Servicio de Higiene y Seguridad en el Trabajo',
    preguntas: [
      { texto: '¿Dispone del Servicio de Higiene y Seguridad?', normativa: 'Art. 3, Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Cumple con las horas profesionales según decreto 1338/96?', normativa: 'Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Posee documentación actualizada sobre análisis de riesgos y medidas preventivas en los puestos de trabajo?', normativa: 'Art. 10, Dec. 1338/96', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Servicio de Medicina del Trabajo',
    preguntas: [
      { texto: '¿Dispone del Servicio de Medicina del Trabajo?', normativa: 'Art. 3, Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Posee documentación actualizada sobre acciones tales como de educación sanitaria, socorro, vacunación y estudios de ausentismo por morbilidad?', normativa: 'Art. 5, Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Se realizan los exámenes periódicos?', normativa: 'Res. 43/97 y 54/98; Art. 9 a) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Herramientas',
    preguntas: [
      { texto: '¿Las herramientas están en estado de conservación adecuado?', normativa: 'Cap. 15 Art. 110 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿La empresa provee herramientas aptas y seguras?', normativa: 'Cap. 15 Arts. 103 y 110 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Las herramientas corto-punzantes poseen fundas o vainas?', normativa: 'Cap. 15 Art. 110 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Existe un lugar destinado para la ubicación ordenada de las herramientas?', normativa: 'Cap. 15 Art. 110 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Las portátiles eléctricas poseen protecciones para evitar riesgos?', normativa: 'Cap. 15 Arts. 103 y 110 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Las neumáticas e hidráulicas poseen válvulas de cierre automático al dejar de accionarla?', normativa: 'Cap. 15 Arts. 103 y 110 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Máquinas',
    preguntas: [
      { texto: '¿Tienen todas las máquinas y herramientas, protecciones para evitar riesgos al trabajador?', normativa: 'Cap. 15 Arts. 103, 104, 105, 106, 107 y 110 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Existen dispositivos de parada de emergencia?', normativa: 'Cap. 15 Arts. 103 y 104 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Se han provisto sistema de bloqueo de la máquina para operaciones de mantenimiento?', normativa: 'Cap. 15 Arts. 108 y 109 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Tienen las máquinas eléctricas, sistema de puesta a tierra?', normativa: 'Cap. 14 Anexo VI Pto 3.3.1 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Están identificadas conforme a normas IRAM todas las partes de máquinas y equipos que en accionamiento puedan causar daño a los trabajadores?', normativa: 'Cap. 12 Arts. 77, 78 y 81 Dec. 351/79; Art. 9 j) Ley 19587', tipo: 'radio' }
    ]
  },
    {
    nombre: 'Espacios de Trabajo',
    preguntas: [
      { texto: '¿Existe orden y limpieza en los puestos de trabajo?', normativa: 'Cap. 5 Art. 42 Dec. 351/79; Art. 8 a) y Art. 9 e) Ley 19587', tipo: 'radio' },
      { texto: '¿Existen depósitos de residuos en los puestos de trabajo?', normativa: 'Cap. 5 Art. 42 Dec. 351/79; Art. 8 a) y Art. 9 e) Ley 19587', tipo: 'radio' },
      { texto: '¿Tienen las salientes y partes móviles de máquinas y/o instalaciones, señalización y protección?', normativa: 'Cap. 12 Art. 81 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Ergonomía',
    preguntas: [
      { texto: '¿Se desarrolla un programa de ergonomía integrado para los distintos puestos de trabajo?', normativa: 'Anexo I Res. 295/03 Art. 6 a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se realizan controles de ingeniería a los puestos de trabajo?', normativa: 'Anexo I Res. 295/03 Art. 6 a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se realizan controles administrativos y seguimientos a los puestos de trabajo?', normativa: 'Anexo I Res. 295/03 Art. 6 a) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Protección Contra Incendios',
    preguntas: [
      { texto: '¿Existen medios o vías de escape adecuadas en caso de incendio?', normativa: 'Cap.12 Art. 80 y Cap. 18 Art. 172 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Cuentan con estudio de carga de fuego?', normativa: 'Cap.18 Art. 183 Dec. 351/79', tipo: 'radio' },
      { texto: '¿La cantidad de matafuegos es acorde a la carga de fuego?', normativa: 'Cap.18 Art.175 y 176 Dec. 351/79; Art. 9 g) Ley 19587', tipo: 'radio' },
      { texto: '¿Se registra el control de recargas y/o reparación?', normativa: 'Cap.18 Art. 183 a 186 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se registra el control de prueba hidráulica de carros y/o matafuegos?', normativa: 'Cap.18 Art.183 a 185 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Existen sistemas de detección de incendios?', normativa: 'Cap. 18, Art.182 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Cuentan con habilitación, los carros y/o matafuegos y demás instalaciones para extinción?', normativa: 'Cap. 18, Art.183 Dec. 351/79', tipo: 'radio' },
      { texto: '¿El depósito de combustibles cumple con la legislación vigente?', normativa: 'Cap.18 Art.164 a 168 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se acredita la realización periódica de simulacros de evacuación?', normativa: 'Cap.18 Art.187 Dec. 351/79; Art. 9 k) Ley 19587', tipo: 'radio' },
      { texto: '¿Se disponen de estanterías o elementos equivalentes de material no combustible o metálico?', normativa: 'Cap.18 Art.169 Dec. 351/79; Art. 9 h) Ley 19587', tipo: 'radio' },
      { texto: '¿Se separan en forma alternada, las de materiales combustibles con las no combustibles y las que puedan reaccionar entre si?', normativa: 'Cap.18 Art.169 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Almacenaje',
    preguntas: [
      { texto: '¿Se almacenan los productos respetando la distancia mínima de 1 m entre la parte superior de las estibas y el techo?', normativa: 'Cap.18 Art.169 Dec. 351/79; Art. 9 h) Ley 19587', tipo: 'radio' },
      { texto: '¿Los sistemas de almacenaje permiten una adecuada circulación y son seguros?', normativa: 'Cap. 5 Art. 42 y 43 Dec. 351/79; Art. 8 d) Ley 19587', tipo: 'radio' },
      { texto: '¿En los almacenajes a granel, las estibas cuentan con elementos de contención?', normativa: 'Cap. 5 Art. 42 y 43 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Almacenaje de Sustancias Peligrosas',
    preguntas: [
      { texto: '¿Se encuentran separados los productos incompatibles?', normativa: 'Cap. 17 Art.145 Dec. 351/79; Art. 9 h) Ley 19587', tipo: 'radio' },
      { texto: '¿Se identifican los productos riesgosos almacenados?', normativa: 'Cap. 17 Art.145 Dec. 351/79; Art. 9 h) y Art.8 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se proveen elementos de protección adecuados al personal?', normativa: 'Cap. 17 Art.145 Dec. 351/79; Art. 8 c) Ley 19587', tipo: 'radio' },
      { texto: '¿Existen duchas de emergencia y/o lava ojos en los sectores con productos peligrosos?', normativa: 'Cap. 5 Art. 42 Dec. 351/79; Art. 8 b) y 9 i) Ley 19587', tipo: 'radio' },
      { texto: '¿En atmósferas inflamables la instalación eléctrica es antiexplosiva?', normativa: 'Cap. 18 Art.165, 166 y 167 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Existe un sistema para control de derrames de productos peligrosos?', normativa: 'Cap. 17 Art.145 y 148 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Sustancias Peligrosas',
    preguntas: [
      { texto: '¿Su fabricación y/o manipuleo cumplimenta la legislación vigente?', normativa: 'Cap. 17 Art. 145 y 147 a 150 Dec. 351/79; Art. 8 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Todas las sustancias que se utilizan poseen sus respectivas hojas de seguridad?', normativa: 'Cap. 17 Art. 145 y 147 a 150 Dec. 351/79; Art. 8 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Las instalaciones y equipos se encuentran protegidos contra el efecto corrosivo de las sustancias empleadas?', normativa: 'Cap. 17 Art.148 Dec. 351/79; Art. 8 b) y d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se fabrican, depositan o manipulan sustancias explosivas, teniendo en cuenta lo reglamentado por Fabricaciones Militares?', normativa: 'Cap. 17 Art 146 Dec. 351/79; Art. 8 a), b), c) y d) Ley 19587', tipo: 'radio' },
      { texto: '¿Existen dispositivos de alarma acústico y visuales donde se manipulen sustancias infectantes y/o contaminantes?', normativa: 'Cap. 17 Art. 149 Dec. 351/79; Art. 8 a) b) y d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se ha señalizado y resguardado la zona o los elementos afectados ante casos de derrame de sustancias corrosivas?', normativa: 'Cap. 17 Art.148 Dec. 351/79; Art. 8 a) b) y d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se ha evitado la acumulación de desechos orgánicos en estado de putrefacción, e implementado la desinfección correspondiente?', normativa: 'Cap. 17 Art. 150 Dec. 351/79; Art. 9 e) Ley 19587', tipo: 'radio' },
      { texto: '¿Se confeccionó un plan de seguridad para casos de emergencia, y se colocó en lugar visible?', normativa: 'Cap. 17 Art. 145 Dec. 351/79; Art. 9 j) y k) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Riesgo Eléctrico',
    preguntas: [
      { texto: '¿Están todos los cableados eléctricos adecuadamente contenidos?', normativa: 'Cap. 14 Art. 95 y 96 Dec. 351/79; Art. 9 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Los conectores eléctricos se encuentran en buen estado?', normativa: 'Cap. 14 Art. 95 y 96 Dec. 351/79; Art. 9 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Las instalaciones y equipos eléctricos cumplen con la legislación?', normativa: 'Cap. 14 Art. 95 y 96 Dec. 351/79; Art. 9 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Las tareas de mantenimiento son efectuadas por personal capacitado y autorizado por la empresa?', normativa: 'Cap. 14 Art. 98 Dec. 351/79; Art. 8 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se efectúa y registra los resultados del mantenimiento de las instalaciones, en base a programas confeccionados de acuerdo a normas de seguridad?', normativa: 'Cap. 14 Art. 98 Dec. 351/79; Art. 9 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Los proyectos de instalaciones y equipos eléctricos de más de 1000 voltios cumplimentan con lo establecido en la legislación vigente y están aprobados por el responsable de Higiene y Seguridad en el rubro de su competencia?', normativa: 'Cap. 14 Art. 97 Dec. 351/79; Art. 9 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se adoptan las medidas de seguridad en locales donde se manipule sustancias corrosivas, inflamables y/o explosivas ó de alto riesgo y en locales húmedos?', normativa: 'Cap. 14 Art. 99 Dec. 351/79; Art. 9 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se han adoptado las medidas para la protección contra riesgos de contactos directos e indirectos?', normativa: 'Cap. 14 Art. 100 Dec. 351/79 y punto 3.3.2. Anexo VI; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Se han adoptado medidas para eliminar la electricidad estática en todas las operaciones que pueda producirse?', normativa: 'Cap. 14 Art. 101 Dec. 351/79 y punto 3.6 Anexo VI; Art. 8 d) Ley 19587', tipo: 'radio' },
      { texto: '¿Posee instalación para prevenir sobretensiones producidas por descargas atmosféricas (pararrayos)?', normativa: 'Cap. 14 Art. 102 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Poseen las instalaciones tomas a tierra independientes de la instalada para descargas atmosféricas?', normativa: 'Cap. 14 Art. 102 y Anexo VI, pto. 3.3.1 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Las puestas a tierra se verifican periódicamente mediante mediciones?', normativa: 'Anexo VI pto. 3.1 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Aparatos Sometidos a Presión',
    preguntas: [
      { texto: '¿Se realizan los controles e inspecciones periódicas establecidos en calderas y todo otro aparato sometido a presión?', normativa: 'Cap. 16 Art 140 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Se han fijado las instrucciones detalladas con esquemas de la instalación, y los procedimientos operativos?', normativa: 'Cap. 16 Art 138 Dec. 351/79; Art. 9 j) Ley 19587', tipo: 'radio' },
      { texto: '¿Se protegen los hornos, calderas, etc., para evitar la acción del calor?', normativa: 'Cap. 16 Art 139 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Están los cilindros que contengan gases sometidos a presión adecuadamente almacenados?', normativa: 'Cap. 16 Art. 142 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Los restantes aparatos sometidos a presión, cuentan con dispositivos de protección y seguridad?', normativa: 'Cap. 16 Art. 141 y Art. 143 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Cuenta el operador con la capacitación y/o habilitación pertinente?', normativa: 'Cap. 16 Art. 138 Dec. 351/79; Art. 9 k) Ley 19587', tipo: 'radio' },
      { texto: '¿Están aislados y convenientemente ventilados los aparatos capaces de producir frío, con posibilidad de desprendimiento de contaminantes?', normativa: 'Cap. 16 Art. 144 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Elementos de Protección Personal (E.P.P.)',
    preguntas: [
      { texto: '¿Se provee a todos los trabajadores, de los elementos de protección personal adecuado, acorde a los riesgos a los que se hallan expuestos?', normativa: 'Cap.19 Art. 188 a 190 Dec. 351/79; Art. 8 c) Ley 19587', tipo: 'radio' },
      { texto: '¿Existen señalizaciones visibles en los puestos y/o lugares de trabajo sobre la obligatoriedad del uso de los elementos de protección personal?', normativa: 'Cap. 12 Art 84 Dec. 351/79; Art. 9 j) Ley 19587', tipo: 'radio' },
      { texto: '¿Se verifica la existencia de registros de entrega de los E.P.P.?', normativa: 'Art. 28 inc. h) Dto. 170/96', tipo: 'radio' },
      { texto: '¿Se realizó un estudio por puesto de trabajo o sector donde se detallen los E.P.P. necesarios?', normativa: 'Cap. 19 Art. 188 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Iluminación y Señalética',
    preguntas: [
      { texto: '¿Se cumple con los requisitos de iluminación establecidos en la legislación vigente?', normativa: 'Cap. 12 Art. 71 Dec. 351/79; Art. 8 a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se ha instalado un sistema de iluminación de emergencia, en casos necesarios, acorde a los requerimientos de la legislación vigente?', normativa: 'Cap. 12 Art. 76 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se registran las mediciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 12 Art. 73 a 75 Dec. 351/79 y Art. 10 Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Los niveles existentes cumplen con la legislación vigente?', normativa: 'Cap. 12 Art. 73 a 75 Dec. 351/79; Art. 8 a) Ley 19587', tipo: 'radio' },
      { texto: '¿Existe marcación visible de pasillos, circulaciones de tránsito y lugares de cruce donde circulen cargas suspendidas y otros elementos de transporte?', normativa: 'Cap. 12 Art. 79 Dec. 351/79; Art. 9 j) Ley 19587', tipo: 'radio' },
      { texto: '¿Se encuentran señalizados los caminos de evacuación en caso de peligro e indicadas las salidas normales y de emergencia?', normativa: 'Cap. 12 Art. 80 y Cap. 18 Art. 172 inc. 2 Dec. 351/79; Art. 9 j) Ley 19587', tipo: 'radio' },
      { texto: '¿Se encuentran identificadas las cañerías?', normativa: 'Cap. 12 Art. 82 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Condiciones Higrotérmicas',
    preguntas: [
      { texto: '¿Se registran las mediciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 8 Art. 60 Dec. 351/79 y Anexo III Res. 295/03 y Art. 10 Dec. 1338/96; Art. 8 inc. a) Ley 19587', tipo: 'radio' },
      { texto: '¿El personal sometido a estrés por frío, está protegido adecuadamente?', normativa: 'Cap. 8 Art. 60 Dec. 351/79 y Anexo III Res. 295/03; Art. 8 inc. a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se adoptaron las correcciones en los puestos y/o lugares de trabajo del personal sometido a estrés por frío?', normativa: 'Cap. 8 Art. 60 Dec. 351/79 y Anexo III Res. 295/03; Art. 8 inc. a) Ley 19587', tipo: 'radio' },
      { texto: '¿El personal sometido a estrés térmico y tensión térmica, está protegido adecuadamente?', normativa: 'Cap. 8 Art. 60 Dec. 351/79 y Anexo III Res. 295/03; Art. 8 inc. a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se adoptaron las correcciones en los puestos y/o lugares de trabajo del personal sometido a estrés térmico/tensión térmica?', normativa: 'Cap. 8 Art. 60 inc. 4 Dec. 351/79; Art. 8 inc. a) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Radiaciones Ionizantes',
    preguntas: [
      { texto: '¿En caso de existir fuentes generadoras de radiaciones ionizantes (Ej. Rayos X en radiografías), los trabajadores y las fuentes cuentan con la autorización del organismo competente?', normativa: 'Cap. 10 Art. 62 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se encuentran habilitados los operadores y los equipos generadores de radiaciones ionizantes ante el organismo competente?', normativa: 'Cap. 10 Art. 62 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se lleva el control y registro de las dosis individuales?', normativa: 'Art. 10 Dec. 1338/96 y Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿Los valores hallados, se encuentran dentro de lo establecido en la normativa vigente?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Láseres',
    preguntas: [
      { texto: '¿Se han aplicado las medidas de control a la clase de riesgo?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿Las medidas adoptadas cumplen con lo establecido en la normativa vigente?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Radiaciones No Ionizantes',
    preguntas: [
      { texto: '¿En caso de existir fuentes generadoras de radiaciones no ionizantes (Ej.: Soldadura), que pueden generar daños a los trabajadores, están estos protegidos?', normativa: 'Cap. 10 Art. 63 Dec. 351/79; Art. 8 Inc. d) Ley 19587', tipo: 'radio' },
      { texto: '¿Se cumple con la normativa vigente para campos magnéticos estáticos?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿Se registran las mediciones de radiofrecuencia y/o microondas en los lugares de trabajo?', normativa: 'Cap. 9 Art. 63 Dec. 351/79; Art. 10 Dec. 1338/96 y Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿Se encuentran dentro de lo establecido en la normativa vigente?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿En caso de existir radiación infraroja, se registran las mediciones de la misma?', normativa: 'Art. 10 Dec. 1338/96 y Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿Los valores hallados, se encuentran dentro de lo establecido en la normativa vigente?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿En caso de existir radiación ultravioleta, se registran las mediciones de la misma?', normativa: 'Art. 10 Dec. 1338/96 y Anexo II Res. 295/03', tipo: 'radio' },
      { texto: '¿Los valores hallados, se encuentran dentro de lo establecido en la normativa vigente?', normativa: 'Anexo II Res. 295/03', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Provisión de Agua',
    preguntas: [
      { texto: '¿Existe provisión de agua potable para el consumo e higiene de los trabajadores?', normativa: 'Cap. 6 Art. 57 Dec. 351/79; Art. 8 a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se registran los análisis bacteriológico y físico químico del agua de consumo humano con la frecuencia requerida?', normativa: 'Cap. 6 Art. 57 y 58 Dec. 351/79 y Res. MTSS 523/95; Art. 8 a) Ley 19587', tipo: 'radio' },
      { texto: '¿Se ha evitado el consumo humano del agua para uso industrial?', normativa: 'Cap. 6 Art. 57 Dec. 351/79; Art. 8 a) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Desagües Industriales',
    preguntas: [
      { texto: '¿Se recogen y canalizan por conductos, impidiendo su libre escurrimiento?', normativa: 'Cap. 7 Art. 59 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se ha evitado el contacto de líquidos que puedan reaccionar originando desprendimiento de gases tóxicos ó contaminantes?', normativa: 'Cap. 7 Art. 59 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Son evacuados los efluentes a plantas de tratamiento?', normativa: 'Cap. 7 Art. 59 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se limpia periódicamente la planta de tratamiento, con las precauciones necesarias de protección para el personal que efectúe estas tareas?', normativa: 'Cap. 7 Art. 59 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Baños, Vestuarios y Comedores',
    preguntas: [
      { texto: '¿Existen baños aptos higiénicamente?', normativa: 'Cap. 5 Art. 46 a 49 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Existen vestuarios aptos higiénicamente y poseen armarios adecuados e individuales?', normativa: 'Cap. 5 Art. 50 y 51 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Existen comedores aptos higiénicamente?', normativa: 'Cap. 5 Art. 52 Dec. 351/79', tipo: 'radio' },
      { texto: '¿La cocina reúne los requisitos establecidos?', normativa: 'Cap. 5 Art. 53 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Los establecimientos temporarios cumplen con las exigencias de la legislación vigente?', normativa: 'Cap. 5 Art. 56 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Aparatos para Izar, Montacargas y Ascensores',
    preguntas: [
      { texto: '¿Se encuentra identificada la carga máxima en dichos equipos?', normativa: 'Cap. 15 Art. 114 y 122 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Poseen parada de máximo nivel de sobrecarga en el sistema de fuerza motriz?', normativa: 'Cap. 15 Art. 117 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se halla la alimentación eléctrica del equipo en buenas condiciones?', normativa: 'Cap. 14 Art. 95 y 96 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Tienen los ganchos de izar traba de seguridad?', normativa: 'Cap. 15 Art 126 Dec. 351/79; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Los elementos auxiliares de elevación se encuentran en buen estado (cadenas, perchas, eslingas, fajas, etc.)?', normativa: 'Cap. 15 Art 122, 123, 124 y 125 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se registra el mantenimiento preventivo de estos equipos?', normativa: 'Cap. 15 Art. 116 Dec. 351/79; Art. 10 Dec. 1338/96; Art. 9 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Reciben los operadores instrucción respecto a la operación y uso correcto del equipo de izar?', normativa: 'Cap. 21 Art. 208 a 210 Art. 9 k) Ley 19587', tipo: 'radio' },
      { texto: '¿Los ascensores y montacargas cumplen los requisitos y condiciones máximas de seguridad en lo relativo a la construcción, instalación y mantenimiento?', normativa: 'Cap. 15 Art. 137 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Los aparatos para izar, aparejos, puentes grúa, transportadores cumplen los requisitos y condiciones máximas de seguridad?', normativa: 'Cap. 15 Art. 114 a 132 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Capacitación',
    preguntas: [
      { texto: '¿Se capacita a los trabajadores acerca de los riesgos específicos a los que se encuentren expuestos en su puesto de trabajo?', normativa: 'Cap. 21 Art. 208 a 210 Dec. 351/79; Art. 9 k) Ley 19587', tipo: 'radio' },
      { texto: '¿Existen programas de capacitación con planificación en forma anual?', normativa: 'Cap. 21 Art. 211 Dec. 351/79; Art. 9 k) Ley 19587', tipo: 'radio' },
      { texto: '¿Se entrega por escrito al personal las medidas preventivas tendientes a evitar las enfermedades profesionales y accidentes de trabajo?', normativa: 'Cap. 21 Art. 213 Dec. 351/79; Art. 10 Dec. 1338/96; Art. 9 k) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Primeros Auxilios',
    preguntas: [
      { texto: '¿Existen botiquines de primeros auxilios acorde a los riesgos existentes?', normativa: 'Art. 9 i) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Vehículos',
    preguntas: [
      { texto: '¿Cuentan los vehículos con los elementos de seguridad?', normativa: 'Cap. 15 Art. 134 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se ha evitado la utilización de vehículos con motor a explosión en lugares con peligro de incendio o explosión, ó bien aquellos cuentan con dispositivos de seguridad apropiados para evitar dichos riesgos?', normativa: 'Cap. 15 Art. 134 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Disponen de asientos que neutralicen las vibraciones, tengan respaldo y apoya pies?', normativa: 'Cap. 15 Art. 134 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Son adecuadas las cabinas de protección para las inclemencias del tiempo?', normativa: 'Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Son adecuadas las cabinas para proteger del riesgo de vuelco?', normativa: 'Cap. 15, Art. 103 Dec. 351/79; Art. 8 b) Ley 19587', tipo: 'radio' },
      { texto: '¿Están protegidas para los riesgos de desplazamiento de cargas?', normativa: 'Cap. 15 Art. 134 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Poseen los operadores capacitación respecto a los riesgos inherentes al vehículo que conducen?', normativa: 'Cap. 21 Art. 208 y 209 Dec. 351/79; Art. 9 k) Ley 19587', tipo: 'radio' },
      { texto: '¿Están los vehículos equipados con luces, frenos, dispositivo de aviso acústico-luminosos, espejos, cinturón de seguridad, bocina y matafuegos?', normativa: 'Cap.15 Art.134 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se cumplen las condiciones que deben reunir los ferrocarriles para el transporte interno?', normativa: 'Cap.15, Art.136, Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Contaminación Ambiental',
    preguntas: [
      { texto: '¿Se registran las mediciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 9 Art. 61 incs. 2 y 3, Dec. 351/79; Anexo IV Res. 295/03; Art. 10 Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Se adoptaron las correcciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 9 Art. 61 Dec. 351/79; Art. 9 c) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Ruidos',
    preguntas: [
      { texto: '¿Se registran las mediciones de nivel sonoro continuo equivalente en los puestos y/o lugares de trabajo?', normativa: 'Cap. 13 Art. 85 y 86 Dec. 351/79; Anexo V Res. 295/03; Art. 10 Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Se adoptaron las correcciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 13 Art. 87 Dec. 351/79; Anexo V Res. 295/03; Art. 9 f) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Infrasonidos',
    preguntas: [
      { texto: '¿Se registran las mediciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 13 Art. 93 Dec. 351/79; Anexo V Res. 295/03; Art. 10 Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Se adoptaron las correcciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 13 Art. 93 Dec. 351/79; Anexo V Res. 295/03; Art. 10 Dec. 1338/96; Art. 9 f) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Vibraciones',
    preguntas: [
      { texto: '¿Se registran las mediciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 13 Art. 94 Dec. 351/79; Anexo V Res. 295/03; Art. 10 Dec. 1338/96', tipo: 'radio' },
      { texto: '¿Se adoptaron las correcciones en los puestos y/o lugares de trabajo?', normativa: 'Cap. 13 Art. 94 Dec. 351/79; Anexo V Res. 295/03; Art. 10 Dec. 1338/96; Art. 9 f) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Utilización de Gases',
    preguntas: [
      { texto: '¿Los recipientes con gases se almacenan adecuadamente?', normativa: 'Cap. 16 Art. 142 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Los cilindros de gases son transportados en carretillas adecuadas?', normativa: 'Cap. 16 Art. 142 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Los cilindros de gases almacenados cuentan con el capuchón protector y tienen la válvula cerrada?', normativa: 'Cap. 16 Art. 142 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Los cilindros de oxígeno y acetileno cuentan con válvulas antiretroceso de llama?', normativa: 'Cap. 17 Art. 153 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Soldadura',
    preguntas: [
      { texto: '¿Existe captación localizada de humos de soldadura?', normativa: 'Cap. 17 Art. 152 y 157 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Se utilizan pantallas para la proyección de partículas y chispas?', normativa: 'Cap. 17 Art. 152 y 156 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Las mangueras, reguladores, manómetros, sopletes y válvulas antirretornos se encuentran en buen estado?', normativa: 'Cap. 17 Art. 153 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Escaleras y Plataformas',
    preguntas: [
      { texto: '¿Todas las escaleras cumplen con las condiciones de seguridad?', normativa: 'Anexo VII Punto 3 Dec. 351/79', tipo: 'radio' },
      { texto: '¿Todas las plataformas de trabajo y rampas cumplen con las condiciones de seguridad?', normativa: 'Anexo VII Punto 3.11 y 3.12 Dec. 351/79', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Mantenimiento Preventivo',
    preguntas: [
      { texto: '¿Posee programa de mantenimiento preventivo, en base a razones de riesgos y otras situaciones similares, para máquinas e instalaciones, tales como?:', normativa: 'Art. 9 b) y d) Ley 19587', tipo: 'radio' },
      { texto: 'Instalaciones eléctricas', normativa: 'Cap. 14 Art. 98 Dec. 351/79; Art. 9 b) y d) Ley 19587', tipo: 'radio' },
      { texto: 'Aparatos para izar', normativa: 'Cap. 15 Art. 116 Dec. 351/79; Art. 9 b) y d) Ley 19587', tipo: 'radio' },
      { texto: 'Cables de equipos para izar', normativa: 'Cap. 15 Art. 123 Dec. 351/79; Art. 9 b) y d) Ley 19587', tipo: 'radio' },
      { texto: 'Ascensores y Montacargas', normativa: 'Cap. 15 Art. 137 Dec. 351/79; Art. 9 b) y d) Ley 19587', tipo: 'radio' },
      { texto: 'Calderas y recipientes a presión', normativa: 'Cap. 16 Art. 140 Dec. 351/79; Art. 9 b) y d) Ley 19587', tipo: 'radio' },
      { texto: '¿Cumplimenta dicho programa de mantenimiento preventivo?', normativa: 'Art. 9 b) y d) Ley 19587', tipo: 'radio' }
    ]
  },
  {
    nombre: 'Resoluciones Legales Especiales',
    preguntas: [
      { texto: '¿El establecimiento se encuentra comprendido dentro de la Resolución 81/19 Sistema de Vigilancia y Control de Sustancias y Agentes Cancerígenos, S.V.C.C.?', normativa: 'Res. 81/19', tipo: 'radio' },
      { texto: '¿El establecimiento se encuentra comprendido dentro de la Resolución 743/03 Registro de Accidentes Mayores?', normativa: 'Res. 743/03', tipo: 'radio' }
    ]
  }
];
