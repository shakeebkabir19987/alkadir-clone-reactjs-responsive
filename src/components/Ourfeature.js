import React from 'react'
// import "./Ourfeaturestyles.css"
import "./NewfeatureStyles.css"
import Profile from "../../src/images/logo (1).svg"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pic from "../../src/images/map2.png";
import FeatureImg from "../../src/images/feature-img.jpg"

const Ourfeature = () => {
  return (
    <>
      <div style={{ backgroundColor: "lightgray" }}>

        <h3 className='mainHeading px-5 pt-5 mx-5' style={{ fontSize: "50px", fontWeight: "bolder" }}>Our features</h3>
        <h5 className='subHeading px-5 mx-5 ' >Why you Should choice us</h5>

        <div className="outerbothsection " >

          <div className='leftsection' style={{ backgroundColor: "lightgray" }}>

            {/* first row */}

            <div className="firstrow mt-5 mb-0  mx-5" style={{ display: "flex", flexWrap: "wrap", }} id='rowOne'>



              {/* first card of first row*/}
              <div style={{}} className='cards' >

                <Card id='card1' style={{ width: "15rem", height: "15rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", border: "none" }} className="mb-5 mx-0">
                  <Card.Img variant="top" src={Pic} alt="pic" style={{ height: "4rem", width: "4rem", borderRadius: "30px" }} className="mt-4" />

                  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                    <Card.Text style={{ fontWeight: "bolder", textAlign: "center" }}>Professional and trained   workers</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>Trained in the best specialized and applied institutes</Card.Text>

                  </Card.Body>
                </Card>



              </div>





              {/* second card of first row */}
              <div style={{}} className='cards' >
                <Card id='card1' style={{ width: "15rem", height: "15rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", border: "none" }} className="mb-5 mx-0">
                  <Card.Img variant="top" src={Pic} alt="pic" style={{ height: "4rem", width: "4rem", borderRadius: "30px" }} className="mt-4" />

                  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                    <Card.Text style={{ fontWeight: "bolder", textAlign: "center" }}>Professional and trained workers</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>Trained in the best specialized and applied institutes</Card.Text>

                  </Card.Body>
                </Card>


              </div>




              {/* third card of first row */}
              <div style={{}} className='cards' >
                <Card id='card1' style={{ width: "15rem", height: "15rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", border: "none" }} className="mb-5 mx-0">
                  <Card.Img variant="top" src={Pic} alt="pic" style={{ height: "4rem", width: "4rem", borderRadius: "30px" }} className="mt-4" />

                  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                    <Card.Text style={{ fontWeight: "bolder", textAlign: "center" }}>Professional and trained workers</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>Trained in the best specialized and applied institutes</Card.Text>

                  </Card.Body>
                </Card>


              </div>




            </div>


            {/* second row */}

            <div className="secondrow mx-5" style={{ display: "flex", flexWrap: "wrap" }}>

              <div style={{}} className=''>

                {/* first card of second row */}
                <Card style={{ width: "15rem", height: "15rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", border: "none" }} className="mb-5 mx-0">
                  <Card.Img variant="top" src={Pic} alt="pic" style={{ height: "4rem", width: "4rem", borderRadius: "30px" }} className="mt-4" />

                  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                    <Card.Text style={{ fontWeight: "bolder", textAlign: "center" }}>Professional and trained workers</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>Trained in the best specialized and applied institutes</Card.Text>

                  </Card.Body>
                </Card>


              </div>
              <div style={{}} className=''>
                {/* second card of second row */}
                <Card style={{ width: "15rem", height: "15rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", border: "none" }} className="mb-5 mx-0">
                  <Card.Img variant="top" src={Pic} alt="pic" style={{ height: "4rem", width: "4rem", borderRadius: "30px" }} className="mt-4" />

                  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                    <Card.Text style={{ fontWeight: "bolder", textAlign: "center" }}>Professional and trained workers</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>Trained in the best specialized and applied institutes</Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div style={{}} className=''>
                {/* third card of second row */}
                <Card style={{ width: "15rem", height: "15rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", border: "none" }} className="mb-5 mx-0">
                  <Card.Img variant="top" src={Pic} alt="pic" style={{ height: "4rem", width: "4rem", borderRadius: "30px" }} className="mt-4" />

                  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                    <Card.Text style={{ fontWeight: "bolder", textAlign: "center" }}>Professional and trained workers</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>Trained in the best specialized and applied institutes</Card.Text>

                  </Card.Body>
                </Card>

              </div>

            </div>




          </div>

          {/* rightsetion */}


          <div className="rightsection" style={{ marginRight: "40px" }}>
            {/* right section first card */}
            <div style={{ border: "2px solid black", width: "300px", height: " 290px", marginTop: "-680px" }} className='mx-2  ms-auto mb-4 me-5'>
              <img src={FeatureImg} style={{ width: "300px", height: " 290px" }} />

            </div>



            {/* right section second card */}
            <div style={{ border: "2px solid black", width: "300px", height: " 290px" }} className='mx-2 ms-auto mb-2 me-5'>
              <img src={FeatureImg} style={{ width: "300px", height: " 290px" }} />
            </div>

          </div>




        </div>




      </div>
    </>
  )
}

export default Ourfeature