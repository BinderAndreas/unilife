import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import Banner from '../components/Banner'
import axios from 'axios'
import CityCard from '../components/CityCard'

function HomePage() {

const [cities, setCities] = useState([])

useEffect(() => {
  axios.get(`https://unilife-server.herokuapp.com/cities`)
  .then(response => {
    setCities(response.data.response)
  })
  .catch(error => console.log(error))
}, [])
 


  return (
    <div className="home-container">
        <Banner />
        <div>
            <h1>Student accomodation in our top cities</h1>
            <div className="cities-container">
                {
                    cities.map((item)=>{
                        return <CityCard key={item._id} city={item}/>
                    })
                }
            </div>
            <a href="/allcities">See all Cities</a>
        </div>
    </div>
  )
}

export default HomePage