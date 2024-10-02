import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../Constants/Constant'
import './Banner.css'
import axios from '../Constants/axios'


function Banner() {
  function Random(min,max) {
    return Math.floor(Math.random() * (max -min+1)) + min;
  }
  const [movie, setMovie] = useState(null)
  useEffect(() =>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[Random(0,20)])
      setMovie(response.data.results[Random(0,20)])
    })
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${imageUrl+movie?.backdrop_path})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.original_name || movie?.title || 'Loading...'}</h1>
            <div className='banner_btn'>
                <button className='btn'>Play</button>
                <button className='btn'>My List</button>
            </div>
            <h1 className='disc'>{movie?.overview}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner