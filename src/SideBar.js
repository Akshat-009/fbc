import React from 'react'
import './SideBar.css';
import SideBarRow from "./SideBarRow"
import {useStateValue}  from "./StateProvider"
import StorefrontIcon from '@material-ui/icons/Storefront';
function SideBar() {
    const [{user},dispatch]=useStateValue()
    return (
        <div className="sidebar">
            <SideBarRow name={user.displayName} avatar={user.photoURL} Icon=""/>
            <SideBarRow name="Market Place" Icon={StorefrontIcon}/>
            <SideBarRow name="Market Place" Icon={StorefrontIcon}/>
            <SideBarRow name="Market Place" Icon={StorefrontIcon}/>
        </div>
    )
}

export default SideBar
