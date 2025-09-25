import React, { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import TopAppBar from '../components/TopAppBar'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { signup, login } from '../utils/auth'

export default function AuthPage(){
  const [mode, setMode] = useState('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [params] = useSearchParams()
  const nav = useNavigate()
  const role = params.get('role') || 'consumer'

  const handleSignup = () => {
    const ok = signup({ email, password, role })
    if (ok) { setMsg('Signup success — you can now login'); setMode('login') }
    else setMsg('Email exists — choose another')
  }

  const handleLogin = () => {
    const ok = login(email, password)
    if (ok) nav(role === 'owner' ? '/owner' : '/consumer')
    else setMsg('Invalid credentials')
  }

  return (
    <div>
      <TopAppBar />
      <Container sx={{ mt: 6, maxWidth: 480 }}>
        <Typography variant="h5">{role.toUpperCase()} — {mode}</Typography>
        <Box sx={{ mt:2, display: 'flex', flexDirection: 'column', gap:2 }}>
          <TextField label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <TextField label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <Box sx={{ display:'flex', gap:2 }}>
            {mode==='signup' ? (
              <Button variant="contained" onClick={handleSignup}>Sign up</Button>
            ) : (
              <Button variant="contained" onClick={handleLogin}>Login</Button>
            )}
            <Button onClick={()=>setMode(mode==='signup'?'login':'signup')}>Switch</Button>
          </Box>
          {msg && <Typography color="error">{msg}</Typography>}
        </Box>
      </Container>
    </div>
  )
}
