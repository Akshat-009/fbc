import React from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import {Avatar} from "@material-ui/core"
import "./IndPost.css"; 
function IndPost() {
    return (
        <div className="main__post" >
            
                        <div className="post__body">
                <div className="post__header">
                    <div className="post__author">
                        <Avatar/>
                    
                    
                    <div className="post__timestamp">
                        <h4>Name</h4>
                        <h6>TimeStamp</h6>
                    </div>
                    </div>
                    <div className="post__caption">
                        <p>this is caption </p>
                    </div>
                    
                </div>
                <div className="post__image">
                    <img src="https://source.unsplash.com/weekly?rock"/>
                </div>
                <div className="post__option">
                    <div className="post__option__variant">
                    <ThumbUpAltOutlinedIcon/><p>Like</p>
                    </div>
                    <div className="post__option__variant">
                    <ChatBubbleOutlineOutlinedIcon/><p>Comment</p>
                    </div>
                 
                </div>
                <div className="post__comments">
                    <p>This is a comment</p>
                </div>
            </div>
        </div>
    )
}

export default IndPost
