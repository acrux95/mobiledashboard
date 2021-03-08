import React from 'react'

import '@styles/Dashboard.scss'

const Balance = ({ accountBalanace }) => {
    return(
        <div className='balance'>
            <h2>SALDO DISPONIBLE</h2>
            <h1>{accountBalanace}</h1>
        </div>
    );
}

export default Balance;