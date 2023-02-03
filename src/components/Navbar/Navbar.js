import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo.png';
import CustomizedBadges from './CartWidget';
import { NavbarItems } from './NavbarItems';

const Navbar = () => {

    const style = {
        logo: {
            width: 60,
            height: '100%'
        },
        bgColor:{
            backgroundColor: '#747474'
        }
    }

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={style.bgColor}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <img src={logo} style={style.logo}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        RIEM STORE
                    </Typography>
                    <NavbarItems/>
                    <Button color="inherit"><CustomizedBadges/></Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Navbar