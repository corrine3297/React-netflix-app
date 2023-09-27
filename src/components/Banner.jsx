import React, { useState, useEffect } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Banner.css'

function Banner({ fetchUrl }) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [Movie, setMovie] = useState({})
    const fetchData = async () => {
        //  const response= await tmdbAxiosInstance.get(fetchUrl)
        const { data } = await tmdbAxiosInstance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random() * data.results.length)])
    }
    // console.log(Movie);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        // <div>Banner</div>
        <>
            {
                <div className='banner'style={{
                height:'600px',
                backgroundSize:'cover',
                backgroundImage:`url(${base_url}/${Movie?.backdrop_path})`,
                backgroundAttachment:'fixed'
            }}>
                <div className="banner_content">
                    <h1>
                        {Movie?.name}
                    </h1>
                    <h2>
                        {Movie?.overview?.slice(0,280)}...
                    </h2>
                </div>
            </div>
            }
        </>
    )
}

export default Banner