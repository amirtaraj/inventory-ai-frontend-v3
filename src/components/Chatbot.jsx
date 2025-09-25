import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import ChatIcon from '@mui/icons-material/Chat'
import Paper from '@mui/material/Paper'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { chatApi } from '../config/analysisApi'

export default function Chatbot({ small }){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  async function handleSend(){
    if (!text) return
    const t = text
    setMessages(m => [...m, { from: 'user', text: t }])
    setText('')
    try {
      const res = await chatApi(t)
      setMessages(m => [...m, { from: 'bot', text: res.answer || 'No reply' }])
    } catch {
      setMessages(m => [...m, { from: 'bot', text: 'No reply' }])
    }
  }

  return (
    <div>
      {!open && (
        <Fab color="primary" aria-label="chat" onClick={() => setOpen(true)} sx={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1400 }}>
          <ChatIcon />
        </Fab>
      )}
      {open && (
        <Paper elevation={8}
          sx={{
            position: 'fixed',
            right: 24,
            bottom: 24,
            width: 340,
            maxWidth: '90vw',
            height: 440,
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1500,
            borderRadius: 3,
            boxShadow: 8,
            p: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px 8px 16px', borderBottom: '1px solid #eee' }}>
            <span style={{ fontWeight: 600 }}>Assistant</span>
            <IconButton size="small" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
          </div>
          <List sx={{ flex: 1, maxHeight: 320, overflow: 'auto', px: 2, py: 1 }}>
            {messages.map((m, i) => (
              <ListItem key={i} sx={{ justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start', p: 0, mb: 1 }}>
                <ListItemText primary={m.text} sx={{ textAlign: m.from === 'user' ? 'right' : 'left', bgcolor: m.from === 'user' ? '#e3f2fd' : '#f5f5f5', borderRadius: 2, px: 1, py: 0.5, maxWidth: 220, display: 'inline-block' }} />
              </ListItem>
            ))}
          </List>
          <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid #eee' }}>
            <TextField fullWidth value={text} onChange={e => setText(e.target.value)} placeholder="Ask the AI..." size="small" onKeyDown={e => { if (e.key === 'Enter') handleSend(); }} />
            <IconButton color="primary" onClick={handleSend}><SendIcon /></IconButton>
          </div>
        </Paper>
      )}
    </div>
  )
}
