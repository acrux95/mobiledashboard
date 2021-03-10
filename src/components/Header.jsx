import React from 'react'

import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import BatteryStdSharpIcon from '@material-ui/icons/BatteryStdSharp';

// import Clock from 'react-live-clock';

import '@styles/Header.scss'

 const Header = () => {
    return (
        <header className='header'>
            {/* <Clock format={'HH:mm'} ticking={true} timezone={'US/Central'} /> */}
            <div>9:41</div>
            <div className='icons'>
                <SignalCellularAltOutlinedIcon fontSize="small"/>
                <WifiOutlinedIcon fontSize="small"/>
                <BatteryStdSharpIcon fontSize="small"/>
            </div>
        </header>
    )
}

export default Header;
