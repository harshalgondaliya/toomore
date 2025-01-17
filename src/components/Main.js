import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Main.css";
import "./OurStory.css"; // Add the CSS file here

// Importing images
import image1 from "../assets/images/front.jpg";
import image2 from "../assets/images/grapes.jpg";
import image3 from "../assets/images/lychee.jpg";
import image4 from "../assets/images/mango.jpg";
import image5 from "../assets/images/strawberry.jpg";
import image6 from "../assets/images/pineapple.jpg";

import softFrontImage from "../assets/images/soft_front.jpg";

const images = [image1, image2, image3, image4, image5, image6];

// Importing images with descriptions
const imagesWithDesc = [
  {
    src: require("../assets/all_juice/grapes_img_page-0001.jpg"),
    desc: "REFRESHING GRAPE JUICE",
    desc1: "Packed with Antioxidants",
  },
  {
    src: require("../assets/all_juice/pineapple_img.jpg"),
    desc: "TANGY PINEAPPLE JUICE",
    desc1: "Rich in Vitamin C and Bromelain",
  },
  {
    src: require("../assets/all_juice/straw_img_page-0001.jpg"),
    desc: "DELICIOUS STRAWBERRY JUICE",
    desc1: "Naturally Sweet and Full of Vitamin C",
  },
  {
    src: require("../assets/all_juice/lychee_img_page-0001.jpg"),
    desc: "SWEET LYCHEE JUICE",
    desc1: "Exotic Flavor with a Vitamin Boost",
  },
  {
    src: require("../assets/all_juice/mango_img_page-0001.jpg"),
    desc: "TROPICAL MANGO JUICE",
    desc1: "Zero Sugar, Pure Mango Goodness",
  },
];

const Main = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const startAutoScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    let index = currentIndex;

    autoScrollRef.current = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollTo({
          left: scrollContainer.offsetWidth * index,
          behavior: "smooth",
        });

        index = (index + 1) % images.length; // Move to the next index or reset to 0
        setCurrentIndex(index);
      }
    }, 3000); // Change image every 3 seconds
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll(); // Start auto-scrolling on component mount

    return () => stopAutoScroll(); // Clean up the interval on component unmount
  }, [currentIndex]);

  const handleDotClick = (index) => {
    const scrollContainer = scrollContainerRef.current;

    stopAutoScroll(); // Pause auto-scrolling
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.offsetWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index); // Update the active dot
    }
    setTimeout(startAutoScroll, 3000); // Resume auto-scrolling after 3 seconds
  };

  const handleImageInteraction = () => {
    stopAutoScroll(); // Pause auto-scrolling on image interaction
    setTimeout(startAutoScroll, 3000); // Resume auto-scrolling after 3 seconds
  };

  return (
    <div className="main-content">
      <div className="additional-image0">
        <img
          src={softFrontImage}
          alt="Soft Front"
          className="soft-front-image0"
        />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div
        className="scrollable-images"
        ref={scrollContainerRef}
        onTouchStart={handleImageInteraction} // Pause on touch
        onMouseDown={handleImageInteraction} // Pause on mouse click
      >
        {images.map((image, index) => (
          <div key={index} className="image-box">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="story-part">
        <div className="story-written">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="story-title">
            Discover the Ultimate Juice Experience
          </h1>
          <p className="story-description">
            For decades, we've been crafting the finest juices by selecting the
            freshest, sun-ripened fruits at their peak. From orchard to bottle,
            every sip is a celebration of flavor, nutrition, and care.
            Experience the vibrant taste that’s been delighting
            generations—pure, refreshing, and unforgettable.
          </p>
          <button
            className="story-button"
            onClick={() => navigate("/Juice")} // Use navigate instead of window.location.href
          >
            EXPLORE OUR JUICE COLLECTION
          </button>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="images-with-desc">
        {imagesWithDesc.map((image, index) => (
          <div key={index} className="desc-box">
            <img src={image.src} alt={image.desc} className="desc-image" />
            <p className="desc-text">{image.desc}</p>
            <h3 className="desc-text1">{image.desc1}</h3>
          </div>
        ))}
      </div>

      <div className="story-part">
        <div className="story-written">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="story-title">Best Juice Flavour Colllection</h1>
          <p className="story-description">
            Sure, Tropicana may not have invented orange juice, but in 1954, we
            found a way to bring fresh-tasting OJ to everyone. And to this day,
            we’re still hand-picking oranges at their peak, squeezing them
            within 24 hours, and bringing that delicious juice to fridges
            everywhere.
          </p>
          <button
            className="story-button"
            onClick={() => navigate("/our-story")} // Use navigate instead of window.location.href
          >
            OUR STORY
          </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="additional-image">
        <img
          src={softFrontImage}
          alt="Soft Front"
          className="soft-front-image"
        />
      </div>
    </div>
  );
};

export default Main;
