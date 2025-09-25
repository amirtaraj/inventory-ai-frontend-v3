// Fetch category data samples (matches curl)
export async function fetchCategoryDataSamples() {
  const url = `${BASE_URL}inventory/category_data_samples`;
  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  return res.data;
}
// Inventory samples API (matches curl)
export async function fetchInventorySamples({ low = 5, high = 500 } = {}) {
  const url = `${BASE_URL}inventory/samples?low_threshold=${low}&high_threshold=${high}`;
  const res = await axios.get(url, {
    headers: { accept: 'application/json' }
  });
  console.log('fetchInventorySamples API response:', res.data);
  return res.data;
}
// Chat API (matches curl)
export async function chatApi(query) {
  const url = `${BASE_URL}chat`;
  const res = await axios.post(url, { query }, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res.data;
}
// Image search API (matches curl)
export async function searchImageApi(file) {
  const url = `${BASE_URL}search/image`;
  const fd = new FormData();
  fd.append('file', file);
  const res = await axios.post(url, fd, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
}
// Text search API (matches curl)
export async function searchTextApi(query) {
  const url = `${BASE_URL}search/text`;
  const res = await axios.post(url, { query }, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res.data;
}
import axios from 'axios';
import { BASE_URL } from './endpoints';

export async function fetchInventoryAnalysis({ low = 5, high = 500 } = {}) {
  const url = `${BASE_URL}inventory/analysis?low_threshold=${low}&high_threshold=${high}`;
  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  return res.data;
}
