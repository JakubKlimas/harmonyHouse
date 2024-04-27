import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = ({ data }) => {
  const cardsObj =
    data?.posts?.edges[0]?.node?.constructionProjects?.constructionProjects;

  const cards = cardsObj && Object.values(cardsObj);
  const _ = cards && cards.shift();

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        bottom: 150,
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        width: "80%",
        maxWidth: "1200px",
      }}
    >
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {cards &&
          cards.map((card, index) => (
            <ProjectCard card={card} index={index} key={card.title} />
          ))}
      </section>
      <h5
        style={{
          color: "#fff",
          fontFamily: "Gotham Rounded , sans-serif",
          fontWeight: "bold",
          fontSize: "0.8rem",
          position: "absolute",
          top: 80,
          left: 120,
        }}
      >
        PROJEKTY
      </h5>
    </section>
  );
};
