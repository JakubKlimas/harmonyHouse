import "./App.css";

import { useQuery } from "@apollo/client";

import { ThreeSteps } from "./components/ThreeSteps";
import { Construction } from "./components/Construction";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutTeam } from "./components/AboutTeam/AboutTeam";
import { MainCarouselCard } from "./components/MainCarouselCard/MainCarouselCard";
import { Header } from "./components/shared/header/Header";
import { Footer } from "./components/shared/footer//Footer";
import { GET_ALL_POSTS } from "./query/homepageQuery";
import { FinancingSection } from "./components/FinancingSection/FinancingSection";
import { ValuesSlider } from "./components/ValuesSlider/ValuesSlider";

import Arrow from "./assets/right-arrow.png";
import Background from "./assets/mainBackground.png";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading || error) return <></>;

  return (
    <section style={{ width: "100%", backgroundColor: "#fff" }}>
      <div
        style={{
          paddingBottom: "5rem",
          backgroundImage: `url("${Background}")`,
        }}
      >
        <Header />
        <MainCarouselCard />
        <ValuesSlider />
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThreeSteps data={data} />
        <Construction data={data} />
        <div
          style={{
            position: "relative",
            backgroundColor: "#e3e4e5",
            height: 600,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProjectsSection data={data} />
          <button
            style={{
              border: "1px solid #1f4d39",
              width: 280,
              height: 60,
              borderRadius: 100,
              backgroundColor: "transparent",
              position: "absolute",
              bottom: 50,
              marginLeft: "auto",
              marginRight: "auto",
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
                color: "#1f4d39",
                fontFamily: "Druk Wide , sans-serif",
                marginLeft: "1rem",
              }}
              className="cta__button"
            >
              ZOBACZ WIĘCEJ
            </p>

            <img
              src={Arrow}
              style={{ width: 40, fill: "#fff", marginRight: "1rem" }}
            />
          </button>
        </div>
        <AboutTeam data={data} />
        <FinancingSection />
        <Footer />
      </div>
    </section>
  );
}

export default App;
