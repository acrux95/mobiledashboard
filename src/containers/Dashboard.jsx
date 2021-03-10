import React from 'react';
import DOM from 'react-dom'

import '@styles/Dashboard.scss'

import Balance from '@components/Balance';
import Movement from '@components/Movement';
import Payment from '@components/Payment';
import Menu from '@components/Menu';
import Navbar from '@components/Navbar';
import { makeStyles } from '@material-ui/core/styles';

import car from "@images/car.png"
import cfe from "@images/cfe-logo.png"
import netflix from "@images/Netflix-new-icon.png"
import soriana from "@images/soriana.png"


import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <>
            <section className='title'>
                <p>Hola José</p>
                <div></div>
                <Avatar className='avatar' alt="José González" src="/static/images/1.jpg" className={classes.small} />
            </section>
            <Balance accountBalance="$1,499,970.00" title="SALDO DISPONIBLE" className1="container" className2="balance"/>
            <Navbar />
            <Payment movementQuantity="$28,860.00" date="16 Enero" goals="$27,260.00" buys="$1,600.00" />
            <div className="movements">
                <p className='movs'>Tus movimientos</p>
                <p className='movsView'><a href="/">Ver todos</a></p>
            </div>
            <div>
                <Movement imgSource={car} name="Auto" categorize="Mis logros" date="2m" quantity="$350,000.00"></Movement>
                <Movement imgSource={cfe} name="CFE" categorize="Pago Servicio" date="Ayer" quantity="$280.00"></Movement>
                <Movement imgSource={netflix} name="NetFlix" categorize="Suscripciones" date="28 de dic" quantity="$140.00"></Movement>
                <Movement imgSource={soriana} name="Soriana Parque Delta" categorize="Compras TDC" date="26 de dic" quantity="$3,80.00"></Movement>
            </div>
            <Menu />
        </>
    )
}

export default Dashboard;