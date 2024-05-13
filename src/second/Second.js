import React from 'react'
import './Second.css'
import college from '../asset/college.jpg'
import prof from '../asset/prof.jpg'
import cert from '../asset/certificate.jpg'
function Second() {
  return (
    <div className='containert'>
        <div className="fg">
       <h1> Start here. Change the world.</h1>
        </div>
        <div className="wrap">
            <div className="word-container">
                <img src={college} alt="" />
                <h2>National Innovative Diploma (NID)</h2>
                <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a
                     2 year approved academic program of the National Board for Technical Education (NBTE).</p>
                     <h5>Learn More</h5>
                     <div className="coat"></div>
            </div>
            <div className="word-container">
                <img src={prof} alt="" />
                <h2>Professional Diploma Certificate</h2>
                <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT 
                    certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                     <h5>Learn More</h5>
                     <div className="coat"></div>
            </div>
            <div className="word-container">
                <img src={cert} alt="" />
                <h2>Certificate Program</h2>
                <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range 
                    of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
                     <h5>Learn More</h5>
                     <div className="coat"></div>
            </div>

        </div>


    </div>
  )
}

export default Second