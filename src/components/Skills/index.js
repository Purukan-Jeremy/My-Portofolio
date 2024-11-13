import meter1 from "../../assets/images/meter1.svg";
import meter2 from "../../assets/images/meter2.svg";
import meter3 from "../../assets/images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  const [skill, setSkill] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const skillRef = ref(db, "Skills");
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
    });
  }, []);
  return (
    <div>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2 className="titleSkill">{skill.Titles}</h2>
                <p className="subparaf">
                  Our limit its only based on our imagination.<br></br>One Day
                  or Day One.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img
                      src={`data:image/svg+xml;base64, ${skill.Skill1}`}
                      alt="Skill Icon"
                    />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img
                      src={`data:image/svg+xml;base64, ${skill.Skill2}`}
                      alt="Skill Icon"
                    />
                    <h5>Design</h5>
                  </div>
                  <div className="item">
                    <img
                      src={`data:image/svg+xml;base64, ${skill.Skill3}`}
                      alt="Skill Icon"
                    />
                    <h5>Logo Design</h5>
                  </div>
                  <div className="item">
                    <img
                      src={`data:image/svg+xml;base64, ${skill.Skill1}`}
                      alt="Skill Icon"
                    />
                    <h5>Mobile App Development</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
