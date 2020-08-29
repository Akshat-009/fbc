import React,{useState,useEffect} from 'react'
import "./App.css"
import Header from "./Header"
import SideBar from "./SideBar";
import Post from "./Post";
import IndPost from "./IndPost"
import {useStateValue} from "./StateProvider"
import Login from './Login';
import db from "./firebase"
import FlipMove from 'react-flip-move';

function App() {
 
  const [{user},dispatch]=useStateValue()
  const [posts,setposts]=useState([])
    
    
  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>(
      setposts(snapshot.docs.map((doc)=>({
        id:doc.id,
        data:doc.data()
      })))
    ))
  },[])
  return user?(
    <div className="app">
      <div className="app__head">
        <Header/>
      </div>
      <div className="app__body">
      <div className="app__side">
        <SideBar/>
      </div>
      <div className="app__posts">
        <Post/>
        <FlipMove>
        {posts.map((post,index)=>(
          <IndPost
          key={index}
          name={post.data.author}
          caption={post.data.caption}
          src={post.data.src}
          avatar={post.data.avatar}
          timestamp={post.data.timestamp}
          />

        ))}
        </FlipMove>
      

        
     
      
  
      </div>
      <div className="app__ads">

      </div>
      
      </div>
      
    </div>
  ):(<Login/>)
}

export default App
