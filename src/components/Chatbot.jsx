import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import ChatIcon from '@mui/icons-material/Chat'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { chat } from '../config/api'

export default function Chatbot({ small }){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  async function handleSend(){
    if (!text) return
    const t = text
    setMessages(m => [...m, { from: 'user', text: t }])
    setText('')
    const res = await chat(t)
    setMessages(m => [...m, { from: 'bot', text: res.answer || 'No reply' }])
  }

  return (
    <div>
      <Fab color="primary" aria-label="chat" onClick={() => setOpen(true)} sx={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1400 }}>
        <ChatIcon />
      </Fab>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>Assistant</DialogTitle>
        <DialogContent>
          <List sx={{ maxHeight: 300, overflow: 'auto' }}>
            {messages.map((m, i) => (
              <ListItem key={i} sx={{ justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <ListItemText primary={m.text} sx={{ textAlign: m.from === 'user' ? 'right' : 'left' }} />
              </ListItem>
            ))}
          </List>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <TextField fullWidth value={text} onChange={e => setText(e.target.value)} placeholder="Ask the AI..." />
            <IconButton color="primary" onClick={handleSend}><SendIcon /></IconButton>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
