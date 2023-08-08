import "./mySkills.css";
import { Link } from "react-router-dom";

function MySkills() {
  return (
    <>
      <div className="mySkills">
        <div className="row fila2">
          <Link to={"/"}>
            <i className="bi bi-arrow-left fs-1 ps-sm-5 fs-1 text-white"></i>
          </Link>
          <div className="col-3 fotito">
            <img
              src="https://ahsafjxktrbibxigbksr.supabase.co/storage/v1/object/public/images/image_1688583607064.jpeg"
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
              A lo largo de todo mi trayecto educativo he tenido la oportunidad
              de perfeccionar mis habilidades blandas logrando tener una buena
              comunicación con el resto de los integrantes de los distintos
              espacios formativos.
            </p>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h4 className="softSkill">Teamwork Oriented</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h4 className="softSkill">Fast Learner</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h4 className="softSkill">Assertive communication</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h4 className="softSkill">Problem-solving skills</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h4 className="softSkill">Desire to learn</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h4 className="softSkill">Adaptability</h4>
            </div>
          </div>
          <div className="row tw mt-3">
            <h2 className="mb-4">Certificados</h2>
            <div className="col-12 col-md-6 text-center">
              <h5 className="certificate">Coding Bootcamp de Hack Academy</h5>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h5 className="certificate">Jovenes a Programar (Ceibal)</h5>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h5 className="certificate">Ingles</h5>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h5 className="certificate">
                Escolaridad Facultad de Psicologia
              </h5>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h5 className="certificate">Escolaridad Facultad de Economia</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
