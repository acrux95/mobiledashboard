import React from 'react'
import { Link } from 'react-router-dom';

import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';


import '@styles/Payment.scss'

const Payment = ({ movementQuantity, date, goals, buys }) => {
    return(
        <div className='container'>
        <section className='payment'>
            <p className='h2Balance'>Tu próximo pago</p>
            <p className='balanceQuantity'>{movementQuantity}</p>
            <p className='title1' >Fecha de Pago</p> 
            <p className='date'>{date}</p>
            <button className='button'><Link className='abutton' to="/retirement">PAGAR AHORA</Link></button>
            <p className='icon1'><MonetizationOnOutlinedIcon  style={{fill: "#5acaee",fontSize:"small"}}/></p>
            <p className='icon2'><CreditCardOutlinedIcon style={{fill: "#5acaee", fontSize:"small"}}/></p>
            <p className='title2' >Mis logros</p>
            <p className='title3' >Compras con TDC</p>
            <p className='goals' >{goals}</p>
            <p className='buys' >{buys}</p>
        </section>
        </div>
    );
}

export default Payment;
