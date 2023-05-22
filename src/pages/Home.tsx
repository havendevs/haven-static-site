import React from 'react';
import IUBikersGreenery from '../assets/IUBikersGreenery.jpg';
import SegwayNinebotBike from '../assets/SegwayNinebotBike.png';
import SegwayLogo from '../assets/SegwayLogo.webp';
import HavenR from '../assets/HavenR.png';

export default function Home() {
  const h2Class = 'text-4xl md:text-5xl font-bold my-5';
  const rowDivClass = 'flex flex-col justify-center items-center my-5 py-5 mx-6 md:flex-row';
  const headingAndTextDivClass = 'flex flex-col justify-center md:w-1/2 md:mx-5 text-lg';
  const imgDivClass = 'justify-center';
  return (
    <div className="pt-[7rem] h-full">
      <div className="mx-5 md:ml-20 md:w-auto">
        <img src={HavenR} alt="Haven" />
        <h3 className="text-2xl ml-3 mt-4 text-center">A Better Future for Mobility</h3>
      </div>
      <div className="bg-slate-800 text-gray-50">
        <div className={rowDivClass}>
          <div className={imgDivClass}>
            <img src={SegwayNinebotBike} alt="Segway & Ninebot Bike" className="object-cover w-80 md:w-max" />
          </div>
          <div className={headingAndTextDivClass}>
            <h2 className={h2Class}>A New Generation of Transportation</h2>
            <p>
              Haven revolutionizes the economic paradigm of the micromobility market
              by collaborating with municipalities to implement a more dynamic public
              transit system.
            </p>
          </div>
        </div>
        <div className={rowDivClass}>
          <div className={`${imgDivClass} block md:hidden`}>
            <img src={IUBikersGreenery} alt="IU Bikers in Greenway" className="w-80" />
          </div>
          <div className={headingAndTextDivClass}>
            <h2 className={h2Class}>A Greener Future</h2>
            <p>
              The environmental benefits of micromobility over conventional transportation
              are unmistakable. By giving new life to greenway infrastructure and reducing car
              dependence, we help communities do their part to reduce carbon emissions.
            </p>
          </div>
          <div className={`${imgDivClass} hidden md:block`}>
            <img src={IUBikersGreenery} alt="IU Bikers in Greenway" className="md:w-96" />
          </div>
        </div>
        <div className={rowDivClass}>
          <div className={imgDivClass}>
            <img src={SegwayLogo} alt="Segway Logo" />
          </div>
          <div className={headingAndTextDivClass}>
            <h2 className={h2Class}>Partnered with Segway</h2>
            <p>
              We are proud to announce our partnership with Segway Inc. and Ninebot to
              manufacture our first-gen microvehicles. The A-200 E-Bike series has
              proven itself up to the task, making it the perfect integration to our platform.
            </p>
          </div>
        </div>

        <div />
      </div>

    </div>
  );
}
