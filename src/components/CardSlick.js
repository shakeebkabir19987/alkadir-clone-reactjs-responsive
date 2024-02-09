import React from 'react'
import "./CardSlickStyles.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Component } from "react";
import { styled } from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../../src/images/background.jpg";

const CardSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='carousel'>
      <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontWeight: "bolder" }} className='mb-5'>Carousel Tutorial</h2>
      <Slider {...settings}>

        {/* 1 */}
        <Card className='box'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>Price : 14.25 Crores</Card.Title>
            <Card.Title style={{ fontWeight: "bold" }}>DHA Phase 5</Card.Title>
            <Card.Text>
            10 Marla | Software Park | Boulevard
            </Card.Text>
            <Button variant="primary" >Message</Button>
          </Card.Body>
        </Card>

        {/* 2 */}
        <Card className='box'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>Price : 14.25 Crores</Card.Title>
            <Card.Title style={{ fontWeight: "bold" }}>DHA Phase 5</Card.Title>
            <Card.Text>
            13 Marla | Hick Park | Colored
            </Card.Text>
            <Button variant="primary" >Message</Button>
          </Card.Body>
        </Card>

        {/* 3 */}
        <Card className='box'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>Price : 14.25 Crores</Card.Title>
            <Card.Title style={{ fontWeight: "bold" }}>DHA Phase 5</Card.Title>
            <Card.Text>
            15 Marla | Jinnah Park | Aazaded
            </Card.Text>
            <Button variant="primary" >Message</Button>
          </Card.Body>
        </Card>

        {/* 4 */}
        <Card className='box'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>Price : 14.25 Crores</Card.Title>
            <Card.Title style={{ fontWeight: "bold" }}>DHA Phase 5</Card.Title>
            <Card.Text>
            18 Marla | Iqbal Park | NewWorld
            </Card.Text>
            <Button variant="primary" >Message</Button>
          </Card.Body>
        </Card>

        {/* 5 */}
        <Card className='box'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>Price : 14.25 Crores</Card.Title>
            <Card.Title style={{ fontWeight: "bold" }}>DHA Phase 5</Card.Title>
            <Card.Text>
            20 Marla | Syed Park | Landlord
            </Card.Text>
            <Button variant="primary" >Message</Button>
          </Card.Body>
        </Card>

        {/* 6 */}
        <Card className='box'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>Price : 14.25 Crores</Card.Title>
            <Card.Title style={{ fontWeight: "bold" }}>DHA Phase 5</Card.Title>
            <Card.Text>
            17 Marla | High Park | Lighted
            </Card.Text>
            <Button variant="primary" >Message</Button>
          </Card.Body>
        </Card>

      </Slider>
    </div>
  );
}

export default CardSlick