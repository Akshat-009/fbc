import React,{useState,useEffect} from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import {Avatar} from "@material-ui/core"

import "./IndPost.css"; 

import { forwardRef } from 'react';
const IndPost= forwardRef(({name,avatar,src,caption,timestamp},ref)=>  {
 
    
    //  console.log(posts)
    return (
    
        <div className="main__post" ref={ref} >
            
            
                        <div className="post__body" ref={ref}>
                        <div className="post__header">
                            <div className="post__author">
                                <Avatar src={avatar}/>
                            
                            
                            <div className="post__timestamp">
                                <h4>{name}</h4>
                          <h6>{new Date(timestamp?.toDate()).toUTCString()}</h6>
                            </div>
                            </div>
                            <div className="post__caption">
                                <p> {caption} </p>
                            </div>
                            
                        </div>
                        <div className="post__image">
                            <img src={src}/>
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
})

export default IndPost
