const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

// ---- Auth ----
export async function registerTeam(data: {
  name: string;
  captainName: string;
  engineerName?: string;
  email: string;
  password: string;
  category: string;
}) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Registration failed');
  }
  return res.json();
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Login failed');
  }
  return res.json();
}

// ---- Public ----
export async function fetchStandings() {
  const res = await fetch(`${API_BASE}/public/standings`);
  return res.json();
}

export async function fetchNews() {
  const res = await fetch(`${API_BASE}/public/news`);
  return res.json();
}

export async function fetchVault() {
  const res = await fetch(`${API_BASE}/public/vault`);
  return res.json();
}

export async function fetchRules() {
  const res = await fetch(`${API_BASE}/public/rules`);
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${API_BASE}/public/categories`);
  return res.json();
}

// ---- Admin ----
function authHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function fetchTeams() {
  const res = await fetch(`${API_BASE}/admin/teams`, { headers: authHeaders() });
  return res.json();
}

export async function updateTeamScore(id: string, score: number) {
  const res = await fetch(`${API_BASE}/admin/teams/${id}/score`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ score }),
  });
  return res.json();
}

export async function createNews(data: { title: string; content: string; imageUrl?: string }) {
  const res = await fetch(`${API_BASE}/admin/news`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteNews(id: string) {
  const res = await fetch(`${API_BASE}/admin/news/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  return res.json();
}

export async function createVaultItem(data: { title: string; type: string; url: string }) {
  const res = await fetch(`${API_BASE}/admin/vault`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteVaultItem(id: string) {
  const res = await fetch(`${API_BASE}/admin/vault/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  return res.json();
}
