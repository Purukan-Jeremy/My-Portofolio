import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Home = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "Profile");
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);

  return (
    <div>
      <section className="home">
        <div className="home-img">
          <img
            src={`data:image/png;base64, ${profile.Image}`}
            alt="Foto Profil"
          />
        </div>
        <div className="home-content">
          <h1>
            Hi, It's <span>{profile.Name}</span>
          </h1>
          <h3 className="typing-text">
            I'm a <span />
          </h3>
          <p>{profile.Sub}</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jeremy-purukan-0322a3252/">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/Purukan-Jeremy">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://x.com/Drvnxt">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="https://www.instagram.com/drvnxt/">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
          <a href="#" className="btn">
            Hire Me Pls
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
