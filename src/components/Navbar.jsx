import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import StarIcon from '@material-ui/icons/Star';
import NotificationsIcon from '@material-ui/icons/Notifications';

import '@styles/Navbar.scss'

const useStyles = makeStyles({
    root: {
      width: 370,
      height: 110,
    },
    label: {
      fill: "white",
      fontsize: "small"

    }
  });
const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return(
        <div className='navBar'>
        <BottomNavigation style={{ background: '#783183' }} value={value} onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}>
            <BottomNavigationAction label="Crear Logro"  icon={<StarIcon style={{fill: "white"}} />} />
            <BottomNavigationAction label="Pagar Servicio" icon={<LoyaltyIcon style={{fill: "white"}}  />} />
            <BottomNavigationAction label="Suscripción" icon={<NotificationsIcon style={{fill: "white"}}  />} />
        </BottomNavigation>
        </div>
    );
}

export default Navbar;