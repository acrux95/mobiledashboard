import React from 'react'

import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import BatteryStdSharpIcon from '@material-ui/icons/BatteryStdSharp';


 const Header = () => {
    return (
        <header>
            <div>9:41</div>
            <div >
                <SignalCellularAltOutlinedIcon />
                <WifiOutlinedIcon />
                <BatteryStdSharpIcon />
            </div>
        </header>
    )
}

export default Header;
