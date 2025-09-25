import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function TopAppBar(){
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="primary">Inventory AI</Typography>
          <Typography variant="caption" display="block" color="text.secondary">AI-powered inventory & discovery</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
