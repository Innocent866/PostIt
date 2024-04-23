import React from 'react'
import { Link } from 'react-router-dom'
import unsplash from "../../assets/unsplash_Z2bJeJQRbW0.svg";

const Peoplestory = () => {
  return (
    <div className="py-5" style={{ background: "#F5F6F8" }}>
    <div className="container py-5 gap-4 d-lg-flex justify-content-between">
      <div>
        <h1 className="mb-3" style={{fontSize:"75px", fontWeight:"700", fontFamily: "Harmattan, sans-serif"}}>You've got a story, Post<span
                style={{
                  color: "#0086B0"
                }}
              >
                it.
              </span></h1>
        <p style={{lineHeight:"35px",fontSize:"20px", fontWeight:"400", fontFamily: "Open Sans, sans-serif"}}>
          Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
          massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
          aliquam id ut.{" "}
        </p>
        
      </div>
      <div>
        <img src={unsplash} alt="" className="img-fluid" style={{width:"1400px"}} />
      </div>
    </div>
  </div>
  )
}

export default Peoplestory