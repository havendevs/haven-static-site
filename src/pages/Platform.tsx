import React from 'react';
import DockedEBikes from '../assets/DockedEBikes.jpg';

export default function Platform() {
  const h2Class = 'text-4xl md:text-5xl font-bold mb-5';
  const rowDivClass = 'flex flex-col justify-center items-start my-5 py-5 mx-6 md:flex-row';
  const headingAndTextDivClass = 'flex flex-col items-start md:w-5/12 md:mx-10 text-lg';
  const imgDivClass = 'flex justify-end';
  return (
    <div className="pt-[7rem] h-full">
      <div className="mx-5 md:ml-20 mb-16 md:w-auto">
        <h1 className="text-4xl font-bold text-center text-gray-50">The Haven Ecosystem</h1>
        <p className="text-md mt-4 text-center text-gray-50 md:text-lg md:mx-96">
          Our platform of proprietary products aid municipalities in establishing a robust yet
          eco-friendly public transportation system.
        </p>
      </div>
      <div className="text-gray-50">
        <div className={rowDivClass}>
          <div className={imgDivClass}>
            <img src={DockedEBikes} alt="E-bikes in a dock" className="object-cover max-w-md" />
          </div>
          <div className={headingAndTextDivClass}>
            <h2 className={h2Class}>Havens</h2>
            <p>
              Havens, our proprietary docks, are the backbone of our platform. They keep
              vehicles safe and charged. They are compact and modular, allowing them to be altered
              with brick, limestone, or any material of choice to reduce their impact on local
              aesthetics. Due to their modular nature, cities can mix and match to create a Haven
              that is tailored to meet the needs of its surroundings. Optional accessories are
              coming soon, including solar roofing, capable of charging all bikes at a Haven with
              only 1 hour of direct sunlight, and Level 1 EV chargers available for public use.
            </p>
          </div>
        </div>
        <div>
          <div className={rowDivClass}>
            <div className={headingAndTextDivClass}>
              <h2 className={h2Class}>Microvehicles</h2>
              <p>
                Our microvehicles include a vastly customizable selection of e-bikes and e-scooters
                powered in partnership with Segway. We believe in repair over replacement, and our
                microvehicles reflect that initiative with modular designs for easy maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
