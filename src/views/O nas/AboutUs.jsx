import { NavWithBanner } from "../../components/NavWithBanner/NavWithBanner.jsx";
import "./styles.css";
import Arrow from "../../assets/right-arrow.png";

import AboutUsBanner from "../../assets/about-us-baner.png";
import Portrait from "../../assets/portrait.png";
import GroupPhoto from "../../assets/group-photo.png";
import { Footer } from "../../components/shared/footer/Footer.jsx";
export const AboutUs = () => {
  return (
    <>
      <NavWithBanner img={AboutUsBanner} />
      <main className="about-us-main">
        <section className="first-section">
          <h2 className="intro-title">
            <span className="intro-text-bold">Cześć! Tu Klaudia i Konrad</span>,
            wraz z naszym zespołem projektujemy i budujemy domy dostosowane do
            Twoich indywidualnych potrzeb.
          </h2>
          <div className="intro-section">
            <div className="description-intro">
              <p>
                Naszym celem jest zapewnienie kompleksowej usługi związanej z
                budową Twojego wymarzonego domu, opartej na merytorycznej wiedzy
                i doświadczeniu.
              </p>
              <p className="intro-text-bold">
                Wyobraź sobie proces budowlany ‘made easy’.
                <br />
                Prosto, planowo, bez stresu.
              </p>
              <p>
                Harmony House powstało z pasji do tworzenia dobrze
                zaprojektowanych, trwałych i świetnie funkcjonujących
                przestrzeni. Doświadczenie zdobyte na przestrzeni lat w
                projektowaniu i realizacji hoteli i rezydencji przenosimy na
                mniejszą skalę.
              </p>
              <p>
                Podpowiemy Ci jak stworzyć dom który stanowi oazę spokoju i
                będzie stanowił dla Ciebie przyjemność każdego dnia. Zbudujemy
                go szybko i sprawnie, w czasie kiedy Ty możesz się skupić na
                swojej pracy i rozwoju lub… wypoczywać w wymarzonym miejscu.
              </p>
            </div>
            <div className="intro-img">
              <img src={Portrait} alt="" />
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-section-wrapper">
            <div className="img-wrapper-cta">
              {/* <img src={GroupPhoto} alt="" /> */}
            </div>
            <div className="cta-text">
              <h3 className="cta-header">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                vel lorem.
              </p>
              <p>
                Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac
                diam. Quisque semper justo at risus.
              </p>
              <button className="finanse__btc-cta">
                <p className="finanse__btc-cta--text">phinance.pl</p>
                <img src={Arrow} />
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
