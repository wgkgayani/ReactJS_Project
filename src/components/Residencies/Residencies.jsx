import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

// Luxury & Supercar Data
const luxuryData = [
  {
    "name": "Bentley Continental GT",
    "price": "202,500",
    "detail": "Luxury grand tourer with handcrafted interior and powerful W12 engine.",
    "image": "./r5.jpg"
  },
  {
    "name": "Aston Martin DB11",
    "price": "205,000",
    "detail": "British luxury sports car with elegant design and exceptional performance.",
    "image": "./r6.jpg"
  },
  {
    "name": "Maserati MC20",
    "price": "210,000",
    "detail": "Italian supercar with V6 engine and carbon fiber construction.",
    "image": "./r7.jpg"
  },
  {
    "name": "Lotus Emira",
    "price": "74,900",
    "detail": "Mid-engine sports car with pure driving dynamics and lightweight design.",
    "image": "./r8.jpg"
  },
  {
    "name": "Jaguar F-Type R",
    "price": "102,000",
    "detail": "British sports car with supercharged V8 and convertible options.",
    "image": "./r9.jpg"
  },
  {
    "name": "Alfa Romeo Giulia Quadrifoglio",
    "price": "79,000",
    "detail": "High-performance sedan with Ferrari-derived V6 and track capabilities.",
    "image": "./r10.jpg"
  }
];

// Coming Soon Vehicles Data
const comingSoonData = [
  {
    "name": "Tesla Cybertruck",
    "price": "39,900",
    "detail": "Revolutionary electric pickup truck with futuristic design and advanced technology.",
    "image": "./2024-gwm-tank-500-7.webp",
    "releaseDate": "Q2 2024"
  },
  {
    "name": "BMW iX5 Hydrogen",
    "price": "85,000",
    "detail": "First hydrogen-powered BMW SUV with zero emissions and long-range capability.",
    "image": "./EMBARGO-BUGATTI-World-Premiere-Presskit-Images-26.webp",
    "releaseDate": "Q3 2024"
  },
  {
    "name": "Audi Q6 e-tron",
    "price": "65,000",
    "detail": "Premium electric SUV with advanced autonomous driving features and luxury interior.",
    "image": "./most-expensive-cars-in-2024.webp",
    "releaseDate": "Q4 2024"
  },
  {
    "name": "Mercedes EQS SUV",
    "price": "110,000",
    "detail": "Ultra-luxury electric SUV with cutting-edge technology and exceptional range.",
    "image": "./AA1ynS2B.jpg",
    "releaseDate": "Q1 2025"
  },
  {
    "name": "Porsche Macan EV",
    "price": "75,000",
    "detail": "Electric version of the popular Macan with Porsche's signature performance and style.",
    "image": "./15513766330_d2d815927f_k.webp",
    "releaseDate": "Q2 2025"
  },
  {
    "name": "Lucid Gravity",
    "price": "80,000",
    "detail": "Luxury electric SUV with exceptional range and innovative interior design.",
    "image": "./intro-1706142243.jpg",
    "releaseDate": "Q3 2025"
  }
];

const Residencies = () => {
  return (
    <section className="r-wrapper" id="Residencies">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Premium Performance Vehicles</span><br />
        
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card performance-card">
                <img src={card.image} alt="performance vehicle" />

                <span className="seconderyText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="seconderyText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="primaryText">
            Luxury & Supercar Collection
          </span>
          <br />
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {luxuryData.map((card, j) => (
            <SwiperSlide key={j}>
              <div className="flexColStart r-card luxury-card">
                <img src={card.image} alt="luxury vehicle" />

                <span className="seconderyText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="seconderyText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Coming Soon</span>
          <span className="primaryText">Future Vehicles & Upcoming Releases</span><br />
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {comingSoonData.map((card, k) => (
            <SwiperSlide key={k}>
              <div className="flexColStart r-card coming-soon-card">
                <img src={card.image} alt="coming soon vehicle" />
                <div className="coming-soon-badge">Coming Soon</div>

                <span className="seconderyText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="seconderyText">{card.detail}</span>
                <span className="release-date">Expected: {card.releaseDate}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
