import React from 'react'
import "../styles/banner.css"
import background from "../assets/cover-img.png"

function Banner() {
  return (
    <div className="dark-container">
      <div className="banner-container" style={{ backgroundImage:`url(${background}`, 
      backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", color: "white", width: "100%"}}>
        <div className="banner-text">
          <h1>Find student homes with bills included</h1>
          <p>A simple and faster way to search for student accomodation</p>
        </div>
      </div>
    </div>
  )
}

export default Banner