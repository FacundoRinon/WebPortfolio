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

    return () => {
      myAtropos.destroy();
      myAtropos2.destroy();
      myAtropos3.destroy();
      myAtropos4.destroy();
      myAtropos5.destroy();
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

            <div
              className="col-12 col-md-6 text-center certificate atropos my-first-atropos"
              onClick={() => window.open(bootcampCertificateUrl, "_blank")}
            >
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/bootPic.png`}
                      alt=""
                    />
                    <h5 className="darkCertificate" data-atropos-offset="10">
                      Hack Academy Bootcamp{" "}
                      <i class="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-second-atropos"
              onClick={() => window.open(japCertificateUrl, "_blank")}
            >
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/japPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      Jovenes a Programar{" "}
                      <i class="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 text-center certificate atropos my-third-atropos"
              onClick={() => window.open(inglesCertificateUrl, "_blank")}
            >
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/inglesPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      EF SET <i class="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 text-center certificate atropos my-fourth-atropos"
              onClick={() => window.open(psicoCertificateUrl, "_blank")}
            >
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/psicoPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      Psychology Background{" "}
                      <i class="bi bi-arrow-down-circle"></i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 text-center certificate atropos my-fifth-atropos"
              onClick={() => window.open(ecoCertificateUrl, "_blank")}
            >
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/economiaPic.png`}
                      alt=""
                    />
                    <h5 data-atropos-offset="10">
                      Economics Background{" "}
                      <i class="bi bi-arrow-down-circle"></i>
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
