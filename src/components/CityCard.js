import React from 'react'

function CityCard({city}) {
  return (
    <div className="citycard">
        <p>{city.name}</p>
    </div>
  )
}

export default CityCard