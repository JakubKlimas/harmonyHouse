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
        backgroundImage: 'url("/src/assets/construction.png")',
        margin: "4rem 0 10rem 0",
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
            fontFamily: "Nexa , sans-serif",
          }}
          dangerouslySetInnerHTML={markupTitle}
        />
        <p
          style={{ textAlign: "left", fontSize: 16 }}
          dangerouslySetInnerHTML={markupDescription}
        />
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid #fff",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            borderRadius: 50,
            width: 170,
            height: 55,
            marginTop: "2rem",
          }}
        >
          <p
            style={{ fontWeight: "bold", textAlign: "left" }}
            dangerouslySetInnerHTML={buttonText}
          ></p>
          <img
            src="/src/assets/right-arrow.png"
            style={{ width: 40, fill: "#fff" }}
          />
        </button>
      </article>
    </section>
  );
};
