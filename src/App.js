import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import OurStory from "./components/OurStory";
import Juice from "./components/Juice";
import Preloader from "./components/Preloader"; // Import Preloader
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} /> // Show preloader during loading
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/juice" element={<Juice />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
