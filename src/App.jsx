
import React from "react"
import { Head } from "./components/Head"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Profile } from "./components/Profile"
import { Resume } from "./components/Resume"
import Project from "./components/Project"
import "./App.css"
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Head />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/Project" element={<Project />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
