import React from 'react';
import SegwayNinebotBikeUrban from '../assets/SegwayNinebotBikeUrban.jpeg';

export default function Contact() {
  return (
    <div className="pt-[7rem] h-full">
      <div className="mx-5 md:ml-20 mb-16 md:w-auto">
        <h1 className="text-4xl font-bold text-center text-gray-50">Contact Us</h1>
      </div>
      <div className="text-gray-50">
        <div>
          <div>
            <img src={SegwayNinebotBikeUrban} alt="" />
          </div>
          <div>
            <h2>Get in Touch!</h2>
            <p>Contact us by email or phone with any inquiries.</p>
            <p>Email: zadedohan@haventransit.com</p>
            <p>Phone: (317) 793 - 7388</p>
            <p>Please include your name, organization, and a method to reach you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
