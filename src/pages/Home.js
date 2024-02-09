import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MenuList from "../../src/data";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imgPath: "https://images.unsplash.com/photo-1615996001375-c7ef13294436?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1597564684442-b603ab8dcdcf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1561807762-8e8b37407e49?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [value, setValue] = React.useState(4);

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 0,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 1500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      {/* Card portion */}
      <Typography variant="h4" component="h2" sx={{display:"flex",justifyContent:"center", alignItems:"center", fontWeight:"bolder"}}>
        <span style={{fontSize:"50px"}}>Our</span> <span style={{backgroundColor:"goldenrod", marginLeft:"15px", borderRadius:"5px"}}> Menu </span>
</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          justifyContent: "space-evenly",
          marginBottom: "5px",
        }}
      >
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: 345, m: 2 , border:"1px solid lightGrey"}}>
            <CardMedia
              sx={{ height: 240 }}
              image={menu.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {menu.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {menu.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Order</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>


     {/* Client Reviews  start*/}
     {/* rating 1 */}
     
     <Typography sx={{display:"flex", justifyContent:"center", mt:6}} variant="h4"><span style={{fontWeight:"bolder"}}> Client</span> <span style={{backgroundColor:"goldenrod", marginLeft:"15px", borderRadius:"5px"}}> Reviews </span></Typography>
        
     <Box sx={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap", mt:9, mb:4}}>

      
     <Card sx={{ maxWidth: 345 ,marginBottom:"30px",  border:"1px solid lightGrey"}}>
      <CardMedia
        sx={{ height:100 , borderRadius:"50px", width:"100px", margin:"auto", marginTop:"15px"}}
        image={require("../images/profile3.jpg")}
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{display:"flex", justifyContent:"center"}}>
          Mark
        </Typography>
      </CardContent>

<Box>
      <Rating name="read-only" value={value} readOnly  sx={{mb:3, mt:0, display:"flex", justifyContent:"center"}}/>
      </Box>
    </Card>


          
          {/* Rating 2 */}
          <Card sx={{ maxWidth: 345 ,marginBottom:"30px", border:"1px solid lightGrey"}}>
      <CardMedia
        sx={{ height:100 , borderRadius:"50px", width:"100px", margin:"auto",  marginTop:"15px"}}
        image={require("../images/profile2.jpg")}
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{display:"flex", justifyContent:"center"}}>
          David
        </Typography>
      </CardContent>
<Box>
      <Rating name="read-only" value={5} readOnly  sx={{mb:3, mt:0, display:"flex", justifyContent:"center"}}/>
      </Box>
    </Card>


    {/* rating 3 */}
    <Card sx={{ maxWidth: 345 ,marginBottom:"30px", border:"1px solid lightGrey"}}>
      <CardMedia
        sx={{ height:100 , borderRadius:"50px", width:"100px", margin:"auto",  marginTop:"15px"}}
        image={require("../images/profile1.jpg")}
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{display:"flex", justifyContent:"center"}}>
          Alon
        </Typography>
      </CardContent>
<Box>
      <Rating name="read-only" value={value} readOnly  sx={{mb:3, mt:0, display:"flex", justifyContent:"center"}}/>
      </Box>
    </Card>

    </Box>

        {/* Client Reviews end */}

        {/* footer */}
        <Typography sx={{backgroundColor:"black", color:"white", display:"flex", justifyContent:"center",alignItems:"center", height:"50px"}}>
           CopyRight@SuperH all Right Reserved
        </Typography>
    </Box>
  );
};

export default Home;
