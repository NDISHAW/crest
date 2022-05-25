import React from 'react'

function Intro() {
  return (
    <div className="container features">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
            <h2 className="feature-title">Our Moving services <i className="fa fa-truck" aria-hidden="true"></i></h2> 
            <img src="./Images/free.jpeg" className="img-fluid"alt='us'/> 
            <p>Everything you need for a smart local moving experience. With our local moving service, we handle everything from packing to setting up at your new house/office.</p>

        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
            <h2 className="feature-title">INTERNATIONAL MOVE  <i className="fa fa-truck" aria-hidden="true"></i></h2>
            <img src="./Images/international.jpeg" className="img-fluid"alt='international'/>
            <p>For cross border moves, we provide a custom move plan to fit your needs and schedules, right from your doorstep to unpacking and setting up in your final destination.</p>

        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
            <h2 className="feature-title">Local Moves <i className="fa fa-truck" aria-hidden="true"></i></h2>
            <img src="./Images/LOCAL.png" className="img-fluid" alt='local'/>
            <p>For cross border moves, we provide a custom move plan to fit your needs and schedules, right from your doorstep to unpacking and setting up in your final destination.</p>

        </div>
        
        <div className="col-lg-4 col-md-4 col-sm-12">
            <h2 className="feature-title">STORAGE   <i className="fa fa-truck" aria-hidden="true"></i></h2>
            <img src="./Images/storage.jpeg  " className="img-fluid" alt='storage'/>
            <p>Our customers find value in utilizing our secure storage and warehousing facilities during home renovations, downsizing, or during a transitional between homes.</p>
        </div>
    </div>
</div>
  )
}

export default Intro;