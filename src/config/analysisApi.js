import axios from 'axios';
import { BASE_URL } from './endpoints';

export async function fetchInventoryAnalysis({ low = 5, high = 500 } = {}) {
  const url = `${BASE_URL}inventory/analysis?low_threshold=${low}&high_threshold=${high}`;
  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  return res.data;
}
