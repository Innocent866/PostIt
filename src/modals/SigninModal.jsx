import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function SigninModals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "black",
          fontFamily: "Harmattan, sans-serif",
          fontSize: "24px",
          fontWeight: "400",
        }}
        onClick={handleShow}
      >
        SignIn
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <div
          className="d-flex align-items-center justify-content-center text-center "
          style={{ height: "110vh" }}
        >
          <div className="w-100">
            <h6 className="my-5">Welcome Back</h6>
            <form action="">
              <label htmlFor="" className="mb-3 d-block">
                Your Email Address
              </label>
              <input
                type="text"
                className="signup-modal-input w-75 mb-5"
                style={{ border: "none", borderBottom: "1px solid black" }}
              />
              <label htmlFor="" className="mb-3 d-block">
                Password
              </label>
              <input
                type="text"
                className="signup-modal-input w-75 mb-5"
                style={{ border: "none", borderBottom: "1px solid black" }}
              />
              
            </form>
            <Link to="/welcome">
              <button className="btn w-75 btn-primary text-white">
                Continue
              </button>
              </Link>
            <p className="mt-4 mb-5">
              on account? <Link>Sign Up</Link>{" "}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SigninModals;
