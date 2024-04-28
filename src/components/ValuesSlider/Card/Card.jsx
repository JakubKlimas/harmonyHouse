export const Card = ({ card }) => {
  const description = {
    __html: card.description,
  };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={description} />
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
