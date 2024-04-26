import "./App.css";

import { useQuery } from "@apollo/client";

import { ThreeSteps } from "./components/ThreeSteps";
import { Construction } from "./components/Construction";
import { ProjectsSection } from "./components/ProjectsSection";
import { MainCarouselCard } from "./components/MainCarouselCard/MainCarouselCard";
import { Header } from "./components/shared/header/Header";
import { Footer } from "./components/shared/footer//Footer";
import { GET_ALL_POSTS } from "./query/homepageQuery";
import { FinancingSection } from "./components/FinancingSection/FinancingSection";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading || error) return <></>;

  return (
    <section style={{ width: "100%", backgroundColor: "#fff" }}>
      <div
        style={{
          backgroundImage: 'url("/src/assets/mainBackground.png")',
          height: "130vh",
        }}
      >
        <Header />
        <MainCarouselCard />
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
            backgroundColor: "#f3f5f7",
            height: 400,
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
                color: "#1f4d39",
                fontFamily: "Druk Wide , sans-serif",
                marginLeft: "1rem",
              }}
            >
              ZOBACZ WIĘCEJ
            </p>

            <img
              src="/src/assets/right-arrow.png"
              style={{ width: 40, fill: "#fff", marginRight: "1rem" }}
            />
          </button>
        </div>
        <FinancingSection />
        <Footer />
      </div>
    </section>
  );
}

export default App;
