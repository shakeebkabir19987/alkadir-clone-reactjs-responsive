import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pic from "../../src/images/map2.png";

const Facts = () => {
  return (
    <div className="outerContainer"  style={{backgroundColor:"lightgray"}}>

      <h2
        className="mt-0 mb-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
        }}
      >
        Facts about us
      </h2>



      <div className="allCards" style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}} >
        {/* first card */}
        <Card style={{ width: "15rem", height: "15rem", borderRadius:"120px", display:"flex", justifyContent:"center", alignItems:"center" ,  backgroundColor:"grey" , border:"3px solid orange"}} className="mb-5 mx-5">
          <Card.Img variant="top" src={Pic}  alt="pic"  style={{ height:"3rem", width:"3rem", borderRadius:"30px"}} className="mt-4"/>

          <Card.Body>
            <Card.Title style={{display:"flex",justifyContent:"center",alignItems:"center", color:"white"}}>CustomerCount</Card.Title>
            <Card.Text style={{display:"flex",justifyContent:"center",alignItems:"center", fontWeight:"bolder", fontSize:"3rem", color:"orange"}}>2838</Card.Text>
          </Card.Body>
        </Card>

         {/* second card */}
         <Card style={{ width: "15rem", height: "15rem",border:"2px solid black", borderRadius:"120px", display:"flex", justifyContent:"center", alignItems:"center",   backgroundColor:"grey" , border:"3px solid orange"}} className="mb-5 mx-5">
          <Card.Img variant="top" src={Pic}  alt="pic"  style={{ height:"3rem", width:"3rem", borderRadius:"30px"}} className="mt-4"/>

          <Card.Body>
            <Card.Title style={{display:"flex",justifyContent:"center",alignItems:"center" , color:"white"}}>CustomerCount</Card.Title>
            <Card.Text style={{display:"flex",justifyContent:"center",alignItems:"center", fontWeight:"bolder", fontSize:"3rem",  color:"orange"}}>2838</Card.Text>
          </Card.Body>
        </Card>

        {/* third card */}
        <Card style={{ width: "15rem", height: "15rem",border:"2px solid black", borderRadius:"120px", display:"flex", justifyContent:"center", alignItems:"center",   backgroundColor:"grey" , border:"3px solid orange" }} className="mb-5 mx-5">
          <Card.Img variant="top" src={Pic}  alt="pic"  style={{ height:"3rem", width:"3rem", borderRadius:"30px"}} className="mt-4"/>

          <Card.Body>
            <Card.Title style={{display:"flex",justifyContent:"center",alignItems:"center" , color:"white"}}>CustomerCount</Card.Title>
            <Card.Text style={{display:"flex",justifyContent:"center",alignItems:"center", fontWeight:"bolder", fontSize:"3rem", color:"orange"}}>2838</Card.Text>
          </Card.Body>
        </Card>


      </div>


      
    </div>
  );
};

export default Facts;
