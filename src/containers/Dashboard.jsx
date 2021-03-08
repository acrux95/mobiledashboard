import React from 'react';

import Balance from "@components/Balance";
import Movement from "@components/Movement";
import Payment from "@components/Payment";
import Menu from "@components/Menu";
import Navbar from "@components/Navbar"

import Avatar from '@material-ui/core/Avatar';

const Dashboard = () => {
    return (
        <>
            <section>
                <p>Hola José</p>
                <Avatar alt="José González" src="/static/images/1.jpg"  />
            </section>
            <Balance accountBalanace="$1,499,970.00" />
            <Navbar />
            <Payment movementQuantity="$28,860.00" date="16 Enero" goals="$27,260.00" buys="$1,600.00" />
            <div className="movements">
                <h1>Tus Movimientos</h1>
                <p>Ver todos</p>
            </div>
            <div>
                <Movement imgSource="car" name="Auto" categorize="Mis logros" date="2m" quantity="$350,000.00"></Movement>
                <Movement imgSource="cfe" name="CFE" categorize="Pago Servicio" date="Ayer" quantity="$280.00"></Movement>
                <Movement imgSource="netflix" name="NetFlix" categorize="Suscripciones" date="28 de dic" quantity="$140.00"></Movement>
                <Movement imgSource="soriana" name="Soriana Parque Delta" categorize="Compras TDC" date="26 de dic" quantity="$3,80.00"></Movement>
            </div>
            <Menu />
        </>
    )
}

export default Dashboard;