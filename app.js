if (!window.APEX_API_MODE) {
const navItems = [
  ["resumen", "Resumen"], ["productos", "Productos"], ["inventario", "Inventario"],
  ["compras", "Compras"], ["proveedores", "Proveedores"], ["recepciones", "Recepciones"],
  ["ventas", "Ventas"], ["facturas", "Facturas"], ["entregas", "Entregas"],
  ["clientes", "Clientes"], ["usuarios", "Usuarios"], ["roles", "Roles y permisos"],
  ["auditoria", "Auditoría"]
];

const records = {
  productos: [
    { id: "PR-1048", name: "Zapatilla Velocity Pro", detail: "Running · Talla 42 · Negro / lima", icon: "👟", tone: "green", category: "Running", price: 129.9, stock: 24, state: "Activo" },
    { id: "PR-1047", name: "Balón Match Elite", detail: "Fútbol · N.º 5 · Blanco / azul", icon: "⚽", tone: "blue", category: "Fútbol", price: 54.5, stock: 8, state: "Activo" },
    { id: "PR-1046", name: "Guantes Grip X", detail: "Fitness · Talla M · Negro", icon: "🥊", tone: "orange", category: "Fitness", price: 38, stock: 3, state: "Activo" },
    { id: "PR-1045", name: "Camiseta Aero Dry", detail: "Ropa deportiva · Talla M · Verde", icon: "👕", tone: "green", category: "Ropa deportiva", price: 32.9, stock: 0, state: "Inactivo" },
    { id: "PR-1044", name: "Raqueta Carbon Lite", detail: "Tenis · Grip 2 · Grafito", icon: "🎾", tone: "pink", category: "Tenis", price: 148, stock: 12, state: "Activo" },
    { id: "PR-1043", name: "Mochila Trail 28L", detail: "Outdoor · 28 litros · Arena", icon: "🎒", tone: "orange", category: "Outdoor", price: 89.9, stock: 17, state: "Activo" }
  ],
  inventario: [
    { id: "PR-1048", name: "Zapatilla Velocity Pro", detail: "Percha A-03 · Talla 42", icon: "👟", tone: "green", category: "Running", stock: 24, min: 10, movement: "Ingreso · OC-0251", state: "Disponible" },
    { id: "PR-1047", name: "Balón Match Elite", detail: "Percha B-01 · N.º 5", icon: "⚽", tone: "blue", category: "Fútbol", stock: 8, min: 12, movement: "Venta · FAC-1832", state: "Stock bajo" },
    { id: "PR-1046", name: "Guantes Grip X", detail: "Percha C-04 · Talla M", icon: "🥊", tone: "orange", category: "Fitness", stock: 3, min: 8, movement: "Ajuste · AJ-0084", state: "Crítico" },
    { id: "PR-1045", name: "Camiseta Aero Dry", detail: "Percha D-02 · Talla M", icon: "👕", tone: "green", category: "Ropa", stock: 0, min: 6, movement: "Sin existencias", state: "Agotado" },
    { id: "PR-1044", name: "Raqueta Carbon Lite", detail: "Percha A-05 · Grip 2", icon: "🎾", tone: "pink", category: "Tenis", stock: 12, min: 5, movement: "Ingreso · OC-0251", state: "Disponible" }
  ],
  compras: [
    { id: "OC-0253", name: "Andes Sport Import", detail: "Proveedor · 4 productos", date: "28 oct 2026", total: 2840.5, state: "Pendiente" },
    { id: "OC-0252", name: "Distribuidora FitPro", detail: "Proveedor · 8 productos", date: "27 oct 2026", total: 4168, state: "En tránsito" },
    { id: "OC-0251", name: "Andes Sport Import", detail: "Proveedor · 6 productos", date: "25 oct 2026", total: 1925.2, state: "Recibida" },
    { id: "OC-0250", name: "Mundo Outdoor Cía.", detail: "Proveedor · 3 productos", date: "23 oct 2026", total: 985.75, state: "Recibida" },
    { id: "OC-0249", name: "Textiles del Valle", detail: "Proveedor · 5 productos", date: "21 oct 2026", total: 1342, state: "Cancelada" }
  ],
  proveedores: [
    { id: "PRV-018", name: "Andes Sport Import", detail: "RUC 1792458132001 · Quito", icon: "AS", category: "Equipamiento", phone: "+593 2 394 1180", contact: "ventas@andessport.ec", state: "Activo" },
    { id: "PRV-017", name: "Distribuidora FitPro", detail: "RUC 0992876415001 · Guayaquil", icon: "FP", category: "Fitness", phone: "+593 4 601 2270", contact: "pedidos@fitpro.ec", state: "Activo" },
    { id: "PRV-016", name: "Mundo Outdoor Cía.", detail: "RUC 1791845076001 · Quito", icon: "MO", category: "Outdoor", phone: "+593 2 331 8054", contact: "hola@mundooutdoor.ec", state: "Activo" },
    { id: "PRV-015", name: "Textiles del Valle", detail: "RUC 1790561873001 · Ambato", icon: "TV", category: "Textil", phone: "+593 3 242 0190", contact: "comercial@textiles.ec", state: "Inactivo" }
  ],
  recepciones: [
    { id: "REC-0091", name: "OC-0252 · Distribuidora FitPro", detail: "8 productos · Guía 001-0912", date: "Hoy, 09:18", quantity: "32 / 46 uds.", state: "Recibido" },
    { id: "REC-0090", name: "OC-0253 · Andes Sport Import", detail: "4 productos · Recepción parcial", date: "Hoy, 08:42", quantity: "12 / 20 uds.", state: "Recibido" },
    { id: "REC-0089", name: "OC-0251 · Andes Sport Import", detail: "6 productos · Completa", date: "27 oct, 16:30", quantity: "58 / 58 uds.", state: "Completada" },
    { id: "REC-0088", name: "OC-0250 · Mundo Outdoor Cía.", detail: "3 productos · Completa", date: "25 oct, 11:05", quantity: "24 / 24 uds.", state: "Completada" }
  ],
  ventas: [
    { id: "FAC-1838", name: "Camila Torres", detail: "Venta web · Tarjeta", date: "Hoy, 10:34", total: 214.8, state: "Pagada" },
    { id: "FAC-1837", name: "Diego Paredes", detail: "Venta en tienda · Efectivo", date: "Hoy, 10:02", total: 89.9, state: "Pagada" },
    { id: "FAC-1836", name: "María José León", detail: "Venta web · Transferencia", date: "Hoy, 09:46", total: 326.4, state: "Por confirmar" },
    { id: "FAC-1835", name: "Sebastián Mora", detail: "Venta en tienda · Tarjeta", date: "Hoy, 09:11", total: 54.5, state: "Pagada" },
    { id: "FAC-1834", name: "Ana Belén Cruz", detail: "Venta web · Tarjeta", date: "Ayer, 18:25", total: 148, state: "Anulada" }
  ],
  facturas: [
    { id: "FAC-1838", name: "Camila Torres", detail: "Cédula 1718452096 · 2 artículos", date: "28 oct 2026", total: 214.8, state: "Pagada" },
    { id: "FAC-1837", name: "Diego Paredes", detail: "Cédula 0921043875 · 1 artículo", date: "28 oct 2026", total: 89.9, state: "Pagada" },
    { id: "FAC-1836", name: "María José León", detail: "RUC 1793081245001 · 3 artículos", date: "28 oct 2026", total: 326.4, state: "Pendiente" },
    { id: "FAC-1835", name: "Sebastián Mora", detail: "Cédula 1712046098 · 1 artículo", date: "28 oct 2026", total: 54.5, state: "Pagada" },
    { id: "FAC-1834", name: "Ana Belén Cruz", detail: "Cédula 1708231945 · 1 artículo", date: "27 oct 2026", total: 148, state: "Anulada" }
  ],
  entregas: [
    { id: "ENT-0726", name: "Camila Torres", detail: "FAC-1838 · Quito, La Carolina", date: "Hoy, 12:00–14:00", quantity: "2 artículos", state: "En ruta" },
    { id: "ENT-0725", name: "María José León", detail: "FAC-1836 · Cumbayá", date: "Hoy, 10:30–12:30", quantity: "3 artículos", state: "Preparando" },
    { id: "ENT-0724", name: "Pedro Navas", detail: "FAC-1832 · Guayaquil, Urdesa", date: "Hoy, 09:15", quantity: "1 artículo", state: "Entregada" },
    { id: "ENT-0723", name: "Lucía Viteri", detail: "FAC-1829 · Quito, El Batán", date: "Ayer, 16:40", quantity: "2 artículos", state: "Entregada" }
  ],
  clientes: [
    { id: "CLI-1042", name: "Camila Torres", detail: "camila.torres@mail.ec · Quito", icon: "CT", orders: 14, spend: 1864.5, state: "Activo" },
    { id: "CLI-1041", name: "Diego Paredes", detail: "dparedes@mail.ec · Guayaquil", icon: "DP", orders: 8, spend: 932.8, state: "Activo" },
    { id: "CLI-1040", name: "María José León", detail: "mjleon@mail.ec · Cumbayá", icon: "ML", orders: 21, spend: 3270, state: "Activo" },
    { id: "CLI-1039", name: "Sebastián Mora", detail: "smora@mail.ec · Cuenca", icon: "SM", orders: 3, spend: 268.5, state: "Activo" },
    { id: "CLI-1038", name: "Ana Belén Cruz", detail: "anacruz@mail.ec · Quito", icon: "AC", orders: 0, spend: 0, state: "Inactivo" }
  ],
  usuarios: [
    { id: "USR-001", name: "Valentina Ruiz", detail: "valentina@apexsports.ec · Último acceso hoy", icon: "VR", role: "Administradora", state: "Activo", failedAttempts: 0, lastAccess: "Hoy (demo)", requirePasswordChange: false },
    { id: "USR-002", name: "Mateo Cárdenas", detail: "mateo@apexsports.ec · Último acceso hoy", icon: "MC", role: "Jefe de tienda", state: "Activo", failedAttempts: 0, lastAccess: "Hoy (demo)", requirePasswordChange: false },
    { id: "USR-003", name: "Sofía Almeida", detail: "sofia@apexsports.ec · Último acceso ayer", icon: "SA", role: "Inventario", state: "Activo", failedAttempts: 0, lastAccess: "Ayer (demo)", requirePasswordChange: false },
    { id: "USR-004", name: "Nicolás Freire", detail: "nfreire@apexsports.ec · Sin acceso reciente", icon: "NF", role: "Ventas", state: "Pendiente", failedAttempts: 0, lastAccess: "Sin acceso reciente (demo)", requirePasswordChange: true }
  ],
  roles: [
    { id: "ROL-001", name: "Administradora", detail: "Acceso completo a la operación Apex Sports.", users: "4 usuarios", permissions: ["Productos: editar", "Inventario: ajustar", "Compras: aprobar", "Usuarios: administrar", "Auditoría: consultar"], state: "Activo" },
    { id: "ROL-002", name: "Jefe de tienda", detail: "Gestiona ventas, clientes y coordinación de tienda.", users: "1 usuario", permissions: ["Ventas: crear", "Facturas: emitir", "Clientes: editar", "Entregas: gestionar"], state: "Activo" },
    { id: "ROL-003", name: "Inventario", detail: "Control de existencias y recepción de mercadería.", users: "1 usuario", permissions: ["Productos: consultar", "Inventario: ajustar", "Compras: consultar", "Recepciones: registrar"], state: "Activo" },
    { id: "ROL-004", name: "Ventas", detail: "Atención al cliente y registro de ventas.", users: "2 usuarios", permissions: ["Ventas: crear", "Facturas: consultar", "Clientes: consultar", "Entregas: consultar"], state: "Activo" }
  ],
  auditoria: [
    { id: "LOG-5832", name: "Valentina Ruiz", detail: "PRODUCTOS · Actualización de registro", date: "Hoy, 10:32:18", target: "PR-1048 · Zapatilla Velocity Pro", state: "Actualización" },
    { id: "LOG-5831", name: "Sofía Almeida", detail: "RECEPCIONES · Registro creado", date: "Hoy, 09:19:44", target: "REC-0091 · Recepción parcial", state: "Creación" },
    { id: "LOG-5830", name: "Mateo Cárdenas", detail: "FACTURAS · Documento emitido", date: "Hoy, 09:03:12", target: "FAC-1837 · Venta en tienda", state: "Creación" },
    { id: "LOG-5829", name: "Valentina Ruiz", detail: "USUARIOS · Permisos actualizados", date: "Ayer, 17:46:05", target: "USR-003 · Inventario", state: "Actualización" },
    { id: "LOG-5828", name: "Sofía Almeida", detail: "AJUSTES · Ajuste de existencias", date: "Ayer, 16:20:30", target: "AJ-0084 · Guantes Grip X", state: "Ajuste" }
  ]
};

const pageMeta = {
  resumen: { title: "Resumen", subtitle: "Esto es lo que ocurre hoy en tu operación.", action: "Descargar reporte" },
  productos: { title: "Productos", subtitle: "Administra tu catálogo, precios y disponibilidad.", action: "Nuevo producto" },
  inventario: { title: "Inventario", subtitle: "Existencias, movimientos y ajustes de bodega.", action: "Registrar ajuste" },
  compras: { title: "Compras", subtitle: "Órdenes de compra y abastecimiento de proveedores.", action: "Nueva orden" },
  proveedores: { title: "Proveedores", subtitle: "Contactos y condiciones de abastecimiento.", action: "Nuevo proveedor" },
  recepciones: { title: "Recepciones", subtitle: "Verifica cantidades recibidas contra cada orden.", action: "Registrar recepción" },
  ventas: { title: "Ventas", subtitle: "Actividad comercial de la tienda y del canal web.", action: "Nueva venta" },
  facturas: { title: "Facturas", subtitle: "Documentos de venta, pagos y estado de cuenta.", action: "Nueva factura" },
  entregas: { title: "Entregas", subtitle: "Seguimiento de pedidos y coordinación de despachos.", action: "Programar entrega" },
  clientes: { title: "Clientes", subtitle: "Relaciones, historial de compra y datos de contacto.", action: "Nuevo cliente" },
  usuarios: { title: "Usuarios", subtitle: "Cuentas que pueden acceder al panel administrativo.", action: "Invitar usuario" },
  roles: { title: "Roles y permisos", subtitle: "Control de acceso por perfil y módulo.", action: "Crear rol" },
  auditoria: { title: "Auditoría", subtitle: "Historial local de acciones en los módulos administrativos.", action: "Exportar bitácora" }
};

const config = {
  productos: { title: "Catálogo de productos", columns: ["Producto", "Categoría", "Precio", "Existencias", "Estado"], action: "Nuevo producto", count: "120 productos en catálogo" },
  inventario: { title: "Existencias por producto", columns: ["Producto", "Categoría", "Disponible", "Mínimo", "Último movimiento", "Estado"], action: "Registrar ajuste", count: "Inventario actualizado hoy, 10:32" },
  compras: { title: "Órdenes de compra", columns: ["Orden / proveedor", "Fecha", "Total", "Estado"], action: "Nueva orden", count: "12 órdenes este mes" },
  proveedores: { title: "Directorio de proveedores", columns: ["Proveedor", "Categoría", "Teléfono", "Correo", "Estado"], action: "Nuevo proveedor", count: "18 proveedores registrados" },
  recepciones: { title: "Recepciones recientes", columns: ["Recepción / orden", "Fecha", "Cantidad recibida", "Estado"], action: "Registrar recepción", count: "3 recepciones requieren revisión" },
  ventas: { title: "Actividad de ventas", columns: ["Venta / cliente", "Fecha", "Total", "Estado"], action: "Nueva venta", count: "36 ventas registradas hoy" },
  facturas: { title: "Facturas recientes", columns: ["Factura / cliente", "Fecha", "Total", "Estado"], action: "Nueva factura", count: "1838 documentos emitidos" },
  entregas: { title: "Seguimiento de entregas", columns: ["Entrega / destinatario", "Programación", "Contenido", "Estado"], action: "Programar entrega", count: "8 pedidos en preparación" },
  clientes: { title: "Directorio de clientes", columns: ["Cliente", "Compras", "Monto histórico", "Estado"], action: "Nuevo cliente", count: "2.486 clientes registrados" },
  usuarios: { title: "Usuarios del sistema", columns: ["Usuario", "Rol asignado", "Último acceso", "Estado"], action: "Invitar usuario", count: "4 cuentas con acceso" },
  roles: { title: "Perfiles de acceso", columns: ["Rol", "Descripción", "Usuarios", "Estado"], action: "Crear rol", count: "Roles y permisos demostrativos" },
  auditoria: { title: "Registro de actividad", columns: ["Usuario / módulo", "Fecha y hora", "Registro afectado", "Acción"], action: "Exportar bitácora", count: "5 eventos recientes · datos de ejemplo" }
};

const lookups = {
  cities: [["UIO", "UIO · Quito (demo)"], ["GYE", "GYE · Guayaquil (demo)"], ["CUE", "CUE · Cuenca (demo)"], ["AMB", "AMB · Ambato (demo)"], ["CUM", "CUM · Cumbayá (demo)"]],
  shelves: [["PER-A03", "PER-A03 · Percha A-03 (demo)"], ["PER-B01", "PER-B01 · Percha B-01 (demo)"], ["PER-C04", "PER-C04 · Percha C-04 (demo)"]],
  categories: [["CAT-RUN", "CAT-RUN · Running (demo)"], ["CAT-FUT", "CAT-FUT · Fútbol (demo)"], ["CAT-FIT", "CAT-FIT · Fitness (demo)"], ["CAT-TEN", "CAT-TEN · Tenis (demo)"], ["CAT-OUT", "CAT-OUT · Outdoor (demo)"], ["CAT-ROP", "CAT-ROP · Ropa deportiva (demo)"]],
  brands: [["MAR-APX", "MAR-APX · Apex Sports (demo)"], ["MAR-AND", "MAR-AND · Andes (demo)"], ["MAR-FIT", "MAR-FIT · FitPro (demo)"]],
  units: [["UND", "UND · Unidad (demo)"], ["PAR", "PAR · Par (demo)"], ["CJ", "CJ · Caja (demo)"]],
  products: records.productos.map(product => [product.id, `${product.id} · ${product.name} (demo)`]),
  providers: records.proveedores.map(provider => [provider.id, `${provider.id} · ${provider.name} (demo)`]),
  clients: records.clientes.map(client => [client.id, `${client.id} · ${client.name} (demo)`]),
  users: records.usuarios.map(user => [user.id, `${user.id} · ${user.name} (demo)`]),
  roles: records.roles.map(role => [role.id, `${role.id} · ${role.name} (demo)`]),
  permissions: [
    ["PRM-PRO-R", "Productos · consultar"], ["PRM-PRO-W", "Productos · administrar"],
    ["PRM-INV-R", "Inventario · consultar"], ["PRM-INV-W", "Inventario · ajustar"],
    ["PRM-COM-R", "Compras · consultar"], ["PRM-REC-W", "Recepciones · registrar"],
    ["PRM-VEN-R", "Ventas · consultar"], ["PRM-FAC-W", "Facturas · emitir"],
    ["PRM-CLI-R", "Clientes · consultar"], ["PRM-USR-W", "Usuarios · administrar"],
    ["PRM-AUD-R", "Auditoría · consultar"]
  ],
  purchases: records.compras.map(purchase => [purchase.id, `${purchase.id} · ${purchase.name} (demo)`]),
  invoices: records.facturas.map(invoice => [invoice.id, `${invoice.id} · ${invoice.name} (demo)`])
};

const editableViews = new Set(["productos", "proveedores", "clientes", "usuarios", "roles"]);
const sqlDefaultCodes = {
  productos: { Activo: "ESTADO_PROD=ACT" },
  proveedores: { Activo: "ESTADO_PRV=ACT" },
  clientes: { Activo: "ESTADO_CLI=ACT" },
  usuarios: { Activo: "ESTADO_USR=ACT" },
  roles: { Activo: "ESTADO_ROL=ACT" },
  compras: { Pendiente: "ESTADO_OC=PEN" },
  recepciones: { Recibido: "ESTADO_REC=REC" },
  facturas: { Pagada: "ESTADO_FAC=PAG" },
  ventas: { Pagada: "ESTADO_FAC=PAG" },
  entregas: { Pendiente: "ESTADO_ENT=PEN" }
};

const state = { view: "resumen", query: "", status: "Todos los estados" };
const root = document.querySelector("#view-root");
const toastRegion = document.querySelector("#toast-region");
const dialog = document.querySelector("#app-dialog");
let dialogOpener = null;
const money = new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
const clean = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const formatMoney = value => money.format(value);

function statusClass(value) {
  const s = String(value).toLowerCase();
  if (s.includes("crítico") || s.includes("agotado") || s.includes("anulad") || s.includes("inactiv")) return "danger";
  if (s.includes("bajo") || s.includes("pendiente") || s.includes("revisión")) return "warning";
  if (s.includes("ruta") || s.includes("tránsito") || s.includes("prepar") || s.includes("creación")) return "info";
  if (s.includes("actualización") || s.includes("ajuste")) return "neutral";
  return "";
}

function badge(value) {
  return `<span class="status ${statusClass(value)}">${clean(value)}</span>`;
}

function recordBadge(view, row) {
  const code = sqlDefaultCodes[view]?.[row.state];
  return `<span class="status ${statusClass(row.state)}">${clean(row.state)}${code ? `<small class="status-code">${clean(code)}</small>` : ""}</span>`;
}

function heading(view) {
  const meta = pageMeta[view];
  const summary = view === "resumen";
  const exportOnly = view === "auditoria";
  return `<div class="page-heading"><div><p class="eyebrow">${summary ? "MARTES · 28 OCTUBRE 2026" : "OPERACIÓN / " + clean(meta.title.toUpperCase())}</p><h1 tabindex="-1">${clean(meta.title)}${summary ? ", Valentina" : ""}</h1><p>${clean(meta.subtitle)}</p></div><div class="heading-actions"><button class="button ${summary || exportOnly ? "button-outline" : "button-lime"}" data-action="${summary || exportOnly ? "export" : "create"}" data-kind="${clean(meta.action)}"><span class="button-symbol" aria-hidden="true">${summary || exportOnly ? "↓" : "+"}</span>${clean(meta.action)}</button></div></div>`;
}

function metricCard(label, value, note, change, icon, downward = false) {
  return `<article class="metric-card"><div class="metric-top">${label}<span class="metric-icon" aria-hidden="true">${icon}</span></div><div class="metric-value">${value}</div><div class="metric-foot"><span class="metric-change ${downward ? "down" : ""}">${change}</span>${note}</div></article>`;
}

function chartPanel() {
  return `<section class="panel"><div class="panel-header"><div><h2>Rendimiento de ventas</h2><p class="panel-subtitle">Ingresos registrados · últimos 7 días</p></div><div class="chart-legend"><span><i class="legend-dot dark"></i>Esta semana</span><span><i class="legend-dot"></i>Anterior</span></div></div><div class="chart-wrap"><svg viewBox="0 0 600 205" role="img" aria-labelledby="chart-title chart-desc"><title id="chart-title">Ventas de los últimos siete días</title><desc id="chart-desc">Tendencia ascendente con un máximo de ventas el sábado y cierre sólido el martes.</desc><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#b9d951" stop-opacity=".2"/><stop offset="1" stop-color="#b9d951" stop-opacity="0"/></linearGradient></defs><line class="chart-grid" x1="47" y1="28" x2="586" y2="28"/><line class="chart-grid" x1="47" y1="73" x2="586" y2="73"/><line class="chart-grid" x1="47" y1="118" x2="586" y2="118"/><line class="chart-grid" x1="47" y1="163" x2="586" y2="163"/><text class="chart-label" x="7" y="31">$1.2k</text><text class="chart-label" x="11" y="76">$800</text><text class="chart-label" x="11" y="121">$400</text><text class="chart-label" x="22" y="166">$0</text><path class="chart-area" d="M56 126 L140 105 L224 116 L308 70 L392 83 L476 45 L560 59 L560 163 L56 163 Z"/><path class="chart-line-alt" d="M56 135 L140 119 L224 128 L308 102 L392 112 L476 88 L560 96"/><path class="chart-line" d="M56 126 L140 105 L224 116 L308 70 L392 83 L476 45 L560 59"/><circle cx="476" cy="45" r="4" fill="#263c4d" stroke="#fff" stroke-width="2"/><text class="chart-label" x="49" y="188">Mié</text><text class="chart-label" x="133" y="188">Jue</text><text class="chart-label" x="217" y="188">Vie</text><text class="chart-label" x="301" y="188">Sáb</text><text class="chart-label" x="385" y="188">Dom</text><text class="chart-label" x="469" y="188">Lun</text><text class="chart-label" x="553" y="188">Mar</text></svg></div></section>`;
}

function stockPanel() {
  return `<section class="panel inventory-panel"><div class="panel-header"><div><h2>Salud del inventario</h2><p class="panel-subtitle">Disponibilidad de productos</p></div><button class="text-link" data-navigate="inventario">Ver inventario →</button></div><div class="stock-summary"><div class="stock-ring" role="img" aria-label="56 por ciento disponible, 22 por ciento bajo, 11 por ciento crítico"><div class="stock-ring-inner"><strong>1.284</strong><small>unidades</small></div></div><div class="stock-legend"><div class="stock-legend-row"><span class="stock-name"><i class="stock-swatch"></i>Disponible</span><strong>56%</strong></div><div class="stock-legend-row"><span class="stock-name"><i class="stock-swatch amber"></i>Stock bajo</span><strong>22%</strong></div><div class="stock-legend-row"><span class="stock-name"><i class="stock-swatch red"></i>Crítico</span><strong>11%</strong></div></div></div><div class="stock-alert"><span aria-hidden="true">⚑</span><span>Productos por debajo del mínimo</span><strong>14</strong></div></section>`;
}

function homeTable() {
  const sales = records.ventas.slice(0, 4);
  return `<section class="panel table-panel"><div class="panel-header"><div><h2>Últimas ventas</h2><p class="panel-subtitle">Actividad comercial más reciente</p></div><button class="text-link" data-navigate="ventas">Ver todas →</button></div><div class="table-wrap"><table><thead><tr><th>Factura</th><th>Cliente</th><th>Fecha</th><th>Total</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>${sales.map(r => `<tr><td><strong>${r.id}</strong></td><td>${clean(r.name)}</td><td>${clean(r.date)}</td><td><strong>${formatMoney(r.total)}</strong></td><td>${badge(r.state)}</td><td><button class="button button-outline" data-record-action="view" data-record-view="ventas" data-record-id="${clean(r.id)}" aria-label="Ver detalle de venta ${clean(r.id)}">Ver</button></td></tr>`).join("")}</tbody></table></div></section>`;
}

function homeView() {
  return `${heading("resumen")}<div class="metric-grid">${metricCard("Ventas de hoy", "$2,840.50", "vs. día anterior", "+12.8%", "↗")}${metricCard("Órdenes abiertas", "08", "3 requieren atención", "+2", "▤")}${metricCard("Productos activos", "1,284", "14 bajo mínimo", "−3.2%", "◈", true)}${metricCard("Clientes nuevos", "24", "en los últimos 7 días", "+18.4%", "♙")}</div><div class="dashboard-grid">${chartPanel()}${stockPanel()}</div>${homeTable()}<div class="section-heading"><div><h2>Actividad reciente</h2><p>Movimientos destacados de hoy</p></div><button class="text-link" data-navigate="auditoria">Abrir auditoría →</button></div><section class="panel activity-list"><div class="activity-item"><span class="activity-symbol">↗</span><p><strong>Valentina Ruiz</strong> registró una venta de <strong>$214.80</strong> para Camila Torres.</p><time>10:34</time></div><div class="activity-item"><span class="activity-symbol">⇣</span><p><strong>Sofía Almeida</strong> inició la recepción <strong>REC-0091</strong>.</p><time>09:19</time></div><div class="activity-item"><span class="activity-symbol">▤</span><p>La orden <strong>OC-0252</strong> está en camino desde Guayaquil.</p><time>08:45</time></div></section>`;
}

function recordSummary(view) {
  const stats = {
    productos: [["Productos activos", "112"], ["Bajo mínimo", "14"], ["Valor de inventario", "$48.620"]],
    inventario: [["Unidades disponibles", "1.284"], ["Bajo mínimo", "14"], ["Ajustes este mes", "8"]],
    compras: [["Órdenes abiertas", "8"], ["Por recibir", "$12.480"], ["Recibidas este mes", "24"]],
    proveedores: [["Proveedores activos", "16"], ["Órdenes en curso", "8"], ["Ciudad principal", "Quito"]],
    recepciones: [["Por verificar", "3"], ["Completadas hoy", "4"], ["Unidades esperadas", "86"]],
    ventas: [["Ventas de hoy", "36"], ["Ingresos hoy", "$2.840"], ["Ticket promedio", "$78.90"]],
    facturas: [["Emitidas hoy", "36"], ["Por cobrar", "$326.40"], ["Total del mes", "$48.220"]],
    entregas: [["En preparación", "8"], ["En ruta", "5"], ["Entregadas hoy", "23"]],
    clientes: [["Clientes activos", "2.486"], ["Nuevos este mes", "184"], ["Monto promedio", "$126.80"]],
    usuarios: [["Cuentas activas", "3"], ["Invitaciones pendientes", "1"], ["Roles asignados", "4"]],
    auditoria: [["Eventos de hoy", "18"], ["Usuarios activos", "3"], ["Tablas registradas", "12"]]
  };
  return `<div class="summary-strip">${(stats[view] || []).map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

function rowCells(view, row) {
  const primary = `<div class="cell-primary">${row.icon ? `<span class="product-thumb ${clean(row.tone || "")}">${clean(row.icon)}</span>` : ""}<span class="cell-stack"><strong>${clean(row.id)} · ${clean(row.name)}</strong><small>${clean(row.detail || "")}</small></span></div>`;
  const generic = {
    productos: [primary, clean(row.category), formatMoney(row.price), row.stock === 0 ? `<span class="status danger">Agotado</span>` : clean(row.stock), recordBadge(view, row)],
    inventario: [primary, clean(row.category), `<strong>${row.stock} uds.</strong>`, `${row.min} uds.`, clean(row.movement), badge(row.state)],
    compras: [primary, clean(row.date), `<strong>${formatMoney(row.total)}</strong>`, recordBadge(view, row)],
    proveedores: [primary, clean(row.category), clean(row.phone), clean(row.contact), recordBadge(view, row)],
    recepciones: [primary, clean(row.date), clean(row.quantity), recordBadge(view, row)],
    ventas: [primary, clean(row.date), `<strong>${formatMoney(row.total)}</strong>`, recordBadge(view, row)],
    facturas: [primary, clean(row.date), `<strong>${formatMoney(row.total)}</strong>`, recordBadge(view, row)],
    entregas: [primary, clean(row.date), clean(row.quantity), recordBadge(view, row)],
    clientes: [primary, `<strong>${row.orders}</strong> órdenes`, formatMoney(row.spend), recordBadge(view, row)],
    usuarios: [primary, clean(row.role), clean(row.detail.split("·").pop()), recordBadge(view, row)],
    auditoria: [primary, clean(row.date), clean(row.target), badge(row.state)],
    roles: [primary, clean(row.detail), clean(row.users), badge(row.state)]
  };
  return generic[view] || [];
}

function activeRecords() {
  const q = state.query.trim().toLocaleLowerCase("es");
  const source = records[state.view] || [];
  return (state.view === "auditoria" ? [...source].reverse() : source).filter(r => {
    const text = Object.values(r).join(" ").toLocaleLowerCase("es");
    const matchSearch = !q || text.includes(q);
    const matchStatus = state.status === "Todos los estados" || r.state === state.status;
    return matchSearch && matchStatus;
  });
}

function listingView(view) {
  const meta = config[view];
  const rows = activeRecords();
  const statuses = [...new Set((records[view] || []).map(r => r.state))];
  const totalLabel = {
    productos: "120 productos", inventario: "1.284 productos", compras: "12 órdenes",
    proveedores: "18 proveedores", recepciones: "46 recepciones", ventas: "36 ventas",
    facturas: "1.838 facturas", entregas: "36 entregas", clientes: "2.486 clientes",
    usuarios: "4 usuarios", auditoria: "eventos locales", roles: "perfiles locales"
  }[view];
  const needsFilter = statuses.length > 1;
  const readonly = view === "auditoria";
  const list = rows.length ? `<div class="table-wrap"><table><thead><tr>${meta.columns.map(c => `<th>${clean(c)}</th>`).join("")}${readonly ? "" : "<th>Acciones</th>"}</tr></thead><tbody>${rows.map(row => `<tr>${rowCells(view, row).map(cell => `<td>${cell}</td>`).join("")}${readonly ? "" : `<td>${rowActions(view, row)}</td>`}</tr>`).join("")}</tbody></table></div><div class="table-footer"><span>${rows.length} filas locales · referencia de muestra: ${totalLabel}</span><span class="sample-data-note">No sincronizado</span></div><p class="schema-note">Estados visibles son etiquetas de interfaz. Los códigos mostrados identifican solo los DEFAULT documentados por columna; los demás estados/códigos no están restringidos por el SQL. “Inactivo” y “Anulado” son conceptos distintos, sin código contractual confirmado.</p>${view === "facturas" || view === "compras" ? '<p class="schema-note">Cada operación nueva conserva un detalle por producto. Los importes calculados son estimaciones locales, no totales fiscales ni inventario confirmados.</p>' : ""}${view === "auditoria" ? '<p class="schema-note">Solo lectura. El esquema LOG_AUDITORIA no define PK/FK; no se ofrecen cambios ni borrado.</p>' : ""}` : `<div class="empty-state"><span class="empty-icon" aria-hidden="true">⌕</span><h3>No encontramos resultados</h3><p>Prueba con otro término o cambia los filtros para ver más registros.</p><button class="button button-outline" data-action="reset-filters">Limpiar filtros</button></div>`;
  const countLabel = view === "auditoria"
    ? `${records.auditoria.length} eventos locales · no persistidos`
    : view === "roles" ? `${records.roles.length} perfiles locales` : meta.count;
  return `${heading(view)}${recordSummary(view)}<div class="section-heading"><div><h2>${clean(meta.title)}</h2><p>${clean(countLabel)}</p></div></div><div class="toolbar"><div class="toolbar-filters"><label class="search-field"><span aria-hidden="true">⌕</span><input id="record-search" type="search" value="${clean(state.query)}" placeholder="Buscar por nombre o código…" aria-label="Buscar en ${clean(pageMeta[view].title)}"></label>${needsFilter ? `<label><span class="sr-only">Filtrar por estado</span><select id="status-filter" class="filter-select"><option>Todos los estados</option>${statuses.map(s => `<option ${state.status === s ? "selected" : ""}>${clean(s)}</option>`).join("")}</select></label>` : ""}<span class="result-count" aria-live="polite">${rows.length} resultados</span></div></div><section class="panel table-panel" aria-label="${clean(meta.title)}">${list}</section>`;
}

function rolesView() {
  const roles = activeRecords();
  return `${heading("roles")}<div class="summary-strip"><div><span>Roles configurados</span><strong>${records.roles.length} perfiles</strong></div><div><span>Permisos del sistema</span><strong>28 permisos</strong></div><div><span>Asignaciones activas</span><strong>8 usuarios</strong></div></div><div class="toolbar"><div class="toolbar-filters"><label class="search-field"><span aria-hidden="true">⌕</span><input id="record-search" type="search" value="${clean(state.query)}" placeholder="Buscar por nombre o código…" aria-label="Buscar roles"></label><label><span class="sr-only">Filtrar por estado</span><select id="status-filter" class="filter-select"><option>Todos los estados</option>${[...new Set(records.roles.map(role => role.state))].map(s => `<option ${state.status === s ? "selected" : ""}>${clean(s)}</option>`).join("")}</select></label><span class="result-count" aria-live="polite">${roles.length} resultados</span></div></div><div class="split-layout">${roles.map(role => `<article class="panel role-card"><div class="role-card-head"><span class="role-mark" aria-hidden="true">◇</span><div><h3>${clean(role.name)}</h3><p>${clean(role.detail)} · ${clean(role.users)}</p></div>${rowActions("roles", role)}</div><div class="permission-list">${role.permissions.map(permission => `<span class="permission-chip">${clean(permission)}</span>`).join("")}</div><div class="role-card-state">${badge(role.state)}</div></article>`).join("") || `<div class="empty-state"><h3>No encontramos roles</h3><p>Cambia los filtros para ver otros perfiles.</p><button class="button button-outline" data-action="reset-filters">Limpiar filtros</button></div>`}</div><p class="dialog-note">Matriz demostrativa; cambios solo en memoria local durante esta página.</p>`;
}

function rowActions(view, row) {
  const label = `${row.id} · ${row.name}`;
  const terminal = ["anulado", "inactivo"].includes(String(row.state).toLocaleLowerCase("es"));
  const canEdit = editableViews.has(view) && !terminal;
  const canAnnul = canEdit;
  return `<div class="row-actions" role="group" aria-label="Acciones para ${clean(label)}"><button type="button" data-record-action="view" data-record-view="${view}" data-record-id="${clean(row.id)}" aria-label="Ver detalle de ${clean(label)}">Ver</button>${canEdit ? `<button type="button" data-record-action="edit" data-record-view="${view}" data-record-id="${clean(row.id)}" aria-label="Editar ${clean(label)}">Editar</button>` : ""}${canAnnul ? `<button type="button" class="danger-action" data-record-action="annul" data-record-view="${view}" data-record-id="${clean(row.id)}" aria-label="Anular ${clean(label)}">Anular</button>` : ""}</div>`;
}

function render() {
  document.querySelectorAll(".nav-item").forEach(button => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.querySelector("#breadcrumb-current").textContent = pageMeta[state.view].title;
  root.setAttribute("aria-busy", "true");
  root.innerHTML = state.view === "resumen" ? homeView() : state.view === "roles" ? rolesView() : listingView(state.view);
  root.setAttribute("aria-busy", "false");
  const search = document.querySelector("#record-search");
  if (search) search.addEventListener("input", event => {
    state.query = event.target.value;
    const position = event.target.selectionStart;
    render();
    const next = document.querySelector("#record-search");
    next.focus();
    next.setSelectionRange(position, position);
  });
  const filter = document.querySelector("#status-filter");
  if (filter) filter.addEventListener("change", event => { state.status = event.target.value; render(); });
}

function notify(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-mark" aria-hidden="true">✓</span><span>${clean(message)}</span>`;
  toastRegion.append(toast);
  window.setTimeout(() => toast.remove(), 3600);
}

const fieldsByView = {
  productos: [
    { label: "Nombre", key: "name", maxLength: 80 },
    { label: "Percha (ID de referencia)", key: "shelfId", type: "select", options: lookups.shelves },
    { label: "Categoría (ID de referencia)", key: "categoryId", type: "select", options: lookups.categories },
    { label: "Marca (ID de referencia)", key: "brandId", type: "select", options: lookups.brands },
    { label: "Unidad de compra", key: "purchaseUnit", type: "select", options: lookups.units },
    { label: "Unidad de venta", key: "saleUnit", type: "select", options: lookups.units },
    { label: "Descripción corta", key: "detail", type: "textarea", required: false, maxLength: 255 },
    { label: "Material", key: "material", required: false, maxLength: 100 },
    { label: "Talla", key: "size", required: false, maxLength: 20 },
    { label: "Color", key: "color", required: false, maxLength: 50 },
    { label: "Garantía", key: "warranty", required: false, maxLength: 100 },
    { label: "Costo / valor de compra (USD)", key: "cost", type: "number", max: 99999.99, step: "0.01" },
    { label: "Precio de venta (USD)", key: "price", type: "number", max: 99999.99, step: "0.01" },
    { label: "Saldo inicial (unidades)", key: "openingBalance", type: "number", max: 2147483647, step: "1", integer: true, defaultValue: "0" },
    { label: "Ingresos acumulados", key: "incomeQty", type: "number", max: 2147483647, step: "1", integer: true, defaultValue: "0" },
    { label: "Egresos acumulados", key: "outgoingQty", type: "number", max: 2147483647, step: "1", integer: true, defaultValue: "0" },
    { label: "Ajustes acumulados", key: "adjustmentQty", type: "number", max: 2147483647, step: "1", integer: true, defaultValue: "0" },
    { label: "Saldo final", key: "stock", type: "number", max: 2147483647, step: "1", integer: true, defaultValue: "0" },
    { label: "Fotos · una URL por línea, opcionalmente seguida de | orden", key: "photos", type: "textarea", required: false, maxLength: 2000, full: true, help: "Las URLs y el orden son datos de muestra; las claves de foto se generan en la base de datos." }
  ],
  inventario: [
    { label: "Usuario responsable", key: "userId", type: "select", options: lookups.users },
    { label: "Descripción del ajuste", key: "description", maxLength: 30 },
    { label: "Fecha y hora", key: "dateTime", type: "datetime-local" },
    { label: "Tipo de movimiento", key: "movementType", type: "select", options: [["Ingreso", "Ingreso · demo"], ["Egreso", "Egreso · demo"], ["Corrección", "Corrección · demo"]] }
  ],
  compras: [
    { label: "Proveedor", key: "providerId", type: "select", options: lookups.providers },
    { label: "Fecha de compra", key: "dateTime", type: "datetime-local" },
    { label: "Fecha estimada de entrega", key: "deliveryDate", type: "datetime-local", required: false },
    { label: "IVA estimado (15%, USD)", key: "tax", type: "number", max: 99999.99, step: "0.01", defaultValue: "0.00", readOnly: true, help: "Estimación local basada en el 15% usado por el trigger SQL; el servidor y la normativa vigente son la autoridad." }
  ],
  proveedores: [
    { label: "Nombre", key: "name", maxLength: 40 },
    { label: "RUC (13 dígitos)", key: "ruc", maxLength: 13, minLength: 13, pattern: "\\d{13}", inputmode: "numeric", help: "Se verifican estructura y dígito verificador ecuatorianos. El esquema define CHAR(13)." },
    { label: "Correo electrónico", key: "email", type: "email", maxLength: 60 },
    { label: "Teléfono (10 dígitos)", key: "phone", type: "tel", maxLength: 10, pattern: "\\d{10}", inputmode: "numeric", required: false },
    { label: "Celular (10 dígitos)", key: "mobile", type: "tel", maxLength: 10, pattern: "\\d{10}", inputmode: "numeric", required: false },
    { label: "Ciudad (ID de referencia)", key: "cityId", type: "select", options: lookups.cities },
    { label: "Dirección", key: "address", maxLength: 60, required: false, full: true }
  ],
  recepciones: [
    { label: "Compra relacionada", key: "purchaseId", type: "select", options: lookups.purchases },
    { label: "Fecha y hora de recepción", key: "dateTime", type: "datetime-local" },
    { label: "Descripción", key: "description", maxLength: 30, required: false },
    { label: "Cantidad de productos", key: "productCount", type: "number", max: 2147483647, step: "1", integer: true, required: false, defaultValue: "1", help: "Se alinea con el número de filas del detalle." }
  ],
  ventas: [
    { label: "Cliente", key: "clientId", type: "select", options: lookups.clients },
    { label: "Usuario operador", key: "userId", type: "select", options: lookups.users },
    { label: "Forma de pago", key: "payment", type: "select", options: [["Tarjeta", "Tarjeta"], ["Efectivo", "Efectivo"], ["Transferencia", "Transferencia"]] },
    { label: "IVA (importe USD)", key: "tax", type: "number", max: 99999.99, step: "0.01", defaultValue: "0.00" }
  ],
  facturas: [
    { label: "Cliente", key: "clientId", type: "select", options: lookups.clients },
    { label: "Usuario emisor", key: "userId", type: "select", options: lookups.users },
    { label: "Fecha", key: "dateTime", type: "datetime-local" },
    { label: "Forma de pago", key: "payment", type: "select", options: [["Tarjeta", "Tarjeta"], ["Efectivo", "Efectivo"], ["Transferencia", "Transferencia"]] },
    { label: "Descuento (importe USD)", key: "discount", type: "number", max: 99999.99, step: "0.01", defaultValue: "0.00" },
    { label: "IVA estimado (15%, USD)", key: "tax", type: "number", max: 99999.99, step: "0.01", defaultValue: "0.00", readOnly: true, help: "Estimación local basada en el 15% usado por el trigger SQL; el servidor y la normativa vigente son la autoridad." },
    { label: "Descripción", key: "description", type: "textarea", maxLength: 60, required: false, full: true }
  ],
  entregas: [
    { label: "Factura relacionada", key: "invoiceId", type: "select", options: lookups.invoices },
    { label: "Fecha y hora", key: "dateTime", type: "datetime-local" },
    { label: "Descripción", key: "description", maxLength: 30 },
    { label: "Número de productos", key: "productCount", type: "number", max: 2147483647, step: "1", integer: true, required: false, defaultValue: "1", help: "Se alinea con el número de filas del detalle." }
  ],
  clientes: [
    { label: "Nombre fiscal / completo", key: "name", maxLength: 40 },
    { label: "Cédula (10) o RUC (13)", key: "document", maxLength: 13, minLength: 10, pattern: "(\\d{10}|\\d{13})", inputmode: "numeric", help: "Se verifican estructura y dígito verificador ecuatorianos. La columna cli_RUC_CED es CHAR(13); confirmar con API cómo almacenar una cédula de 10." },
    { label: "Correo electrónico", key: "email", type: "email", maxLength: 60, required: false },
    { label: "Teléfono (10 dígitos)", key: "phone", type: "tel", maxLength: 10, pattern: "\\d{10}", inputmode: "numeric", required: false },
    { label: "Celular (10 dígitos)", key: "mobile", type: "tel", maxLength: 10, pattern: "\\d{10}", inputmode: "numeric", required: false },
    { label: "Ciudad (ID de referencia)", key: "cityId", type: "select", options: lookups.cities },
    { label: "Dirección", key: "address", maxLength: 60, required: false, full: true },
    { label: "Crédito máximo (USD)", key: "creditLimit", type: "number", max: 99999999.99, step: "0.01", required: false, defaultValue: "0.00" },
    { label: "Descuento de cliente (valor SQL, sin asumir porcentaje)", key: "customerDiscount", type: "number", max: 999.99, step: "0.01", required: false, defaultValue: "0.00", help: "cli_Descuento es NUMERIC(5,2); la unidad/regla comercial no está especificada." },
    { label: "Vincular cuenta de usuario (opcional)", key: "userId", type: "select", options: [["", "Sin cuenta vinculada · cliente invitado (demo)"], ...lookups.users], required: false, full: true, help: "CLIENTES.id_Usuario permite la relación; el flujo invitado/vinculación por correo se resolverá en API." }
  ],
  usuarios: [
    { label: "Nombre de usuario", key: "username", maxLength: 50 },
    { label: "Nombres", key: "firstName", maxLength: 60 },
    { label: "Apellidos", key: "lastName", maxLength: 60 },
    { label: "Correo electrónico único", key: "email", type: "email", maxLength: 60 },
    { label: "Teléfono (10 dígitos)", key: "phone", type: "tel", maxLength: 10, pattern: "\\d{10}", inputmode: "numeric", required: false },
    { label: "Exigir cambio de clave en primer acceso", key: "requirePasswordChange", type: "checkbox", required: false, help: "Bandera usr_RequiereCambioClave; solo referencia local. La invitación/clave la gestiona un flujo seguro de API." },
    { label: "Rol (ID de referencia)", key: "roleId", type: "select", options: lookups.roles, full: true, help: "Asignación demostrativa; persistir requiere USUARIOSxROLES y autorización del servidor." }
  ],
  roles: [
    { label: "Nombre", key: "name", maxLength: 50 },
    { label: "Descripción", key: "detail", type: "textarea", maxLength: 100, required: false, full: true },
    { label: "Permisos de muestra", key: "permissionIds", type: "checkbox-group", options: lookups.permissions, required: false, full: true, help: "IDs y mappings ilustrativos; el catálogo real de PERMISOS y ROLESxPERMISOS debe venir de API y ser autorizado por el servidor." }
  ]
};

const detailConfig = {
  inventario: { title: "Productos del ajuste", fields: [["productId", "Producto", "select"], ["quantity", "Cantidad", "number"], ["adjustedQuantity", "Cantidad ajustada / resultado", "number"]] },
  compras: { title: "Productos de la orden (PROxOC)", fields: [["productId", "Producto", "select"], ["quantity", "Cantidad", "number"], ["unitPrice", "Valor unitario de compra (USD)", "money"]] },
  recepciones: { title: "Productos recibidos (PROxREC)", fields: [["productId", "Producto", "select"], ["quantity", "Cantidad esperada", "number"], ["received", "Cantidad recibida", "number"], ["reason", "Motivo / diferencia", "text"]] },
  ventas: { title: "Productos de la venta (PROxFAC)", fields: [["productId", "Producto", "select"], ["quantity", "Cantidad", "number"], ["unitPrice", "Precio unitario (USD)", "money"]] },
  facturas: { title: "Detalle de factura (PROxFAC)", fields: [["productId", "Producto", "select"], ["quantity", "Cantidad", "number"], ["unitPrice", "Precio unitario (USD)", "money"]] },
  entregas: { title: "Productos de la entrega (PROxENT)", fields: [["productId", "Producto", "select"], ["quantity", "Cantidad de la factura", "number"], ["delivered", "Cantidad entregada", "number"], ["reason", "Motivo / incidencia", "text"]] }
};
let dialogContext = null;

function isoDate(value) {
  if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return new Date().toISOString().slice(0, 10);
}

function isoDateTime(value) {
  if (value && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) return value;
  return new Date().toISOString().slice(0, 16);
}

function fieldValue(view, row, key) {
  const values = {
    productos: { name: row.name, categoryId: row.categoryId || lookups.categories.find(([, label]) => label.includes(row.category))?.[0] || "CAT-RUN", shelfId: row.shelfId || "PER-A03", brandId: row.brandId || "MAR-APX", purchaseUnit: row.purchaseUnit || "UND", saleUnit: row.saleUnit || "UND", price: row.price, cost: row.cost || 0, stock: row.stock, openingBalance: row.openingBalance || 0, incomeQty: row.incomeQty || 0, outgoingQty: row.outgoingQty || 0, adjustmentQty: row.adjustmentQty || 0, detail: row.detail, material: row.material || "", size: row.size || "", color: row.color || "", warranty: row.warranty || "", photos: (row.photos || []).map(photo => `${photo.url} | ${photo.order}`).join("\n") },
    proveedores: { name: row.name, ruc: row.ruc || row.detail.match(/RUC ([^ ·]+)/)?.[1] || "", email: row.contact, phone: (row.phone || "").replace(/\D/g, "").slice(-10), mobile: (row.mobile || "").replace(/\D/g, "").slice(-10), address: row.address || "", cityId: row.cityId || cityIdForName(row.detail.split("·").pop().trim()) },
    clientes: { name: row.name, document: row.document || "", email: row.email || row.detail.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/)?.[0] || "", phone: row.phone || "", mobile: row.mobile || "", cityId: row.cityId || cityIdForName(row.detail.split("·").pop().trim()), address: row.address || "", creditLimit: row.creditLimit || 0, customerDiscount: row.customerDiscount || 0, userId: row.userId || "" },
    usuarios: { username: row.username || row.detail.split("·")[0].trim().split("@")[0], firstName: row.firstName || row.name.split(" ")[0], lastName: row.lastName || row.name.split(" ").slice(1).join(" "), email: row.email || row.detail.split("·")[0].trim(), roleId: row.roleId || lookups.roles[0][0], phone: row.phone || "", requirePasswordChange: row.requirePasswordChange || false },
    roles: { name: row.name, detail: row.detail, permissionIds: row.permissionIds || lookups.permissions.filter(([, label]) => (row.permissions || []).includes(label)).map(([id]) => id) }
  };
  return values[view]?.[key] ?? "";
}

function cityIdForName(name) {
  const found = lookups.cities.find(([, label]) => label.toLocaleLowerCase("es").includes(name.toLocaleLowerCase("es")));
  return found?.[0] || "UIO";
}

function renderField(field, row, view) {
  const { label, key, required = true, full = false, help, options, maxLength, minLength, pattern, inputmode, min, max, step, integer, defaultValue, readOnly = false } = field;
  const type = field.type || "text";
  const id = `field-${key}`;
  const helpId = `${id}-help`;
  const rawValue = row ? fieldValue(view, row, key) : defaultValue || "";
  const value = type === "datetime-local" ? isoDateTime(rawValue) : rawValue;
  const attrs = [
    maxLength ? `maxlength="${maxLength}"` : "",
    minLength ? `minlength="${minLength}"` : "",
    pattern ? `pattern="${clean(pattern)}"` : "",
    inputmode ? `inputmode="${clean(inputmode)}"` : "",
    min !== undefined ? `min="${min}"` : type === "number" ? 'min="0"' : "",
    max !== undefined ? `max="${max}"` : "",
    step ? `step="${clean(step)}"` : integer ? 'step="1"' : type === "number" ? 'step="0.01"' : "",
    required ? "required" : "",
    readOnly ? "readonly" : "",
    help ? `aria-describedby="${helpId}"` : ""
  ].filter(Boolean);
  let input;
  if (type === "select") {
    const choices = optionsFor(options || []);
    input = `<select id="${id}" name="${key}" ${attrs.join(" ")}>${choices.map(([optionValue, optionLabel]) => `<option value="${clean(optionValue)}" ${String(optionValue) === String(value) ? "selected" : ""}>${clean(optionLabel)}</option>`).join("")}</select>`;
  } else if (type === "checkbox-group") {
    const selected = Array.isArray(value) ? value : [];
    input = `<fieldset class="checkbox-group" ${help ? `aria-describedby="${helpId}"` : ""}><legend class="sr-only">${clean(label)}</legend>${options.map(([optionValue, optionLabel]) => `<label><input type="checkbox" name="${key}" value="${clean(optionValue)}" ${selected.includes(optionValue) ? "checked" : ""}><span>${clean(optionLabel)}</span></label>`).join("")}</fieldset>`;
  } else if (type === "checkbox") {
    input = `<input id="${id}" name="${key}" type="checkbox" ${value === true || value === "true" || value === "on" ? "checked" : ""} ${help ? `aria-describedby="${helpId}"` : ""}>`;
  } else if (type === "textarea") {
    input = `<textarea id="${id}" name="${key}" ${attrs.join(" ")}>${clean(value)}</textarea>`;
  } else {
    input = `<input id="${id}" name="${key}" type="${clean(type)}" value="${clean(value)}" ${attrs.join(" ")} ${type === "number" ? 'placeholder="0.00"' : ""}>`;
  }
  return `<div class="form-field ${full || type === "textarea" || type === "checkbox-group" ? "full" : ""}">${type === "checkbox-group" ? `<span class="form-group-label">${clean(label)}</span>` : `<label for="${id}">${clean(label)}</label>`}${input}${help ? `<small class="field-help" id="${helpId}">${clean(help)}</small>` : ""}</div>`;
}

function renderLineItem(view, item = {}) {
  const configForLines = detailConfig[view];
  const controls = configForLines.fields.map(([key, label, type]) => {
    const value = item[key] ?? "";
    if (type === "select") {
      return `<label class="line-field"><span>${clean(label)}</span><select name="line-${key}" required>${optionsFor(lookups.products).map(([id, name]) => `<option value="${clean(id)}" ${value === id ? "selected" : ""}>${clean(name)}</option>`).join("")}</select></label>`;
    }
    return `<label class="line-field"><span>${clean(label)}</span><input name="line-${key}" type="${type === "money" ? "number" : type}" value="${clean(value)}" ${type === "number" || type === "money" ? 'min="0"' : ""} ${type === "number" ? 'max="2147483647" step="1"' : type === "money" ? 'max="99999.99" step="0.01"' : 'maxlength="60"'} ${key === "reason" ? "" : "required"}></label>`;
  }).join("");
  return `<div class="line-item-row">${controls}<button class="remove-line" type="button" aria-label="Quitar producto del detalle">Quitar</button></div>`;
}

function optionsFor(options) {
  if (options === lookups.products) return records.productos.map(product => [product.id, `${product.id} · ${product.name} (demo)`]);
  if (options === lookups.providers) return records.proveedores.map(provider => [provider.id, `${provider.id} · ${provider.name} (demo)`]);
  if (options === lookups.clients) return records.clientes.map(client => [client.id, `${client.id} · ${client.name} (demo)`]);
  if (options === lookups.users) return records.usuarios.map(user => [user.id, `${user.id} · ${user.name} (demo)`]);
  if (options === lookups.roles) return records.roles.map(role => [role.id, `${role.id} · ${role.name} (demo)`]);
  if (options === lookups.purchases) return records.compras.map(purchase => [purchase.id, `${purchase.id} · ${purchase.name} (demo)`]);
  if (options === lookups.invoices) return records.facturas.map(invoice => [invoice.id, `${invoice.id} · ${invoice.name} (demo)`]);
  return options;
}

function renderLineItems(view, row) {
  const configForLines = detailConfig[view];
  const items = row?.items?.length ? row.items : [{}];
  return `<fieldset class="line-items full"><legend>${clean(configForLines.title)}</legend><div class="line-items-list">${items.map(item => renderLineItem(view, item)).join("")}</div><button class="button button-outline add-line" type="button">Agregar producto</button><p class="field-help">Detalle y cálculos únicamente locales; el servidor deberá validar relaciones, importes y reglas de negocio.</p></fieldset>`;
}

function openForm(kind, view = state.view, row = null) {
  dialogOpener = document.activeElement;
  dialogContext = { mode: row ? "edit" : "create", view, row };
  const fields = fieldsByView[view] || [];
  document.querySelector("#dialog-title").textContent = kind;
  document.querySelector("#dialog-eyebrow").textContent = `${row ? "EDITAR" : "NUEVO REGISTRO"} · ${pageMeta[view].title.toUpperCase()}`;
  document.querySelector("#dialog-submit").hidden = false;
  document.querySelector("#dialog-submit").textContent = row ? "Guardar cambios" : kind.startsWith("Registrar") ? "Registrar ajuste" : "Guardar registro";
  document.querySelector("#dialog-form .dialog-actions [value='cancel']").textContent = "Cancelar";
  document.querySelector(".dialog-note").textContent = "Integración API aún no conectada. Valores, relaciones e importes son demostrativos y se pierden al recargar; IDs reales los asignará el servidor.";
  const content = document.querySelector("#dialog-content");
  const stateWarning = view === "facturas"
    ? "Desfase documentado: este registro local queda Pendiente, pero ESTADO_FAC tiene DEFAULT PAG. No existe contrato que confirme pago automáticamente; la API debe definirlo."
    : view === "usuarios"
      ? "La invitación local no activa una cuenta. Aunque ESTADO_USR tiene DEFAULT ACT, alta de credenciales/activación debe depender del flujo seguro de API."
      : "";
  content.innerHTML = fields.map(field => renderField(field, row, view)).join("") + (detailConfig[view] ? renderLineItems(view, row) : "") +
    `<p class="schema-note full">Referencias con etiqueta “demo” son IDs de muestra, no claves de base de datos. Estados visuales no garantizan códigos permitidos; confirmar contrato y permisos del servidor.${stateWarning ? ` ${clean(stateWarning)}` : ""}</p>`;
  content.onclick = event => {
    if (event.target.closest(".add-line")) {
      content.querySelector(".line-items-list").insertAdjacentHTML("beforeend", renderLineItem(view));
      const count = content.querySelector("#field-productCount");
      if (count) count.value = content.querySelectorAll(".line-item-row").length;
      updateEstimate(view);
    }
    if (event.target.closest(".remove-line")) {
      const rows = content.querySelectorAll(".line-item-row");
      if (rows.length > 1) event.target.closest(".line-item-row").remove();
      const count = content.querySelector("#field-productCount");
      if (count) count.value = content.querySelectorAll(".line-item-row").length;
      updateEstimate(view);
    }
  };
  content.oninput = () => updateEstimate(view);
  content.onchange = event => {
    if (event.target.matches('select[name="line-productId"]')) {
      content.querySelectorAll('select[name="line-productId"]').forEach(select => select.setCustomValidity(""));
    }
    updateEstimate(view);
  };
  if (["compras", "ventas", "facturas"].includes(view)) {
    content.insertAdjacentHTML("beforeend", '<p class="estimate-note full" id="estimate-note" aria-live="polite"></p>');
    updateEstimate(view);
  }
  dialog.showModal();
  content.querySelector("input,select,textarea")?.focus();
}

function updateEstimate(view) {
  const summary = document.querySelector("#estimate-note");
  if (!summary) return;
  const subtotal = [...document.querySelectorAll('.line-item-row input[name="line-unitPrice"]')].reduce((sum, input, index) => {
    const quantity = Number(document.querySelectorAll('.line-item-row input[name="line-quantity"]')[index]?.value || 0);
    return sum + quantity * Number(input.value || 0);
  }, 0);
  const discount = Number(document.querySelector("#field-discount")?.value || 0);
  const tax = roundMoney(Math.max(0, subtotal - discount) * 0.15);
  const taxField = document.querySelector("#field-tax");
  if (taxField) taxField.value = tax.toFixed(2);
  summary.textContent = `Estimación local (no fiscal): subtotal ${formatMoney(subtotal)} · IVA estimado al 15% ${formatMoney(tax)} · descuento ${formatMoney(discount)} · total ${formatMoney(subtotal + tax - discount)}.`;
}

function roundMoney(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function isValidEcuadorianId(value) {
  if (!/^\d{10}$/.test(value)) return false;
  const province = Number(value.slice(0, 2));
  if (province < 1 || province > 24 || Number(value[2]) > 5) return false;
  const sum = [...value.slice(0, 9)].reduce((total, digit, index) => {
    const weighted = Number(digit) * (index % 2 === 0 ? 2 : 1);
    return total + (weighted > 9 ? weighted - 9 : weighted);
  }, 0);
  return (10 - sum % 10) % 10 === Number(value[9]);
}

function isValidEcuadorianRuc(value) {
  if (!/^\d{13}$/.test(value) || value.slice(10) === "000") return false;
  const province = Number(value.slice(0, 2));
  const thirdDigit = Number(value[2]);
  if (province < 1 || province > 24) return false;
  if (thirdDigit < 6) return isValidEcuadorianId(value.slice(0, 10));
  const weights = thirdDigit === 6 ? [3, 2, 7, 6, 5, 4, 3, 2] : thirdDigit === 9 ? [4, 3, 2, 7, 6, 5, 4, 3, 2] : null;
  if (!weights) return false;
  const checkDigitIndex = weights.length;
  const remainder = value.slice(0, checkDigitIndex).split("").reduce((sum, digit, index) => sum + Number(digit) * weights[index], 0) % 11;
  const checkDigit = remainder === 0 ? 0 : 11 - remainder;
  return checkDigit === Number(value[checkDigitIndex]);
}

function openDetail(view, row) {
  dialogOpener = document.activeElement;
  dialogContext = { mode: "view", view, row };
  document.querySelector("#dialog-title").textContent = `Detalle: ${row.name}`;
  document.querySelector("#dialog-eyebrow").textContent = `LECTURA · ${pageMeta[view].title.toUpperCase()}`;
  document.querySelector("#dialog-submit").hidden = true;
  document.querySelector("#dialog-form .dialog-actions [value='cancel']").textContent = "Cerrar";
  document.querySelector(".dialog-note").textContent = "Datos de demostración locales. La integración API aún no está conectada; cambios no persisten al recargar.";
  const excluded = new Set(["icon", "tone"]);
  document.querySelector("#dialog-content").innerHTML = `<dl class="record-details">${Object.entries(row).filter(([key, value]) => !excluded.has(key) && value !== "" && value != null).map(([key, value]) => {
    const display = key === "items" && Array.isArray(value)
      ? value.map(item => `${item.productId || "Producto"} · cantidad ${item.quantity || item.delivered || 0}${item.unitPrice ? ` · ${formatMoney(item.unitPrice)}` : ""}`).join("; ")
      : Array.isArray(value) ? value.join(", ") : typeof value === "object" ? JSON.stringify(value) : value;
    return `<div><dt>${clean(key === "state" ? "Estado visual" : key)}</dt><dd>${clean(display)}</dd></div>`;
  }).join("")}</dl>`;
  dialog.showModal();
}

function nextId(view) {
  const prefixes = { productos: "PR", inventario: "INV", compras: "OC", proveedores: "PRV", recepciones: "REC", ventas: "VEN", facturas: "FAC", entregas: "ENT", clientes: "CLI", usuarios: "USR", roles: "ROL", auditoria: "LOG" };
  const prefix = prefixes[view];
  const largest = (records[view] || []).reduce((max, row) => {
    const match = row.id.match(new RegExp(`^(?:LOCAL-)?${prefix}-(\\d+)$`));
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);
  return `LOCAL-${prefix}-${String(largest + 1).padStart(prefix === "PR" || prefix === "VEN" ? 4 : 3, "0")}`;
}

function recordFromForm(view, data, existing) {
  const base = existing ? { ...existing } : { id: nextId(view), state: "Activo" };
  const items = [...document.querySelectorAll("#dialog-content .line-item-row")].map(row => Object.fromEntries([...row.querySelectorAll("[name^='line-']")].map(input => [input.name.replace("line-", ""), input.value])));
  if (view === "productos") {
    const photos = data.photos.split(/\r?\n/).map(line => line.trim()).filter(Boolean).map((line, index) => {
      const [url, order] = line.split("|").map(part => part.trim());
      return { url, order: order ? Number(order) : index + 1 };
    });
    const category = lookups.categories.find(([id]) => id === data.categoryId)?.[1].split(" · ")[1].replace(" (demo)", "") || "";
    return { ...base, name: data.name, category, categoryId: data.categoryId, shelfId: data.shelfId, brandId: data.brandId, purchaseUnit: data.purchaseUnit, saleUnit: data.saleUnit, cost: Number(data.cost), price: Number(data.price), stock: Number(data.stock), openingBalance: Number(data.openingBalance), incomeQty: Number(data.incomeQty), outgoingQty: Number(data.outgoingQty), adjustmentQty: Number(data.adjustmentQty), detail: data.detail, material: data.material, size: data.size, color: data.color, warranty: data.warranty, photos, icon: existing?.icon || "📦", tone: existing?.tone || "green" };
  }
  if (view === "inventario") {
    items.forEach(item => {
      const product = records.productos.find(productRow => productRow.id === item.productId);
      if (!product) return;
      const quantity = Number(item.quantity || 0);
      const result = Number(item.adjustedQuantity || 0);
      product.stock = data.movementType === "Corrección" ? result : Math.max(0, product.stock + quantity * (data.movementType === "Egreso" ? -1 : 1));
      const inventory = records.inventario.find(inventoryRow => inventoryRow.id === product.id);
      if (inventory) {
        inventory.stock = product.stock;
        inventory.movement = `${data.movementType} · ${data.description}`;
        inventory.state = product.stock === 0 ? "Agotado" : product.stock <= inventory.min ? product.stock < inventory.min ? "Crítico" : "Stock bajo" : "Disponible";
      }
    });
    const firstProduct = records.productos.find(productRow => productRow.id === items[0]?.productId);
    return { ...base, name: data.description, detail: `${items.length} productos · ${data.movementType}`, userId: data.userId, date: data.dateTime, items, quantity: `${items.length} productos`, movement: `${data.movementType} · ${data.description}`, state: "Registrado localmente", icon: firstProduct?.icon };
  }
  if (view === "compras") {
    const supplier = records.proveedores.find(record => record.id === data.providerId);
    const subtotal = sumLineItems(items);
    const tax = Number(data.tax || 0);
    return { ...base, name: supplier?.name || "Proveedor demo", providerId: data.providerId, date: data.dateTime, deliveryDate: data.deliveryDate, detail: `${data.providerId} · ${items.length} productos`, items, subtotal, tax, total: subtotal + tax, state: existing?.state || "Pendiente" };
  }
  if (view === "proveedores") return { ...base, name: data.name, ruc: data.ruc, detail: `RUC ${data.ruc} · ${data.cityId}`, category: existing?.category || "General", phone: data.phone, mobile: data.mobile, contact: data.email, address: data.address, cityId: data.cityId, state: existing?.state || "Activo" };
  if (view === "recepciones") {
    const purchase = records.compras.find(record => record.id === data.purchaseId);
    const received = items.reduce((sum, item) => sum + Number(item.received || 0), 0);
    return { ...base, name: data.purchaseId, purchaseId: data.purchaseId, detail: data.description || `Recepción de ${purchase?.name || "compra demo"}`, date: data.dateTime, productCount: Number(data.productCount), items, quantity: `${received} uds. recibidas`, state: existing?.state || "Recepción local" };
  }
  if (view === "ventas" || view === "facturas") {
    const client = records.clientes.find(record => record.id === data.clientId);
    const subtotal = sumLineItems(items);
    const tax = Number(data.tax || 0);
    const discount = view === "facturas" ? Number(data.discount || 0) : 0;
    const total = subtotal + tax - discount;
    return { ...base, name: client?.name || "Cliente demo", clientId: data.clientId, userId: data.userId, detail: `${data.payment} · ${items.length} productos`, date: data.dateTime, payment: data.payment, subtotal, tax, discount, items, total, state: existing?.state || (view === "facturas" ? "Pendiente" : "Pagada") };
  }
  if (view === "entregas") {
    const invoice = records.facturas.find(record => record.id === data.invoiceId);
    return { ...base, name: invoice?.name || "Cliente demo", invoiceId: data.invoiceId, detail: data.description, date: data.dateTime, productCount: Number(data.productCount), quantity: `${items.reduce((sum, item) => sum + Number(item.delivered || 0), 0)} uds.`, items, state: existing?.state || "Programada localmente" };
  }
  if (view === "clientes") return { ...base, name: data.name, detail: `${data.email || "Sin correo"} · ${data.cityId}`, icon: initials(data.name), orders: existing?.orders || 0, spend: existing?.spend || 0, state: existing?.state || "Activo", phone: data.phone, mobile: data.mobile, document: data.document, email: data.email, address: data.address, cityId: data.cityId, creditLimit: Number(data.creditLimit || 0), customerDiscount: Number(data.customerDiscount || 0), userId: data.userId || null };
  if (view === "usuarios") {
    const role = records.roles.find(record => record.id === data.roleId);
    return { ...base, name: `${data.firstName} ${data.lastName}`, username: data.username, firstName: data.firstName, lastName: data.lastName, email: data.email, detail: `${data.email} · Invitación local sin credenciales`, icon: initials(`${data.firstName} ${data.lastName}`), role: role?.name || "Rol demo", roleId: data.roleId, requirePasswordChange: data.requirePasswordChange === "on", failedAttempts: existing?.failedAttempts || 0, lastAccess: existing?.lastAccess || "Sin acceso registrado", state: existing?.state || "Invitación local", phone: data.phone };
  }
  if (view === "roles") {
    const permissions = lookups.permissions.filter(([id]) => data.permissionIds.includes(id)).map(([, label]) => label);
    return { ...base, name: data.name, detail: data.detail, users: existing?.users || "0 usuarios", permissionIds: data.permissionIds, permissions, state: existing?.state || "Activo" };
  }
  return base;
}

function sumLineItems(items) {
  return items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.unitPrice || 0), 0);
}

function roleModule(role) {
  const permissions = (role.permissions || []).join(" ").toLocaleLowerCase("es");
  if (permissions.includes("administrar") || permissions.includes("acceso completo")) return "Acceso completo";
  if (permissions.includes("ventas") || permissions.includes("facturas") || permissions.includes("clientes")) return "Ventas y clientes";
  if (permissions.includes("compras") || permissions.includes("recepciones")) return "Compras y recepciones";
  return "Catálogo e inventario";
}

function permissionsForModule(module) {
  return {
    "Ventas y clientes": ["Ventas: consultar", "Facturas: consultar", "Clientes: consultar"],
    "Catálogo e inventario": ["Productos: consultar", "Inventario: consultar"],
    "Compras y recepciones": ["Compras: consultar", "Recepciones: consultar"],
    "Acceso completo": ["Todos los módulos: administrar"]
  }[module] || [`${module}: consultar`];
}

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();
}

function addAudit(action, view, row) {
  const actor = records.usuarios.find(user => user.id === row.userId)?.name || "Valentina Ruiz";
  const detail = row.items?.length
    ? `${row.detail} · ${row.items.map(item => `${item.productId}: ${item.quantity || item.delivered || 0} uds.`).join(", ")}`
    : row.detail;
  const log = { id: nextId("auditoria"), name: actor, userId: row.userId || null, items: row.items || [], detail: `${pageMeta[view].title.toUpperCase()} · ${action} · ${detail || ""}`, date: new Intl.DateTimeFormat("es-EC", { dateStyle: "short", timeStyle: "medium" }).format(new Date()), target: `${row.id} · ${row.name}`, state: action };
  records.auditoria.push(log);
}

document.querySelector("#primary-nav").addEventListener("click", event => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  state.view = button.dataset.view;
  state.query = "";
  state.status = "Todos los estados";
  render();
  closeMenu();
  document.querySelector("#view-root h1")?.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-navigate]");
  if (nav) {
    state.view = nav.dataset.navigate;
    state.query = "";
    state.status = "Todos los estados";
    render();
    document.querySelector("#view-root h1")?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const action = event.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "create") openForm(action.dataset.kind);
    if (action.dataset.action === "export") notify("Reporte de demostración listo para revisión.");
    if (action.dataset.action === "reset-filters") {
      state.query = "";
      state.status = "Todos los estados";
      render();
    }
    return;
  }
  const recordAction = event.target.closest("[data-record-action]");
  if (recordAction) {
    const { recordAction: operation, recordView: view, recordId: id } = recordAction.dataset;
    const row = records[view]?.find(item => item.id === id);
    if (!row) return;
    if (operation === "view") openDetail(view, row);
    if (operation === "edit" && editableViews.has(view) && !["anulado", "inactivo"].includes(String(row.state).toLocaleLowerCase("es"))) {
      openForm(`Editar ${pageMeta[view].title.toLocaleLowerCase("es")}`, view, row);
    }
    if (operation === "annul" && editableViews.has(view) && !["anulado", "inactivo"].includes(String(row.state).toLocaleLowerCase("es"))) {
      const confirmed = window.confirm(`¿Anular "${row.name}" (${row.id}) en esta demostración? La fila se conservará con etiqueta visual «Anulado». Esta acción local no representa una transición aprobada por el servidor.`);
      if (!confirmed) return;
      row.state = "Anulado";
      addAudit("Anular", view, row);
      state.status = "Todos los estados";
      render();
      const focusTarget = root.querySelector(`[data-record-id="${clean(id)}"]`);
      if (focusTarget) focusTarget.focus();
      notify(`${row.id} se marcó como Anulado. Cambio local en memoria; al recargar se perderá.`);
    }
    return;
  }
});

document.querySelector("#dialog-form").addEventListener("submit", event => {
  if (event.submitter?.id !== "dialog-submit") return;
  event.preventDefault();
  if (!dialogContext || dialogContext.mode === "view") return;
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  data.permissionIds = new FormData(event.currentTarget).getAll("permissionIds");
  const { mode, view, row: existing } = dialogContext;
  const duplicateField = view === "proveedores" ? "ruc"
    : view === "clientes" ? "document"
    : view === "usuarios" ? "email" : null;
  const candidates = records[view] || [];
  const localDuplicates = candidates.some(record => {
    if (record === existing) return false;
    if (duplicateField === "ruc") return (record.ruc || record.detail?.match(/RUC ([^ ·]+)/)?.[1]) === data.ruc;
    if (duplicateField === "document") return record.document === data.document;
    if (duplicateField === "email") {
      const email = record.email || record.detail?.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/)?.[0];
      return email === data.email || (record.username || email?.split("@")[0]) === data.username;
    }
    return false;
  });
  if (localDuplicates) {
    const uniqueControl = form.elements[duplicateField === "email" ? "email" : duplicateField];
    uniqueControl.setCustomValidity("Este valor ya aparece en la muestra local; la restricción real también se verifica en la base de datos.");
    form.reportValidity();
    uniqueControl.addEventListener("input", () => uniqueControl.setCustomValidity(""), { once: true });
    return;
  }
  if (view === "proveedores") {
    const previousRuc = existing?.ruc || existing?.detail?.match(/RUC ([^ ·]+)/)?.[1] || "";
    if (data.ruc !== previousRuc && !isValidEcuadorianRuc(data.ruc)) {
      const field = form.elements.ruc;
      field.setCustomValidity("Ingresa un RUC ecuatoriano válido, con dígito verificador correcto y establecimiento distinto de 000.");
      form.reportValidity();
      field.addEventListener("input", () => field.setCustomValidity(""), { once: true });
      return;
    }
  }
  if (view === "clientes") {
    const previousDocument = existing?.document || existing?.detail?.match(/(?:Cédula|RUC) ([^ ·]+)/)?.[1] || "";
    if (data.document !== previousDocument && !isValidEcuadorianId(data.document) && !isValidEcuadorianRuc(data.document)) {
      const field = form.elements.document;
      field.setCustomValidity("Ingresa una cédula o RUC ecuatoriano válido, con dígito verificador correcto.");
      form.reportValidity();
      field.addEventListener("input", () => field.setCustomValidity(""), { once: true });
      return;
    }
  }
  if (view === "productos") {
    const invalidPhoto = data.photos.split(/\r?\n/).map(line => line.trim()).filter(Boolean).some((line, index) => {
      const [url, order] = line.split("|").map(part => part.trim());
      const photoOrder = order ? Number(order) : index + 1;
      const invalidOrder = !Number.isInteger(photoOrder) || photoOrder < 1 || photoOrder > 2147483647;
      try { return invalidOrder || url.length > 255 || !["http:", "https:"].includes(new URL(url).protocol); }
      catch { return true; }
    });
    if (invalidPhoto) {
      const photos = form.elements.photos;
      photos.setCustomValidity("Cada foto debe ser una URL http(s) de hasta 255 caracteres; usa una línea por foto y un orden entero positivo de hasta 2147483647 después de |.");
      form.reportValidity();
      photos.addEventListener("input", () => photos.setCustomValidity(""), { once: true });
      return;
    }
  }
  const items = [...document.querySelectorAll("#dialog-content .line-item-row")].map(row => Object.fromEntries([...row.querySelectorAll("[name^='line-']")].map(input => [input.name.replace("line-", ""), input.value])));
  const productSelects = [...form.querySelectorAll('.line-item-row select[name="line-productId"]')];
  const productIds = productSelects.map(select => select.value);
  const duplicateProductIndex = productIds.findIndex((productId, index) => productIds.indexOf(productId) !== index);
  if (duplicateProductIndex !== -1) {
    productSelects[duplicateProductIndex].setCustomValidity("No repitas un producto en el mismo detalle; combina sus cantidades en una sola línea.");
    form.reportValidity();
    return;
  }
  const subtotalEstimate = sumLineItems(items);
  if (["compras", "ventas", "facturas"].includes(view)) {
    const discount = view === "facturas" ? Number(data.discount || 0) : 0;
    if (subtotalEstimate > 99999.99 || subtotalEstimate + Number(data.tax || 0) - discount > 99999.99) {
      const amountField = form.elements.tax;
      amountField.setCustomValidity("El importe de muestra supera NUMERIC(7,2); reduce el detalle o el IVA.");
      form.reportValidity();
      amountField.addEventListener("input", () => amountField.setCustomValidity(""), { once: true });
      return;
    }
    if (view === "facturas" && discount > subtotalEstimate) {
      const discountField = form.elements.discount;
      discountField.setCustomValidity("El descuento de muestra no puede superar el subtotal calculado.");
      form.reportValidity();
      discountField.addEventListener("input", () => discountField.setCustomValidity(""), { once: true });
      return;
    }
  }
  const countField = view === "recepciones" || view === "entregas" ? form.elements.productCount : null;
  if (countField && Number(countField.value) !== items.length) {
    countField.setCustomValidity("Indica la misma cantidad de productos que filas en el detalle.");
    form.reportValidity();
    countField.addEventListener("input", () => countField.setCustomValidity(""), { once: true });
    return;
  }
  const updated = recordFromForm(view, data, existing);
  let affected = updated;
  if (mode === "edit") Object.assign(existing, updated);
  else if (view !== "inventario") records[view].push(updated);
  affected = mode === "edit" ? existing : updated;
  addAudit(mode === "edit" ? "Actualizar" : "Crear", view, affected);
  state.query = "";
  state.status = "Todos los estados";
  render();
  const focusId = view === "inventario" ? updated.items?.[0]?.productId : affected.id;
  dialogOpener = root.querySelector(`[data-record-id="${clean(focusId)}"]`) || root.querySelector('[data-action="create"]') || dialogOpener;
  dialog.close();
  notify(`${mode === "edit" ? "Se actualizaron" : "Se creó"} ${affected.id}. Solo en memoria local; al recargar se perderá.`);
});
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  if (dialogOpener?.isConnected) dialogOpener.focus();
  dialogOpener = null;
  dialogContext = null;
});
document.querySelector("#notifications-button").addEventListener("click", () => notify("Tienes 3 recepciones pendientes de revisión."));

const sidebar = document.querySelector("#sidebar");
const menuToggle = document.querySelector("#menu-toggle");
const scrim = document.querySelector("#sidebar-scrim");
function closeMenu() {
  sidebar.classList.remove("open");
  scrim.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  sidebar.inert = window.matchMedia("(max-width: 760px)").matches;
}
menuToggle.addEventListener("click", () => {
  const opened = sidebar.classList.toggle("open");
  scrim.hidden = !opened;
  menuToggle.setAttribute("aria-expanded", String(opened));
  sidebar.inert = !opened && window.matchMedia("(max-width: 760px)").matches;
});
scrim.addEventListener("click", () => {
  closeMenu();
  menuToggle.focus();
});
window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 760px)").matches) {
    sidebar.inert = false;
    sidebar.classList.remove("open");
    scrim.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  } else if (!sidebar.classList.contains("open")) {
    sidebar.inert = true;
  }
});
sidebar.inert = window.matchMedia("(max-width: 760px)").matches;
document.addEventListener("keydown", event => {
  if (dialog.open && event.key === "Tab") {
    const focusable = [...dialog.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])")]
      .filter(element => !element.hidden && element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (first && last && (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement)))) {
      event.preventDefault();
      last.focus();
    } else if (first && last && (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement)))) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if (event.key !== "Escape") return;
  if (dialog.open) dialog.close();
  const menuWasOpen = sidebar.classList.contains("open");
  closeMenu();
  if (menuWasOpen) menuToggle.focus();
});
document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("es-EC", { day: "numeric", month: "short", year: "numeric" }).format(new Date());
if (!window.APEX_API_MODE) render();
}
