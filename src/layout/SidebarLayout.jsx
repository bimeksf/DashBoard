import * as React from 'react';
import { styled  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";
import Topbar from './Topbar';


import { Outlet } from 'react-router-dom';  
const drawerWidth = 200;
const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> ,path:"/" },
  { text: 'Users', icon: <PeopleIcon /> , path: '/users'},
  { text: 'Products', icon: <InboxIcon /> , path: '/products' },
  { text: 'Reports', icon: <MailIcon />, path: '/reports' },
];



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function SidebarLayout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'  }}>
      <CssBaseline />
     
      <Topbar handleDrawerOpen={handleDrawerOpen} open={open} handleDrawerClose={handleDrawerClose}  />
     
      <Drawer variant="permanent" open={open} 
      
      
      
      
      >
    
    
        <List>
        {navItems.map((item) => (
    <ListItem key={item.text} disablePadding sx={{ display: 'block', marginTop:'60px' }}>
      <ListItemButton

component={Link}
      to={item.path}
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: open ? 'initial' : 'center',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'center',  alignItems: "center" ,  minHeight: '100vh' }}>
        <DrawerHeader />
     <Outlet/>
      </Box>
    </Box>
  );
}