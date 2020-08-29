import React,{useState,useEffect} from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import {Avatar} from "@material-ui/core"
import db from "./firebase"
import "./IndPost.css"; 
function IndPost() {
    const [posts,setposts]=useState([])
    
    
    useEffect(()=>{
      db.collection("posts").orderBy("timestamp","asc").onSnapshot(snapshot=>(
        setposts(snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        })))
      ))
    },[])
    
     console.log(posts)
    return (
    
        <div className="main__post" >
            {posts.map((post)=>(
                        <div className="post__body">
                        <div className="post__header">
                            <div className="post__author">
                                <Avatar src={post.data.avatar}/>
                            
                            
                            <div className="post__timestamp">
                                <h4>{post.data.author}</h4>
                          <h6>{new Date(post.data.timestamp.toDate()).toUTCString()}</h6>
                            </div>
                            </div>
                            <div className="post__caption">
                                <p> {post.data.caption} </p>
                            </div>
                            
                        </div>
                        <div className="post__image">
                            <img src={post.data.src}/>
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

            ))}

</div>    
    )
}

export default IndPost
