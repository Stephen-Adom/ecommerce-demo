type carousePropType = {
  item: { label: string; image: string; description: string; price: string };
};

const CarouselUnit = ({ item }: carousePropType) => {
  return (
    <div className="item-unit">
      <img
        src={require(`../assets/images/carousel/${item.image}`)}
        className="w-full"
        alt="rectangle"
      />

      <div className="py-3 carousel-content">
        <div className="flex items-center justify-between font-semibold">
          <h6>${item.label}</h6>
          <span className="block font-bold">{item.price}</span>
        </div>
        <p className="font-semibold text-gray-400">{item.description}</p>
      </div>
    </div>
  );
};

export default CarouselUnit;
