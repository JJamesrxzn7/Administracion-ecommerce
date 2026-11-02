# Alineación entre el panel administrativo y Apex Sports API

**Revisión:** 2 de noviembre de 2026
**Alcance:** comparación estática del panel en `Administracion-ecommerce` con los routers, modelos, migraciones y documentación de `API-ApexSports`. No se conectó a una base de datos ni se probaron operaciones en un entorno desplegado.

## Conclusión

El panel ya puede autenticarse y leer datos reales de los módulos que la API expone. Sin embargo, la integración actual es principalmente de **consulta**: salvo algunas operaciones de catálogo e inventario, la API no ofrece los casos de escritura que requieren las acciones de administración representadas por los formularios originales. Tampoco ofrece todas las relaciones, detalles y métricas que esas vistas esperan.

En el modo actual, `api-client.js` y `admin-api.js` activan el modo API. El panel permanece oculto hasta validar la sesión y el rol administrativo, y ofrece login, alta por invitación de un solo uso, consulta del resumen y listados paginados. El `app.js` anterior, con formularios CRUD, búsquedas, filtros y acciones locales, queda desactivado cuando `APEX_API_MODE` está activo. Por tanto, hay dos trabajos separados para alcanzar la experiencia completa: ampliar los contratos/operaciones del API y volver a conectar la interfaz a esas operaciones, sin presentar acciones locales como persistidas.

## Lo que ya está conectado y coincide

| Interfaz / acción | API existente | Estado |
|---|---|---|
| Inicio de sesión administrativa | `POST /api/v1/auth/login`; devuelve token y usuario con roles. | Conectado. |
| Identidad y cierre de sesión | `GET /api/v1/auth/me`, `DELETE /api/v1/auth/session`. | Conectado; los tokens se guardan en `sessionStorage`. |
| Registro de administrador | `POST /api/v1/auth/admin/invitations` (administrador autenticado) y `POST /api/v1/auth/admin/register` (código válido de un solo uso). | Conectado; invitaciones vencen a las 24 horas, se almacenan como hash y el panel permite generarlas en Usuarios. Requiere aplicar migración 003. |
| Acceso administrativo | Dependencia `require_admin` en rutas `/admin`; requiere uno de los roles administrador reconocidos por la API. | Protección general implementada; no es autorización granular por permiso. |
| Resumen | `GET /api/v1/admin/summary`. | Conectado a conteos básicos. |
| Listados | `GET /api/v1/admin/resources/{resource}` con `limit` y `offset`. La UI solicita hasta 100 filas y permite avanzar/retroceder. | Conectado para los recursos descritos abajo. |
| Productos | Listado administrativo y `PATCH /api/v1/admin/products/{slug}` para nombre, descripción, precio y activación; `PUT /api/v1/admin/catalog/mappings` para mapeos del catálogo. | Lectura y escritura parcial; no cubre el formulario de producto completo. |
| Inventario | Listado y `PUT /api/v1/admin/inventory/{slug}/minimum` para el mínimo de stock. | Lectura y configuración del mínimo; no registra movimientos ni ajustes. |
| Pedidos web | Listado administrativo de `apex_orders` y `POST /api/v1/admin/orders/release-expired` para liberar reservas vencidas. | Lectura resumida y mantenimiento de reservas; no es un flujo de gestión integral de pedidos. |

## Cobertura por módulo

| Módulo visible | Recurso que consulta la UI | Qué entrega hoy el API | Qué falta para alineación funcional |
|---|---|---|---|
| Resumen | `/admin/summary` | Conteos de productos activos, inventario con stock igual o inferior al mínimo, compras, facturas, clientes, usuarios activos y pedidos demo pendientes. | Métricas de ingresos/ventas por periodo, tendencia semanal, últimas ventas, actividad reciente y desglose de salud de inventario que aparecen en la interfaz original. Definir periodos, zona horaria y fórmula de cada indicador. |
| Productos | `products` | ID/slug, nombre, descripción corta, categoría, marca, precio, stock y estado. | Endpoint de creación; actualización de categoría, marca, percha, unidades, costo, atributos, fotografías y stock inicial; baja lógica con reglas explícitas. El PATCH actual solo admite nombre, descripción, precio y activo. |
| Inventario | `inventory` | Producto, stock y mínimo configurado. | Historial de movimientos, ubicación/percha, umbrales/estado normalizado y registro transaccional de ingreso, egreso o corrección con motivo, usuario y auditoría. |
| Compras | `purchases` | Cabecera: proveedor por ID, fechas, subtotal, IVA, total y estado. | Detalle de productos/cantidades/precios, nombre del proveedor, creación de orden, cambios de estado y reglas para cancelar/cerrar. No hay router de compras montado con operaciones de escritura. |
| Proveedores | `suppliers` | Identificación, nombre, teléfono, correo, ID de ciudad y estado. | Alta, edición y desactivación; dirección, celular y nombre de ciudad; validación de identificación y unicidad según las reglas del negocio. |
| Recepciones | `receipts` | Cabecera: compra, descripción, fecha, número de productos y estado. | Registrar recepción parcial/completa por línea, cantidades esperadas/recibidas/rechazadas, motivos y actualización transaccional del stock y de la compra. |
| Ventas | `sales` | Las mismas filas de `FACTURAS` que el recurso de facturas: cliente por ID, fecha, subtotal, IVA, total y estado. | No existe entidad/flujo de venta diferenciado; faltan medio de pago, operador, cliente legible, líneas de productos y endpoint para registrar o gestionar una venta. |
| Facturas | `invoices` | Cabecera de `FACTURAS`, con método de pago, totales y estado. | Detalle de productos, datos legibles del cliente/emisor, emisión y transiciones de estado. No se genera una factura fiscal ni se crea `FACTURAS` desde checkout. |
| Entregas | `deliveries` | Cabecera: factura por ID, descripción, fecha, número de productos y estado. | Destinatario/dirección, líneas y cantidades por entregar, transportista/incidencias, programación y actualización de estados de cumplimiento. |
| Clientes | `customers` | Nombre, identificación, teléfono, correo, ciudad por ID, dirección y estado. | Alta, edición y desactivación; móvil, crédito/descuento, vínculo con usuario, historial y métricas de compras. Aplicar límites de acceso a datos personales. |
| Usuarios | `users` | Username, nombre/apellido, correo, teléfono, último acceso y estado. | Crear/invitar, editar, activar/desactivar, asignar/quitar roles y gestionar credenciales mediante flujo seguro. El listado no incluye los roles asociados. |
| Roles y permisos | `roles` | ID, nombre, descripción y estado del rol. | Catálogo de permisos y operaciones para asignar permisos a roles y roles a usuarios. La API solo comprueba un rol administrativo general; no expone autorización por módulo/acción. |
| Auditoría | `audit` | ID de log, ID de usuario, fecha, tabla, acción e IP. | Consulta con actor legible, referencia al registro y cambios relevantes (`log_valornuevo` no se proyecta), además de filtros por usuario, fecha, entidad y acción. Los eventos deben producirse en el servidor para todas las mutaciones. |
| Pedidos web (añadido por la integración) | `orders` | Cabeceras de `apex_orders`: usuario/cliente, estados demo, totales, ciudad, método y fechas. | Detalle de líneas y entrega, consulta de detalle y acciones administrativas permitidas. Definir cómo se concilia con ventas/facturas y el ciclo de pago antes de tratarlo como pedido comercial. |

## Brechas transversales prioritarias

1. **Operaciones transaccionales ausentes.** Añadir contratos y endpoints para crear/actualizar las entidades editables y registrar compras, recepciones, ajustes, ventas/facturas y entregas. Cada operación debe validar relaciones y transiciones, usar transacciones y registrar auditoría en servidor.
2. **Listados incompletos para las pantallas.** Incorporar detalles de líneas y nombres relacionados mediante contratos consistentes; evitar exponer solo IDs cuando la UI necesita mostrar personas, proveedores, productos y ciudades. Añadir búsqueda, filtros y ordenamiento del lado del API si se restauran esas capacidades en el panel.
3. **Permisos insuficientemente expresivos.** Definir el catálogo y asignaciones de permisos que el panel representa, y comprobar permisos por operación en backend. La ocultación de botones en frontend no reemplaza esta verificación.
4. **Pedidos demo no equivalen a ventas pagadas.** El checkout actual crea órdenes con pago `demo` no procesado y reserva stock temporalmente, pero no confirma un cobro real ni crea facturas; el costo de entrega/impuestos no está configurado. Mantener estados y textos explícitos hasta acordar el proceso comercial y fiscal.
5. **Contrato de resumen y datos.** Acordar nombres/formatos de estados SQL, moneda, redondeo, fechas y significado de indicadores. El resumen actual devuelve conteos, no las series/gráficos de la interfaz anterior.
6. **Interfaz conectada a escrituras.** El modo API actual solo implementa login, resumen y tablas genéricas; no renderiza ni envía los formularios locales previos. Tras definir los endpoints, conectar formularios, errores de validación, confirmaciones, estados de carga y recarga de datos, y retirar textos que todavía indiquen “acción local/sin conexión” en el diálogo inactivo.

## Orden recomendado

### Prioridad 1 — completar la operación esencial

- Definir contratos de producto, proveedor, cliente y usuario para crear/editar/activar, incluyendo IDs/catálogos y reglas de validación.
- Implementar ajustes de inventario y recepción de compra con líneas, control de stock, integridad transaccional y auditoría.
- Implementar creación y consulta detallada de compras y entregas.
- Definir si “Ventas” es una vista de facturas o una entidad independiente; acordar estados, pagos y emisión antes de exponer mutaciones.

### Prioridad 2 — organización, permisos y reporting

- Implementar asignaciones de roles/permisos y autorización por acción.
- Completar vistas de detalle y relaciones para clientes, usuarios, roles y auditoría; aplicar filtros/paginación.
- Ampliar `/admin/summary` con métricas y series definidas por negocio, o ajustar la interfaz para mostrar solo los conteos existentes.

### Prioridad 3 — pedidos y despliegue

- Decidir el ciclo de vida de pedidos demo y su transición hacia factura/venta/entrega; no marcar pedidos como pagados sin confirmación de un proveedor.
- Conectar progresivamente las acciones del panel a la API y verificar cada flujo contra la base de datos de prueba antes del despliegue.

## Fuentes revisadas

- Interfaz: [index.html](./index.html), [admin-api.js](./admin-api.js), [api-client.js](./api-client.js), [app.js](./app.js) y [DESCRIPCION_TECNICA_ADMINISTRACION.md](./DESCRIPCION_TECNICA_ADMINISTRACION.md).
- API: [main.py](../API-ApexSports/app/main.py), [admin.py](../API-ApexSports/app/routers/admin.py), [auth.py](../API-ApexSports/app/routers/auth.py), [security.py](../API-ApexSports/app/security.py), [003_admin_invitations.sql](../API-ApexSports/migrations/003_admin_invitations.sql), [README.md](../API-ApexSports/README.md) y [test_admin_invitations.py](../API-ApexSports/tests/test_admin_invitations.py).
- La revisión fue estática; no se validó el comportamiento contra credenciales, despliegue o base de datos en vivo.
