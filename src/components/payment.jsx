import React from 'react'

import '@styles/Payment.scss'

const Payment = ({ movementQuantity, date, goals, buys }) => {
    return(
        <section className='movement'>
            <h2>Tu próximo pago</h2>
            <h1>{movementQuantity}</h1>
            <div className="date">
                <div>Fecha de Pago {date}</div>
                <button>PAGAR AHORA</button>
            </div>
            <section className="data">
                <div></div>
                <div>Mis logros Compras con TDC</div>
                <div> {goals} {buys}</div>
            </section>
        </section>
    );
}

export default Payment;