import React from 'react'
import './Navbar.css'
import log from '../asset/sqi-logo.jpg'
function Navbar() {
  return (
    <div>
       <div className="nav">
            <img src={log} alt="" />

       <div className="parent">About
       <div className="child">
        <li>Our Story</li>
        <li>Our Team</li>
        <li>Campus Info</li>
       </div>
       </div>
       <div className="parent">Programmes
       <div className="child">
        <li>National Innovation Diploma</li>
        <li>Professional Diploma Program</li>
        <li>Executive Professional Certificate</li>
       </div>
       </div>
       <div className="parent">Admissions
       <div className="child">
        <li>Apply for a program</li>
        <li>Mode of Study</li>
        <li>Tuition</li>
        <li>Frequently Asked Questions</li>
       </div>
       </div>
       <div className="parent">E-Portal
       <div className="child">
        <li>Student</li>
        <li>Staff</li>
        
       </div>
       </div>
       <div className="parent">SQI Scholarship
       
       </div>
       <div className="parent">News
       
       </div>
        

        </div> 



    </div>
  )
}

export default Navbar