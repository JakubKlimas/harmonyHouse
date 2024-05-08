import Arrow from "../assets/right-arrow-white.png";
import ConstructionImg from "../assets/construction.png";

import "./construction.css";

export const Construction = ({ data }) => {
  const markupDescription = {
    __html: data?.posts?.edges[0]?.node?.costruction?.costruction?.description,
  };
  const markupTitle = {
    __html: data?.posts?.edges[0]?.node?.costruction?.costruction?.title,
  };
  const buttonText = {
    __html: data?.posts?.edges[0]?.node?.costruction?.costruction?.buttonText,
  };

  return (
    <section
      style={{
        backgroundImage: `url("${ConstructionImg}")`,
        margin: "4rem 0 0 0",
        width: "100%",
        height: "100vh",
        minHeight: "100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <article
        style={{
          maxWidth: 400,
          marginRight: "6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h4
          style={{
            color: "#fff",
            textAlign: "left",
            fontSize: 30,
            fontFamily: "Nexa , sans-serif", lineHeight: 'normal'
          }}
          dangerouslySetInnerHTML={markupTitle}
        />
        <p
          style={{ textAlign: "left", fontSize: 16 }}
          dangerouslySetInnerHTML={markupDescription}
        />
        <button className="construction__cta">
          <p
            style={{ fontWeight: "bold", textAlign: "left" }}
            className="construction__cta-btn"
            dangerouslySetInnerHTML={buttonText}
          ></p>
          <img src={Arrow} style={{ width: 40, fill: "#fff" }} />
        </button>
      </article>
    </section>
  );
};
