import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import Logo from "../../src/images/logo (1).svg";
import Logo from "../../src/images/logo-new.svg"; 

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="200"/>
        
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/aboutus"}>About us</NavLink>
        </li>
        <li>
          <NavLink to={"/ourservices"}>Our Services</NavLink>
        </li>
        <li>
          <NavLink to={"/requestworker"}>Request Worker</NavLink>
        </li>

        <li>
          <NavLink to={"/allworkers"}>All Workers</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Manpower Portal</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/contactus"}>Contact us</NavLink>
        </li>
        <li>
          <NavLink to={"/arabic"}>Arabic </NavLink>
        </li>
        
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
                
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"} style={{fontWeight:"bolder"}}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/aboutus"} style={{fontWeight:"bolder"}}>ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to={"/ourservices"} style={{fontWeight:"bolder"}}> SERVICES</NavLink>
                </li>
                <li>
                  <NavLink to={"/requestworker"} style={{fontWeight:"bolder"}}>CONTACT</NavLink>
                </li>



                {/* <li>
                  <NavLink to={"/allworkers"} style={{fontWeight:"bolder"}}>ALL WORKERS</NavLink>
                </li>

                <li>
                  <NavLink to={"/manpowerportal"} style={{fontWeight:"bolder"}}>PORTAL</NavLink>
                </li>

                <li>
                  <NavLink to={"/blog"} style={{fontWeight:"bolder"}}>BLOG</NavLink>
                </li>

                <li>
                  <NavLink to={"/contactus"} style={{fontWeight:"bolder"}}>CONTACT </NavLink>
                </li>

                <li>
                  <NavLink to={"/arabic"} style={{fontWeight:"bolder"}}>ARABIC</NavLink>
                </li> */}
                
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
