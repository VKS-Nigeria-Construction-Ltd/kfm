/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import silo_img from '../images/kfm_silo_slide.jpg';
import plant_img from '../images/kfm_plant_slide.jpg';

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="home-slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plant_img}
          alt="KFM Plant"
        />
        <Carousel.Caption>
          <h6 className="text-uppercase">Welcome to Kings Flour Mill</h6>
          <h1 className="primary-head"><span>Production</span> Driven By Innovation</h1>
          <p>Our production processes are purely driven by state of the  art technology <br />
          and innovative industrial manufacturing solutions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={silo_img}
          alt="flourmill silo"
        />

        <Carousel.Caption>
          <h6 className="text-uppercase">Major Manufacturer</h6>
          <h1 className="primary-head"><span>Capacity</span> of <span>500</span> Metric <br/> Tons per day</h1>
          <p>We have the capacity and technical know-how to mill varying grades of premium wheat based flour</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
