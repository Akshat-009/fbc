import React,{useState,useEffect} from 'react'
import "./App.css"
import Header from "./Header"
import SideBar from "./SideBar";
import Post from "./Post";
import IndPost from "./IndPost"
import {useStateValue} from "./StateProvider"
import Login from './Login';

function App() {
 
  const [{user},dispatch]=useStateValue()
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
      <IndPost/>

        
     
      
  
      </div>
      <div className="app__ads">

      </div>
      
      </div>
      
    </div>
  ):(<Login/>)
}

export default App
