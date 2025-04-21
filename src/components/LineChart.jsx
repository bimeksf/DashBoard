import { Card, CardContent, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data (později nahradíš fetchem z API)
const productStats = [
  { label: "Active Products", value: 1200 },
  { label: "Out of Stock", value: 85 },
  { label: "Top Seller", value: "iPhone 15" },
  { label: "New This Month", value: 45 }
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Apparel", value: 300 },
  { name: "Furniture", value: 200 },
  { name: "Toys", value: 100 }
];

const barData = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 300 },
  { month: 'Mar', sales: 500 },
  { month: 'Apr', sales: 700 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ProductDashboard() {
  return (
    <Grid container spacing={2}>
      {/* Stat Cards */}
      {productStats.map((stat, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card>
            <CardContent>
              <Typography variant="h6">{stat.label}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Charts */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Products by Category</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Monthly Sales</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
