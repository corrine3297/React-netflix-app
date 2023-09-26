import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css';

function Row({title,fetchUrl}) {
    console.log(fetchUrl);
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [allMovies,setallMovies]=useState([])
    const fetchData=async()=>{
   //  const response= await tmdbAxiosInstance.get(fetchUrl)
     const {data}= await tmdbAxiosInstance.get(fetchUrl)
      console.log(data.results)
      setallMovies(data.results)
    }
    console.log(allMovies);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='row'> 
        <h1>
            {title}
            <div className="all_movies">
              {
                allMovies.map(item=>(
                  <img className='movie' src={`${base_url}/${item.backdrop_path}`} alt="no image" />
                ))
              }
            </div>
        </h1>
    </div>
  )
}

export default Row