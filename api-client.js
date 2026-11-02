(() => {
  window.APEX_API_MODE = true;
  const base = (window.APEX_API_BASE || "http://127.0.0.1:8000/api/v1").replace(/\/+$/, "");
  const tokenKey = "apex-admin-api-token-v1";

  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/json");
    if (options.body !== undefined) headers.set("Content-Type", "application/json");
    const token = sessionStorage.getItem(tokenKey);
    if (token) headers.set("Authorization", `Bearer ${token}`);
    const response = await fetch(`${base}${path}`, { ...options, headers });
    const data = response.status === 204 ? null : await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) sessionStorage.removeItem(tokenKey);
      throw new Error(typeof data?.detail === "string" ? data.detail : "No se pudo completar la solicitud.");
    }
    return data;
  }

  async function login(email, password) {
    const result = await request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    sessionStorage.setItem(tokenKey, result.access_token);
    return result.user;
  }

  async function registerAdmin(invitationToken, fullName, password) {
    const result = await request("/auth/admin/register", {
      method: "POST",
      body: JSON.stringify({
        invitation_token: invitationToken,
        full_name: fullName,
        password
      })
    });
    sessionStorage.setItem(tokenKey, result.access_token);
    return result.user;
  }

  async function createAdminInvitation(email) {
    return request("/auth/admin/invitations", {
      method: "POST",
      body: JSON.stringify({ email })
    });
  }

  async function logout() {
    try {
      if (sessionStorage.getItem(tokenKey)) await request("/auth/session", { method: "DELETE" });
    } finally {
      sessionStorage.removeItem(tokenKey);
    }
  }

  window.ApexAdminApi = Object.freeze({
    request,
    login,
    registerAdmin,
    createAdminInvitation,
    logout,
    token: () => sessionStorage.getItem(tokenKey)
  });
})();
