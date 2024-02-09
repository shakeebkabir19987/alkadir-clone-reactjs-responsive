import React, { useState } from "react";
// import "./Contactstyles.css";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import "./ContactStyles.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Contactus = () => {
  
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data)
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
   
  };
  

  return (
    <div className="App" style={{height:"100vh", paddingTop:"20px"}}>
      <Card
        style={{
          maxWidth: 500,
          margin: "0 auto",
          padding: "20px 5px",
          borderRadius: "10px",
          // marginTop: "25px",
          // marginBottom: "15px",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ fontWeight: "bolder", height: "50px", marginTop:"-15px" }}
            >
              Contact Us
            </Button>
          </Typography>

          <Typography
            variant="body2"
            style={{ marginBottom: "25px" }}
            gutterBottom
            component="p"
            color="textSecondary"
          >
            Fill up the form and our team will get contact you
          </Typography>

          <form>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                  name="fname"
                  onChange={handleChange}
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                  name="lname"
                  onChange={handleChange}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  required
                  onChange={handleChange}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Number"
                  type="number"
                  placeholder="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                  name="number"
                  onChange={handleChange}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                  onChange={handleChange}
                />
              </Grid>

              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={submitData}
                  style={{ borderRadius: "20px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

     
    </div>
  );
};

export default Contactus;
