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
        style={{ fontWeight: 100, fontSize: 40, marginTop: 0 }}
      />
      <button
        style={{
          border: "1px solid white",
          width: 230,
          height: 60,
          borderRadius: 100,
          backgroundColor: "transparent",
          bottom: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.8rem",
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
          src="/src/assets/right-arrow.png"
          style={{ width: 40, fill: "white", marginRight: "1rem" }}
        />
      </button>
    </div>
  );
};
