import React ,{useState,useEffect}from 'react'
import './Post.css'
import StoryReel from "./StoryReel"
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import db from "./firebase"
import firebase from "firebase"
import {useStateValue} from "./StateProvider"
function Post() {
    const [caption,setcaption]=useState("")
    const [url,seturl]=useState("")
    const [{user},dispatch]=useStateValue()
    const addPost=(e)=>{
        e.preventDefault()
        db.collection("posts").add({
            author:user.displayName,
            caption:caption,
            src:url,
            avatar:user.photoURL,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setcaption("")
        seturl("")
    }
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
                    <input type="text"value={caption} onChange={(e)=>setcaption(e.target.value)} placeholder="What's on Your Mind"/>
                    <input type="text"onChange={(e)=>seturl(e.target.value)} value={url} placeholder="Enter Photo URL"/>
                    <button onClick={addPost}type="submit"></button>
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
