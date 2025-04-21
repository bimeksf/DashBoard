import React from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Divider,
  styled,
} from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import GoogleIcon from '@mui/icons-material/Google'; // Placeholder for Google icon
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Sample data based on the image
const trafficData = [
  { day: 'Monday', newClients: 20, recurringClients: 80 },
  { day: 'Tuesday', newClients: 30, recurringClients: 70 },
  { day: 'Wednesday', newClients: 10, recurringClients: 90 },
  { day: 'Thursday', newClients: 25, recurringClients: 75 },
  { day: 'Friday', newClients: 15, recurringClients: 85 },
  { day: 'Saturday', newClients: 35, recurringClients: 65 },
];

const stats = {
  newClients: 9123,
  recurringClients: 22643,
  pageViews: 78623,
  organicTraffic: 49123,
  male: 53,
  female: 43,
  trafficSources: [
    { source: 'Organic Search', value: 191235, percentage: 65, icon: <GoogleIcon /> },
    { source: 'Facebook', value: 51223, percentage: 15, icon: <FacebookIcon /> },
    { source: 'Twitter', value: 37564, percentage: 11, icon: <TwitterIcon /> },
    { source: 'LinkedIn', value: 27319, percentage: 8, icon: <LinkedInIcon /> },
  ],
};

// Custom styles
const DashboardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e2a44',
  borderRadius: '8px',
  padding: theme.spacing(3),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  color: '#ffffff',
}));

const StatBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProgressBar = styled(LinearProgress)(({ theme, color }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: '#2e3b55',
  '& .MuiLinearProgress-bar': {
    backgroundColor: color,
  },
}));

const TrafficSalesDashboard = () => {
  return (
    <DashboardContainer>
      <Typography variant="h6" gutterBottom>
        Traffic & Sales
      </Typography>

      {/* Top Stats */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <StatBox>
          <Typography variant="caption" color="#b0b7c3">
            New Clients
          </Typography>
          <Typography variant="h5" color="#3b82f6">
            {stats.newClients.toLocaleString()}
          </Typography>
        </StatBox>
        <StatBox>
          <Typography variant="caption" color="#b0b7c3">
            Recurring Clients
          </Typography>
          <Typography variant="h5" color="#ef4444">
            {stats.recurringClients.toLocaleString()}
          </Typography>
        </StatBox>
        <StatBox>
          <Typography variant="caption" color="#b0b7c3">
            Pageviews
          </Typography>
          <Typography variant="h5" color="#f59e0b">
            {stats.pageViews.toLocaleString()}
          </Typography>
        </StatBox>
        <StatBox>
          <Typography variant="caption" color="#b0b7c3">
            Organic
          </Typography>
          <Typography variant="h5" color="#22c55e">
            {stats.organicTraffic.toLocaleString()}
          </Typography>
        </StatBox>
      </Box>

      {/* Daily Traffic (New vs Recurring Clients) */}
      {trafficData.map((dayData, index) => (
        <Box key={index} display="flex" alignItems="center" mb={2}>
          <Typography variant="body2" sx={{ width: '100px' }}>
            {dayData.day}
          </Typography>
          <Box flexGrow={1}>
            <Box display="flex">
              <ProgressBar
                variant="determinate"
                value={dayData.newClients}
                color="#3b82f6"
                sx={{ width: `${dayData.newClients}%`, mr: 1 }}
              />
              <ProgressBar
                variant="determinate"
                value={dayData.recurringClients}
                color="#ef4444"
                sx={{ width: `${dayData.recurringClients}%` }}
              />
            </Box>
          </Box>
        </Box>
      ))}

      <Divider sx={{ backgroundColor: '#2e3b55', my: 3 }} />

      {/* Demographics */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box display="flex" alignItems="center">
          <MaleIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Male</Typography>
          <ProgressBar
            variant="determinate"
            value={stats.male}
            color="#f59e0b"
            sx={{ width: '100px', mx: 2 }}
          />
          <Typography variant="body2">{`${stats.male}%`}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <FemaleIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Female</Typography>
          <ProgressBar
            variant="determinate"
            value={stats.female}
            color="#f59e0b"
            sx={{ width: '100px', mx: 2 }}
          />
          <Typography variant="body2">{`${stats.female}%`}</Typography>
        </Box>
      </Box>

      {/* Traffic Sources */}
      {stats.trafficSources.map((source, index) => (
        <Box key={index} display="flex" alignItems="center" mb={2}>
          <Box sx={{ width: '40px' }}>{source.icon}</Box>
          <Typography variant="body2" sx={{ width: '100px' }}>
            {source.source}
          </Typography>
          <ProgressBar
            variant="determinate"
            value={source.percentage}
            color="#22c55e"
            sx={{ width: '150px', mx: 2 }}
          />
          <Typography variant="body2">
            {`${source.value.toLocaleString()} (${source.percentage}%)`}
          </Typography>
        </Box>
      ))}
    </DashboardContainer>
  );
};

export default TrafficSalesDashboard;