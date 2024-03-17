import React from 'react'
import {Link} from "react-router-dom";
import "./Head.css"
export const Head = () => {
  return (
    <div className="navbar">
      <div className="logo">Portfolio</div>
    
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/Project"}>Project</Link>
        </li>
        <li>
          <Link to={"https://drive.google.com/file/d/1SDAClaVpC1mDBi-KRh5gjxgba5RB6MG9/view?usp=drive_link"}>DownloadCV</Link>
        </li>
      </ul>
    </div>
  )
}
