import StatisticCard from "../components/StatisticCard";
import "../styles/about-company.css"

const AboutCompany = () => {
  return (
    <section className="statistics pt-[40px] lg:pt-[96px] page-container">
      <figure>
      <img
        src="/assets/images/about-company.png"
        loading="lazy"
        id="w-node-_5d22fc73-eda1-0598-2d4b-c941630b3825-3378c76e"
        alt=""
        className=" statistics-image lg:max-h-[609px] xl:max-h-[609px]"
      />

      </figure>
      <div
        id="w-node-_6779c508-7cdc-c836-8a25-982507e523f5-3378c76e"
        className="statistics-text-and-figures"
      >
        <div className="statistics-text">
          <p
            id="w-node-_03c4cf8f-14b2-c4b7-c070-5ac51836c5fd-3378c76e"
            className="paragraph-5 text-left mb-[23px] lg:mb-[32px]"
          >
            WE PROVIDE SOLUTIONS
          </p>
          <p className="paragraph-6 text-left">
            Empowering businesses with tailored{" "}
            <span className="statistics-colored-text">solutions</span> that
            drive <span className="statistics-colored-text">success</span>. Our
            commitment is your{" "}
            <span className="statistics-colored-text">
              competitive advantage
            </span>
            , ensuring a future shaped by seamless solutions and{" "}
            <span className="statistics-colored-text">sustained growth.</span>
          </p>
        </div>
        <div className="div-block-5">
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
