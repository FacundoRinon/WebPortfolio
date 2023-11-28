import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "./home.css";

function Home() {
  const pdfFileName = "NewEnglishCVFullStack.pdf";
  const pdfUrl = `${import.meta.env.VITE_IMG_URL}/${pdfFileName}`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`¡Saved to clipboard!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="d-flex">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-10 homeBody">
          <div className="d-block d-sm-none">
            <Navbar />
          </div>
          <div className="container">
            <h2 className="homeFont">Hi,</h2>
            <h2 className="homeFont">I'm Facundo,</h2>
            <h2 className="homeFont mb-5">Full Stack Developer</h2>

            <button className="contactMeBtn mt-5" onClick={handleShow}>
              Contact me!
            </button>
            <button
              className="cvBtn mt-5"
              onClick={() => window.open(pdfUrl, "_blank")}
            >
              View CV
            </button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header className="homeModal">
            <Modal.Title>Contact Information</Modal.Title>
          </Modal.Header>
          <Modal.Body className="homeModal">
            <h5>Email:</h5>
            <div className="row">
              <div className="col-9">
                <p>facundo.rinon27@gmail.com</p>
              </div>
              <div className="col-3">
                <button
                  className="copyBtn"
                  onClick={() => copyText("facundo.rinon27@gmail.com")}
                >
                  Copy <i class="bi bi-clipboard-check"></i>
                </button>
              </div>
            </div>

            <h5>Phone Number:</h5>
            <div className="row">
              <div className="col-9">
                <p>(+598) 098232825</p>
              </div>
              <div className="col-3">
                <button
                  className="copyBtn"
                  onClick={() => copyText("(+598) 098232825")}
                >
                  Copy <i class="bi bi-clipboard-check"></i>
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="homeModal">
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </div>
    </>
  );
}

export default Home;
