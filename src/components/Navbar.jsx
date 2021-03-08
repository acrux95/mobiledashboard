import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import '@styles/Navbar.scss'

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return(
        <BottomNavigation value={value} onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}>
            <BottomNavigationAction label="Crear Logro" icon={<StarBorderOutlinedIcon />} />
            <BottomNavigationAction label="Pagar Servicio" icon={<CreditCardOutlinedIcon />} />
            <BottomNavigationAction label="Suscripción" icon={<NotificationsNoneOutlinedIcon />} />
        </BottomNavigation>
    );
}

export default Navbar;