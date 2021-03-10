import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import '@styles/Menu.scss'

const Menu = () => {

    return(
        <BottomNavigation className="menu">
            <BottomNavigationAction label="Home" value="home" icon={<HomeOutlinedIcon style={{fill: "#5acaee"}}/>} />
            <BottomNavigationAction label="Retirement" value="retirement" icon={<MonetizationOnOutlinedIcon />} />
            <BottomNavigationAction label="Payment" value="payment" icon={<CreditCardOutlinedIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<StarBorderOutlinedIcon />} />
            <BottomNavigationAction label="Alerts" value="alerts" icon={<NotificationsNoneOutlinedIcon />} />
        </BottomNavigation>
    );
}

export default Menu;