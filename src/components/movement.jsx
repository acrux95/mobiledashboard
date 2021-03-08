import React from 'react'

import '@styles/Movement.scss'

import car from "@images/car.png"
import cfe from "@images/cfe-logo.png"
import netflix from "@images/Netflix-new-icon.png"
import soriana from "@images/soriana.png"

import Divider from '@material-ui/core/Divider';

const Movement = ({ imgSource, name, categorize, date, quantity }) => {
    let imgSrc = ({imgSource}) => {
        imgSource == 'car' ? imgSrc = 'car' : imgSrc = ''
    }
    return(
        <>
            <section className='payment'>
                <img src={imgSrc} alt={name}/>
                <p>{name}</p>
                <p>{categorize}</p>
                <p>{date}</p>
                <p>{quantity}</p>
            </section>
            <Divider />
        </>
    );
}

export default Movement;