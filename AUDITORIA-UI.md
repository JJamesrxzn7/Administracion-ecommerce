# Auditoría UI — Apex Sports

## Auditoría general

**Alcance inicial:** revisión de `index.html`, `styles.css` y `app.js` antes del cambio reciente de paleta. Incluye interfaz, accesibilidad estática y comportamientos locales; no incluye pruebas con lector de pantalla ni validación visual en navegador.

La revisión QA previa verificó que el JavaScript cargaba y su sintaxis era correcta; búsqueda y filtro funcionaban, incluido el estado vacío; el diálogo enfocaba el primer campo y Escape restauraba el foco; había skip-link, etiquetas y avisos de estado. La interfaz declara que es una demostración local, no persiste cambios y no se conecta a una API.

La corrección anterior resolvió los cinco hallazgos registrados abajo: el menú lateral es `inert` en móvil cuando está cerrado; al cambiar de vista y al cerrar con Escape se gestiona el foco; búsqueda tiene foco visible; se mejoró el contraste de grises auxiliares; se retiró la paginación visual inerte en vez de simular paginar; y la opción actual de navegación expone `aria-current="page"`. **No se declara aprobación de lector de pantalla: no se probó.**

## Historial de hallazgos

Hallazgos de la auditoría QA/accesibilidad **previa al cambio de paleta**:

| ID / severidad | Archivo / área | Evidencia | Estado |
|---|---|---|---|
| A-01 · P1 | `app.js` / menú lateral móvil | El menú cerrado seguía en el orden de Tab; al elegir una opción, el foco quedaba fuera de vista. | Resuelto: sidebar `inert` bajo 760 px; gestión del foco al cambiar de vista y al cerrar con Escape. |
| A-02 · P2 | `styles.css` / búsqueda | La búsqueda no mostraba foco porque tenía `outline: none`. | Resuelto: foco visible restaurado. |
| A-03 · P2 | `styles.css` / grises auxiliares | Se observaron contrastes de 2.66:1 y 2.79:1 contra superficies. | Resuelto: contraste mejorado en la corrección anterior. |
| A-04 · P2 | `index.html`, `app.js` / paginación | La paginación era solo visual y no realizaba ninguna acción. | Resuelto: elemento inerte retirado, sin simular paginación. |
| A-05 · P2 | `app.js` / navegación | La opción actual no exponía su estado a tecnologías de asistencia. | Resuelto: la opción actual usa `aria-current="page"`. |

## Registro de cambios

### 2026-10-28 — Unificación de paleta de marca

- **Solicitud y motivo:** unificar el panel administrativo con el ecommerce mediante `--azul: #17324d`, `--marfil: #f4f1e8`, `--coral: #a84328`, `--gris: #667581` y `--blanco: #ffffff`, para mantener coherencia de marca entre storefront y administración.
- **Inspección de `styles.css`:** los cinco tokens están definidos en `:root` con los valores solicitados y tienen uso real. Los alias de tinta, canvas, superficie y navegación se enlazan a esos tokens. Se aplican a navegación y opción activa, marca y acentos, botones, fondo general, encabezados y tarjetas/superficies.
- **Ajuste complementario de contraste:** se conserva `--gris: #667581` y se ajusta `--muted` a `#5b6874` para dar mayor contraste a subtítulos auxiliares pequeños sobre marfil. Según los cálculos del implementador, `#5b6874` sobre `#f4f1e8` alcanza 5.06:1 y sobre `#ffffff` 5.71:1. Esos pares superan 4.5:1 matemáticamente; esta cifra no certifica por sí sola el contraste de todos los textos ni de la interfaz renderizada.
- **Ajuste complementario en `index.html`:** `theme-color` ahora es `#17324d`, alineado con `--azul`; motivo: mantener coherente la barra del navegador en dispositivos compatibles. Estado: valor coincidente verificado estáticamente.
- **Estados:** se conservan colores semánticos diferenciados para estados de éxito, advertencia, peligro e información; la paleta de marca no los sustituye.
- **Alcance y honestidad de demo:** el cambio inspeccionado es de interfaz local. `index.html` y `app.js` siguen comunicando demostración, datos no sincronizados y ausencia de API; no hay indicio en esta revisión de que la paleta altere persistencia o integración.
- **Contraste calculado de pares de tokens (WCAG):** azul/blanco 13.13:1; azul/marfil 11.62:1; coral/blanco 6.00:1; coral/marfil 5.31:1; gris/blanco 4.74:1; gris/marfil 4.20:1. Cálculo de luminancia relativa a partir de valores hexadecimales. `--gris` sobre marfil queda bajo 4.5:1 para texto normal si se usa como texto; el ajuste de `--muted` aporta los pares calculados arriba (5.06:1 sobre marfil y 5.71:1 sobre blanco).
- **Riesgos / comprobaciones pendientes:** las razones de contraste indicadas son cálculos matemáticos de pares de colores; falta comprobar en navegador qué color de fondo efectivo se usa detrás de cada subtítulo y revisar los tonos auxiliares que no usan `--muted` (por ejemplo, `.panel-subtitle`, `.eyebrow` y `.metric-foot`). El contraste renderizado de componentes, los estados de foco, la apariencia visual y los puntos de quiebre siguen pendientes de comprobación en navegador; esta actualización no los certifica. La coherencia de `theme-color` permanece resuelta/verificada estáticamente.

### Plantilla para futuras entradas

#### AAAA-MM-DD — Título del cambio

- **Solicitud y motivo:**
- **Archivos / áreas inspeccionadas:**
- **Evidencia y resultado:**
- **Hallazgos / severidad / estado:**
- **Alcance y comprobaciones pendientes:**

**Validación final:** `node --check app.js` — vuelto a ejecutar directamente; finalizó con código de salida 0 y sin errores de sintaxis.
