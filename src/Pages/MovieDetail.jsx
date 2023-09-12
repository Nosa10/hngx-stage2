import React from "react";
import { useState, useEffect } from "react";
import './MovieDetails.css'
import { useParams } from "react-router-dom";
import axios from "axios";


export default function MovieDetail() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
  const [movieD, setMovieD] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=e09fe431c8f2cc40c10dae1995e31e3b`)
      .then((res) => {
        setMovieD(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  if(!movieD) {
    <div>Loading...</div>
  }
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

  var localDate = movieD.release_date
  let timestamp = new Date(localDate).getTime();
  //console.log(timestamp)
  // const day = new Date(timestamp). toISOString();
  // console.log(day)
  let year = new Date(timestamp).getUTCFullYear();
  let month = new Date(timestamp).getUTCMonth() + 1;
  const date = new Date(timestamp).getUTCDate()
  const ourFormat = `${date}/${month}/${year}`;
  
  
    return(
        <div className="black">
            <div className="background">
                <img src={API_IMG+movieD.poster_path} data-testid = "movie-poster"/>
                <a href="#" className="btn">Watch Trailer</a>
            </div>
            <div className="someDetails">
                <h4 data-testid="movie-title">{movieD.original_title}</h4>
                <p>Release Date (UTC): <span data-testid="movie-release-date" id="utc">{ourFormat}</span></p>
                <p>Runtime: <span data-testid="movie-runtime" >{movieD.runtime} minutes</span></p>
                <p className="red">Genres: Action</p>
            </div>
            <div  className="overview">
                <p data-testid="movie-overview">{movieD.overview}</p>
            </div>
            <h4>Director: <span className="red">Joseph Kosinski</span></h4>
            <h4>Writers: <span className="red">Jim Cash, jack epps Jr, Peter Craig</span></h4>
            <h4>Stars: <span className="red">Tom Cruise</span></h4>
            
        </div>
    )
}