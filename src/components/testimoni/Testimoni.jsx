import React from "react";
import testimoniData from "../data/testimoniData";

const Testimoni = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-customBlue mb-8">Apa Kata Pengguna Kami</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimoniData.map((testimoni) => (
            <div
              key={testimoni.id}
              className="w-72 p-6 bg-white rounded-lg shadow-lg"
            >
              <img
                src={testimoni.image}
                alt={testimoni.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic">"{testimoni.testimonial}"</p>
              <h3 className="mt-4 text-xl font-semibold text-customBlue">{testimoni.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
