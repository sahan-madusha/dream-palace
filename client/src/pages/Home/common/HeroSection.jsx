import React from "react";

export const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container text-center">
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="display-4 fw-bold">Find Your Dream Palace Today</h1>
          <p className="lead my-4">
            Discover luxurious houses in prime locations with unbeatable prices.
          </p>
        </div>
      </div>
    </div>
  );
};
