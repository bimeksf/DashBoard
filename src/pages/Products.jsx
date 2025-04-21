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
const data = [
    { name: "Leden", zisk: 1200 },
    { name: "Únor", zisk: 2100 },
    { name: "Březen", zisk: 800 },
    { name: "Duben", zisk: 1600 },
  ];


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
export default function Products (){
    return (
    
            <Grid>
                {data.map(item=>(
               <Grid item xs={12} sm={6} md={3} key={item.label}>
               <Paper elevation={3} sx={{ p: 2 }}>
                 <Typography variant="h6">{item.label}</Typography>
                 <Typography variant="h4">{item.value}</Typography>
               </Paper>
             </Grid>
                    
                ))}



            </Grid>



    )
}