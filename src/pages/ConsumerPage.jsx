import React, { useState, useMemo } from 'react'
import TopAppBar from '../components/TopAppBar'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ProductCard from '../components/ProductCard'
import ProductDialog from '../components/ProductDialog'
import Chatbot from '../components/Chatbot'
import { searchTextApi, searchImageApi } from '../config/analysisApi';

export default function ConsumerPage(){
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [queryText, setQueryText] = useState('')
  const [recs, setRecs] = useState([])
  const [selected, setSelected] = useState(null)

  async function onTextSearch(){
    setQueryText(query);
    const res = await searchTextApi(query);
    setResults(res.results || []);
    setRecs(res.recommendations || []);
  }

  async function onImageSearch(e){
    const file = e.target.files[0];
    if (!file) return;
    setQueryText('');
    const res = await searchImageApi(file);
    setResults(res.results || []);
    setRecs(res.recommendations || []);
  }

  return (
    <div>
      <TopAppBar />
      <Container sx={{ mt: 4 }}>
        <h2>Consumer — Search Inventory</h2>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <TextField fullWidth placeholder="Search by text..." value={query} onChange={e=>setQuery(e.target.value)} />
          <Button variant="contained" onClick={onTextSearch}>Search</Button>
          <Button variant="outlined" component="label">Upload Image<input hidden accept="image/*" type="file" onChange={onImageSearch} /></Button>
        </div>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          {results.filter(product => {
            if (!queryText.trim()) return true;
            const q = queryText.toLowerCase();
            return product.name.toLowerCase().includes(q) ||
              (product.masterCategory && product.masterCategory.toLowerCase().includes(q)) ||
              (product.subCategory && product.subCategory.toLowerCase().includes(q));
          }).map(r => (
            <Grid item xs={12} sm={6} md={4} key={r.id}>
              <ProductCard p={r} onOpen={setSelected} />
            </Grid>
          ))}
        </Grid>

        {recs.length>0 && (
          <div style={{ marginTop: 20 }}>
            <h3>Recommendations</h3>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 0' }}>
              {recs.map(r => (
                <div key={r.id} style={{ minWidth: 180 }}>
                  <img src={r.image_url} alt={r.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8 }} />
                  <div style={{ marginTop: 8 }}>{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </Container>

      <ProductDialog open={!!selected} onClose={()=>setSelected(null)} product={selected} />
      <Chatbot />
    </div>
  )
}
