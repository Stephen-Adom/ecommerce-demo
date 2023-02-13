import React from 'react';
import PopularUnit from '../../components/popular-unit';

const Popular = () => {
  const popularList = [
    {
      label: "Men's Nike Fleece",
      image: 'Rectangle-3.jpg',
    },
    {
      label: "Women's Nike Fleece",
      image: 'Rectangle-4.jpg',
    },
    {
      label: "Kid's Nike Fleece",
      image: 'Rectangle-5.jpg',
    },
  ];

  const renderPopularList = () => {
    return popularList.map((popular, index) => {
      return <PopularUnit popular={popular} key={index} />;
    });
  };
  return (
    <section id="popular" className="px-0 py-8 bg-white md:py-16 font-poppins">
      <div className="px-4 text-center popular-header lg:px-0">
        <h1 className="text-4xl font-extrabold md:text-4xl lg:text-6xl md:w-[60%] mx-auto">
          FRESH AIR
        </h1>
        <p className="w-[100%] md:w-[70%] lg:w-[30%] mx-auto mt-4 text-sm lg:text-base text-gray-500">
          With its heritage track look and innovative Air design, the Air Max SC
          brings iconic comfort to your everyday style.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="py-4 mt-4 text-sm font-bold text-white bg-black border-2 border-black rounded-full px-7 hover:bg-white hover:border-black hover:text-black"
          >
            Shop Men's
          </button>
          <button
            type="button"
            className="py-4 mt-4 text-sm font-bold text-white bg-black border-2 border-black rounded-full px-7 hover:bg-white hover:border-black hover:text-black"
          >
            Shop Women's
          </button>
        </div>
      </div>

      <div className="px-3 popular-content w-full md:w-[80%] mx-auto mt-6">
        <div className="flex items-center justify-between py-4 popular-header">
          <h2 className="text-xl font-bold">Popular Right Now</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {renderPopularList()}
        </div>
      </div>
    </section>
  );
};

export default Popular;
