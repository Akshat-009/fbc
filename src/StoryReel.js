import React from 'react'
import "./StoryReel.css"
import {Avatar} from "@material-ui/core"
function StoryReel({src,avatar,Name}) {
    return (
        <div className="reel" style={{backgroundImage:`url(${src})`}}>
        <Avatar src={avatar}/>
        <h5>{Name}</h5>
        </div>
    )
}

export default StoryReel
