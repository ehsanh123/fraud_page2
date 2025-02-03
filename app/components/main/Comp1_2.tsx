// components/page1/Comp_1_1.js
import React from 'react';

const Comp_1_2: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row" >
    

      {/* Text part */}
      <div className="bg-white flex flex-col items-center justify-center text-center
      w-full pt-6 md:w-1/2 md:h-screen"
            >
        <h1 className="text-4xl font-bold text-gray-800">
          Tailored Solutions for Banks & Financial Institutions        
        </h1>
        
        <p className="text-base mt-5 font-light text-gray-700 pr-3 pl-3">
          We consult with you to understand your bank’s specific risks, layout, 
          and requirements. Based on this analysis, we design and install the best 
          security system for banks that covers every aspect, including Biometric 
          Security for staff access, CCTV for continuous monitoring, Door Entry 
          Security for visitor management, Intruder Alarms for breach detection, 
          and state-of-the-art bank vault security systems.
          Our commitment to excellence ensures that your bank’s security is both 
          robust and efficient, providing the maximum level of protection without 
          hindering daily operations.
        </p>

        {/* hover colored button */}
        <button className="mt-6 font-bold text-yellow-600 bg-red-50 rounded-lg hover:bg-blue-600 hover:text-white"
          style={{ textAlign: 'center', width: '50%', padding: '10px' }}
        >
          Learn More
        </button>
      </div>
    {/* Image part */}
    <div className="bg-cover bg-center p-1 pt-5 w-full h-1/2 md:w-1/2 md:h-screen rounded-lg overflow-hidden">
        <img 
          src="/images/gold_bars.png" 
          alt="gold bars" 
          className="w-full h-full object-cover rounded-lg"
        />
        </div>
      
    </div>
  );
};

export default Comp_1_2;
