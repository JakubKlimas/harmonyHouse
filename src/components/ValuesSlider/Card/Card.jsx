import Arrow from "../../../assets/right-arrow-white.png";

import "./card.css";

export const Card = ({ card }) => {
  const description = {
    __html: card.description,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <h3
        dangerouslySetInnerHTML={description}
        style={{
          fontWeight: 100,
          fontSize: 40,
          marginTop: 0,
          fontFamily: "Almarena Neue , sans-serif",
        }}
      />
      <button
        className="card__cta-btn"
        style={{
          border: "1px solid white",
          width: 240,
          height: 80,
          borderRadius: 37,
          backgroundColor: "transparent",
          bottom: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1.5rem",
          marginRight: "5rem",
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
          {card.btntext}
        </p>

        <img
          src={Arrow}
          style={{ width: 40, fill: "white", marginRight: "1rem" }}
        />
      </button>
    </div>
  );
};
