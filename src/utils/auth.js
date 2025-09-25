const USERS_KEY = 'inventory_ai_users'
const SESSION_KEY = 'inventory_ai_session'

export function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') } catch { return [] }
}

export function signup({ email, password, role }) {
  const users = loadUsers()
  if (users.find(u => u.email === email)) return false
  users.push({ email, password, role })
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  return true
}

export function login(email, password) {
  const users = loadUsers()
  const u = users.find(x => x.email === email && x.password === password)
  if (!u) return false
  localStorage.setItem(SESSION_KEY, JSON.stringify({ email: u.email, role: u.role }))
  return true
}

export function logout() { localStorage.removeItem(SESSION_KEY) }
export function currentUser() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null') } catch { return null } }
