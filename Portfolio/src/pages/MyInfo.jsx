import { Link } from "react-router-dom";

function MyInfo() {
  return (
    <>
      <div className="myInfo">
        <div className="row fila">
          <Link to={"/"}>
            <i className="bi bi-arrow-left fs-1 ps-sm-5 fs-1 text-white"></i>
          </Link>
          <div className="col-3 fotito">
            <img src={`${import.meta.env.VITE_IMG_URL}/yo.jpeg`} alt="Foto" />
          </div>
          <div className="col-8">
            <h1 className="nombre text-white">Facundo Riñón</h1>
          </div>
        </div>
        <div className="container">
          <div className="row aboutMe tw">
            <h2>About me</h2>
            <p>
              I am a graduate of the Hack Academy Coding Bootcamp, an intensive
              and highly practical course in which I invested over 600 hours
              within a span of 3 months to become a Full Stack developer.
              Throughout this course, I learned to use technologies such as
              React.js, Node.js, MySQL, MongoDB, JavaScript, CSS, and
              Express.js. <br />
              My journey in the world of technology began in 2022 when I
              enrolled in the "Jovenes a Programar" course offered by Ceibal,
              which helped me take my first steps in technologies like
              JavaScript and Ruby. <br />
              Furthermore, I am an advanced student in the Psychology degree
              program at the Faculty of Psychology, UDELAR, having completed
              more than 95% of the curriculum to date. <br />
              Lastly, I possess an advanced level of English, enabling me to
              communicate effectively when speaking, listening, or writing.{" "}
              <br />
              Currently, I am actively seeking my first professional experience
              in the IT field and am excited about the prospect of continuous
              learning to become a better professional. I would greatly
              appreciate the opportunity to challenge myself and demonstrate
              that I am more than ready for any endeavor.
            </p>
          </div>
          <div className="row aboutMe mt-5 tw">
            <h2 className="mb-3">More info</h2>
            <div className="col-6 fotoDeSitio mt-3 mb-5">
              <Link
                to={
                  "https://www.linkedin.com/in/facundo-ri%C3%B1%C3%B3n-93b730220/"
                }
                target="blank"
              >
                <img
                  className="webPic"
                  src={`${import.meta.env.VITE_IMG_URL}/linkedin.png`}
                  alt="linkedin"
                />
              </Link>
            </div>
            <div className="col-12 col-lg-5 col-xl-6">
              <h3 className="pt-5">
                <Link
                  to={
                    "https://www.linkedin.com/in/facundo-ri%C3%B1%C3%B3n-93b730220/"
                  }
                  target="blank"
                  className="no-underline tw"
                >
                  Linkedin <i className="bi bi-linkedin lin"></i>
                </Link>
              </h3>
              <p>
                Here you can find more information about me, as well as access
                some of the certificates from the courses I have been taking in
                recent months, such as the "Jovenes a Programar" (Ceibal) and
                the Coding Bootcamp from Hack Academy certificates.
              </p>
            </div>
            <div className="col-12 col-lg-5 col-xl-6">
              <h3 className="mt-5">
                <Link
                  to={"https://github.com/FacundoRinon"}
                  target="blank"
                  className="no-underline tw"
                >
                  <i className="bi bi-github git"></i> GitHub
                </Link>
              </h3>
              <p>
                On my GitHub, you can discover repositories containing some of
                the recent projects I have been diligently involved in.
                Additionally, you are welcome to access the activity log I
                diligently maintain within the platform.
              </p>
            </div>
            <div className="col-6 fotoDeSitio mt-5 mb-5">
              <Link to={"https://github.com/FacundoRinon"} target="blank">
                <img
                  className="webPic"
                  src={`${import.meta.env.VITE_IMG_URL}/github.png`}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInfo;
