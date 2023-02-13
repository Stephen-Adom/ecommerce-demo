import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="px-0 py-8 bg-white md:py-16 font-ubuntu">
      <div className="px-4 text-center banner-header lg:px-0">
        <h1 className="text-2xl font-extrabold md:text-4xl lg:text-6xl md:w-[60%] mx-auto">
          INTRODUCTING THE NEW NIKE INVINCIBLE 3
        </h1>
        <p className="w-[100%] md:w-[70%] mx-auto font-bold mt-4 lg:text-lg text-gray-500">
          ZoomX cushioning designed to help you stay on your feet today,
          tomorrow, and beyond
        </p>

        <button
          type="button"
          className="py-4 mt-4 text-sm font-bold text-white bg-black border-2 border-black rounded-full px-7 hover:bg-white hover:border-black hover:text-black"
        >
          Shop
        </button>
      </div>

      <div className="mt-4 w-full md:w-[80%] mx-auto banner-container">
        <img
          src={require('../../assets/images/Rectangle_1.jpg')}
          className=""
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
