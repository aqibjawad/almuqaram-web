import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HomeDemands = () => {
  return (
    <div className="w-full bg-white p-4 flex flex-row justify-between items-center border-b border-gray-100">
      <div className="max-w-md">
        <h2 className="text-xl font-medium text-green-900">
          Gain Valuable Insights into Hygienic Product Manufacturing and Global Private Label Trends
        </h2>
        
        <button className="mt-8 bg-teal-500 text-white px-6 py-2 rounded flex items-center gap-2">
          Contact Us 
          <ArrowUpRight size={16} />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        <div className="w-32 h-12 border border-green-900 rounded bg-white flex items-center justify-center">
          <span className="text-green-900 font-medium">Demands</span>
        </div>
        <div className="w-48 h-12 border border-gray-200 rounded bg-white"></div>
        
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        <div className="w-36 h-12 bg-green-900 rounded flex items-center justify-center">
          <span className="text-white font-medium">Fulfilled</span>
        </div>
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
        <div className="w-48 h-12 border border-gray-200 rounded bg-white"></div>
        <div className="w-24 h-12 border border-gray-200 rounded bg-white"></div>
      </div>
    </div>
  );
};

export default HomeDemands;