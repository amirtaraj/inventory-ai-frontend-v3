import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default function ActivityAlerts({ items }){
  const groups = {
    High: items.slice(0,3),
    Medium: items.slice(3,6),
    Low: items.slice(6,9)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      {Object.entries(groups).map(([k, arr]) => (
        <Paper key={k} sx={{ p:2 }}>
          <Typography variant="subtitle1">{k} Alerts</Typography>
          {arr.map(a => (
            <Typography key={a.id} variant="body2" sx={{ mt:1 }}>{a.name}</Typography>
          ))}
        </Paper>
      ))}
    </div>
  )
}
