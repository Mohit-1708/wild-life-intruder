import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutUs = () => {
  return (
    <div className="about-us p-4 bg-gray-100 rounded-lg shadow-lg">
      <p className="text-lg mb-4">
        This project helps farmers monitor their fields for intruding wild animals and
        sends alerts when they are detected. It combines weather updates,
        live camera feeds, and saved data for efficient monitoring.
      </p>
      
      <h3 className="text-xl font-semibold mb-2">Key Features</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Solar powered</li>
        <li>Unique Sound And Light Combinations</li>
        <li>Easy and Quick to deploy</li>
        <li>Safe for Humans and Animals</li>
        <li>AI Enabled</li>
      </ul>
      
      <div className="carousel-container w-full max-w-md mx-auto">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src="/images/project1.jpg" alt="Project Image 1" className="rounded-lg" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="/images/project2.jpg" alt="Project Image 2" className="rounded-lg" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="/images/project3.jpg" alt="Project Image 3" className="rounded-lg" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
