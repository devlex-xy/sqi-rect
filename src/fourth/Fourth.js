import React from 'react'
import './Fourth.css'
import soft from '../asset/software-engineering-630x330-1.webp'
import pro from '../asset/product.jpg'
import date from '../asset/DATA-SQI.jpg'
import digital from '../asset/digital-literacy.jpg'
function Fourth() {
  return (
    <div>
<div className="wrapme">
<div className="left-content">
  <h1>Our Top Courses</h1>
  <p className='pp'>Take a look at some of our popular courses</p>
  <h5 className='hh'>View all Courses</h5>

  <div className="containerfd">
    <img src={soft} alt="" />
    <h3>Software Engineering</h3>
    <h5>Software Engineering is one of the most in-demand jobs across the globe today.</h5>
    <p>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software 
      you use today either on your phone or computer within your browser. 
      Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and 
      other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
      <a href="#">Learn More </a>
  </div>
  <div className="containerfd2">
    <img src={pro} alt="" />
    <h3>UI/UX – Product Design</h3>
    <h5>More than ever before individuals and businesses are relying on digital products and services.
       From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design 
      is even more import at this time as it determines the overall experience of the users.</h5>
    <p>Here, you’ll build your product design skillset
       from the bottom up with lessons, mentorship sessions, and career 
       advice from our design professionals.</p>
      <a href="#">Learn More </a>
  </div>
  

</div>

<div className="right-c">

<div className="containerfd3">
    <img src={date} alt="" />
    <h3>Data Science & Analysis</h3>
    <h5>The eruption of data is transforming indiviuals and businesses. Companies
       either big or small are now expecting their business decisions to be based on data-led insight.</h5>
    <p>Data specialists have a tremendous impact on business strategies and 
      marketing tactics because everyone now depends on data to
       formulate improved strategies for the future of their companies.</p>
      <a href="#">Learn More </a>
  </div>
<div className="containerfd3">
    <img src={digital} alt="" />
    <h3>Digital Literacy</h3>
    <h5>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers 
      such as desktop and notebook PCs but also computers that you interact with in other places too, like your
       bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies 
       that drive our computerized society, including the Internet and local area networks (LANs).</h5>
    <p>Taking this course will help you become a digitally literate person—that is,
       someone who understands how computer technology fits into our 
      modern society and knows how to navigate a variety of computing environments.</p>
      <a href="#">Learn More </a>
  </div>


  </div>


</div>


    </div>
  )
}

export default Fourth