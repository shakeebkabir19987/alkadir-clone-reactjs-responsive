import Card from 'react-bootstrap/Card';

function Aboutus() {
  return (
    <div style={{ backgroundColor:"lightgray" }}>
    <div className="d-flex align-items-center 
    justify-content-center" style={{
        maxWidth: '950px', 
        margin: '0 auto', 
        padding: '20px', 
        boxSizing: 'border-box',
        backgroundColor:"lightgray" 
      }}>
    <Card  className='mt-5 mb-5 ' style={{width:"58rem",backgroundColor:"grey", borderRadius:"25px"}}>
      <Card.Body >
        <Card.Title className="d-flex align-items-center  
    justify-content-center" style={{color:"white", fontWeight:"bolder", fontSize:"50px"}}>About us</Card.Title>
        
        <Card.Text style={{color:"white", fontSize:"25px"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>

    </div>
  
  );
}

export default Aboutus;