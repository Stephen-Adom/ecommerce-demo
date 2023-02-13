const AdBanner = () => {
  return (
    <section
      id="ad_banner"
      className={`w-full bg-center min-h-[250px] md:min-h-[450px] bg-cover relative flex items-center justify-center md:justify-start lg:justify-start`}
    >
      <div className="text-white text-center md:text-left flex items-center md:items-start flex-col gap-3 py-10 md:w-[80%] w-full mx-auto">
        <h1 className="text-4xl font-extrabold lg:text-6xl w-full lg:w-[40%]">
          STYLES TO FALL IN LOVE WITH
        </h1>
        <p>Find Something better than roses</p>
        <button
          type="button"
          className="py-4 mt-4 text-sm font-bold text-black bg-white border-2 border-black rounded-full w-max px-7 hover:bg-white hover:border-black hover:text-black"
        >
          Shop
        </button>
      </div>
    </section>
  );
};

export default AdBanner;
