import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/Graphic.scss';
import '@styles/MensualPayment.scss'

const Graphic = () => {
return (
    <div>
        <div className="item graphData">
            <svg className='svg' width="220" height="220" xmlns="http://www.w3.org/2000/svg">
            <g className='animation'>
                <title>Graph1</title>
                <circle id="circle" className="circle_animation" r="90" cy="100" cx="100" strokeWidth="20" stroke="#bb64c8" fill="none"/>
            </g>
            </svg>
            <div className="mensualpayment">
                <p className='payTitle'>Tu pago mensual</p>
                <p className='payQty'>$12,000.00</p>
                <p className='payTime'>a 60 meses</p>
                <p className='payTasa'>Tasa de interés</p>
                <p className='percent'>16.6%</p>
            </div>
            <button className='actionButton'><Link to="/">LO QUIERO</Link></button>
        </div>
    </div>
)
}

export default Graphic;