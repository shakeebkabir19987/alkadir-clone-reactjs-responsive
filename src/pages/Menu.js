import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Box} from '@mui/material';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuList from "../../src/data";
// import { CardActionArea } from '@mui/material';


const Menu=()=>{
    return (
    <layout >
        <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", justifyContent:"space-evenly", marginBottom:"5px", marginTop:"30px"}}>
            
        {       
        MenuList.map(menu=>(
        <Card sx={{ maxWidth: 345 , m:2}}>
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
       
     ))   


            }
        </Box>
    </layout>
    )
};

export default Menu;