import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
/* import AdbIcon from '@mui/icons-material/Adb'; */
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import image from '../images/descarga.jpg';

const pages = ['Inicio', 'Contenido', 'Noticias','Biblioteca'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '2rem',
  backgroundColor: '#120101',
  '&:hover': {
    backgroundColor: 'rgba(99, 156, 180, 0.1)',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inicio', 'Contenido', 'Noticias','Biblioteca'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon sx={{color: 'white'}}/> : <MailIcon sx={{color: 'white'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    // Este es el apartado de la barra NavBar
    <AppBar position="sticky" sx={{ top: '20px', background: 'rgba(99, 156, 180, 0.06)', width: '90%', margin: '20px auto 0 auto', borderRadius: '25px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

    {/* En este apartado está el título en pantalla grande */}      
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nightshade
          </Typography>


    {/* En este apartado está el menú hamburguesa responsivo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <Button onClick={toggleDrawer(true)}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            </Button>

              <Drawer open={open} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: '#181818', color: 'white' } }}>
                {DrawerList}
              </Drawer>

          </Box>

    {/* En este apartado está el nombre en responsivo */}    
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nightshade
          </Typography>

    {/* Este es el apartado de la búsqueda */}    
        <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
          <Search>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>

      {/* Este es el apartado del nav bar normalito xd */}    
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end',  }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 1, color: 'white', display: 'block', background: 'rgba(99,156,180,0.1)', borderRadius:'30px', marginRight:'15px', padding: '0.5px 20px 0.5px 20px' }}
              >
                {page}
              </Button>
            ))}
          </Box>

    {/* Apartado de la fotografía de perfil */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Sunny Misty" src={image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
