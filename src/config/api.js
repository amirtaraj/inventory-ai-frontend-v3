import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

// Text search
export async function searchText(query) {
  try {
    const res = await client.post('/search/text', { query })
    return res.data
  } catch (err) {
    console.warn('searchText failed', err.message)
  return { results: [], recommendations: [] }
  }
}

// Image search (multipart)
export async function searchImage(file) {
  try {
    const fd = new FormData()
    fd.append('file', file)
    const res = await axios.post((BASE_URL || '') + '/search/image', fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res.data
  } catch (err) {
    console.warn('searchImage failed', err.message)
  return { results: [], recommendations: [] }
  }
}

// Chat
export async function chat(query) {
  try {
    const res = await client.post('/chat', { query })
    return res.data
  } catch (err) {
    console.warn('chat failed', err.message)
    return { answer: 'Chat unavailable — mock reply.', products: [] }
  }
}

// Inventory fetch
export async function getInventory(product_id) {
  try {
    const res = await client.get(`/inventory/${product_id}`)
    return res.data
  } catch (err) {
    console.warn('getInventory failed', err.message)
    return null
  }
}

export { BASE_URL }
