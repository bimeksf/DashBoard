import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  LinearProgress,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import VisaIcon from '@mui/icons-material/CreditCard'; // Placeholder for Visa icon
import PayPalIcon from '@mui/icons-material/Payment'; // Placeholder for PayPal icon
import ApplePayIcon from '@mui/icons-material/Apple'; // Placeholder for Apple Pay icon

// Sample data similar to the image
const users = [
  {
    name: 'Yiorgos Avraamu',
    status: 'New',
    registered: 'Jan 1, 2023',
    country: '🇺🇸',
    usage: 50,
    period: 'Jun 11, 2023 - Jul 10, 2023',
    payment: 'Mastercard',
    activity: '10 sec ago',
  },
  {
    name: 'Avram Tarasios',
    status: 'Recurring',
    registered: 'Jan 1, 2023',
    country: '🇧🇷',
    usage: 22,
    period: 'Jun 11, 2023 - Jul 10, 2023',
    payment: 'Visa',
    activity: '5 minutes ago',
  },
  {
    name: 'Quintin Ed',
    status: 'New',
    registered: 'Jan 1, 2023',
    country: '🇮🇳',
    usage: 74,
    period: 'Jun 11, 2023 - Jul 10, 2023',
    payment: 'Stripe',
    activity: '1 hour ago',
  },
  {
    name: 'Enéas Kwadwo',
    status: 'New',
    registered: 'Jan 1, 2023',
    country: '🇫🇷',
    usage: 98,
    period: 'Jun 11, 2023 - Jul 10, 2023',
    payment: 'PayPal',
    activity: 'Last month',
  },
  {
    name: 'Agapetus Tadeáš',
    status: 'New',
    registered: 'Jan 1, 2023',
    country: '🇪🇸',
    usage: 22,
    period: 'Jun 11, 2023 - Jul 10, 2023',
    payment: 'Apple Pay',
    activity: 'Last week',
  },
  {
    name: 'Friderik Dávid',
    status: 'New',
    registered: 'Jan 1, 2023',
    country: '🇵🇱',
    usage: 42,
    period: 'Jun 11, 2023 - Jul 10, 2023',
    payment: 'Unknown',
    activity: 'Last week',
  },
];

// Custom styles for the table
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#1e2a44',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: '#ffffff',
  borderBottom: '1px solid #2e3b55',
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  color: '#b0b7c3',
  fontWeight: 'bold',
  borderBottom: '1px solid #2e3b55',
}));

const UsageProgress = styled(LinearProgress)(({ theme, value }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: '#2e3b55',
  '& .MuiLinearProgress-bar': {
    backgroundColor:
      value <= 30 ? '#4caf50' : value <= 70 ? '#ffca28' : '#f44336',
  },
}));

const UserTable = () => {
  const getPaymentIcon = (method) => {
    switch (method) {
      case 'Visa':
        return <VisaIcon />;
      case 'PayPal':
        return <PayPalIcon />;
      case 'Apple Pay':
        return <ApplePayIcon />;
      default:
        return <Typography variant="body2">{method}</Typography>;
    }
  };

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>User</StyledTableHeadCell>
            <StyledTableHeadCell>Country</StyledTableHeadCell>
            <StyledTableHeadCell>Usage</StyledTableHeadCell>
            <StyledTableHeadCell>Payment Method</StyledTableHeadCell>
            <StyledTableHeadCell>Activity</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1">{user.name}</Typography>
                    <Typography variant="caption" color="#b0b7c3">
                      {user.status} | Registered: {user.registered}
                    </Typography>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body2">{user.country}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Box display="flex" alignItems="center">
                  <UsageProgress
                    variant="determinate"
                    value={user.usage}
                    sx={{ width: '100px', mr: 1 }}
                  />
                  <Typography variant="body2">{`${user.usage}%`}</Typography>
                </Box>
                <Typography variant="caption" color="#b0b7c3">
                  {user.period}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>{getPaymentIcon(user.payment)}</StyledTableCell>
              <StyledTableCell>
                <Typography variant="body2">Last login</Typography>
                <Typography variant="caption" color="#b0b7c3">
                  {user.activity}
                </Typography>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default UserTable;