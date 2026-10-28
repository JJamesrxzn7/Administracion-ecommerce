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
    { id: "REC-0091", name: "OC-0252 · Distribuidora FitPro", detail: "8 productos · Guía 001-0912", date: "Hoy, 09:18", quantity: "32 / 46 uds.", state: "En revisión" },
    { id: "REC-0090", name: "OC-0253 · Andes Sport Import", detail: "4 productos · Recepción parcial", date: "Hoy, 08:42", quantity: "12 / 20 uds.", state: "En revisión" },
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
    { id: "USR-001", name: "Valentina Ruiz", detail: "valentina@apexsports.ec · Último acceso hoy", icon: "VR", role: "Administradora", state: "Activo" },
    { id: "USR-002", name: "Mateo Cárdenas", detail: "mateo@apexsports.ec · Último acceso hoy", icon: "MC", role: "Jefe de tienda", state: "Activo" },
    { id: "USR-003", name: "Sofía Almeida", detail: "sofia@apexsports.ec · Último acceso ayer", icon: "SA", role: "Inventario", state: "Activo" },
    { id: "USR-004", name: "Nicolás Freire", detail: "nfreire@apexsports.ec · Sin acceso reciente", icon: "NF", role: "Ventas", state: "Pendiente" }
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
  auditoria: { title: "Registro de actividad", columns: ["Usuario / módulo", "Fecha y hora", "Registro afectado", "Acción"], action: "Exportar bitácora", count: "5 eventos recientes · datos de ejemplo" }
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

function heading(view) {
  const meta = pageMeta[view];
  const summary = view === "resumen";
  return `<div class="page-heading"><div><p class="eyebrow">${summary ? "MARTES · 28 OCTUBRE 2026" : "OPERACIÓN / " + clean(meta.title.toUpperCase())}</p><h1 tabindex="-1">${clean(meta.title)}${summary ? ", Valentina" : ""}</h1><p>${clean(meta.subtitle)}</p></div><div class="heading-actions"><button class="button ${summary ? "button-outline" : "button-lime"}" data-action="${summary ? "export" : "create"}" data-kind="${clean(meta.action)}"><span class="button-symbol" aria-hidden="true">${summary ? "↓" : "+"}</span>${clean(meta.action)}</button></div></div>`;
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
  return `<section class="panel table-panel"><div class="panel-header"><div><h2>Últimas ventas</h2><p class="panel-subtitle">Actividad comercial más reciente</p></div><button class="text-link" data-navigate="ventas">Ver todas →</button></div><div class="table-wrap"><table><thead><tr><th>Factura</th><th>Cliente</th><th>Fecha</th><th>Total</th><th>Estado</th><th></th></tr></thead><tbody>${sales.map(r => `<tr><td><strong>${r.id}</strong></td><td>${clean(r.name)}</td><td>${clean(r.date)}</td><td><strong>${formatMoney(r.total)}</strong></td><td>${badge(r.state)}</td><td><button class="row-action" aria-label="Ver ${r.id}" data-detail="${r.id}">···</button></td></tr>`).join("")}</tbody></table></div></section>`;
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
    productos: [primary, clean(row.category), formatMoney(row.price), row.stock === 0 ? `<span class="status danger">Agotado</span>` : clean(row.stock), badge(row.state)],
    inventario: [primary, clean(row.category), `<strong>${row.stock} uds.</strong>`, `${row.min} uds.`, clean(row.movement), badge(row.state)],
    compras: [primary, clean(row.date), `<strong>${formatMoney(row.total)}</strong>`, badge(row.state)],
    proveedores: [primary, clean(row.category), clean(row.phone), clean(row.contact), badge(row.state)],
    recepciones: [primary, clean(row.date), clean(row.quantity), badge(row.state)],
    ventas: [primary, clean(row.date), `<strong>${formatMoney(row.total)}</strong>`, badge(row.state)],
    facturas: [primary, clean(row.date), `<strong>${formatMoney(row.total)}</strong>`, badge(row.state)],
    entregas: [primary, clean(row.date), clean(row.quantity), badge(row.state)],
    clientes: [primary, `<strong>${row.orders}</strong> órdenes`, formatMoney(row.spend), badge(row.state)],
    usuarios: [primary, clean(row.role), clean(row.detail.split("·").pop()), badge(row.state)],
    auditoria: [primary, clean(row.date), clean(row.target), badge(row.state)]
  };
  return generic[view] || [];
}

function activeRecords() {
  const q = state.query.trim().toLocaleLowerCase("es");
  return (records[state.view] || []).filter(r => {
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
    usuarios: "4 usuarios", auditoria: "5 eventos de muestra"
  }[view];
  const needsFilter = statuses.length > 1;
  const list = rows.length ? `<div class="table-wrap"><table><thead><tr>${meta.columns.map(c => `<th>${clean(c)}</th>`).join("")}<th>Acciones</th></tr></thead><tbody>${rows.map(row => `<tr>${rowCells(view, row).map(cell => `<td>${cell}</td>`).join("")}<td><button class="row-action" data-detail="${clean(row.id)}" aria-label="Ver detalle de ${clean(row.id)}">···</button></td></tr>`).join("")}</tbody></table></div><div class="table-footer"><span>${rows.length} filas de ejemplo · total operativo: ${totalLabel}</span><span class="sample-data-note">Muestra local de demostración</span></div>` : `<div class="empty-state"><span class="empty-icon" aria-hidden="true">⌕</span><h3>No encontramos resultados</h3><p>Prueba con otro término o cambia los filtros para ver más registros.</p><button class="button button-outline" data-action="reset-filters">Limpiar filtros</button></div>`;
  return `${heading(view)}${recordSummary(view)}<div class="section-heading"><div><h2>${clean(meta.title)}</h2><p>${clean(meta.count)}</p></div></div><div class="toolbar"><div class="toolbar-filters"><label class="search-field"><span aria-hidden="true">⌕</span><input id="record-search" type="search" value="${clean(state.query)}" placeholder="Buscar por nombre o código…" aria-label="Buscar en ${clean(pageMeta[view].title)}"></label>${needsFilter ? `<label><span class="sr-only">Filtrar por estado</span><select id="status-filter" class="filter-select"><option>Todos los estados</option>${statuses.map(s => `<option ${state.status === s ? "selected" : ""}>${clean(s)}</option>`).join("")}</select></label>` : ""}<span class="result-count" aria-live="polite">${rows.length} resultados</span></div></div><section class="panel table-panel" aria-label="${clean(meta.title)}">${list}</section>`;
}

function rolesView() {
  const roles = [
    ["Administradora", "Acceso completo a la operación Apex Sports.", "4 usuarios", ["Productos: editar", "Inventario: ajustar", "Compras: aprobar", "Usuarios: administrar", "Auditoría: consultar"]],
    ["Jefe de tienda", "Gestiona ventas, clientes y coordinación de tienda.", "1 usuario", ["Ventas: crear", "Facturas: emitir", "Clientes: editar", "Entregas: gestionar"]],
    ["Inventario", "Control de existencias y recepción de mercadería.", "1 usuario", ["Productos: consultar", "Inventario: ajustar", "Compras: consultar", "Recepciones: registrar"]],
    ["Ventas", "Atención al cliente y registro de ventas.", "2 usuarios", ["Ventas: crear", "Facturas: consultar", "Clientes: consultar", "Entregas: consultar"]]
  ];
  return `${heading("roles")}<div class="summary-strip"><div><span>Roles configurados</span><strong>4 perfiles</strong></div><div><span>Permisos del sistema</span><strong>28 permisos</strong></div><div><span>Asignaciones activas</span><strong>8 usuarios</strong></div></div><div class="section-heading"><div><h2>Perfiles de acceso</h2><p>Permisos agrupados por responsabilidad</p></div></div><div class="split-layout">${roles.map(r => `<article class="panel role-card"><div class="role-card-head"><span class="role-mark">◇</span><div><h3>${r[0]}</h3><p>${r[1]} · ${r[2]}</p></div><button class="row-action" aria-label="Opciones de rol ${r[0]}" data-detail="${r[0]}">···</button></div><div class="permission-list">${r[3].map(p => `<span class="permission-chip">${p}</span>`).join("")}</div></article>`).join("")}</div><p class="dialog-note">Matriz demostrativa basada en las entidades ROLES, PERMISOS, USUARIOSxROLES y ROLESxPERMISOS.</p>`;
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
  productos: [["Nombre del producto", "text"], ["Categoría", "select", ["Fútbol", "Running", "Fitness", "Tenis", "Outdoor", "Ropa deportiva"]], ["Precio de venta", "number"], ["Existencias iniciales", "number"], ["Descripción", "textarea"]],
  inventario: [["Producto", "select", ["Zapatilla Velocity Pro · PR-1048", "Balón Match Elite · PR-1047", "Guantes Grip X · PR-1046"]], ["Tipo de ajuste", "select", ["Ingreso", "Egreso", "Corrección"]], ["Cantidad", "number"], ["Motivo", "textarea"]],
  compras: [["Proveedor", "select", ["Andes Sport Import", "Distribuidora FitPro", "Mundo Outdoor Cía."]], ["Fecha de entrega", "date"], ["Producto", "text"], ["Cantidad", "number"], ["Notas", "textarea"]],
  proveedores: [["Nombre comercial", "text"], ["RUC / cédula", "text"], ["Correo electrónico", "email"], ["Teléfono", "tel"], ["Dirección", "text"]],
  recepciones: [["Orden de compra", "select", ["OC-0252 · Distribuidora FitPro", "OC-0253 · Andes Sport Import"]], ["Fecha de recepción", "date"], ["Unidades recibidas", "number"], ["Observaciones", "textarea"]],
  ventas: [["Cliente", "select", ["Camila Torres", "Diego Paredes", "María José León", "Venta de mostrador"]], ["Forma de pago", "select", ["Tarjeta", "Efectivo", "Transferencia"]], ["Producto", "text"], ["Cantidad", "number"]],
  facturas: [["Cliente", "select", ["Camila Torres", "Diego Paredes", "María José León"]], ["Forma de pago", "select", ["Tarjeta", "Efectivo", "Transferencia"]], ["Subtotal", "number"], ["Descuento (%)", "number"]],
  entregas: [["Factura asociada", "select", ["FAC-1838 · Camila Torres", "FAC-1836 · María José León"]], ["Fecha de entrega", "date"], ["Dirección", "text"], ["Notas para el despacho", "textarea"]],
  clientes: [["Nombre completo", "text"], ["Cédula / RUC", "text"], ["Correo electrónico", "email"], ["Teléfono", "tel"], ["Ciudad", "select", ["Quito", "Guayaquil", "Cuenca", "Ambato"]], ["Dirección", "text"]],
  usuarios: [["Nombre completo", "text"], ["Correo institucional", "email"], ["Rol asignado", "select", ["Jefe de tienda", "Inventario", "Ventas"]], ["Teléfono", "tel"]],
  roles: [["Nombre del rol", "text"], ["Descripción", "textarea"], ["Módulos permitidos", "select", ["Ventas y clientes", "Catálogo e inventario", "Compras y recepciones", "Acceso completo"]]]
};

function openForm(kind) {
  dialogOpener = document.activeElement;
  const fields = fieldsByView[state.view] || [];
  document.querySelector("#dialog-title").textContent = kind;
  document.querySelector("#dialog-eyebrow").textContent = `NUEVO REGISTRO · ${pageMeta[state.view].title.toUpperCase()}`;
  document.querySelector("#dialog-submit").textContent = kind.startsWith("Registrar") ? "Registrar ajuste" : "Guardar en demostración";
  const content = document.querySelector("#dialog-content");
  content.innerHTML = fields.length ? fields.map(([label, type, options]) => {
    const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const input = type === "textarea" ? `<textarea id="${id}" name="${id}" placeholder="${clean(label)}"></textarea>` : type === "select" ? `<select id="${id}" name="${id}">${options.map(option => `<option>${clean(option)}</option>`).join("")}</select>` : `<input id="${id}" name="${id}" type="${type}" placeholder="${type === "number" ? "0" : clean(label)}" ${type === "number" ? 'min="0" step="any"' : ""}>`;
    return `<div class="form-field ${type === "textarea" || label === "Dirección" ? "full" : ""}"><label for="${id}">${clean(label)}</label>${input}</div>`;
  }).join("") : `<div class="form-field full"><label for="report-note">Alcance del reporte</label><select id="report-note"><option>Resumen de los últimos 7 días</option><option>Mes actual</option></select></div><p class="dialog-note">La exportación es solo visual en esta demostración local.</p>`;
  dialog.showModal();
  const first = content.querySelector("input,select,textarea");
  if (first) first.focus();
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
  const detail = event.target.closest("[data-detail]");
  if (detail) notify(`Detalle de ${detail.dataset.detail} · acción simulada.`);
});

document.querySelector("#dialog-form").addEventListener("submit", event => {
  if (event.submitter?.id !== "dialog-submit") return;
  event.preventDefault();
  dialog.close();
  notify("Acción completada en la demostración. No se guardaron datos.");
});
dialog.addEventListener("close", () => {
  if (dialogOpener?.isConnected) dialogOpener.focus();
  dialogOpener = null;
});
document.querySelector(".banner-close").addEventListener("click", event => event.currentTarget.closest(".demo-banner").remove());
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
  if (event.key !== "Escape") return;
  if (dialog.open) dialog.close();
  const menuWasOpen = sidebar.classList.contains("open");
  closeMenu();
  if (menuWasOpen) menuToggle.focus();
});
document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("es-EC", { day: "numeric", month: "short", year: "numeric" }).format(new Date());
render();
