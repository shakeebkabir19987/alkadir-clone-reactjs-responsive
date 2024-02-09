import React from 'react'
import "./AboutStyles.css"
// import img1 from "../images/img1.jpg"
import {Typography, Box} from '@mui/material';
import Desi from "../images/Desi.jpg";


const About = () => {
  return (
    <div className='About' style={{
      backgroundImage: `url(${Desi})`,width:"100%", height:"100vh",
       }}
       >

         <Box sx={{pt:20, margin:"auto"}}>
         <Typography variant="h3" component="h2" sx={{display:"flex",justifyContent:"center", alignItems:"center", fontWeight:"bold"}} color={"goldenrod"}>
            Welcome To mY RestuRant
          </Typography>
          <Typography variant='h8'sx={{width:"800px",margin:"auto", mt:5, fontWeight:"bold", fontFamily:"sans-serif", fontSize:"20px"}}  component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda architecto corporis, ipsa vitae illo minima suscipit, ipsam vero eum officia quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda architecto corporis, ipsa vitae illo minima suscipit, ipsam vero eum officia quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda architecto corporis, ipsa vitae illo minima suscipit, ipsam vero eum officia quasi.ipsam vero eum officia quasi  eum officia ok.
            </Typography>
            {/* <br /> */}
            <Typography variant='h8'sx={{width:"1000px",margin:"auto",  fontWeight:"bold", fontFamily:"sans-serif", fontSize:"20px"}}  component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda architecto corporis, ipsa vitae illo minima suscipit, ipsam vero eum officia quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda architecto corporis, ipsa vitae illo minima suscipit, ipsam vero eum officia quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda architecto corporis, ipsa vitae illo minima suipit, ipsam vero eum officia quasi.corporis, ipsa vitae illo minima suscipit, ipsam vero eum officia oky done thi.
            </Typography>
          
         </Box>
     
     
    </div>
  )
}

export default About
