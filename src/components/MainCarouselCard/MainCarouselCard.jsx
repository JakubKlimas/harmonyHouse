import "./mainCarouselCard.css";

import Construction from "../../assets/construction.png";
import Logo from "../../assets/logo.png";
import HouseOfHarmonyH from "../../assets/houseHarmonyH.png";

export const MainCarouselCard = () => {
  return (
    <section
      className="container"
      // style={{ backgroundImage: 'url("/src/assets/construction.png")' }}
    >
      <img className="main__img" src={Construction} />
      <img className="logo" src={Logo} />
      <img className="mini__logo" src={HouseOfHarmonyH} />
      <img className="second__img" src={Construction} />
      <h4 className="title">Harmony House. Harmony Life.</h4>
    </section>
  );
};
