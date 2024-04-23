import React from "react";
import unsplash from "../../assets/unsplash_Z2bJeJQRbW0.svg";
import { Link } from "react-router-dom";

const WelcomeComponent = () => {
  return (
    <div className="py-5" style={{ background: "#F5F6F8" }}>
      <div className="container py-5 gap-4 d-lg-flex justify-content-between">
        <div>
          <h1 className="mb-3" style={{fontSize:"75px", fontWeight:"700", fontFamily: "Harmattan, sans-serif"}}>Welcome INNOCENT</h1>
          <p style={{lineHeight:"35px",fontSize:"20px", fontWeight:"400", fontFamily: "Open Sans, sans-serif"}}>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </p>
          <div className="d-flex mt-5 gap-3">
            <Link to="/peoplestory"><button className="btn btn-primary text-white px-lg-5 px-2" style={{fontSize:"30px", fontWeight:"700", fontFamily: "Harmattan, sans-serif"}}>My Stories</button></Link>
           <Link to="/createstory"><button className="btn btn-white text-primary px-lg-5 px-2 border border-1 border-primary" style={{fontSize:"30px", fontWeight:"700", fontFamily: "Harmattan, sans-serif"}}>
              Create Story
            </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={unsplash} alt="" className="img-fluid" style={{width:"1600px"}} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
