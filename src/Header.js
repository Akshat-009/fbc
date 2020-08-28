import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/>
             <div className="header__search">
                 <SearchIcon/>
                 <input type="text" placeholder="Search"></input>
             </div>
            </div>
            <div className="header__center">

            </div>
            <div className="header__left">

            </div>
            
        </div>
    )
}

export default Header
