import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    // Set a timeout to simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Notify App that loading is complete
    }, 2000); // Adjust to match the video/animation duration
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div id="preloader">
      {/* Use the correct path for the video */}
      <video
        src={require("../assets/images/loader.mp4")}
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Preloader;
