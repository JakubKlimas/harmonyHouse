import "./aboutTeam.css";

import Team from "../../assets/team.png";
import Arrow from "../../assets/right-arrow.png";

export const AboutTeam = ({ data }) => {
  const title = {
    __html: data?.posts?.edges[0]?.node?.team?.team?.title,
  };
  const description = {
    __html: data?.posts?.edges[0]?.node?.team?.team?.description,
  };

  return (
    <section className="about-team__container">
      <img className="about-team__img" src={Team} />
      <article className="about-team__article">
        <h3 className="about-team__title" dangerouslySetInnerHTML={title} />
        <p
          dangerouslySetInnerHTML={description}
          className="about-team__description"
        />
        <button className="about-team__button">
          <p className="about-team__btc-cta">
            {data?.posts?.edges[0]?.node?.team?.team?.btnText}
          </p>
          <img
            src={Arrow}
            style={{ width: 40, fill: "white", marginRight: "1rem" }}
          />
        </button>
      </article>
    </section>
  );
};
