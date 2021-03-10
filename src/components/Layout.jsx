import React, { children } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

import '@styles/global.scss'

const Layout = ({ children }) => {
    return(
        <div className='appFrame'>
            <Header />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;