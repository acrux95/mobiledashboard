import React from 'react'

import '@styles/Balance.scss'

const Balance = ({ accountBalance, className1, className2, title }) => {
    return(
        <div className={className1}>
        <div className={className2}>
            <p className='h2balance'>{title}</p>
            <p className='h1balance'>{accountBalance}</p>
        </div>
        </div>
    );
}

export default Balance;
