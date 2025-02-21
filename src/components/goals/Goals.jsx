import React from 'react';

const Goals = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1 bg-blue-200 text-black p-6 rounded-xl shadow-lg">
        <p className="text-5xl font-semibold">
          Menjadi platform digital terkemuka dalam memberdayakan tenaga kerja informal dan freelance, 
          menciptakan ekosistem kerja yang inklusif, efisien, dan berkelanjutan.
        </p>
      </div>

      <div className="flex-1 bg-blue-200 p-4 rounded-xl shadow-lg flex justify-center items-center sm:mt-5">
        <img 
          src="/posters/poster_1.jpg" 
          alt="poster" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Goals;
