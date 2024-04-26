import "./mainCarouselCard.css";

export const MainCarouselCard = () => {
  return (
    <section
      className="container"
      // style={{ backgroundImage: 'url("/src/assets/construction.png")' }}
    >
      <img className="main__img" src={"/src/assets/construction.png"} />
      <img className="logo" src={"/src/assets/logo.png"} />
      <img className="mini__logo" src={"/src/assets/houseHarmonyH.png"} />
      <img className="second__img" src={"/src/assets/construction.png"} />
      <h4 className="title">Harmony House. Harmony Life.</h4>
    </section>
  );
};
