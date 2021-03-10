import React from 'react'

import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import BatteryStdSharpIcon from '@material-ui/icons/BatteryStdSharp';

import '@styles/Header.scss'

 const Header = () => {
    return (
        <header className='header'>
            <div className='time'>9:41</div>
            <div className='icons'>
                <SignalCellularAltOutlinedIcon fontSize="small"/>
                <WifiOutlinedIcon fontSize="small"/>
                <BatteryStdSharpIcon fontSize="small"/>
            </div>
        </header>
    )
}

export default Header;
