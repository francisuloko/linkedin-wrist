import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Nav() {
  return (
    <div className="nav w-100">
      <Carousel interval={null} indicators={false} className="w-100 ">
        <Carousel.Item><i className="bi bi-house-fill"></i></Carousel.Item>
        <Carousel.Item><i className="bi bi-people-fill"></i></Carousel.Item>
        <Carousel.Item><i className="bi bi-briefcase-fill"></i></Carousel.Item>
        <Carousel.Item><i className="bi bi-chat-dots-fill"></i></Carousel.Item>
        <Carousel.Item><i className="bi bi-bell-fill"></i></Carousel.Item>
    </Carousel>
    </div>
  );
}