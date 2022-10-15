import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import Banner from '../components/Banner'
import axios from 'axios'
import CityCard from '../components/CityCard'
import { BiSearchAlt } from "react-icons/bi";
import { MdChecklistRtl } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { GrSelect } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";

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
        <div className='cities'>
            <h1>Student accomodation in our top cities</h1>
            <div className="cities-container">
                {
                    cities.map((item)=>{
                        return <CityCard key={item._id} city={item}/>
                    })
                }
            </div>
            <div className='allcities'><a href="/allcities">See all Cities</a></div>
            
        </div>
        <div className='banner-bottom'>
        <div className='comparison'>
          <h1>Compare all inclusive student homes.</h1>
          <div className='comparison-container'>
            <div className='search'>
              <BiSearchAlt />
              <h1>Search</h1>
              <div className='center'><p>Find your dream home in the perfect area near your university.</p></div>
              </div>
            
            <div className='compare'>
              <MdChecklistRtl />
              <h1>Compare</h1>
              <div className='center'><p>Compare student accommodation to find the right home for you.</p></div>
            </div>
            <div className='bills'>
              <RiBillLine />
              <h1>Bills Included</h1>
              <div className='center'><p>Bills are included in all rent prices. No hidden fees.</p></div>
            </div>
          </div>
        </div>
        <div className='search-container'>
          <div className='selection'>
            <GrSelect />
            <div className='selection-text'>
              <h1>Best selection</h1>
              <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
            </div>
          </div>
          <div className='selection'>
            <BsHeart />
            <div className='selection-text'>
              <h1>Your favorite</h1>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
          </div>
            
        </div>
          <div></div>
        </div>
    </div>
  )
}

export default HomePage