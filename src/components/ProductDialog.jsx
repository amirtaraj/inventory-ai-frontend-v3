import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function ProductDialog({ open, onClose, product }){
  if (!product) return null
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <img src={product.image_url} alt="img" style={{ width: 260, height: 340, objectFit: 'cover', borderRadius: 8 }} />
          <div>
            <Typography variant="subtitle1">Category: {product.masterCategory} / {product.subCategory}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Color: {product.baseColour}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Usage: {product.usage}</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>Season: {product.season} • Year: {product.year}</Typography>
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
