import "./mySkills.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Atropos from "atropos";
import "atropos/css";

function MySkills() {
  const bootcampCertificateUrl = `${
    import.meta.env.VITE_IMG_URL
  }/CodingBootcamp.pdf`;

  const japCertificateUrl = `${import.meta.env.VITE_IMG_URL}/JAP.pdf`;

  const inglesCertificateUrl = `${
    import.meta.env.VITE_IMG_URL
  }/CertificadoIngles.pdf`;

  const psicoCertificateUrl = `${
    import.meta.env.VITE_IMG_URL
  }/EscolaridadPsicologia.pdf`;

  const ecoCertificateUrl = `${
    import.meta.env.VITE_IMG_URL
  }/EscolaridadEconomia.pdf`;

  const neoCoastCertificateUrl = `${import.meta.env.VITE_IMG_URL}/NeoCoast.pdf`;

  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-first-atropos",
    });

    const myAtropos2 = Atropos({
      el: ".my-second-atropos",
    });

    const myAtropos3 = Atropos({
      el: ".my-third-atropos",
    });

    const myAtropos4 = Atropos({
      el: ".my-fourth-atropos",
    });

    const myAtropos5 = Atropos({
      el: ".my-fifth-atropos",
    });

    const myAtropos6 = Atropos({
      el: ".my-sixth-atropos",
    });

    return () => {
      myAtropos.destroy();
      myAtropos2.destroy();
      myAtropos3.destroy();
      myAtropos4.destroy();
      myAtropos5.destroy();
      myAtropos6.destroy();
    };
  }, []);

  return (
    <>
      <div className="mySkills">
        <div className="row fila2">
          <Link to={"/"}>
            <i className="bi bi-arrow-left fs-1 ps-sm-5 fs-1 text-white"></i>
          </Link>
          <div className="col-3 fotito">
            <img
              src={`${import.meta.env.VITE_IMG_URL}/programing.jpg`}
              alt="Foto"
            />
          </div>
          <div className="col-12 col-sm-8">
            <h1 className="nombre text-white">My Skills</h1>
          </div>
        </div>
        <div className="container">
          <div className="row tw">
            <h2 className="mb-4">Technologies</h2>
            <p className="mb-5">
              During the Hack Academy coding bootcamp, I delved into a wide
              variety of technologies in detail, encompassing both back-end and
              front-end development. Additionally, I gained hands-on experience
              in database management and employed practical tools to effectively
              optimize my workflow.
            </p>

            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/JS.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">JavaScript</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/JS.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">TypeScript</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/css.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">CSS</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/node.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">Node.js</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/react.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">React.js</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/redux.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">Redux</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/Git.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">Github</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/Bootstrap.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">Bootstrap</h4>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <img
                className="skillTecIcon"
                src={`${import.meta.env.VITE_IMG_URL}/mongoDB.png`}
                alt=""
              />
              <h4 className="mt-3 mb-5">MongoDB</h4>
            </div>
          </div>
          <div className="row tw mt-3 mb-5">
            <h2>Soft-Skills</h2>
            <p>
              Throughout my educational journey, I have had the opportunity to
              refine my soft skills, enabling effective communication with
              fellow participants in various educational settings.
            </p>
            <div className="col-12 col-md-6 col-lg-4 text-center softSkill">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/teamwork.jpg`}
                alt=""
              />
              <p>Teamwork Oriented</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center softSkill">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/fastlearner.jpg`}
                alt=""
              />
              <p>Fast Learner</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center softSkill">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/comunication.jpg`}
                alt=""
              />
              <p>Assertive communication</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center softSkill">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/problemsolving.png`}
                alt=""
              />
              <p>Problem-solving skills</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center softSkill">
              <img src={`${import.meta.env.VITE_IMG_URL}/desire.jpeg`} alt="" />
              <p>Desire to learn</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center softSkill">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/adaptability.jpg`}
                alt=""
              />
              <p>Adaptability</p>
            </div>
          </div>
          <div className="row tw mt-3">
            <h2 className="mb-4">Certificates</h2>
            <div className="certificateDesc col-12 col-md-6">
              <h4 className="text-center">NeoCoast React Bootcamp</h4>
              <p>
                The react bootcamp at NeoCoast is a two months course that is
                highly practical. At the end of the course participants develop
                a front-end aplication using an external API.
              </p>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-sixth-atropos"
              onClick={() => window.open(neoCoastCertificateUrl, "_blank")}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/NeoPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      NeoCoast React Bootcamp{" "}
                      <i className="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="certificateDesc col-12 col-md-6">
              <h4 className="text-center">Hack Academy Bootcamp</h4>
              <p>
                The coding bootcamp at Hack Academy is an intensive 3-month
                course that is highly practical, with a daily schedule of 9
                hours per day. Participants dedicate over 600 hours to learning
                the necessary technologies to become a Full Stack Developer.
              </p>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-first-atropos"
              onClick={() => window.open(bootcampCertificateUrl, "_blank")}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/bootPic.png`}
                      alt=""
                    />
                    <h5 className="darkCertificate" data-atropos-offset="10">
                      Hack Academy Bootcamp{" "}
                      <i className="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificateDesc col-12 col-md-6">
              <h4 className="text-center">Jovenes a Programar</h4>
              <p>
                Jovenes a Programar is an introductory course to the world of
                technologies. It has a duration of one year, with the first
                semester dedicated to learning JavaScript, CSS, HTML, and Ruby.
                In the second half of the year, I was assigned to the Testing
                orientation.
              </p>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-second-atropos"
              onClick={() => window.open(japCertificateUrl, "_blank")}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/japPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      Jovenes a Programar{" "}
                      <i className="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="certificateDesc col-12 col-md-6">
              <h4 className="text-center">EF SET Certificate</h4>
              <p>
                English Language Proficiency Certificate. Achieved a C2 level
                within the parameters of the institution.
              </p>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-third-atropos"
              onClick={() => window.open(inglesCertificateUrl, "_blank")}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/inglesPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      EF SET <i className="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificateDesc col-12 col-md-6">
              <h4 className="text-center">Psychology Studies</h4>
              <p>
                Education at the Faculty of Psychology (UDELAR). As of today, I
                only need to complete the final degree project (TFG) to receive
                the university degree.
              </p>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-fourth-atropos"
              onClick={() => window.open(psicoCertificateUrl, "_blank")}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/psicoPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      Psychology Background{" "}
                      <i className="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificateDesc col-12 col-md-6">
              <h4 className="text-center">Economics Studies</h4>
              <p>
                Education at the Faculty of Economics (UDELAR). Completed two
                full years.
              </p>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-fifth-atropos"
              onClick={() => window.open(ecoCertificateUrl, "_blank")}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/economiaPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      Economics Background{" "}
                      <i className="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
