import React from 'react'
import "../styles/citycard.css"

function CityCard({city}) {
  return (
    
      <div className="citycard" style={{backgroundImage:`url('${city.image_url}')`, 
    backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", color: "white", width: "30%"}}> 
     
          <div className='citycard-background'>
          <h1>{city.name}</h1>
              <p>2 properties</p> 
              
            
      </div>
      
    </div>
  )
}

export default CityCard
