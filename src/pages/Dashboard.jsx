import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Button,
  Divider,
  Alert,
  Tooltip,
  Skeleton,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  tableCellClasses,
  styled,
  Chip,
  Stack,
  Avatar
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const stats = [
  { label: "Uživatelé", value: 1240 },
  { label: "Produkty", value: 314 },
  { label: "Návštěvy", value: 8421 },
  { label: "Nové objednávky", value: 415 },
  { label: "Noví zákazníci", value: 4 },
  { label: "Dnešní tržby", value: "€5,130" },

];
const recentOrders = [
  {
    id: "ORD-1001",
    customer: "Jan Novák",
    date: "2025-04-19",
    status: "Zaplaceno",
    total: 3290,
  },
  {
    id: "ORD-1002",
    customer: "Petra Kovářová",
    date: "2025-04-19",
    status: "Čeká na platbu",
    total: 1890,
  },
  {
    id: "ORD-1003",
    customer: "Lukáš Malý",
    date: "2025-04-18",
    status: "Zaplaceno",
    total: 999,
  },
  {
    id: "ORD-1004",
    customer: "Eva Dvořáková",
    date: "2025-04-18",
    status: "Zrušeno",
    total: 0,
  },
  {
    id: "ORD-1005",
    customer: "Tomáš Němec",
    date: "2025-04-17",
    status: "Zaplaceno",
    total: 7490,
    
  },
];

const topProducts = [
  {
    id: 1,
    name: "Bezdrátová sluchátka JBL Tune 510BT",
    image: "https://via.placeholder.com/80x80?text=JBL+510BT",
    price: 1290,
    sold: 320,
  },
  {
    id: 2,
    name: "Notebook Lenovo IdeaPad 3",
    image: "https://via.placeholder.com/80x80?text=Lenovo+IdeaPad",
    price: 13490,
    sold: 215,
  },
  {
    id: 3,
    name: "Robotický vysavač Xiaomi Mi Robot",
    image: "https://via.placeholder.com/80x80?text=Xiaomi+Robot",
    price: 4990,
    sold: 182,
  },
  {
    id: 4,
    name: "Chytré hodinky Apple Watch SE",
    image: "https://via.placeholder.com/80x80?text=Apple+Watch+SE",
    price: 7990,
    sold: 156,
  },
  {
    id: 5,
    name: 'Televize Samsung 55" QLED',
    image: "https://via.placeholder.com/80x80?text=Samsung+QLED",
    price: 17990,
    sold: 122,
  },
];

const data = [
  { name: "Leden", zisk: 1200 },
  { name: "Únor", zisk: 2100 },
  { name: "Březen", zisk: 800 },
  { name: "Duben", zisk: 1600 },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Přehled
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">{stat.label}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ p: 2 }}>

      <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6"><TrendingUpIcon sx={{ mr: 1 }} /> Vývoj zisku (měsíčně)</Typography>
          <Button size="small">Zobrazit detail</Button>
        </Box>
        
        <Tabs value={0} aria-label="Zisk tabs">
          <Tab label="7 dní" />
          <Tab label="30 dní" />
          <Tab label="Rok" />
        </Tabs>






        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip  />
            <Line
              type="monotone"
              dataKey="zisk"
              stroke="#1976d2"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
{topProducts
  .filter(p => p.name.includes("Xiaomi"))
  .map(p => (
    <Alert severity="warning" sx={{ mb: 3 }} key={p.id}>
      <WarningAmberIcon sx={{ mr: 1 }} />
      Produkt "{p.name}" má nízký sklad!
    </Alert>
  )) }



      <Divider sx={{ mb: 2 }} />
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Poslední objednávky</Typography>

      <Divider sx={{ mb: 2 }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">id</StyledTableCell>
              <StyledTableCell align="right">customer</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">status</StyledTableCell>
              <StyledTableCell align="right">total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentOrders.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="right">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.customer}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="h6" gutterBottom>Nejprodávanější produkty</Typography>
      <Divider sx={{ mb: 2 }} />
              <Box  >
              {topProducts.map((item) => (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        p: 2,
        mb: 1,
        border: '1px solid #eee',
        borderRadius: 2,
        backgroundColor: '#fafafa'
      }}
    >
        <Avatar src={item.image} />
        <Box       sx={{
        p: 2,
        mb: 1,
      }}>
        <Typography variant="subtitle1">{item.name}</Typography>



      <Stack direction="row" spacing={1}>
        <Chip icon={<ThumbUpIcon />} label={`${item.sold}x`} color="primary" />
        <Chip icon={<AttachMoneyIcon />} label={item.price} color="success" />
        <Chip
          icon={<TrendingUpIcon />}
          label={`$${(item.sold * item.price).toFixed(0)}`}
          color="secondary"
        />
      </Stack>
      </Box>

    </Stack>
  ))}
              </Box>



    </Box>
  );
}
