import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div id="sidebar" className="text-center">
        <img
          id="homePic"
          src={`${import.meta.env.VITE_IMG_URL}/yo.jpeg`}
          alt="Foto"
        />
        <h3 className="tw">Facundo Riñón</h3>
        <p className="tw">Full Stack Developer</p>
        <small className="tw">Montevideo, UY 🌍</small>
        <Link className="no-underline" to={"/info"}>
          <h5 className="tw mt-5 sidebarLink">About Me</h5>
        </Link>
        <Link className="no-underline" to={"/skills"}>
          <h5 className="tw mt-5 sidebarLink">My Skills</h5>
        </Link>
        <Link className="no-underline" to={"/projects"}>
          <h5 className="tw mt-5 sidebarLink">Projects</h5>
        </Link>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-2 tw fs-3 m-2">
            <Link
              target="blank"
              className="text-white"
              to={
                "https://www.linkedin.com/in/facundo-ri%C3%B1%C3%B3n-93b730220/"
              }
            >
              <i className="bi bi-linkedin lin"></i>
            </Link>
          </div>
          <div className="col-2 tw fs-3 m-2">
            <Link
              target="blank"
              className="text-white"
              to={"https://github.com/FacundoRinon"}
            >
              <i className="bi bi-github git"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
