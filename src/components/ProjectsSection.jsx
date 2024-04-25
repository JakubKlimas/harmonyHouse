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
        width: "100%",
      }}
    >
      <h5
        style={{
          color: "#fff",
          fontFamily: "Gotham Rounded , sans-serif",
          fontWeight: "bold",
          fontSize: 18,
          position: "absolute",
          top: 60,
          left: -480,
        }}
      >
        PROJEKTY
      </h5>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cards &&
          cards.map((card, index) => <ProjectCard card={card} index={index} />)}
      </section>
    </section>
  );
};
