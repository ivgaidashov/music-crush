import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftSquare } from "@styled-icons/bootstrap/ArrowLeftSquare";
import { ArrowRightSquare } from "@styled-icons/bootstrap/ArrowRightSquare";

import "./slider.scss";

const Slider = () => {
  const banners = [
    {
      id: 11,
      artist: "Lady Gaga",
      title: "Chromatica",
      img: "img/gaga.jpg",
      desc: "Chromatica is the sixth studio album by American singer Lady Gaga, released on May 29, 2020, by Interscope Records and subsidiary Streamline.",
      color: "#C50035",
    },
    {
      id: 22,
      artist: "Machine Gun Kelly",
      title: "Mainstream Sellout",
      img: "img/mgk.jpg",
      desc: "Mainstream Sellout is the sixth studio album by American musician Machine Gun Kelly, released on March 25, 2022, through Bad Boy Records and Interscope Records.",
      color: "#C478BC",
    },
    {
      id: 24,
      artist: "Cardi B",
      title: "Invasion of Privacy",
      img: "img/cardi.jpg",
      desc: "Invasion of Privacy is the debut studio album by American rapper Cardi B. It was released on April 6, 2018, by Atlantic Records. Primarily a hip hop record, Invasion of Privacy also includes trap, Latin trap and R&B.",
      color: "#193D53",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentCard === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentCard - 1;
    setCurrentCard(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentCard === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentCard + 1;
    setCurrentCard(newIndex);
  };

  return (
    <div className="slider">
      <div className="card">
        <div className="wrapper">
          <Link to={`/item/${banners[currentCard].id}`}>
            <img src={banners[currentCard].img} alt="" />
          </Link>
          <div className="slider-icons">
            <ArrowLeftSquare className="slider-icon" onClick={prevSlide} />
            <ArrowRightSquare className="slider-icon" onClick={nextSlide} />
          </div>
        </div>
        <div className="welcome-box">
          <div className="album-info">
            <span className="album-title" >
              «{banners[currentCard].title}»
            </span>
            <span className="artist-title">by {banners[currentCard].artist}</span>
          </div>

          <p>{banners[currentCard].desc}</p>
          <Link to={`/item/${banners[currentCard].id}`}>
          <button
            className="blue-button"
            style={{ backgroundColor: banners[currentCard].color }}
          >
            Order Now!
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
