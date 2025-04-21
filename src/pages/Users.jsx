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
    CartesianGrid
  } from "recharts";
  import UserTable from "../components/Table"
  import TrafficSalesDashboard from "../components/Traffic"
  

  import ThumbUpIcon from '@mui/icons-material/ThumbUp';
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';
  import WarningAmberIcon from '@mui/icons-material/WarningAmber';
  import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


  const data = [
      { name: "Leden", zisk: 1200 },
      { name: "Únor", zisk: 2100 },
      { name: "Březen", zisk: 800 },
      { name: "Duben", zisk: 1600 },
    ];
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

    const sampleData = [
        { value: 400 },
        { value: 600 },
        { value: 500 },
        { value: 700 },
        { value: 650 },
        { value: 620 },
      ];

  export default function Users (){
      return (
      <Box>

        <Grid container spacing={2} sx={{ mb: 4, mt:8 }} >
                  {data.map(item=>(
                      <Grid item xs={12} sm={6} md={3} key={item.name} >
                 <Paper elevation={3} sx={{ p: 2 , width: 350 }}   >
                   <Typography variant="h6">{item.name}</Typography>
                   <Typography variant="h4">{item.zisk}</Typography>
                 </Paper>
               </Grid>
                      
                    ))}
              </Grid>

              <Divider sx={{ mb: 2 }} />



                      <Paper>
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
              <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="zisk" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <RechartsTooltip />
  </LineChart>
  </ResponsiveContainer>

                      </Paper>
                      <Divider sx={{ mb: 2 }} />


                      <Grid container spacing={2} sx={{ mb: 4 }}>

                      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </Grid>
    <Divider sx={{ mb: 2 }} />

<TrafficSalesDashboard/>
<Divider sx={{ mb: 2 }} />
<UserTable/>






                    </Box>
  
  
  
      )
  }