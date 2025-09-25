import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopAppBar from '../components/TopAppBar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function HomePage(){
  const nav = useNavigate()
  return (
    <div>
      <TopAppBar />
      <Container sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography variant="h3">Welcome to Inventory AI</Typography>
        <Typography color="text.secondary">Choose a role to continue</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={() => nav('/auth?role=consumer')}>Consumer</Button>
          <Button variant="contained" color="success" onClick={() => nav('/auth?role=owner')}>Owner</Button>
        </Box>
        <Typography variant="caption" color="text.secondary">Note: signup/login is in-memory for demo.</Typography>
      </Container>
    </div>
  )
}
