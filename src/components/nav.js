import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Nav() {
  return (
    <div className="nav w-100 d-flex align-items-center justify-content-center">
      <Carousel
        interval={null}
        indicators={false}
        controls={true}
        className="w-100"
      >
        <Carousel.Item>
          <Link to="/posts">
            <i className="bi bi-house-fill position-relative p-2 position-relative p-2">
              <span className="position-absolute bg-danger">99+</span>
            </i>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/jobs">
            <i className="bi bi-people-fill position-relative p-2">
              <span className="position-absolute bg-danger">3</span>
            </i>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/jobs">
            <i className="bi bi-briefcase-fill position-relative p-2">
              <span className="position-absolute bg-danger">5</span>
            </i>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/messages">
            <i className="bi bi-chat-dots-fill position-relative p-2">
              <span className="position-absolute bg-danger">10</span>
            </i>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/notifications">
            <i className="bi bi-bell-fill position-relative p-2">
              <span className="position-absolute bg-danger">12</span>
            </i>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
