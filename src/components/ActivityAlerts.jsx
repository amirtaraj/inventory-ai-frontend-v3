import React, { useEffect, useState } from 'react'
import { fetchInventorySamples } from '../config/analysisApi';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default function ActivityAlerts() {
  const [alerts, setAlerts] = useState({ low: [], defective: [], overstock: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInventorySamples({ low: 5, high: 500 })
      .then(data => {
        setAlerts({
          low: Array.isArray(data?.low_stock_items) ? data.low_stock_items : [],
          defective: Array.isArray(data?.defective_items) ? data.defective_items : [],
          overstock: Array.isArray(data?.high_stock_items) ? data.high_stock_items : []
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading alerts...</Typography>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      <Paper sx={{ p:2 }}>
        <Typography variant="subtitle1">Low Stock Alerts</Typography>
        {alerts.low.length > 0 ? alerts.low.map(a => (
          <Typography key={a.id} variant="body2" sx={{ mt:1 }}>{a.name}</Typography>
        )) : <Typography variant="body2" color="text.secondary">None</Typography>}
      </Paper>
      <Paper sx={{ p:2 }}>
        <Typography variant="subtitle1">Defective Alerts</Typography>
        {alerts.defective.length > 0 ? alerts.defective.map(a => (
          <Typography key={a.id} variant="body2" sx={{ mt:1 }}>{a.name}</Typography>
        )) : <Typography variant="body2" color="text.secondary">None</Typography>}
      </Paper>
      <Paper sx={{ p:2 }}>
        <Typography variant="subtitle1">Overstock Alerts</Typography>
        {alerts.overstock.length > 0 ? alerts.overstock.map(a => (
          <Typography key={a.id} variant="body2" sx={{ mt:1 }}>{a.name}</Typography>
        )) : <Typography variant="body2" color="text.secondary">None</Typography>}
      </Paper>
    </div>
  )
}
