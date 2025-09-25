import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export default function ProductCard({ p, onOpen }){
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="220" image={p.image_url} alt={p.name} />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">{p.name}</Typography>
        <Typography variant="body2" color="text.secondary">{p.masterCategory} • {p.subCategory}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onOpen(p)}>View</Button>
      </CardActions>
    </Card>
  )
}
