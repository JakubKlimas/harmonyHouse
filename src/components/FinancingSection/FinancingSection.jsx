import "./styles.css";

import HLogo from "../../assets/h-logo-big.png";
import Arrow from "../../assets/right-arrow-white.png";

export const FinancingSection = () => {
  return (
    <section className="financingSection">
      <div className="wrapper">
        <div className="header_wrapper">
          <h2>Finansowanie</h2>
        </div>
        <div className="inner_wrapper">
          <div className="inner_wrapper_info">
            <p className="intro">
              Lorem ipsum dolor sit amet,
              <br /> <span className="bold">consecteur adipiscing</span>
            </p>
            <p className="paragraph_regular">
              Lorem ipsum dolot sit amet, consectetur adipiscing elit. Proin
              nibh augue, suscipit a, scelerisque sed, lacina in, mi. Cras vel
              lorem.
            </p>
            <p className="paragraph_regular">
              Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac
              diam. Quisque semper justo at risus.
            </p>
            <button
              style={{
                border: "1px solid white",
                width: 200,
                height: 70,
                borderRadius: 100,
                backgroundColor: "transparent",
                bottom: 50,
                marginLeft: "auto",
                float: "left",
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
                  color: "white",
                  fontFamily: "Druk Wide , sans-serif",
                  marginLeft: "1rem",
                }}
                className="financial-btn__cta"
              >
                WIĘCEJ
              </p>

              <img
                src={Arrow}
                style={{ width: 40, fill: "white", marginRight: "1rem" }}
              />
            </button>
          </div>
          <img src={HLogo} alt="" className="logo_image" />
        </div>
      </div>
    </section>
  );
};
