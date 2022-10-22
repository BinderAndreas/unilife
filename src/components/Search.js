import React, { useEffect, useState } from 'react'
import "../styles/search.css"
import axios from 'axios'

function search({baseUrl}) {

    const [city, setCity] = useState([])

    useEffect(()=> {
        axios.get(`${baseUrl}cities?limit=20`)
        .then(res =>{setCity(res.data.response)})
        .catch(err=>console.log(err))
}, [])

return {
    <form className='find-homes-container'>
    
}


function Search() {
  return (
    <div className='search-container'>
        
    </div>
  )
}

export default Search