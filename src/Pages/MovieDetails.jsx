import React from "react";
import { useState, useEffect, useContext } from "react";
import './MovieDetails.css'
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function MovieDetails() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
//   useEffect(() => {
//     axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e09fe431c8f2cc40c10dae1995e31e3b`)
//       .then((res) => {
//         setMovies(res.data.results);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
  const [movieD, setMovieD] = useState([]);
//   const API_URL = 'https://api.themoviedb.org/3/movie/678512?api_key=e09fe431c8f2cc40c10dae1995e31e3b'
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/912908?api_key=e09fe431c8f2cc40c10dae1995e31e3b`)
      .then((res) => {
        setMovieD(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(movieD)
  if(!movieD) {
    <div>Loading...</div>
  }
  var localDate = new Date()
  var utcDate = localDate.toUTCString();
  document.getElementById('utc').innerHTML = utcDate;
    return(
        <div>
            <div className="background">
                <img src='Poster.jpg'></img>
                <a href="#" className="btn">Watch Trailer</a>
            </div>
            <div className="someDetails">
                <h4 data-testid="movie-title">Top Gun:Maverick</h4>
                <p>Release Date (UTC): <span data-testid="movie-release-date" id="utc"></span></p>
                <p>Runtime: <span data-testid="movie-runtime" >114 minutes</span></p>
                <p className="red">Genre: Action</p>
            </div>
            <div data-testid="movie-overview" className="overview">
                <p>After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                but must confront ghosts of his past when 
                he leads TOP GUN's elite graduates
                on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
            </div>
            <h4>Director: <span className="red">Joseph Kosinski</span></h4>
            <h4>Writers: <span className="red">Jim Cash, jack epps Jr, Peter Craig</span></h4>
            <h4>Stars: <span className="red">Tom Cruise</span></h4>
            
            <Footer />
        </div>
    )
}