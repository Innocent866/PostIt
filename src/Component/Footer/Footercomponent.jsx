import React from "react";
import "../../Style/footer/footer.css";

const Footercomponent = () => {
  return (
    <div style={{ background: "#292929", color: "white" }}>
      <div className="container">
        <div className="d-flex flex-column flex-lg-row gap-5 gap-lg-0 justify-content-lg-between justify-content-center  py-5">
          <div>
            <h6>
              About Post
              <span
                style={{
                  color: "#0086B0",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                it
              </span>
            </h6>
            <p className="footer-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
              rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
              que maeae tortoere necsem commodo ac.
            </p>
          </div>
          <div>
            <h6>Quick Menu</h6>
            <div className="d-flex justify-content-center gap-5">
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Story</li>
                <li>Trending Stories</li>
                <li>Popular Stories</li>
              </ul>
              <ul className="list-unstyled">
                <li>Sign Up</li>
                <li>Login</li>
                <li>Contact Us </li>
              </ul>
            </div>
          </div>
          <div>
            <h6>Subscribe to our newsletter</h6>
            <div className="footer-input-btn">
              <input
                type="text"
                placeholder="Enter email address"
                className="footer-input"
              />
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="d-flex justify-content-end">
          <h6>Terms and Policy</h6>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footercomponent;
