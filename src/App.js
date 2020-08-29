import React from 'react'
import "./App.css"
import Header from "./Header"
import { Slide } from '@material-ui/core';
import SideBar from "./SideBar";
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
      
      </div>
      
    </div>
  )
}

export default App
