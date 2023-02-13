type popularPropTypes = {
  popular: { label: string; image: string };
};

const PopularUnit = ({ popular }: popularPropTypes) => {
  return (
    <div className="item-unit">
      <img
        src={require(`../assets/images/carousel/${popular.image}`)}
        className="w-full"
        alt="rectangle"
      />

      <div className="py-3 carousel-content">
        <div className="flex items-center justify-between font-semibold">
          <h6 className="text-gray-600">${popular.label}</h6>
        </div>
      </div>
    </div>
  );
};

export default PopularUnit;
