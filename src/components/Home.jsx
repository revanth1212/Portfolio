import React from 'react'
import "./Home.css"
export const Home = () => {
  return (
    <section className="profile">
            <div className="description">
                <h1 >About me</h1>
                <p>As an aspiring engineering student, I am committed to applying my skills in problem-solving, critical thinking,
                    and teamwork to address real-world challenges and drive technological advancements. Seeking opportunities that foster 
                    continuous learning and growth, my goal is to make meaningful contributions to the field of engineering while promoting 
                    sustainability, efficiency, and ethical practices. Eager to collaborate with industry experts and utilize my passion 
                    for new technologies and excel in a dynamic professional environment.</p>
            </div>
            <div className='skills-container'>
            <div className="skill1">
                <h1>What i do,</h1>
                <ul className='sk1'>Problem solving
                <p>Using technology to assist humanity and solve its challenges.</p>
                </ul>
                <br></br>
                <ul className='sk2'>Web development
                <p>Using technology to work for the need of real world uses.</p>
                </ul>
            </div>

            <div className="skill2">
                <ul className='sk3'>Database Management
                <p>Management of the data and handling data as a valuable resource,.</p>
                </ul>
                <br></br>
                <ul className='sk4'>Sports
                <p>Working out on a regular basis for physical and mental fitness.</p>
                </ul>
            </div>
            
            </div>
            <div className='contact'>
            <h2>Contact</h2>
            <ul>
                <li>Email: revanthrrvs@gmail.com</li>
                <li>Phone: +91 7550368038</li>
                <li>Location: Erode, TamilNadu </li>
            </ul>
          </div>
            
    </section>

  )
}
