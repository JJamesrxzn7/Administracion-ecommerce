(() => {
  const api = window.ApexAdminApi;
  const root = document.getElementById("view-root");
  const nav = document.getElementById("primary-nav");
  const authScreen = document.getElementById("auth-screen");
  const appShell = document.getElementById("app-shell");
  const loginForm = document.getElementById("admin-login-form");
  const registerForm = document.getElementById("admin-register-form");
  const authTitle = document.getElementById("auth-title");
  const authDescription = document.getElementById("auth-description");
  const profile = document.getElementById("admin-profile");
  const banner = document.querySelector(".demo-banner");
  const footer = document.querySelector(".app-footer");
  const inviteDialog = document.getElementById("admin-invite-dialog");
  const inviteForm = document.getElementById("admin-invite-form");
  const inviteError = document.getElementById("admin-invite-error");
  const inviteResult = document.getElementById("admin-invite-result");
  const inviteLink = document.getElementById("admin-invite-link");
  const labels = Object.fromEntries([...nav.querySelectorAll("[data-view]")].map((item) => [item.dataset.view, item.textContent.trim()]));
  const resources = {
    productos: "products",
    inventario: "inventory",
    compras: "purchases",
    proveedores: "suppliers",
    recepciones: "receipts",
    ventas: "sales",
    facturas: "invoices",
    entregas: "deliveries",
    clientes: "customers",
    usuarios: "users",
    roles: "roles",
    auditoria: "audit",
    pedidos: "orders"
  };
  let user = null;
  let activeView = "resumen";

  banner.textContent = "Panel conectado a la API. Se muestran únicamente registros devueltos por la base de datos configurada; módulos y acciones no disponibles se indican como tales.";
  footer.lastElementChild.textContent = "Datos en vivo desde la API · Las acciones están limitadas según el esquema disponible";
  const ordersNav = document.createElement("button");
  ordersNav.className = "nav-item";
  ordersNav.dataset.view = "pedidos";
  ordersNav.textContent = "Pedidos web";
  nav.append(ordersNav);
  profile.id = "admin-profile";
  profile.hidden = true;
  profile.setAttribute("aria-label", "Cerrar sesión administrativa");
  const profileName = profile.querySelector(".profile-copy strong");
  const profileRole = profile.querySelector(".profile-copy small");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menu-toggle");
  const scrim = document.getElementById("sidebar-scrim");
  document.getElementById("today-label").textContent = new Intl.DateTimeFormat("es-EC", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date());

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
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    if (!mobile) {
      sidebar.inert = false;
      sidebar.classList.remove("open");
      scrim.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    } else if (!sidebar.classList.contains("open")) {
      sidebar.inert = true;
    }
  });
  sidebar.inert = window.matchMedia("(max-width: 760px)").matches;

  function showMessage(message, kind = "info") {
    const box = document.createElement("p");
    box.className = `api-message api-message-${kind}`;
    box.setAttribute("role", kind === "error" ? "alert" : "status");
    box.textContent = message;
    root.replaceChildren(box);
  }

  function setHeading(title, description = "") {
    const heading = document.createElement("div");
    heading.className = "api-heading";
    const titleElement = document.createElement("h1");
    titleElement.tabIndex = -1;
    titleElement.textContent = title;
    heading.append(titleElement);
    if (description) {
      const subtitle = document.createElement("p");
      subtitle.textContent = description;
      heading.append(subtitle);
    }
    return heading;
  }

  function formatValue(value) {
    if (value === null || value === undefined || value === "") return "—";
    if (typeof value === "number") return value.toLocaleString("es-EC");
    if (typeof value === "object") return JSON.stringify(value);
    return String(value).trim();
  }

  function makeTable(items) {
    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "api-message";
      empty.textContent = "La API no devolvió registros para este módulo.";
      return empty;
    }
    const columns = [...new Set(items.flatMap((item) => Object.keys(item)))];
    const table = document.createElement("table");
    table.className = "api-table";
    const head = table.createTHead().insertRow();
    columns.forEach((column) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = column.replaceAll("_", " ");
      head.append(th);
    });
    const body = table.createTBody();
    items.forEach((item) => {
      const row = body.insertRow();
      columns.forEach((column) => {
        const cell = row.insertCell();
        cell.textContent = formatValue(item[column]);
      });
    });
    return table;
  }

  async function loadSummary() {
    root.setAttribute("aria-busy", "true");
    root.replaceChildren();
    try {
      const summary = await api.request("/admin/summary");
      const fragment = document.createDocumentFragment();
      fragment.append(setHeading("Resumen", "Indicadores consultados directamente a la API."));
      const grid = document.createElement("div");
      grid.className = "api-metrics";
      Object.entries(summary).forEach(([key, value]) => {
        const card = document.createElement("article");
        card.className = "api-metric";
        const label = document.createElement("span");
        label.textContent = key.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);
        const number = document.createElement("strong");
        number.textContent = formatValue(value);
        card.append(label, number);
        grid.append(card);
      });
      fragment.append(grid);
      const note = document.createElement("p");
      note.className = "api-message";
      note.textContent = "Las métricas disponibles provienen de las tablas existentes. Pedidos web de demostración no representan pagos ni facturas.";
      fragment.append(note);
      root.replaceChildren(fragment);
    } catch (error) {
      showMessage(`No se pudo cargar el resumen desde la API: ${error.message}`, "error");
      if (error.message.includes("Administrator role required")) await logout();
    } finally {
      root.setAttribute("aria-busy", "false");
    }
  }

  async function loadResource(view, offset = 0) {
    activeView = view;
    document.getElementById("breadcrumb-current").textContent = view === "pedidos" ? "Pedidos web" : labels[view];
    root.setAttribute("aria-busy", "true");
    root.replaceChildren(setHeading(view === "pedidos" ? "Pedidos web" : labels[view], "Cargando registros de la API…"));
    try {
      const limit = 100;
      const data = await api.request(`/admin/resources/${resources[view]}?limit=${limit}&offset=${offset}`);
      const fragment = document.createDocumentFragment();
      fragment.append(setHeading(
        view === "pedidos" ? "Pedidos web" : labels[view],
        `${data.total} registro(s) · Mostrando ${data.total ? offset + 1 : 0}–${Math.min(offset + data.items.length, data.total)} · Solo datos de la base de datos.`
      ));
      if (view === "usuarios") {
        const actions = document.createElement("div");
        actions.className = "api-heading-actions";
        const inviteButton = document.createElement("button");
        inviteButton.className = "button button-primary";
        inviteButton.type = "button";
        inviteButton.textContent = "Invitar administrador";
        inviteButton.addEventListener("click", openInviteDialog);
        actions.append(inviteButton);
        fragment.append(actions);
      }
      if (view === "roles") {
        const note = document.createElement("p");
        note.className = "api-message";
        note.textContent = "Este esquema expone roles; la administración de permisos por rol no está disponible en esta interfaz.";
        fragment.append(note);
      }
      if (view === "productos" || view === "inventario") {
        const note = document.createElement("p");
        note.className = "api-message";
        note.textContent = "Edición disponible vía API para campos de producto y stock mínimo; ajustes de inventario se mantienen fuera del panel hasta definir el flujo de auditoría.";
        fragment.append(note);
      }
      fragment.append(makeTable(data.items));
      if (data.total > limit) {
        const pagination = document.createElement("nav");
        pagination.className = "api-pagination";
        pagination.setAttribute("aria-label", "Paginación de registros");
        const previous = document.createElement("button");
        previous.type = "button";
        previous.textContent = "Anterior";
        previous.disabled = offset === 0;
        previous.addEventListener("click", () => loadResource(view, Math.max(0, offset - limit)));
        const next = document.createElement("button");
        next.type = "button";
        next.textContent = "Siguiente";
        next.disabled = offset + data.items.length >= data.total;
        next.addEventListener("click", () => loadResource(view, offset + limit));
        pagination.append(previous, next);
        fragment.append(pagination);
      }
      root.replaceChildren(fragment);
    } catch (error) {
      showMessage(`No se pudieron cargar registros de ${labels[view] || "pedidos"}: ${error.message}`, "error");
      if (error.message.includes("Administrator role required")) await logout();
    } finally {
      root.setAttribute("aria-busy", "false");
    }
  }

  function updateUser(current) {
    user = current;
    profile.hidden = !current;
    if (current) {
      profileName.textContent = current.name;
      profileRole.textContent = (current.roles || []).join(", ");
      profile.setAttribute("aria-label", `Cerrar sesión de ${current.name}`);
    }
  }

  function isAdministrator(current) {
    const adminRoles = new Set(["admin", "administrador", "superadministrador"]);
    return (current?.roles || []).some(role => adminRoles.has(String(role).trim().toLowerCase()));
  }

  function setAuthMode(mode) {
    const registering = mode === "register";
    document.getElementById("admin-login-panel").hidden = registering;
    document.getElementById("admin-register-panel").hidden = !registering;
    document.getElementById("login-tab").classList.toggle("active", !registering);
    document.getElementById("register-tab").classList.toggle("active", registering);
    document.getElementById("login-tab").setAttribute("aria-selected", String(!registering));
    document.getElementById("register-tab").setAttribute("aria-selected", String(registering));
    authTitle.textContent = registering ? "Activa tu acceso" : "Bienvenido de vuelta";
    authDescription.textContent = registering
      ? "Completa tu registro con el código de invitación de un administrador."
      : "Ingresa con tu cuenta administrativa para continuar.";
    document.getElementById("admin-login-error").hidden = true;
    document.getElementById("admin-register-error").hidden = true;
  }

  function showAuth(mode = "login", message = "") {
    updateUser(null);
    appShell.hidden = true;
    authScreen.hidden = false;
    setAuthMode(mode);
    if (message) {
      const error = document.getElementById(mode === "register" ? "admin-register-error" : "admin-login-error");
      error.textContent = message;
      error.hidden = false;
    }
  }

  async function enterDashboard(current) {
    updateUser(current);
    authScreen.hidden = true;
    appShell.hidden = false;
    closeMenu();
    let maintenanceError = null;
    try {
      await api.request("/admin/orders/release-expired", { method: "POST" });
    } catch (error) {
      maintenanceError = error;
    }
    await loadSummary();
    if (maintenanceError) {
      const warning = document.createElement("p");
      warning.className = "api-message api-message-error";
      warning.setAttribute("role", "alert");
      warning.textContent = `No se pudieron liberar las reservas vencidas: ${maintenanceError.message}`;
      root.append(warning);
    }
  }

  async function logout() {
    let logoutError = null;
    try {
      await api.logout();
    } catch (error) {
      logoutError = error;
    }
    showAuth("login", logoutError
      ? `Se cerró la sesión local, pero no se pudo confirmar su revocación en el servidor: ${logoutError.message}`
      : "");
  }

  async function authenticate(event) {
    event.preventDefault();
    const button = loginForm.querySelector('[type="submit"]');
    const errorBox = document.getElementById("admin-login-error");
    errorBox.hidden = true;
    button.disabled = true;
    try {
      const current = await api.login(loginForm.elements.email.value.trim(), loginForm.elements.password.value);
      if (!isAdministrator(current)) {
        await api.logout();
        throw new Error("Esta cuenta no tiene permisos de administración.");
      }
      await enterDashboard(current);
    } catch (error) {
      let logoutError = null;
      try {
        await api.logout();
      } catch (signoutError) {
        logoutError = signoutError;
      }
      errorBox.textContent = logoutError
        ? `${error.message} No se pudo confirmar la revocación de la sesión: ${logoutError.message}`
        : error.message;
      errorBox.hidden = false;
    } finally {
      button.disabled = false;
    }
  }

  async function registerAdmin(event) {
    event.preventDefault();
    const errorBox = document.getElementById("admin-register-error");
    const button = registerForm.querySelector('[type="submit"]');
    const password = registerForm.elements.password.value;
    const confirmation = registerForm.elements.confirm_password.value;
    errorBox.hidden = true;
    if (password !== confirmation) {
      errorBox.textContent = "Las contraseñas no coinciden.";
      errorBox.hidden = false;
      registerForm.elements.confirm_password.focus();
      return;
    }
    button.disabled = true;
    try {
      const current = await api.registerAdmin(
        registerForm.elements.invitation_token.value.trim(),
        registerForm.elements.full_name.value.trim(),
        password
      );
      if (!isAdministrator(current)) {
        await api.logout();
        throw new Error("La invitación no corresponde a un rol administrativo.");
      }
      registerForm.reset();
      await enterDashboard(current);
    } catch (error) {
      let logoutError = null;
      try {
        await api.logout();
      } catch (signoutError) {
        logoutError = signoutError;
      }
      errorBox.textContent = logoutError
        ? `${error.message} No se pudo confirmar la revocación de la sesión: ${logoutError.message}`
        : error.message;
      errorBox.hidden = false;
    } finally {
      button.disabled = false;
    }
  }

  function openInviteDialog() {
    inviteForm.reset();
    inviteError.hidden = true;
    inviteResult.hidden = true;
    inviteLink.value = "";
    inviteDialog.showModal();
    document.getElementById("admin-invite-email").focus();
  }

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    event.stopImmediatePropagation();
    nav.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
    if (!user) {
      activeView = button.dataset.view;
      showAuth("login", "Inicia sesión para consultar los datos administrativos.");
      return;
    }
    closeMenu();
    if (button.dataset.view === "resumen") loadSummary();
    else loadResource(button.dataset.view);
  }, true);

  loginForm.addEventListener("submit", authenticate);
  registerForm.addEventListener("submit", registerAdmin);
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      setAuthMode(button.dataset.authMode);
      document.getElementById(button.dataset.authMode === "register" ? "admin-invitation-token" : "admin-email").focus();
    });
  });
  document.querySelector(".auth-switcher").addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const mode = event.key === "ArrowRight" ? "register" : "login";
    setAuthMode(mode);
    document.getElementById(mode === "register" ? "register-tab" : "login-tab").focus();
  });
  profile.addEventListener("click", () => { void logout(); });
  document.querySelector("#notifications-button").hidden = true;

  inviteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    inviteError.hidden = true;
    inviteResult.hidden = true;
    const button = document.getElementById("admin-invite-submit");
    button.disabled = true;
    try {
      const invitation = await api.createAdminInvitation(inviteForm.elements.email.value.trim());
      const url = new URL(window.location.href);
      url.hash = new URLSearchParams({ invite: invitation.invitation_token }).toString();
      inviteLink.value = url.toString();
      document.getElementById("admin-invite-expiry").textContent =
        `Vence: ${new Intl.DateTimeFormat("es-EC", { dateStyle: "medium", timeStyle: "short" }).format(new Date(invitation.expires_at))}`;
      inviteResult.hidden = false;
    } catch (error) {
      inviteError.textContent = error.message;
      inviteError.hidden = false;
    } finally {
      button.disabled = false;
    }
  });
  document.getElementById("admin-invite-copy").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(inviteLink.value);
      button.textContent = "Enlace copiado";
    } catch (error) {
      inviteError.textContent = `No se pudo copiar automáticamente. Copia el enlace manualmente: ${error.message}`;
      inviteError.hidden = false;
    }
  });
  document.getElementById("admin-invite-cancel").addEventListener("click", () => inviteDialog.close());
  document.getElementById("admin-invite-close").addEventListener("click", () => inviteDialog.close());
  inviteDialog.addEventListener("close", () => {
    inviteForm.reset();
    inviteResult.hidden = true;
    inviteError.hidden = true;
    inviteLink.value = "";
    document.getElementById("admin-invite-copy").textContent = "Copiar enlace";
  });

  const invitationToken = new URLSearchParams(window.location.hash.slice(1)).get("invite");
  if (invitationToken) {
    registerForm.elements.invitation_token.value = invitationToken;
    setAuthMode("register");
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  } else {
    setAuthMode("login");
  }

  async function initialize() {
    if (!api.token()) {
      showAuth(invitationToken ? "register" : "login");
      return;
    }
    try {
      const current = await api.request("/auth/me");
      if (!isAdministrator(current)) {
        await api.logout();
        showAuth("login", "La sesión no pertenece a una cuenta administrativa.");
        return;
      }
      await enterDashboard(current);
    } catch (error) {
      let logoutError = null;
      try {
        await api.logout();
      } catch (signoutError) {
        logoutError = signoutError;
      }
      showAuth("login", logoutError
        ? `No se pudo validar la sesión: ${error.message}. La sesión local fue eliminada, pero no se confirmó su revocación en el servidor.`
        : "La sesión administrativa expiró. Inicia sesión nuevamente.");
    }
  }

  void initialize();
})();
