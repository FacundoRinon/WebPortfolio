import { Link } from "react-router-dom";

function MyProjects() {
  return (
    <>
      <div className="myInfo pb-3">
        <div className="row fila">
          <Link to={"/"}>
            <i className="bi bi-arrow-left fs-1 ps-sm-5 fs-1 text-white"></i>
          </Link>
          <div className="col-3 fotito">
            <img
              src="https://ahsafjxktrbibxigbksr.supabase.co/storage/v1/object/public/images/image_1688583607064.jpeg"
              alt="Foto"
            />
          </div>
          <div className="col-8">
            <h1 className="nombre text-white">My projects</h1>
          </div>
        </div>
        <div className="container">
          <div className="row tw mb-5">
            <div className="col-12 col-sm-9">
              <h2>Introduction</h2>
              <p>
                In this section, you will have direct access to various projects
                I have been actively involved in recently, both individually and
                collaboratively with different teams.
              </p>
            </div>
          </div>
          <div className="row tw">
            <div className="col-9 col-sm-10">
              <h2 className="mb-3">Twitter Clone Project</h2>
            </div>
            <div className="col-3 col-sm-2">
              <Link to={"https://front-twitter3.vercel.app/"} target="blank">
                {" "}
                Visit project
              </Link>
            </div>
            <p>
              In this project, I collaborated with Ramiro Vidal, a fellow
              participant from Hack Academy's Coding Bootcamp, for a duration of
              two weeks. We held daily meetings spanning six hours each day. Our
              primary goal was to develop a streamlined version of a
              Twitter-like application.
            </p>
          </div>
          <div className="row tw mt-3 mb-3">
            <div className="col-lg-7">
              <Link to={"https://front-twitter3.vercel.app/"} target="blank">
                <img
                  className="w-100 mb-3 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/signUp.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5">
              <p className="mt-3">
                To achieve this objective, we engineered a robust Rest API to
                efficiently store and manage user data, employing Node.js and
                MongoDB. The application itself was meticulously crafted using a
                skillful combination of React.js, Bootstrap, JavaScript, and
                Redux.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p>
                Within this project, one has the capability to undertake a
                multitude of actions. These include creating a user profile,
                making posts, engaging in comments on posts, searching for
                fellow users, establishing connections by following others,
                expressing approval through likes on both posts and comments,
                and even managing the removal of posts, among various other
                functionalities.
              </p>
            </div>
            <div className="col-lg-7 mb-3">
              <Link to={"https://front-twitter3.vercel.app/"} target="blank">
                <img
                  className="w-100 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/profile.png`}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="row tw">
            <div className="col-10">
              <h2 className="mb-3">Hack Games Project</h2>
            </div>
            <div className="col-2">
              <Link to={"https://hackgames.vercel.app/"} target="blank">
                {" "}
                Visit project
              </Link>
            </div>
            <p>
              In this project, I collaborated with Ramiro Vidal, a fellow
              participant from Hack Academy's Coding Bootcamp, for a duration of
              two weeks. We held daily meetings spanning six hours each day. Our
              primary goal was to develop a streamlined version of a
              Twitter-like application.
            </p>
          </div>
          <div className="row tw mt-3 mb-3">
            <div className="col-lg-7">
              <Link to={"https://hackgames.vercel.app/"} target="blank">
                <img
                  className="w-100 mb-3 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/HGhome.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5">
              <p className="mt-3">
                To achieve this objective, we engineered a robust Rest API to
                efficiently store and manage user data, employing Node.js and
                MongoDB. The application itself was meticulously crafted using a
                skillful combination of React.js, Bootstrap, JavaScript, and
                Redux.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p>
                Within this project, one has the capability to undertake a
                multitude of actions. These include creating a user profile,
                making posts, engaging in comments on posts, searching for
                fellow users, establishing connections by following others,
                expressing approval through likes on both posts and comments,
                and even managing the removal of posts, among various other
                functionalities.
              </p>
            </div>
            <div className="col-lg-7 mb-3">
              <Link to={"https://hackgames.vercel.app/"} target="blank">
                <img
                  className="w-100 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/HGcart.png`}
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

export default MyProjects;
