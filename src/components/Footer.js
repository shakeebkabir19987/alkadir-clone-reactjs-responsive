import React from 'react'
import "./FooterStyles.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Footer = () => {
  return (
    <>
      <div className='mainContainer pt-5 mt-5' style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", backgroundColor: "#1C2127" }}>

        {/* first section */}
        <div className='firstSection mb-3  mx-2' style={{ width: "350px", height: "300px", backgroundColor: "#1C2127" }}>
          <h4 className='mt-4' style={{ textDecoration: "underline", textDecorationThickness: "3px", textDecorationColor: "orange", textUnderlineOffset: "0.5rem", color: "white", fontWeight: "bold" }}>Our Location</h4>
          <p className='mt-4' style={{ color: "white" }}>Muscat - Northen Ghobrah - Bank Muscat Building</p>

          <h5 className='mt-4' style={{ textDecoration: "underline", textDecorationThickness: "3px", textDecorationColor: "orange", textUnderlineOffset: "0.5rem", color: "white", fontWeight: "bold" }}>Open days</h5>

          <p className='pt-4' style={{ color: "white" }}>
            From nine in the morning until one
            From four afternoon until nine
            Except for Friday
          </p>


        </div>



        {/* second section */}
        <div className='secondSection mb-3  mx-2' style={{ width: "350px", height: "300px", backgroundColor: "#1C2127" }}>
          <h4 className='mt-4' style={{ textDecoration: "underline", textDecorationThickness: "3px", textDecorationColor: "orange", textUnderlineOffset: "0.5rem", color: "white", fontWeight: "bold" }}>Contact us</h4>
          <p className='mt-4' style={{ color: "white" }}>96871519661 -96824137667 -96899058252</p>

          <h5 className='mt-5' style={{ textDecoration: "underline", textDecorationThickness: "3px", textDecorationColor: "orange", textUnderlineOffset: "0.5rem", color: "white", fontWeight: "bold" }}>Follow us</h5>

          <p className='pt-4' style={{ color: "white" }}>
            {/* From nine in the morning until one
              From four afternoon until nine
                 Except for Friday */}
            <FacebookRoundedIcon className='mx-2' style={{ fontSize: "40px", color: "white" }} />
            <TwitterIcon className='mx-1' style={{ fontSize: "40px", color: "yellow" }} />
            <LinkedInIcon className='mx-1' style={{ fontSize: "40px", color: "blue" }} />
            <YouTubeIcon className='mx-1' style={{ fontSize: "40px", color: "red" }} />
            <InstagramIcon className='mx-1' style={{ fontSize: "40px", color: "violet" }} />
            <WhatsAppIcon className='mx-1' style={{ fontSize: "40px", color: "green" }} />
          </p>
        </div>


        {/* third section */}
        <div className='thirdSection mb-3  mx-2' style={{ width: "350px", height: "300px", backgroundColor: "#1C2127" }}>
          <h4 className='mt-4' style={{ textDecoration: "underline", textDecorationThickness: "3px", textDecorationColor: "orange", textUnderlineOffset: "0.5rem", color: "white", fontWeight: "bold" }}>Email</h4>
          <p className='mt-4' style={{ color: "white" }}>info@alkadir.com</p>
          <h5 className='mt-4' style={{ textDecoration: "underline", textDecorationThickness: "3px", textDecorationColor: "orange", textUnderlineOffset: "0.5rem", color: "white", fontWeight: "bold" }}>Subscribe to mailing list</h5>

          <p className='pt-5' style={{ color: "white" }}>
            {/* From nine in the morning until one
              From four afternoon until nine
                 Except for Friday */}

            <input className="emailInput" style={{ backgroundColor: "grey", height: "50px", width: "330px", borderTopRightRadius: "30px", borderBottomRightRadius: "30px", border: "3px solid grey" }} placeholder='Add your Email Adress' />

          </p>

        </div>
      </div>



    </>
  )
}
export default Footer