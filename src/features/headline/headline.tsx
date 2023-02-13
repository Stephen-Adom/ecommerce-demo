const Headline = () => {
  const clearAllStyles = () => {
    const headlineUnits = document.querySelectorAll('.headline-unit');
    headlineUnits.forEach((unit) => {
      unit.classList.remove('active');
    });
  };
  const addStyles = (e: any) => {
    if (e.target.parentNode.parentNode.classList.contains('headline-unit')) {
      clearAllStyles();
      e.target.parentNode.parentNode.classList.add('active');
    }
  };
  return (
    <section
      id="headline"
      className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center min-h-[400px]"
    >
      <div className="headline-unit bg-[#88b5dd]" onClick={(e) => addStyles(e)}>
        <div className="unit-content">
          <h1 className="font-extrabold text-white">NEW</h1>
          <img src={require('../../assets/images/pngegg_1.png')} alt="" />
        </div>
      </div>

      <div className="bg-white headline-unit" onClick={(e) => addStyles(e)}>
        <div className="unit-content">
          <h1 className="font-extrabold text-black">BOLD</h1>
          <img src={require('../../assets/images/pngwing_2.png')} alt="" />
        </div>
      </div>

      <div className="headline-unit bg-[#ff97b6]" onClick={(e) => addStyles(e)}>
        <div className="unit-content">
          <h1 className="font-extrabold text-white">FAST</h1>
          <img src={require('../../assets/images/pngwing_3.png')} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Headline;
