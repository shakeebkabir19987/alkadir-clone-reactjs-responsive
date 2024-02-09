import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pic from "../../src/images/cooking.jpg"

const ProfessionCard = () => {
  return (
    <div className='outerContainer' style={{backgroundColor:"lightgray"}}>

      <h2 className='mt-0 mb-5' style={{display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"bolder"}}>Professions we provide</h2>


      <div className='allCards pb-5 ' style={{display:"flex", flexDirection:"row",  flexWrap:"wrap", justifyContent:"center"}}>
        {/* first card */}
      <Card style={{ width: '20rem'}} className='mb-5 mx-5'>
      <Card.Img variant="top" src={Pic}  style={{height:"15rem" }}/>
      <Card.Body style={{backgroundColor: "#F0FFF7"}}>
        <Card.Title>Domesticworkers</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk.
        </Card.Text>
       
      </Card.Body>
    </Card>


     {/* second card */}
     <Card style={{ width: '20rem'}} className='mb-5 '>
      <Card.Img variant="top" src={Pic}  style={{height:"15rem" }}/>
      <Card.Body style={{backgroundColor: "#F0FFF7"}}>
        <Card.Title>Babysitters</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk.
        </Card.Text>
       
      </Card.Body>
    </Card>

     {/* third card */}
     <Card style={{ width: '20rem'}} className='mb-5 mx-5'>
      <Card.Img variant="top" src={Pic}  style={{height:"15rem" }}/>
      <Card.Body style={{backgroundColor: "#F0FFF7"}}>
        <Card.Title>Caringelder</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk.
        </Card.Text>
       
      </Card.Body>
    </Card>

      </div>

      
    </div>
  )
}

export default ProfessionCard
