import React from 'react'
import "./App.css"
import Header from "./Header"
import { Slide } from '@material-ui/core';
import SideBar from "./SideBar";
import Post from "./Post";
import IndPost from "./IndPost"
function App() {
  return (
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
        <IndPost/>
        <IndPost/>
        <IndPost/>
  
      </div>
      <div className="app__ads">

      </div>
      
      </div>
      
    </div>
  )
}

export default App
