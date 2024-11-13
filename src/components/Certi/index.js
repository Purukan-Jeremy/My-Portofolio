import React, {useEffect,useState} from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Certi = () => {
  const [certificate, setCerti] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const CertiRef = ref(db, "Certificate");
    onValue(CertiRef, (snapshot) => {
      const data = snapshot.val();
      setCerti(data);
    });
  }, []);
  return (
      <section className="Certi">
        <div className="container-Certi">
          <div className="Certi-inner">
            <div className="Certi-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay={200}
              >
                {certificate.Title}
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
              className="Certi-figurereveal-from-bottomillustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay={800}
            >
              <img
                className="has-shadow"
                src={`data:image/png;base64, ${certificate.Image1}`}
                alt="Certi1"
              />
              <img
                className="has-shadow"
                src={`data:image/png;base64, ${certificate.Image2}`}
                alt="Certi2"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Certi;
