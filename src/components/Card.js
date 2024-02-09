
  import React from 'react'
  import "./CardStyles.css"
  import Profile from "../../src/images/profile.jpg";
  import Profile2 from "../../src/images/profile1.jpg";
  import Profile3 from "../../src/images/profile2.jpg";

  const  Card = ()=> {
  return (


  <section className="main" style={{backgroundColor:"lightgray", marginTop:"-60px"}}>
      
       {/* first card */}
    <div className="profile-card mb-5 mx-4 " id='firstcard' style={{backgroundColor:"white"}}>
      <div className="image">
        <img src={Profile} alt className="profile-pic" />
      </div>
      <div className="data">
        <h2>Olivia Gomez</h2>
        <span>Developer &amp; Designer</span>
      </div>
      <div className="row">
        
        <div className="info">
          <h3>Followers</h3>
          <span>5000</span>
        </div>
       
      </div>
      <div className="buttons">
        <a href="#" className="btn">Message</a>
        <a href="#" className="btn">Follow Me</a>
      </div>
    </div>


   {/* second card */}
   <div className="profile-card mb-5 mx-4" id='secondcard' style={{backgroundColor:"white"}}>
      <div className="image">
        <img src={Profile2} alt className="profile-pic" />
      </div>
      <div className="data">
        <h2>Mr Smith</h2>
        <span> Designer</span>
      </div>
      <div className="row">
       
        <div className="info">
          <h3>Followers</h3>
          <span>3000</span>
        </div>
        
      </div>
      <div className="buttons">
        <a href="#" className="btn">Message</a>
        <a href="#" className="btn">Follow Me</a>
      </div>
    </div>


    {/* third card */}
    <div className="profile-card mb-5 mx-4" id='thirdcard' style={{backgroundColor:"white"}}>
      <div className="image">
        <img src={Profile3} alt className="profile-pic" />
      </div>
      <div className="data">
        <h2>Mr Abraham</h2>
        <span>Photographer</span>
      </div>
      <div className="row">
       
        <div className="info">
          <h3>Followers</h3>
          <span>4000</span>
        </div>
       
      </div>
      <div className="buttons">
        <a href="#" className="btn">Message</a>
        <a href="#" className="btn">Follow Me</a>
      </div>
    </div>

  </section>




  )}


  export default Card
