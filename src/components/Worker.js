import React from "react";
import Button from 'react-bootstrap/Button';

function Workers() {
  return (
    <>
       <div className="d-flex align-items-center justify-content-center mt-0 mb-0" style={{ flexWrap: "wrap", backgroundColor: "lightgray" }}>

<div className="container mb-5 mt-5" style={{  maxWidth: "73%", padding: "15px", backgroundColor: "white" }}>

<div style={{ backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "-15px", marginRight: "-15px", marginTop: "-15px", marginBottom: "0"}}>

  <h1 className="pt-3 pb-3 mb-0" style={{ backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "-15px", marginRight: "-15px", marginTop: "", marginBottom: "0" ,color: "white", margin: "0" }}>View Workers</h1>
</div>


          <div className="button-div mt-5 text-center" >
            {/* first row for buttons */}
            <div className="row justify-content-center">
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
            </div>

            {/* second row for buttons */}
            <div className="row mt-4 justify-content-center">
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
            </div>

            {/* third row for buttons */}
            <div className="row mt-4 justify-content-center">
              <div className="col-md-2 col-6 mb-2">
                <Button variant="outline-warning" style={{ color: "black", border: "1px solid black", borderRadius: "20px", fontWeight: "bolder" }}>WORKERS</Button>
              </div>
            </div>

          </div>

        </div>
      </div>


     





    </>
  );
}

export default Workers;
