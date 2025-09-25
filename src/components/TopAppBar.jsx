import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function TopAppBar(){
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link component={RouterLink} to="/" underline="none" color="primary" sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
            TEK Inventory AI
          </Link>
          <Typography variant="caption" display="block" color="text.secondary">AI-powered inventory & discovery</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
