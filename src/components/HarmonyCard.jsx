export const HarmonyCard = (props) => {
  const { title, description, iconLink } = props;

  const markup = { __html: description };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: 250,
      }}
    >
      <img
        src={iconLink}
        style={{ width: 150, height: 130, marginBottom: "0.5rem" }}
      />
      <h4
        style={{
          textAlign: "left",
          color: "#2a8964",
          fontSize: 22,
          margin: "1rem 0",
          marginTop: "1rem",
        }}
      >
        {title}
      </h4>
      <p
        dangerouslySetInnerHTML={markup}
        style={{ textAlign: "left", color: "#666666", fontSize: 16, margin: 0 }}
      ></p>
    </div>
  );
};
