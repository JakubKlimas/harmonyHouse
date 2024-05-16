import { Header } from "../shared/header/Header";

import Background from "../../assets/mainBackground.png";
// import House from "../../assets/house.png";
import House from "../../assets/house.png";
import Logo from "../../assets/logo.png";

import "./styles.css";

export const NavWithBanner = ({ img }) => {
  return (
    <div
      className="nav-with-banner"
      style={{
        backgroundImage: `url("${Background}")`,
        backgroundPosition: "bottom",
      }}
    >
      <Header />
      <section className="nav-with-banner--container">
        <img className="nav-with-banner--main-img" src={img} />
        <img className="nav-with-banner--logo" src={Logo} />
      </section>
    </div>
  );
};
