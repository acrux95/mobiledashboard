import React, { Component } from 'react'

import '@styles/Movement.scss'


import Divider from '@material-ui/core/Divider';

const Movement = ({ imgSource, name, categorize, date, quantity }) => {
    return(
        <>
            <section className='movement'>
                <img className='image' src={imgSource} alt={name}/>
                <p className='name'>{name}</p>
                <p className='categorize'>{categorize}</p>
                <p className='date'>{date}</p>
                <p className='quantity'>{quantity}</p>
            </section>
            <Divider />
        </>
    );
}

export default Movement;
