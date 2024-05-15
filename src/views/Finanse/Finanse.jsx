import { useQuery } from "@apollo/client";

import { GET_FINANSE_PAGE } from "../../query/homepageQuery";

import Arrow from "../../assets/right-arrow.png";
import ConstructionImg from "../../assets/construction.png";

import { Footer } from "../../components/shared/footer/Footer";
import { NavWithBanner } from "../../components/NavWithBanner/NavWithBanner";

import "./styles.css";

export const Finanse = () => {
  const { loading, error, data } = useQuery(GET_FINANSE_PAGE);

  if (loading || error) return <></>;

  const finanseObj = data.posts.nodes[0].finanse.finanse;

  const titleText = {
    __html: finanseObj.sectionone.title,
  };

  const descriptionText = {
    __html: finanseObj.sectionone.description,
  };

  const benefitOneTitle = {
    __html: finanseObj.sectionone.benefits.benefitone.title,
  };

  const benefitTwoTitle = {
    __html: finanseObj.sectionone.benefits.benefitone.title,
  };

  const benefitTreeTitle = {
    __html: finanseObj.sectionone.benefits.benefitone.title,
  };

  const aboutDescription = {
    __html: finanseObj.sectiontwo.description,
  };

  // console.log(finanseObj);
  return (
    <>
      <NavWithBanner />
      <div className="finanse__main-container">
        <section className="finanse__sectionOne">
          <h2 className="finanse__title" dangerouslySetInnerHTML={titleText} />
          <p
            className="finanse__description"
            dangerouslySetInnerHTML={descriptionText}
          />
        </section>
        <section className="finanse__benefit--container">
          <article className="finanse__benefit">
            <img src={Arrow} className="finanse__benefit--img" />
            <h4
              className="finanse__benefit--title"
              dangerouslySetInnerHTML={benefitOneTitle}
            />
          </article>
          <article className="finanse__benefit">
            <img src={Arrow} className="finanse__benefit--img" />
            <h4
              className="finanse__benefit--title"
              dangerouslySetInnerHTML={benefitTwoTitle}
            />
          </article>
          <article className="finanse__benefit">
            <img src={Arrow} className="finanse__benefit--img" />
            <h4
              className="finanse__benefit--title"
              dangerouslySetInnerHTML={benefitTreeTitle}
            />
          </article>
        </section>
        <section className="finanse__sectionTwo">
          <hr className="finanse__break" />
          <article className="finanse__sectionTwo--article">
            <p
              dangerouslySetInnerHTML={aboutDescription}
              className="finanse__sectionTwo--description"
            />
            <button className="finanse__btc-cta">
              <p className="finanse__btc-cta--text">
                {finanseObj.sectiontwo.btntext}
              </p>
              <img src={Arrow} />
            </button>
          </article>
          <img src={ConstructionImg} className="finanse__section-two--img" />
        </section>
      </div>
      <Footer />
    </>
  );
};
