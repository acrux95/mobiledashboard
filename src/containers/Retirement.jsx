import React from 'react';
import { Link } from 'react-router-dom';

import Balance from "@components/Balance";

import '@styles/Retirement.scss';
import Button from '@material-ui/core/Button';


const Retirement = () => {
    return (
        <>
            <section className='titleRetirement'>

                <Link to="/">CANCELAR</Link>
            </section>
            <h1>Disposición</h1>
            <Balance accountBalanace="$1,499,970.00" />
            <p className="object">Auto</p>
            <p className="qty">$350,000.00</p>
            <h2>Selecciona tu plazo</h2>
            <button className='actionButton'><Link to="/">LO QUIERO</Link></button>
            
        </>
    )
}

export default Retirement;