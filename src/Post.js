import React from 'react'
import './Post.css'
import StoryReel from "./StoryReel"
function Post() {
    return (
        <div className="post">
            <div className="story">
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?man" avatar="https://source.unsplash.com/weekly?iphone"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?women" avatar="https://source.unsplash.com/weekly?android"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?linux" avatar="https://source.unsplash.com/weekly?ubuntu"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?icecream" avatar="https://source.unsplash.com/weekly?man"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?choclate" avatar="https://source.unsplash.com/weekly?boy"/>
                <StoryReel Name="Akshat" src="https://source.unsplash.com/weekly?rock" avatar="https://source.unsplash.com/weekly?girl"/>
            </div>
            
        </div>
    )
}

export default Post
