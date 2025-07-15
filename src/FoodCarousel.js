import React from "react";
import FoodItem from "./FoodItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function FoodCarousel({ category, items }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section style={{ marginBottom: 36 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}>
        <h2 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700 }}>
          {category}
        </h2>
      </div>
      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={idx} style={{ padding: 10 }}>
            <FoodItem {...item} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default FoodCarousel;

