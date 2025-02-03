// components/page1/Comp_1_1.js
import React from 'react';
import Image from 'next/image';

const Comp_1_1: React.FC = () => {
  return (
    // <div className="flex h-4/5 w-full">
    <div className="sm:flex md:flex-row">

      {/* Text part */}
      <div className="bg-white flex flex-col items-center justify-center text-center
      w-full pt-6 md:w-1/2 md:h-screen">

        <h1 className="text-4xl font-bold text-gray-800">
          Innovative Bank Security Systems
        </h1>
        <h2 className="text-2xl font-bold text-gray-600"
          style={{ textAlign: 'left', padding: 0 }}
        >
          AI-Powered Detection
        </h2>
        <p className="text-base mt-5 p-2 font-light text-gray-700">
          The best security system for banks must also include protection against insider threats. 
          Stay ahead of fraudulent activities with cutting-edge AI technology. 
          With a team of experienced professionals and a reputation as 
          one of the leading bank security system companies, we ensure that your bank’s security aligns with the highest standards, conforming to regulatory compliance and delivering peace of mind.
        </p>
        {/* hover colored button */}
        <button className="mt-6 text-blue-500 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white
        " 
          style={{ textAlign: 'center', width: '50%', padding: '10px' }}
        >
          Learn More
        </button>
      </div>
      
      {/* image part */}
      <div className="bg-cover bg-center p-1 pt-6 w-full h-1/2 md:w-1/2 md:h-screen rounded-lg overflow-hidden">
        <img 
          src="/images/security.png" 
          alt="Fraud Detection Visual" 
          className="w-full h-full object-cover rounded-lg"
        />
        </div>

    </div>
  );
};

export default Comp_1_1;