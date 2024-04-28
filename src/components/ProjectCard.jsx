import Arrow from "../assets/right-arrow.png";

export const ProjectCard = ({ card, index }) => {
  const getMarginBasedOnCard = () => {
    switch (index) {
      case 0:
        return { marginTop: 100 };
      case 1:
        return { marginTop: 0 };
      case 2:
        return { marginTop: 150 };
      case 3:
        return { marginTop: 100 };
      case 4:
        return { marginTop: 200 };
      default:
        return { marginTop: 0 };
    }
  };

  const cardTitle = {
    __html: card?.title,
  };

  return (
    <article
      className="card__main-container"
      style={{
        backgroundImage: `url('${card?.projectImg?.node?.sourceUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20%",
        height: 520,
        width: 220,
        ...getMarginBasedOnCard(),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <section className="card__wrapper">
        <div style={{ display: "flex", width: "100%", alignItems: "flex-end" }}>
          <div style={{ width: "100%" }}>
            <h5
              style={{
                color: "#fff",
                fontFamily: "Gotham Rounded , sans-serif",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "left",
                margin: "0 0 1rem 1rem",
              }}
            >
              PROJEKTY
            </h5>
            <h4
              style={{
                fontFamily: "Nexa , sans-serif",
                textAlign: "left",
                fontWeight: "unset",
                fontSize: 20,
                margin: "0 0 1rem 1rem",
              }}
              dangerouslySetInnerHTML={cardTitle}
            />
          </div>
          <img
            src={Arrow}
            style={{
              width: 30,
              height: 20,
              fill: "#fff",
              marginRight: "2rem",
              marginBottom: "1.5rem",
            }}
          />
        </div>
      </section>
    </article>
  );
};
