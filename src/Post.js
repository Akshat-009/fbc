import React from 'react'
import './Post.css'
import StoryReel from "./StoryReel"
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
function Post() {
    return (
        <div className="post">
            <div className="story">
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?man" avatar="https://source.unsplash.com/weekly?iphone"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?women" avatar="https://source.unsplash.com/weekly?android"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?linux" avatar="https://source.unsplash.com/weekly?ubuntu"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?icecream" avatar="https://source.unsplash.com/weekly?man"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?choclate" avatar="https://source.unsplash.com/weekly?boy"/>
         
            </div>
            <div className="post__send">
                <div className="post__send__info">
                    <Avatar src="https://source.unsplash.com/weekly?hulk"/>
                    <form>
                    <input type="text" placeholder="What's on Your Mind"/>
                    <input type="text" placeholder="Enter Photo URL"/>
                    <button onClick={(e)=>e.preventDefault()}type="submit"></button>
                    </form>
                </div>
                <div className="post__send__option">
                 <div className="option__variant" style={{color:"#E42645"}}>
                 <VideocamIcon/>
                 <h5>Go Live</h5>
                 </div>
                 <div className="option__variant" style={{color:"#41B35D"}}>
                 <PhotoLibraryIcon/>
                 <h5>Add a Photo</h5>
                 </div>
                 <div className="option__variant" style={{color:"#EAB026"}}>
                 <InsertEmoticonIcon/>
                 <h5>Insert Emoticons</h5>
                 </div>
                </div>
            </div>
         
            
        </div>
    )
}

export default Post
