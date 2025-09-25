import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function HomePage() {
  const nav = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!selectedRole) return;
    setLoading(true);
    setTimeout(() => {
      nav(selectedRole === 'product-owner' ? '/owner' : '/consumer');
    }, 800);
  };

  if (!selectedRole) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: 16 }}>
        <div style={{ width: '100%', maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <InventoryIcon style={{ fontSize: 56, color: '#1976d2', marginBottom: 12 }} />
            <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>TEK Inventory AI</h1>
            <p style={{ color: '#666', fontSize: 18 }}>Choose your access level to continue</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <Card onClick={() => setSelectedRole('product-owner')} sx={{ cursor: 'pointer', transition: '0.2s', '&:hover': { boxShadow: 6, transform: 'scale(1.03)', borderColor: 'primary.main' }, border: 2, borderColor: 'transparent' }}>
              <CardHeader title={<div style={{ textAlign: 'center' }}>
                <BarChartIcon style={{ fontSize: 40, background: 'linear-gradient(90deg,#1976d2,#42a5f5)', color: '#fff', borderRadius: '50%', padding: 12, margin: '0 auto 12px' }} />
                <div style={{ fontSize: 24, fontWeight: 600 }}>Product Owner</div>
              </div>} subheader={<Typography align="center" variant="body2">Access dashboard, analytics, and inventory management tools</Typography>} />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <InventoryIcon color="primary" fontSize="small" />
                  <span style={{ fontSize: 14 }}>Stock level monitoring & alerts</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <BarChartIcon color="primary" fontSize="small" />
                  <span style={{ fontSize: 14 }}>Predictive Analytics</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <GroupIcon color="primary" fontSize="small" />
                  <span style={{ fontSize: 14 }}>Ask Questions on your Inventory</span>
                </Box>
              </CardContent>
            </Card>
            <Card onClick={() => setSelectedRole('consumer')} sx={{ cursor: 'pointer', transition: '0.2s', '&:hover': { boxShadow: 6, transform: 'scale(1.03)', borderColor: 'success.main' }, border: 2, borderColor: 'transparent' }}>
              <CardHeader title={<div style={{ textAlign: 'center' }}>
                <ShoppingBagIcon style={{ fontSize: 40, background: 'linear-gradient(90deg,#43a047,#a5d6a7)', color: '#fff', borderRadius: '50%', padding: 12, margin: '0 auto 12px' }} />
                <div style={{ fontSize: 24, fontWeight: 600 }}>Consumer</div>
              </div>} subheader={<Typography align="center" variant="body2">Browse products, search inventory, and make purchases</Typography>} />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <ShoppingBagIcon color="success" fontSize="small" />
                  <span style={{ fontSize: 14 }}>Product search & discovery</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <InventoryIcon color="success" fontSize="small" />
                  <span style={{ fontSize: 14 }}>Real-time inventory status</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <GroupIcon color="success" fontSize="small" />
                  <span style={{ fontSize: 14 }}>Personalized recommendations</span>
                </Box>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: 16 }}>
      <Card sx={{ width: '100%', maxWidth: 400 }}>
        <CardHeader title={<div style={{ textAlign: 'center' }}>
          {selectedRole === 'product-owner' ? (
            <BarChartIcon style={{ fontSize: 32, background: 'linear-gradient(90deg,#1976d2,#42a5f5)', color: '#fff', borderRadius: '50%', padding: 8, margin: '0 auto 12px' }} />
          ) : (
            <ShoppingBagIcon style={{ fontSize: 32, background: 'linear-gradient(90deg,#43a047,#a5d6a7)', color: '#fff', borderRadius: '50%', padding: 8, margin: '0 auto 12px' }} />
          )}
        </div>} subheader={<Typography align="center" variant="body2">{selectedRole === 'product-owner' ? 'Product Owner Login' : 'Consumer Login'}</Typography>} />
        <CardContent>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Box>
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextField id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} fullWidth required size="small" />
            </Box>
            <Box>
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField id="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} fullWidth required size="small" />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button type="button" variant="outlined" onClick={() => setSelectedRole(null)} fullWidth>Back</Button>
              <Button type="submit" variant={selectedRole === 'product-owner' ? 'contained' : 'outlined'} color={selectedRole === 'product-owner' ? 'primary' : 'success'} fullWidth disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
