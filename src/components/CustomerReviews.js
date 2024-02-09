import React, { Component } from "react";
import Slider from "react-slick";
// import "./CustomerReviewsStyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../../src/images/profile2.jpg";
import Profile2 from "../../src/images/profile1.jpg"
import Profile3 from "../../src/images/profile.jpg"


const CustomerReviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>


      <div style={{ backgroundColor: "lightgray" }} className="pt-5 mb-4">
        <h2 className="mb-5 mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bolder", }}> Customer Reviews</h2>
        <Slider   {...settings} >



          {/* first card portion*/}
          <div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>


              {/* 1 */}
              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile} alt className="profile-pic"
                  // style={{marginTop:"-50px"}}
                  />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.e</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Dr Abdullah</span>
              </div>

              {/* 2nd */}

              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile2} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Mr David</span>
              </div>

              {/* 3rd */}
              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile3} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit.</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Miss Preya</span>
              </div>




            </div>


          </div>


          {/* second card portion*/}
          <div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              {/* 2.1 */}
              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile2} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit.</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Dr Abdullah</span>
              </div>


              {/* 2.2 */}


              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile2} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Dr Abdullah</span>
              </div>






              {/* 2.3 */}


              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile2} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit.</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Dr Abdullah</span>
              </div>

            </div>


          </div>



          {/* third card portion*/}
          <div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              {/* 3.1 */}
              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile3} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Mr David</span>
              </div>


              {/* 3.2 */}


              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile3} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Mr David</span>
              </div>






              {/* 3.3 */}


              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile3} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Mr David</span>
              </div>

            </div>


          </div>



          {/* four card  portion*/}
          <div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              {/* 4.1 */}
              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Alen</span>
              </div>


              {/* 4.2 */}


              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat.elit</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Alen</span>
              </div>






              {/* 4.3 */}


              <div className="profile-card mb-5 mx-3" id='firstcard' style={{ backgroundColor: "white", height: "400px" }}>
                <div className="image" >
                  <img src={Profile} alt className="profile-pic" />
                </div>
                <div className="data">

                  <span>Developer &amp; Lorem ipsum dolor sit amet consectetur adipisicing elit.elit. Placeat.elit.elit. Placeat</span>
                </div>
                <div className="row">



                </div>
                <span style={{ color: "grey" }}>Alen</span>
              </div>

            </div>


          </div>

        </Slider>
      </div>

    </>

  )
}

export default CustomerReviews
