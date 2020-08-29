import React from 'react'
import "./SideBarRow.css";
import {Avatar} from "@material-ui/core"
function SideBarRow({name,avatar,Icon}) {
 
    return(
        <>
        <div className="sidebarrow">
            <div className="options">
           {avatar && <Avatar src={avatar}/>}
           {Icon && <Icon fontSize="large"/>}
            <h3>{name}</h3>
            </div>
        </div>
        </>
    )
}

export default SideBarRow
