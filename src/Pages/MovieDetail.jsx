import React from "react";
import { useState, useEffect } from "react";
import './Moviedetails.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";


export default function MovieDetail() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
  const [movieD, setMovieD] = useState([]);
  useEffect(() => {
    try{
      setLoading(true);
      const apiKey = 'e09fe431c8f2cc40c10dae1995e31e3b'; 
    axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`, 
      {timeout: 5000}
    )
      .then((res) => {
        setMovieD(res.data);
        setLoading(false);
        
      })
      .catch((error) => {
        console.log('There was an error fetching movie details:',error);
      });
    } catch(err) {
      setLoading(false);
      console.error("There was an error fetching top movies:",error)
      
    } 
    
  }, [id]);
  if(!movieD) {
    <div>Loading...</div>
  }
  const ErrorBox = () => {
    return (
      <div className="blacks">
        <p className="black-texts">
          There was an error fetching the movie Error:{error}
        </p>
      </div>
    );
  }; 
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

  const localDate = movieD.release_date;
  const utc = new Date(localDate)
  
  
    return(
      <div>
        {loading ?<Loading /> :error ? (
          <ErrorBox />
        ) : <div className="black">
           <div className="background">
          <img src={API_IMG+movieD.poster_path} data-testid="movie-poster"/>
          <a href="#" className="btn">Watch Trailer</a>
            </div>
            <div className="someDetails">
                <h4 data-testid="movie-title">{movieD.original_title}</h4>
                <p>Release Date (UTC): <span data-testid="movie-release-date" id="utc">{utc.toUTCString()}</span></p>
                <p>Runtime: <span data-testid="movie-runtime">{movieD.runtime}</span> minutes</p>
                <p className="red">Genres: Action</p>
            </div>
            <div  className="overview">
                <p data-testid="movie-overview">{movieD.overview}</p>
            </div>
            <h4>Director: <span className="red">Joseph Kosinski</span></h4>
            <h4>Writers: <span className="red">Jim Cash, jack epps Jr, Peter Craig</span></h4>
            <h4>Stars: <span className="red">Tom Cruise</span></h4>
            
        </div> }
  </div>

    )
}