import React from "react";
import "../../Style/Navbar/navbar.css";
import PostitLogo from "../../assets/Postit 1.svg";
import profilePic from "../../assets/Ellipse 1.svg";
import { Link } from "react-router-dom";
import OffCanvas from "./OffCanvas";
import Signup from "../../modals/SignupModals";
import SigninModals from "../../modals/SigninModal";

const NavbarComponent = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="shadow-sm">
    <div className="container d-flex justify-content-between py-3 align-items-center">
      <Link to="/">
        <img src={PostitLogo} alt="Postit Logo" />
      </Link>
      <div className="d-none d-lg-block">
        {token ? (
          <div className="d-flex justify-content-between align-items-center gap-3 ">
            <ul className="list d-flex gap-2 list-unstyled">
              <Link className="text-decoration-none text-black" to="#">
                <li>Stories</li>
              </Link>
              <Link className="text-decoration-none text-black" to="#">
                <li>Contact</li>
              </Link>
            </ul>
            <img src={profilePic} alt="" />
          </div>
        ) : (
          <div className="d-flex align-items-center gap-4">
            <ul className="list mt-4 list-unstyled d-flex align-items-center gap-4">
              <Link className="text-decoration-none text-black" to="/signin">
                <li>Stories</li>
              </Link>
              <Link className="text-decoration-none text-black" to="/signin">
                <li>Contact</li>
              </Link>
              <SigninModals/>
            </ul>
            <div>
              <Signup/>
            </div>
          </div>
        )}
      </div>
      <div className="d-block d-lg-none">
        <OffCanvas/>
      </div>
    </div>
    </div>
  );
};

export default NavbarComponent;
