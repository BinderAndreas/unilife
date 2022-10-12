import React from 'react'

function CityCard({city}) {
  return (
    <div className="citycard" style={{backgroundImage:`url('${city.image_url}')`, 
    backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}
>
        <p>{city.name}</p>
    </div>
  )
}

export default CityCard