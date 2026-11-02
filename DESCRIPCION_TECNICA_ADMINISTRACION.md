# Descripción técnica del sistema de administración Apex Sports

## 1. Propósito

El sistema de administración Apex Sports es la interfaz de trabajo para quienes operan el ecommerce: catálogo e inventario, compras y proveedores, ventas y entregas, clientes, usuarios y permisos. Es independiente del storefront dirigido a compradores, aunque ambos pertenecen al mismo proyecto y deben compartir su modelo de productos y operaciones comerciales.

Este documento describe los módulos de administración y sirve de referencia para su integración con `API-ApexSports`. El panel cuenta actualmente con una puerta de acceso autenticada; las operaciones y limitaciones disponibles se detallan en [ALINEACION-ADMIN-API.md](./ALINEACION-ADMIN-API.md).

## 2. Resumen para integrar con otra plataforma

> Apex Sports Admin es un panel responsive implementado con HTML semántico, CSS y JavaScript vanilla. La página de acceso ofrece login y registro administrativo mediante invitación individual, de un solo uso y con vencimiento; la API valida el rol antes de mostrar los módulos o solicitar datos protegidos. El panel conectado consume el resumen y listados paginados del API, pero la mayoría de los formularios transaccionales y CRUD descritos en este documento siguen siendo capacidades previstas o del prototipo local, no operaciones persistidas. El esquema relacional de referencia está en `../Scripts/Script-Creacion-Tablas.sql`. Revisar [ALINEACION-ADMIN-API.md](./ALINEACION-ADMIN-API.md) para el detalle actualizado de módulos y faltantes. Los precios, existencias, estados de pago, permisos y auditoría deben ser calculados o verificados por el servidor, no por el navegador.

## 3. Tecnologías y arquitectura actual

- **Frontend:** HTML5, CSS3 y JavaScript vanilla, sin framework.
- **Archivos principales:** `index.html`, `styles.css`, `admin-api.js`, `api-client.js` y `app.js`.
- **Dependencias de ejecución:** no requiere npm, compilación ni paquetes externos.
- **Navegación:** vistas internas renderizadas en el mismo documento; no hay router.
- **Acceso:** el shell administrativo se mantiene oculto hasta validar `/auth/me` y un rol administrativo. El alta requiere invitación generada por una cuenta con permisos administrativos.
- **Datos actuales:** los listados y el resumen del modo API proceden del servidor. Los arreglos de demostración de `app.js` corresponden al prototipo local y no se usan cuando `APEX_API_MODE` está activo.
- **Persistencia:** las consultas administrativas usan la base configurada en el API. Solo algunas operaciones de catálogo/inventario tienen escritura; el resto de las acciones del prototipo no persisten en servidor.
- **API:** `api-client.js` centraliza solicitudes, sesión de navegador y endpoints de autenticación; `admin-api.js` gestiona acceso y vistas conectadas.
- **Base de datos de referencia:** PostgreSQL/Supabase según el script de creación de tablas.
- **Identidad visual:** paleta compartida con el ecommerce: azul `#17324d`, marfil `#f4f1e8`, coral `#a84328`, gris `#667581` y blanco `#ffffff`.
- **Ejecución local:** se puede servir como sitio estático, por ejemplo con `python -m http.server 8000`, y abrir `http://localhost:8000/`. El servidor estático solo sirve archivos: no crea una API ni conecta la base de datos.

`index.html` define las pantallas de acceso/registro, el shell administrativo y el formulario de invitaciones. `api-client.js` y `admin-api.js` integran la sesión y las vistas de consulta. `app.js` conserva el prototipo local, desactivado en modo API. `styles.css` contiene la identidad visual, componentes y reglas responsive.

## 4. Estructura del proyecto

| Ruta | Responsabilidad |
|---|---|
| `index.html` | Shell del panel, navegación, estado de demostración, área de vistas y diálogo accesible. |
| `styles.css` | Paleta, componentes, estados visuales, foco y diseño responsive. |
| `api-client.js`, `admin-api.js` | Cliente de API, autenticación, verificación de rol y renderizado de los recursos conectados. |
| `app.js` | Renderizado de vistas, datos ficticios, tablas, filtros, formularios y notificaciones locales. |
| `AUDITORIA-UI.md` | Bitácora de revisión de la interfaz, hallazgos de accesibilidad y cambios documentados. |
| `.github/agents/` | Agentes personalizados del workspace para diseño UX y auditoría de accesibilidad. |

El esquema de base de datos no está duplicado en esta carpeta; el script relacionado se encuentra en `../Scripts/Script-Creacion-Tablas.sql`.

## 5. Módulos y capacidades visibles

| Módulo | Propósito en el panel | Entidades del esquema relacionadas |
|---|---|---|
| Resumen | Indicadores de ventas, órdenes abiertas, productos y clientes; tendencia semanal; salud de inventario; últimas ventas y actividad reciente. | `FACTURAS`, `PROxFAC`, `PRODUCTOS`, `COMPRAS`, `RECEPCIONES`, `LOG_AUDITORIA`. |
| Productos | Catálogo, categoría, precio, existencias y estado; formulario demostrativo para nuevo producto. | `PRODUCTOS`, `CATEGORIAS`, `MARCAS`, `PERCHAS`, `UNIDADES_MEDIDAS`, `PRODUCTO_FOTOGRAFIAS`. |
| Inventario | Disponibilidad, mínimo, último movimiento y estados de stock; formulario de ajuste. | `PRODUCTOS`, `PERCHAS`, `AJUSTES`, `PROxAJU`, `PROxREC`, `PROxENT`. |
| Compras | Órdenes por proveedor, fechas, total y estado; formulario de nueva orden. | `COMPRAS`, `PROxOC`, `PROVEEDORES`, `PRODUCTOS`. |
| Proveedores | Directorio con identificación, ciudad, teléfono, correo y estado; formulario de alta. | `PROVEEDORES`, `CIUDADES`. |
| Recepciones | Recepciones parciales o completas asociadas a compras y cantidades; formulario para registrar recepción. | `RECEPCIONES`, `PROxREC`, `COMPRAS`, `PRODUCTOS`. |
| Ventas | Actividad comercial, cliente, canal, fecha, medio de pago, total y estado; formulario de venta. | `FACTURAS`, `PROxFAC`, `CLIENTES`, `USUARIOS`, `PRODUCTOS`. |
| Facturas | Documentos de venta, fecha, cliente, total y estado; formulario demostrativo de factura. | `FACTURAS`, `PROxFAC`, `CLIENTES`, `USUARIOS`. |
| Entregas | Seguimiento de despacho y cantidades vinculadas a una factura; formulario de programación. | `ENTREGAS`, `PROxENT`, `FACTURAS`, `PRODUCTOS`. |
| Clientes | Directorio, compras y monto histórico; formulario de alta. | `CLIENTES`, `CIUDADES`, `USUARIOS`. |
| Usuarios | Cuentas administrativas, rol, último acceso y estado; formulario de invitación. | `USUARIOS`, `USUARIOSxROLES`, `ROLES`. |
| Roles y permisos | Perfiles demostrativos con permisos agrupados por responsabilidad. | `ROLES`, `PERMISOS`, `USUARIOSxROLES`, `ROLESxPERMISOS`. |
| Auditoría | Eventos de muestra con usuario, fecha, módulo, registro y acción. | `LOG_AUDITORIA`, `USUARIOS`. |

Los nombres de las entidades indican su relación esperada con el SQL; no significan que el panel ya realice consultas a ellas.

## 6. Interacciones que ya funcionan en el prototipo

Las siguientes interacciones CRUD describen el prototipo local conservado en `app.js`; no se muestran como persistidas en el modo API activo.

- Navegar entre módulos sin recargar la página.
- Ver tablas de demostración, cifras de resumen, badges de estado y un estado vacío cuando la búsqueda/filtro no encuentra resultados.
- Buscar por texto en los registros de muestra y filtrar por los estados disponibles en cada módulo.
- Crear registros locales con referencias `LOCAL-*`; son etiquetas de muestra, no identificadores que la interfaz pretenda asignar en la base de datos. El servidor deberá generar las claves definitivas.
- Consultar cualquier fila en modo de solo lectura. Editar y anular quedan limitados a catálogo/directorios (productos, proveedores, clientes, usuarios y roles); compras, ajustes, recepciones, ventas/facturas y entregas son registros transaccionales: esta UI no ofrece editar ni anular filas ya creadas. Auditoría es solo lectura.
- En las entidades editables, Anular solicita confirmación y conserva la fila con etiqueta visual `Anulado`; no la elimina ni la presenta como el estado SQL de una tabla. No se permite editar/anular otra vez desde la UI.
- Los formularios de compra, venta/factura, recepción, ajuste y entrega permiten varias filas de detalle con producto relacionado y cantidades; compra/venta/factura muestra una estimación local y evita repetir productos por detalle. El IVA de muestra se calcula al 15%, como los triggers revisados, pero no es un cálculo fiscal ni un resultado autoritativo del servidor.
- Usuarios y clientes son entidades separadas. Cliente puede vincularse opcionalmente a usuario; los campos de contraseña hash y token de recuperación no se solicitan ni muestran. El modo API incluye autenticación administrativa y registro mediante invitación; recuperación de contraseña y gestión general de usuarios siguen pendientes.
- Consultar en Auditoría los eventos locales de Crear, Actualizar y Anular. La bitácora del prototipo es append-only dentro de la sesión, no equivale a `LOG_AUDITORIA` persistente del servidor.
- Abrir y cerrar formularios modales; las restricciones del formulario se validan en el navegador, pero no sustituyen validaciones de backend.
- Exportación y notificaciones muestran avisos demostrativos; no generan archivos ni consultan servicios externos.
- Abrir/cerrar el menú responsive; los cambios incluyen foco visible, soporte de teclado y estado accesible de navegación.
- Consultar contenido adaptable a escritorio y móvil.

Los contadores agregados, totales y registros iniciales mostrados son ejemplos estáticos; no todos se recalculan a partir de las mutaciones locales. No se deben tratar como resultados actuales o autoritativos del ecommerce. Crear, editar y anular cambia solo el estado en memoria de esta página y los eventos locales se pierden al recargar.

En el modo API el panel indica que consulta registros reales y aclara las operaciones no disponibles. Los badges del prototipo local traducen etiquetas para lectura y muestran, cuando aplica, solo los valores `DEFAULT` que aparecen en la columna SQL correspondiente: por ejemplo `ACT`, `PEN`, `PAG` y `REC`. El SQL no define catálogos enumerados completos ni permite afirmar códigos para todos los estados. `Inactivo` y `Anulado` son etiquetas visuales distintas y sus transiciones/códigos necesitan definición de negocio antes de persistirlos.

Hay discrepancias de defaults que no se deben ocultar: la factura local nueva se etiqueta `Pendiente`, mientras `ESTADO_FAC` tiene `DEFAULT 'PAG'`; el usuario nuevo se etiqueta `Invitación local`, mientras `ESTADO_USR` tiene `DEFAULT 'ACT'`. La API debe asignar/validar expresamente el estado de negocio en vez de aceptar un default sin resolver el contrato.

## 7. Modelo de datos de referencia

El esquema PostgreSQL del proyecto agrupa las tablas de esta manera:

### Seguridad y administración

- `USUARIOS`: identidad de acceso, correo, hash de contraseña, estado e información de último acceso.
- `ROLES` y `PERMISOS`: perfiles y permisos por módulo/acción.
- `USUARIOSxROLES` y `ROLESxPERMISOS`: relaciones muchos-a-muchos.
- `LOG_AUDITORIA`: usuario, fecha, tabla, acción, IP y valores anterior/nuevo.

### Abastecimiento e inventario

- `CIUDADES`, `PROVEEDORES`, `COMPRAS`, `RECEPCIONES`.
- `UNIDADES_MEDIDAS`, `PERCHAS`, `CATEGORIAS`, `MARCAS`, `PRODUCTOS` y `PRODUCTO_FOTOGRAFIAS`.
- `PROxOC`, `PROxREC`, `AJUSTES` y `PROxAJU` para detalle de compra, recepción y ajuste.

### Operación comercial

- `CARRITO` y `DETALLE_CARRITO`, pertenecientes principalmente al flujo del ecommerce.
- `CLIENTES`, `FACTURAS`, `PROxFAC`, `ENTREGAS` y `PROxENT`.

El script SQL es la referencia de nombres, tipos, claves y relaciones. Antes de implementar API o migraciones, revisar el archivo vigente para confirmar restricciones, estados y tipos exactos. El panel no debe duplicar las reglas de la base de datos ni aceptar campos sensibles del cliente como fuente de autoridad.

### Alineación de formularios con el SQL revisado

Los controles del panel ahora reflejan estos campos/relaciones sin enviar HTTP. Las etiquetas que terminan en `(demo)` identifican catálogos de ejemplo, no valores cargados desde PostgreSQL.

| Vista/formulario | Correspondencia principal |
|---|---|
| Productos | `PRODUCTOS`: percha, categoría, marca, unidades de compra/venta, nombre, descripción, material, talla, color, garantía, costo, precio y saldos inicial/ingresos/egresos/ajustes/final. Fotos múltiples (`PRODUCTO_FOTOGRAFIAS`) se capturan como URL y orden. |
| Proveedores | `PROVEEDORES`: nombre, RUC 13 dígitos, teléfonos, correo, dirección y `id_Ciudad`; `CIUDADES` es select de referencias. |
| Compras | `COMPRAS`: proveedor, fecha, fecha estimada, subtotal derivado de líneas, IVA y total de muestra; cada producto/cantidad/valor unitario corresponde a `PROxOC`. |
| Recepciones | `RECEPCIONES`: compra, fecha/hora, descripción, número de productos y líneas `PROxREC` con esperado/recibido/motivo. |
| Ajustes de inventario | Vista usa `AJUSTES` con usuario responsable, fecha/hora, descripción y varias líneas `PROxAJU`; cantidades/resultado se muestran como conceptos de muestra, pues la semántica exacta de ambas columnas de cantidad no se especifica. El prototipo ajusta saldos solo en memoria. |
| Ventas / facturas | No hay tabla `VENTAS` en el SQL: la vista de ventas refleja la intención de `FACTURAS`/`PROxFAC`. Factura relaciona cliente y usuario, fecha, descuento monetario, subtotal, IVA, forma de pago, total y líneas de producto/cantidad/precio/subtotal. Los triggers SQL revisados calculan IVA al 15% (`0.15`) y total al factor `1.15` al insertar detalles; la interfaz refleja esa tasa como estimación local no editable. Redondeo/configuración fiscal completa y valores autoritativos corresponden al servidor. |
| Entregas | `ENTREGAS`: factura, fecha/hora, descripción y cantidad de productos; líneas `PROxENT` para producto/cantidad entregada/motivo. |
| Clientes | `CLIENTES`: identificación, ciudad, correo/contacto, dirección, crédito/descuento y relación opcional con `USUARIOS`. Se admite cédula de 10 o RUC de 13 dígitos en la validación de interfaz. La columna SQL `cli_RUC_CED CHAR(13)` entra en tensión con cédulas de 10; política de almacenamiento y validación debe acordarse con la API. |
| Usuarios | `USUARIOS`: username, nombre, apellido, email único, teléfono y asignación ilustrativa de rol; la bandera de primer cambio de clave solo se representa localmente. No hay campos para `usr_PasswordHash` ni `usr_TokenRecuperacion`; intentos fallidos y último acceso se gestionan por autenticación. La API ofrece invitaciones administrativas de un solo uso; edición general de cuentas, recuperación de contraseña y administración granular de roles siguen pendientes. |
| Roles y permisos | `ROLES` se captura como nombre/descripción; las opciones de permiso llevan IDs demostrativos para ilustrar el mapping `ROLESxPERMISOS`. El catálogo real de `PERMISOS` y las autorizaciones no están conectados. |
| Auditoría | `LOG_AUDITORIA` es lectura solamente; el script declara `id_Log NOT NULL`, pero no define PK ni FK. La bitácora que crea el prototipo es local y no es evidencia del log del servidor. |

Se usan atributos HTML de longitud, formato, email, precisión, rango y enteros derivados de tipos SQL; las unicidades de correo/username/RUC se ilustran con validación en la muestra local. Nada de ello sustituye constraints y validación transaccional del backend. Los IDs de ciudades, catálogos y filas de formulario son referencias demostrativas.

## 8. Integración API: capacidades pendientes

La integración ya implementa un cliente HTTP y autenticación administrativa. `POST /api/v1/auth/login`, `GET /api/v1/auth/me` y `DELETE /api/v1/auth/session` gestionan sesión; `POST /api/v1/auth/admin/invitations` crea una invitación bajo sesión administrativa y `POST /api/v1/auth/admin/register` registra una cuenta con ese código. El panel verifica el rol antes de mostrar el shell. La API además entrega resumen y listados paginados; los únicos cambios de catálogo disponibles son parciales para producto, mapeo e inventario mínimo. El flujo de invitación requiere instalar `API-ApexSports/migrations/003_admin_invitations.sql`.

Los recursos de abajo describen operaciones adicionales que las pantallas podrían necesitar; son una propuesta funcional, no endpoints ya existentes ni un contrato obligatorio:

| Recurso sugerido | Operaciones que la interfaz necesitará |
|---|---|
| `/auth` y `/me` | Cubierto parcialmente por los endpoints existentes. Añadir recuperación de contraseña solo si el negocio la requiere. |
| `/dashboard` | Indicadores, series del gráfico, alertas de stock, últimas ventas y actividad reciente con rangos de fecha. |
| `/products` y catálogos relacionados | Listar, buscar, filtrar, consultar detalle y crear/editar/anular productos; categorías, marcas, unidades, perchas e imágenes. |
| `/inventory` y `/inventory/adjustments` | Existencias por producto, mínimos, movimientos y registro transaccional de ajustes con motivo y usuario. Definir qué entidades admiten anulación sin contradecir movimientos ya contabilizados. |
| `/suppliers`, `/purchase-orders`, `/receipts` | Directorio, órdenes y detalles, estados, recepción parcial/completa y cantidades aceptadas/rechazadas; definir bajas lógicas por entidad. |
| `/sales` y `/invoices` | Consultar/registrar ventas, detalles de factura, pago y estados; definir restricciones legales y de negocio para anular operaciones emitidas. |
| `/deliveries` | Programar y actualizar entregas, asociarlas a facturas y registrar cantidades entregadas/incidencias. |
| `/customers` | Búsqueda y consulta de clientes, información de contacto e historial comercial permitido; decidir la baja lógica y retención de datos personales. |
| `/users`, `/roles`, `/permissions` | Administrar usuarios, asignaciones y permisos; aplicar autorización por operación en servidor y definir baja lógica de cuentas/roles. |
| `/audit-logs` | Consultar historial paginado y filtrable; los eventos deben originarse en el servidor y no ser editables desde el cliente. |

### Requisitos para el contrato

- Definir versión, URL base, formato de JSON, paginación, filtros, ordenamiento, zona horaria y convenciones para identificadores.
- Especificar códigos de respuesta y forma consistente de errores de validación, autorización, conflictos y fallos de servidor.
- Validar en el servidor identificadores, cantidades, precios, fechas, estados permitidos, relaciones y transiciones.
- Completar la autorización por rol/permisos en cada operación; la UI ya oculta el panel hasta confirmar una sesión y un rol administrativo, pero eso no sustituye el control de acceso granular en servidor.
- Definir por recurso la transición a estado anulado, su código de base de datos, idempotencia, restricciones de referencias y si se permite reactivación; nunca implementar una baja física desde la acción visual de anular sin una decisión explícita de negocio.
- Usar transacciones para registrar facturas, detalles, movimientos de inventario, recepciones y ajustes relacionados.
- Evitar que el cliente determine precio final, disponibilidad, totales, impuestos o cantidades entregadas.
- Registrar las operaciones importantes en auditoría desde el servidor, incluyendo actor, fecha, acción y los datos de cambio que sean adecuados para la política de privacidad.
- Proteger hashes, tokens de recuperación y datos personales; no devolver secretos a la interfaz ni escribir credenciales en logs.
- Definir límites de acceso a información de clientes, retención de logs, validaciones de RUC/cédula y protección contra solicitudes no autorizadas.
- Acordar qué estados del SQL son válidos y cómo se corresponden con etiquetas visibles, antes de conectar los badges de la UI.

## 9. Siguientes pasos de integración

Para completar la alineación del panel con la API:

1. Aplicar la migración de invitaciones y aprovisionar fuera de banda la primera cuenta administradora.
2. Completar operaciones y detalles por módulo conforme al informe de alineación.
3. Conectar los formularios del prototipo solo cuando exista una operación persistente en API; mostrar errores del servidor y actualizar vistas tras confirmación.
4. Completar los indicadores del dashboard con periodos y fórmulas acordados.
5. Completar autorización granular y probar expiración de sesión, falta de permisos, datos vacíos y fallos de red.

## 10. Accesibilidad e interfaz

La interfaz contiene HTML semántico, enlace para saltar al contenido, etiquetas asociadas a campos, diálogo nativo, foco visible, indicadores de estado y reglas responsive. La bitácora `AUDITORIA-UI.md` registra hallazgos anteriores y correcciones. Estas medidas no constituyen una certificación WCAG.

Al conectar la API, conservar nombres accesibles, navegación por teclado, anuncio de resultados y errores, foco predecible después de las operaciones, y contraste efectivo de los estados. Las operaciones que cambien datos deben dar una confirmación comprensible y errores recuperables sin depender solo del color.

## 11. Ejecución y límites

Desde la raíz del proyecto:

```powershell
python -m http.server 8000
```

Abrir `http://localhost:8000/`. No se requiere `npm install`. Este comando solo sirve la interfaz estática.

El panel ya ofrece login, registro administrativo por invitación y consultas protegidas mediante la API; el backend puede consultar la base configurada y algunas operaciones de catálogo tienen escritura. La mayoría de los CRUD y flujos transaccionales del panel siguen pendientes, al igual que permisos granulares, exportación real y pruebas contra un despliegue/base de datos. El servidor estático solo sirve la interfaz: para acceder a datos se debe configurar el API HTTPS, CORS y aplicar sus migraciones. No se debe tratar la integración parcial como herramienta administrativa de producción antes de implementar y probar los controles y flujos faltantes.

## 12. Contexto corto reutilizable

```text
Estoy trabajando en Apex Sports Admin, una interfaz responsive hecha con HTML, CSS y JavaScript vanilla. Sus archivos principales son index.html, styles.css, api-client.js, admin-api.js y app.js. Incluye autenticación administrativa vinculada a la API, registro por invitación de un solo uso, resumen y listados protegidos/paginados; la mayoría de los formularios transaccionales y CRUD aún no persisten en servidor. La base relacional de referencia está en ../Scripts/Script-Creacion-Tablas.sql. Mantén la paleta del ecommerce (#17324d, #f4f1e8, #a84328, #667581, #ffffff), conserva accesibilidad responsive y no presentes operaciones simuladas como reales. Revisa ALINEACION-ADMIN-API.md para los contratos implementados y los faltantes.
```
