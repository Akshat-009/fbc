import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/>
             <div className="header__search">
                 <SearchIcon/>
                 <input type="text" placeholder="Search Anything"></input>
             </div>
            </div>
            <div className="header__center">
             <div className="header__options active__option">
                 <HomeIcon fontSize="large"/>
             </div>
             <div className="header__options">
                 <AssistantPhotoIcon fontSize="large"/>
             </div>
             <div className="header__options">
                 <SupervisedUserCircleIcon fontSize="large"/>
             </div>
             <div className="header__options">
                 <StorefrontIcon fontSize="large"/>
             </div>
            </div>
            <div className="header__left">
             <Avatar/>
             <h4>UserName</h4>
             <div className="left__options">
             <ChatBubbleIcon fontSize="small"/>
             </div>
             <div className="left__options">
             <NotificationsActiveIcon fontSize="small"/>
             </div>
             <div className="left__options">
             <KeyboardArrowDownIcon fontSize="small"/>
             </div>
            </div>
            
        </div>
    )
}

export default Header
