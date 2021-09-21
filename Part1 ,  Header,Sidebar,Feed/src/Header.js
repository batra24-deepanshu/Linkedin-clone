import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'; 
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
           
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption  title="Home" Icon={HomeIcon} />
                <HeaderOption title="Message" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
                <HeaderOption title="me" avatar="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"/>
            </div>
        </div>
    )
}

export default Header
