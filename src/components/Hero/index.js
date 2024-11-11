import React from "react";
import Certi from "../../assets/images/intro to ML.png";
import Certi2 from "../../assets/images/pandas.png";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container-hero">
          <div className="hero-inner">
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay={200}
              >
                My Certificate
              </h1>
              <div className="container-xs">
                <p
                  className="mt-0 mb-32 reveal-from-bottom"
                  data-reveal-delay={400}
                >
                  Please hire Me Im Homeless
                </p>
              </div>
            </div>
            <div
              className="hero-figurereveal-from-bottomillustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay={800}
            >
              <img
                className="has-shadow"
                src={Certi}
                alt="Hero image"
              />
              <img
                className="has-shadow"
                src={Certi2}
                alt="Hero image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
