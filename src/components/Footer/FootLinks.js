import React from 'react'

import {
    Link
  } from "react-router-dom";

function FootLinks() {
  return (
    <div style={{background:  `beige center/cover url(${process.env.PUBLIC_URL + '/image/footImg.png'}) no-repeat`}}>
      <div className='' style={{background:' rgba(255, 255, 255, 0.72)'}}>
       
       <div className='flex row greenimg container my-0 mx-auto'>
       <div className='flex justify-center '>
       <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="foot-logo"/>
     </div>
   <div className=' container flex column justify-between  mx-auto my-0'>
   <div  className='link-flex  '>
     <h3>About Us</h3>
    
       <Link className='link-list' to="/aboutus">About Us</Link>
       <Link className='link-list'  to="/contact">Contact Us</Link>
       <Link className='link-list'  to="/police">Privacy Policy</Link>
       <Link className='link-list'  to="/terms">Terms of Service</Link>
   </div>
   <div className='link-flex '>
     <h3>About Us</h3>
       <Link className='link-list'  to="/aboutus">About Us</Link>
       <Link className='link-list'  to="/contact">Contact Us</Link>
       <Link className='link-list'  to="/police">Privacy Policy</Link>
       <Link className='link-list'  to="/terms">Terms of Service</Link>
   </div>
   <div className='link-flex '>
     <h3>About Us</h3>
       <Link className='link-list'  to="/aboutus">About Us</Link>
       <Link className='link-list'  to="/contact">Contact Us</Link>
       <Link className='link-list'  to="/police">Privacy Policy</Link>
       <Link className='link-list'  to="/terms">Terms of Service</Link>
   </div>
   <div className='link-flex '>
     <h3>Follow Us</h3>
       <Link  className='link-list' to="/aboutus">About Us</Link>
       <Link  className='link-list' to="/contact">Contact Us</Link>
       <Link  className='link-list' to="/police">Privacy Policy</Link>
       <Link  className='link-list' to="/terms">Terms of Service</Link>
   </div>     
   </div>
       </div>
   </div>
    </div>
  )
}

export default FootLinks
