import { HarmonyCard } from "./HarmonyCard";

export const ThreeSteps = ({ data }) => (
  <section
    style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: "2rem",
      marginTop: "10rem",
    }}
  >
    <div style={{ position: "relative" }}>
      <h3
        style={{
          textAlign: "left",
          color: "#2a8964",
          fontSize: 25,
          fontWeight: "bold",
          margin: 0,
          fontFamily: "Almarena Neue, sans-serif",
        }}
      >
        kroki <br /> do harmonii
      </h3>
      <img
        src={"/src/assets/3.png"}
        style={{
          width: 300,
          height: 390,
          position: "absolute",
          bottom: 80,
          left: -130,
        }}
      />
    </div>
    <HarmonyCard
      title={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardOne?.title ||
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardOne?.text
      }
      description={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardOne?.description
      }
      iconLink={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardOne?.icon?.node
          ?.sourceUrl
      }
    />
    <HarmonyCard
      title={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardTwo?.title ||
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardTwo?.text
      }
      description={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardTwo?.description
      }
      iconLink={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardTwo?.icon?.node
          ?.sourceUrl
      }
    />
    <HarmonyCard
      title={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardThree?.title ||
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardThree?.text
      }
      description={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardThree?.description
      }
      iconLink={
        data?.posts?.edges[0]?.node?.rutzky?.cards?.cardThree?.icon?.node
          ?.sourceUrl
      }
    />
  </section>
);
