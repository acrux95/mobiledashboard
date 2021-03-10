import React from 'react';

import '@styles/MensualPayment.scss'

const MensualPayment = () => {
    return (
        <div className="mensualpayment">
            <p className='payTitle'>Tu pago mensual</p>
            <p className='payQty'>$12,000.00</p>
            <p className='payTime'>a 60 meses</p>
            <p className='payTasa'>Tasa de interés</p>
            <p className='percent'>16.6%</p>
        </div>
    )
}

export default MensualPayment;