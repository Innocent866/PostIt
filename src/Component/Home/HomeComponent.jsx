import React from 'react'
import { HomeDb } from '../../database/HomeDb'
import "../../Style/Home/home.css"

const HomeComponent = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center justify-content-lg-between '>
          <div className='d-lg-flex justify-content-between my-4 p-4 '  style={{border: "0.5px solid #BBBBBB"}}>
          {HomeDb.map((items)=>{
              return <div className='cards' >
                  <img src={items.image} alt="" className='' />
                  <div className='d-flex flex-column justify-content-between p-3 p-lg-0'>
                    <h6>{items.title}</h6>
                    <span>{items.tag}</span>
                  </div>
              </div>

          })}
          </div>
        </div>

        <div className='general-div-2 d-flex justify-content-center my-5 align-items-center '>
          <div className='text-center'>
            <h2 style={{fontSize:"20px", fontWeight:"700"}}>Try Post<span style={{color: "#0086B0",fontSize:"20px", fontWeight:"700"}}>it</span></h2>
            <p className='home-com-p'>Do you want to write or discover stories from writers on any topic?</p>
           
           <div className='general-div-3 d-flex align-items-center justify-content-center'>
            <input type="text" placeholder='Enter email address' className='home-com-input' />
            <button className='home-com-btn'>Get Started</button>
            
           </div>
          </div>
        </div>
    </div>
  )
}

export default HomeComponent