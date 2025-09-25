import React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

export default function AlertIcon({ severity = 'low', ...props }) {
  if (severity === 'high') return <ErrorIcon color="error" {...props} />;
  if (severity === 'medium') return <WarningAmberIcon color="warning" {...props} />;
  return <InfoIcon color="info" {...props} />;
}
