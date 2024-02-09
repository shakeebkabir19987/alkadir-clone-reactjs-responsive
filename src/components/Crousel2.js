import Carousel from "react-bootstrap/Carousel";
import "./Crousel2Styles.css";

function Crousel2() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alkadir.com/app/uploads/e3-mibjdlqjnf.jpg"
          alt="First slide"
        />

        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <div className="pone1"  style={{ height: "50%", border: "2px solid orange" }}>
            <p
              style={{
               height:"100%",
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#42424275",
                fontSize: "46px",
              }} 
            >
            {/* <span className="slideText">First slide of Alkadir Trust that is Foundaton</span> */}
            <span className="slideText">Our foundation is Licensed by Ministry Of Labour</span>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alkadir.com/app/uploads/e3-esstnawkjk.jpg"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            fontSize: "46px",
          }}
        >
          <div style={{ height: "50%", border: "2px solid orange" }}>
            <p
              style={{
                height: "100%",
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#42424275",
                fontSize: "46px",
              }}>
              
              {/* <span className="slideText">Second slide of Alkadir Trust that is Foundaton</span> */}
              <span className="slideText">Recruitment of all Professional and technical workers</span>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alkadir.com/app/uploads/e3-dpxoexbfvj.jpg"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <div style={{ height: "50%", border: "2px solid orange" }}>
            <p
              style={{
                height: "100%",
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#42424275",
                fontSize: "46px",
              }}
            >
               {/* <span className="slideText">Third slide of Alkadir Trust that is Foundaton</span> */}
               <span className="slideText">Drivers with Gulf Expertise and Licensed</span>
            </p>
          </div>

        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel2;
