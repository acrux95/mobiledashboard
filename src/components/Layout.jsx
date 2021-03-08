import React, { children } from 'react';

import Header from './Header';
import Footer from './Footer';

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