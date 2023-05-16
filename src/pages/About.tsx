import React from 'react';
import CoreyBriscoeHeadshot from '../assets/CoreyBriscoeHeadshot.jpeg';

export default function About() {
  const h4Class = 'text-3xl font-bold text-center md:text-xl';
  const pRoleClass = 'text-lg font-bold text-center my-1';
  const pEducationClass = 'text-lg text-center my-1';
  const rowDivClass = 'flex flex-col md:flex-row justify-center items-center my-3 py-3 mx-9 md:mx-3';
  const cellDivClass = 'flex flex-col items-center my-5 py-0 md:mx-3 md:w-1/3 md:h-1/3 md:justify-start';
  return (
    <div className="pt-[7rem] h-full">
      <div className="mx-5 md:ml-20 mb-16 md:w-auto">
        <h1 className="text-4xl font-bold text-gray-50">About Us</h1>
        <h3 className="text-xl mt-4 text-gray-50 leading-7 md:text-2xl md:leading-9">
          Founded in Bloomington, Indiana, Haven Transportation LLC aims to legitimize and innovate
          micromobility by providing municipalities with our proprietary software platform, ebikes,
          escooters, and docks -- Havens™ -- to improve the quality of and control over this
          quickly growing form of transportation. Our
          products and platform address an unmet need in the American market for a flexible and
          modular docked-based micromobility vendor that municipalities can use to improve safety,
          accessibility to transit, and environmental consciousness without exorbitant expense. We
          intend to partner with cities and start pilot programs that will mark a shift in the
          transportation systems of America.
        </h3>
      </div>
      <div className="bg-slate-800 text-gray-50">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-50">Our Team</h2>
          <div className={rowDivClass}>
            <div className={cellDivClass}>
              <img src={CoreyBriscoeHeadshot} alt="Zade Dohan" className="w-40 h-40 rounded-full" />
              <h4 className={h4Class}>Zade Dohan</h4>
              <p className={pRoleClass}>CEO and Founder</p>
              <p className={pEducationClass}>
                BS Computer Science, WGU --&gt;MBA Business Analytics, Kelley School of Business
              </p>
            </div>
            <div className={cellDivClass}>
              <img src={CoreyBriscoeHeadshot} alt="Corey Briscoe" className="w-40 h-40 rounded-full" />
              <h4 className={h4Class}>Corey Briscoe</h4>
              <p className={pRoleClass}>CTO and Founder</p>
              <p className={pEducationClass}>
                BS/MS Computer Science, Luddy School of Informatics, Computing, and Engineering
              </p>
            </div>
            <div className={cellDivClass}>
              <img src={CoreyBriscoeHeadshot} alt="Lucas Kroll" className="w-40 h-40 rounded-full" />
              <h4 className={h4Class}>Lucas Kroll</h4>
              <p className={pRoleClass}>Marketing Advisor</p>
              <p className={pEducationClass}>BS Marketing, Kelley School of Business</p>
            </div>
          </div>
          <div className={rowDivClass}>
            <div className={cellDivClass}>
              <img src={CoreyBriscoeHeadshot} alt="Will Pack" className="w-40 h-40 rounded-full" />
              <h4 className={h4Class}>Will Pack</h4>
              <p className={pRoleClass}>Financial Strategy Advisor</p>
              <p className={pEducationClass}>
                BS Supply Chain Management, Kelley School of Business
              </p>
            </div>
            <div className={cellDivClass}>
              <img src={CoreyBriscoeHeadshot} alt="Samuel Estrada" className="w-40 h-40 rounded-full" />
              <h4 className={h4Class}>Samuel Estrada</h4>
              <p className={pRoleClass}>Software Development Advisor</p>
              <p className={pEducationClass}>
                BS/MS Computer Science, Luddy School of Informatics, Computing, and Engineering
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          <p>
            As students at Indiana University, we&apos;ve seen the impact of micromobility on
            communities first-hand and decided to found Haven to help improve public transportation
            by promoting sustainability, safety, and reliability in ways that the current market
            cannot.
          </p>
          <p>
            Our team&apos;s early steps in the commuter transportation industry began in July 2021,
            when we conducted market research, consulted iteratively with institutions like IU
            Parking Operations, and developed IP to modernize parking infrastructure. What would go
            on to become Haven officially kicked off in October 2022. We have been working to
            legitimize and improve publicly-operated micro-mobility solutions ever since.
          </p>
        </div>
      </div>
    </div>
  );
}
