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
              src={`${import.meta.env.VITE_IMG_URL}/project.webp`}
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
              <p style={{ textAlign: "justify" }}>
                In this section, you will have direct access to various projects
                I have been actively involved in recently, both individually and
                collaboratively with different teams.
              </p>
            </div>
          </div>

          <div className="row tw">
            <div className="col-10">
              <h2 className="mb-3 mt-5">IMDb Clone Proyect</h2>
            </div>
            <div className="col-2 mt-5">
              <Link
                to={"https://moviesimdb-front.vercel.app/"}
                target="blank"
                className="no-underline"
              >
                {" "}
                <small className="projectButton">Visit</small>
              </Link>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-5">
              IMDb Clone is a project aimed at recreating, within the available
              tools, the popular site "IMDb". The idea is to provide information
              on a wide variety of audiovisual content, as well as allowing
              users to add items to a watchlist and rate movies or series.
            </p>
          </div>
          <div className="row tw mt-3 mb-3">
            <div className="col-lg-7">
              <Link to={"https://moviesimdb-front.vercel.app/"} target="blank">
                <img
                  className="w-100 mb-3 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/IMDbHome.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5">
              <p style={{ textAlign: "justify" }} className="mt-5">
                To carry out the project, I created my own API application to
                store and request information from registered users using
                Node.js. This information was stored in a relational database in
                MySQL. To obtain information about movies and series, an
                external API called "The Movie Database" was used. The frontend
                application was created using React.js with JavaScript, and the
                styles were implemented using SCSS.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p style={{ textAlign: "justify" }} className="mt-5">
                ChatGPT In the application, we have access to a large catalog of
                movies and series, from which we can access trailers and photos.
                Additionally, we can view information about the cast, directors,
                and writers, as well as episodes and average ratings. Users can
                rate these items and add them to a watchlist. The application is
                fully responsive, adapting seamlessly to various devices.
              </p>
            </div>
            <div className="col-lg-7 mb-3">
              <Link to={"https://moviesimdb-front.vercel.app/"} target="blank">
                <img
                  className="w-100 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/IMDbElement.png`}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="row tw">
            <div className="col-10">
              <h2 className="mb-3 mt-5">NewShop - NeoCoast Bootcamp Proyect</h2>
            </div>
            <div className="col-2 mt-5">
              <Link
                to={"https://newshop-one.vercel.app/"}
                target="blank"
                className="no-underline"
              >
                {" "}
                <small className="projectButton">Visit</small>
              </Link>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-5">
              "NewShop" represents the culmination of my efforts during the
              React Bootcamp hosted by NeoCoast. This project embodies an
              e-commerce platform specializing in everyday consumer goods.
            </p>
          </div>
          <div className="row tw mt-3 mb-3">
            <div className="col-lg-7">
              <Link to={"https://newshop-one.vercel.app/"} target="blank">
                <img
                  className="w-100 mb-3 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/newShop1.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5">
              <p style={{ textAlign: "justify" }} className="mt-5">
                The project involved developing a frontend application using
                React.js technology, which communicates with an external API
                providing comprehensive product information. Various styles were
                implemented using SCSS templates.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Within the project's functionalities, users have the capability
                to view detailed information about various products. They can
                also add products to a shopping cart, create multiple carts
                containing different products, and gift the contents of a cart
                to another user.
              </p>
            </div>
            <div className="col-lg-7 mb-3">
              <Link to={"https://newshop-one.vercel.app/"} target="blank">
                <img
                  className="w-100 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/newShop2.png`}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="row tw">
            <div className="col-10">
              <h2 className="mb-3 mt-5">The RecipeBook</h2>
            </div>
            <div className="col-2 mt-5">
              <Link
                to={"https://recipebookproject.vercel.app/"}
                target="blank"
                className="no-underline"
              >
                {" "}
                <small className="projectButton">Visit</small>
              </Link>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-5">
              The recipe book is a project focused on creating recipes to share
              with others. I worked on this project independently over a period
              of one month.
            </p>
          </div>
          <div className="row tw mt-3 mb-3">
            <div className="col-lg-7">
              <Link to={"https://recipebookproject.vercel.app/"} target="blank">
                <img
                  className="w-100 mb-3 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/RecipeBook1.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5">
              <p style={{ textAlign: "justify" }} className="mt-5">
                I had to use Node.js and MongoDB to create a Rest API where I
                stored and retrieved information about the recipes and users.
                The application was built using React.js and JavaScript.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p style={{ textAlign: "justify" }} className="mt-5">
                In the application, we have the opportunity to create and edit
                our own recipes. We can then add posts from others that interest
                us to our recipe book for later cooking. Additionally, we can
                rate recipes. It's important to start following other users so
                we can see the recipes they are sharing. However, if we choose
                not to follow others, we can also search for recipes based on
                their category, rating, and number of votes
              </p>
            </div>
            <div className="col-lg-7 mb-3">
              <Link to={"https://recipebookproject.vercel.app/"} target="blank">
                <img
                  className="w-100 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/RecipeBook2.png`}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="row tw">
            <div className="col-10">
              <h2 className="mb-3 mt-5">Jujutsu cards</h2>
            </div>
            <div className="col-2 mt-5">
              <Link
                to={"https://jujutsu-cards.vercel.app/"}
                target="blank"
                className="no-underline"
              >
                {" "}
                <small className="projectButton">Visit</small>
              </Link>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-5">
              "Jujutsu Cards" is my debut full-stack project, where I worked
              entirely independently over a span of two weeks. It is a
              collectible card platform inspired by the popular anime "Jujutsu
              Kaisen."
            </p>
          </div>
          <div className="row tw mt-3 mb-3">
            <div className="col-lg-7">
              <Link to={"https://hackgames.vercel.app/"} target="blank">
                <img
                  className="w-100 mb-3 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/ruleModalPage4.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5">
              <p style={{ textAlign: "justify" }} className="mt-5">
                I had to use Node.js and MongoDB to create a Rest API where i
                stored and retrieved information about the cards and users. The
                application was built using React.js and JavaScript.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p style={{ textAlign: "justify" }} className="mt-5">
                In this project, users have the ability to create their own
                accounts, as well as utilize a pre-existing account for
                simplified access, particularly for those with limited time to
                spare. A tutorial modal serves as a guiding feature. <br /> The
                most significant aspect of the application revolves around the
                collectible cards, each featuring an engaging 3D effect crafted
                using the Atropos library. Users can unlock cards using points
                and subsequently incorporate them into their teams to earn
                additional points. These cards, once part of our team, generate
                points over specified intervals of time.
              </p>
            </div>
            <div className="col-lg-7 mb-3">
              <Link to={"https://jujutsu-cards.vercel.app/"} target="blank">
                <img
                  className="w-100 projectsPic"
                  src={`${import.meta.env.VITE_IMG_URL}/ruleModalPage3.png`}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="row tw">
            <div className="col-9 col-sm-10">
              <h2 className="mb-3 mt-5">Twitter Clone Project</h2>
            </div>
            <div className="col-3 col-sm-2 mb-3 mt-5">
              <Link
                to={"https://front-twitter3.vercel.app/"}
                target="blank"
                className="no-underline "
              >
                {" "}
                <small className="projectButton">Visit</small>
              </Link>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-5">
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
              <p style={{ textAlign: "justify" }} className="mt-5">
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
              <p style={{ textAlign: "justify" }} className="mt-5">
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
              <h2 className="mb-3 mt-5">Hack Games Project</h2>
            </div>
            <div className="col-2 mt-5">
              <Link
                to={"https://hackgames.vercel.app/"}
                target="blank"
                className="no-underline"
              >
                {" "}
                <small className="projectButton">Visit</small>
              </Link>
            </div>
            <p style={{ textAlign: "justify" }} className="mt-5">
              Hack Games is the culminating project of the Hack Academy Coding
              Bootcamp. It is a fictional physical video game e-commerce
              website. To create it, we collaborated with three fellow students:
              Giovani Gonzales, Juan Chur, and Batman, over a period of three
              weeks.
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
              <p style={{ textAlign: "justify" }} className="mt-5">
                Similar to the Twitter project, we had to create a Rest API
                where we stored and retrieved information about the video game
                catalog. The application was built using React.js and
                JavaScript.
              </p>
            </div>
          </div>
          <div className="row tw mt-5 mb-3">
            <div className="col-lg-5">
              <h4>Functions</h4>
              <p style={{ textAlign: "justify" }} className="mt-5">
                In this project, we have three ways to navigate. One of these
                ways is as a guest, allowing you to view available games without
                creating a user or logging in. We can also log in as a buyer
                once our user is created, allowing us to add products to our
                cart and complete a fictitious purchase. Lastly, it is possible
                to log in as an administrator, with access to various
                dashboards.
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
