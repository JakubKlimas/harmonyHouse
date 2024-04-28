import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import { Card } from "./Card/Card";

export const ValuesSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    outerWidth: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardsObj = data?.posts?.edges[0]?.node?.quotes.quotes;

  const cards = cardsObj && Object.values(cardsObj);
  const _ = cards && cards.shift();

  return (
    <div className="slider-container">
      <h5>WARTOŚCI</h5>
      <Slider {...settings}>
        {cards &&
          cards.map((card, index) => (
            <Card card={card} index={index} key={card.title} />
          ))}
      </Slider>
    </div>
  );
};
