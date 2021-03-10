import React from 'react';
import { Link } from 'react-router-dom';

import Balance from '@components/Balance.jsx';
import Graphic from '@components/Graphic';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '@styles/Retirement.scss';

const Retirement = () => {
    return (
        <>
            <section className='titleRetirement'>
                <Link to="/"><ArrowBackIcon /></Link>
                <Link to="/">CANCELAR</Link>
            </section>
            <p className='dispTitle'>Disposición</p>
            <Balance accountBalance="$1,499,970.00" title="Tienes disponible" className1="container2" className2="balance2"/>
            <p className="object">Auto</p>
            <p className="qty">$350,000.00</p>
            <p className="time">Selecciona tu plazo</p>
            <Graphic className='graph' />
        </>
    )
}

export default Retirement;