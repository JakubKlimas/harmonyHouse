import "./mainCarouselCard.css";

import Couple from "../../assets/couple.png";
import House from "../../assets/house.png";
import Logo from "../../assets/logo.png";
import HouseOfHarmonyH from "../../assets/houseHarmonyH.png";

export const MainCarouselCard = () => {
  return (
    <section
      className="container"
      // style={{ backgroundImage: 'url("/src/assets/construction.png")' }}
    >
      <img className="main__img" src={House} />
      <img className="logo" src={Logo} />
      <img className="mini__logo" src={HouseOfHarmonyH} />
      <img className="second__img" src={Couple} />
      <h4 className="title">Harmony House. Harmony Life.</h4>
    </section>
  );
};
