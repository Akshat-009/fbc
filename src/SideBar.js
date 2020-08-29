import React from 'react'
import './SideBar.css';
import SideBarRow from "./SideBarRow"

import StorefrontIcon from '@material-ui/icons/Storefront';
function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow name="Akshat" avatar="dsa" Icon=""/>
            <SideBarRow name="Market Place" Icon={StorefrontIcon}/>
            <SideBarRow name="Market Place" Icon={StorefrontIcon}/>
            <SideBarRow name="Market Place" Icon={StorefrontIcon}/>
        </div>
    )
}

export default SideBar
