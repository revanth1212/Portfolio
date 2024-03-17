import React from 'react'
import './Profile.css'
export const Profile = () => {
  return (
    <section className="profile">
      <div className="boxed-section">
        <h2 className="pop-up-heading">Education</h2>
        <div className="education-details">
          <p>Grade10
          <br></br>
          <br></br>
          Studied at Carmel Matric Higher Secondary School - Erode
          <br></br>
          <br></br>
          Completed Grade 10 with an average of 90%
          <br></br>
          <br></br>
          <br></br>
          Grade 12
          <br></br>
          <br></br>
          Studied at Carmel Matric Higher Secondary School - Erode
          <br></br>
          <br></br>
          Completed Grade 12 with an average of 90.07%</p>
          <br></br>
          <p>Currently pursuing my bachelour's of engineering in the stream of computer science and engineering at Karpagam Institute of Technology
            <br></br>
            <br></br>
          CGPA upto 4th sem - 7.55
          </p>
        </div>
      </div>
      
      <div className="boxed-section">
        <h2 className="pop-up-heading">Programming Skills</h2>
        <ul>
          <li>C - Intermediate</li>
          <li>Java - Good</li>
          <li>Python - Good</li>
          <li>JavaScript - Intermediate</li>
          <li>HTML & CSS - Intermediate</li>
        </ul>
      </div>

      <div className="boxed-section">
        <h2 className="pop-up-heading">Frameworks</h2>
        <ul>
          <li>MERN Stack - Intermediate</li>
        </ul>
      </div>

      <div className="boxed-section">
        <h2 className="pop-up-heading">Links</h2>
        <div className="links">
          <a href="https://github.com/revanth1212">GitHub Profile</a>
          <a href="linkedin.com/in/Revanth R">LinkedIn Profile</a>
          <a href="https://www.instagram.com/__r.e.v.a.n.t.h.__?igsh=M3U4MjlpZXB6eDB1">Instagram</a>
        </div>
      </div>

      <div className="boxed-section">
        <h2 className="pop-up-heading">Coding Platforms</h2>
        <div className="links">
          <a href="https://auth.geeksforgeeks.org/user/21csa46">GeeksforGeeks</a>
          <a href="https://leetcode.com/21CSA46/">LeetCode</a>
          <a href="https://www.skillrack.com/faces/candidate/trackshome.xhtml">SkillRack</a>
        </div>
      </div>
    </section>
  );
}
