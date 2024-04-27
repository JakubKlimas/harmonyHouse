import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

export const ValuesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    outerWidth: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>
            <span className="bold">think green, build green</span> –{" "}
            <span className="thin">
              ekologia to nie tylko budowa domu, ale także całe życie budynku.
              Proponujemy ekologiczne materiały jak również rozwiązania które
              oszczędzają energię i koszty.
            </span>
          </h3>
          <button
            style={{
              border: "1px solid white",
              width: 230,
              height: 40,
              borderRadius: 100,
              backgroundColor: "transparent",
              bottom: 50,
              marginLeft: "auto",
              right: -150,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                textAlign: "left",
                color: "white",
                fontFamily: "Druk Wide , sans-serif",
                marginLeft: "1rem",
              }}
            >
              Poznaj nas
            </p>

            <img
              src="/src/assets/right-arrow.png"
              style={{ width: 40, fill: "white", marginRight: "1rem" }}
            />
          </button>
        </div>
        <div>
          <h3>
            <span className="bold">think green, build green</span> –{" "}
            <span className="thin">
              ekologia to nie tylko budowa domu, ale także całe życie budynku.
              Proponujemy ekologiczne materiały jak również rozwiązania które
              oszczędzają energię i koszty.
            </span>
          </h3>
          <button
            style={{
              border: "1px solid white",
              width: 230,
              height: 40,
              borderRadius: 100,
              backgroundColor: "transparent",
              bottom: 50,
              marginLeft: "auto",
              right: -150,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                textAlign: "left",
                color: "white",
                fontFamily: "Druk Wide , sans-serif",
                marginLeft: "1rem",
              }}
            >
              Poznaj nas
            </p>

            <img
              src="/src/assets/right-arrow.png"
              style={{ width: 40, fill: "white", marginRight: "1rem" }}
            />
          </button>
        </div>
      </Slider>
    </div>
  );
};
