import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const API_IMG = 'https://image.tmdb.org/t/p/w500/'

function Card({poster_path,title, release_date, id, vote_average}) {
  return (
    <div className='card' data-testid="movie-card" key={id} >
    <Link to={`/movies/${id}`} > 
    <div className='favorite'>
        <img src={API_IMG+poster_path} className='card--image' data-testid="movie-poster"/>
        <img src='Heart.png ' className='heart' id="heart" />
          </div>
          
          <p>USA ,</p><span data-testid="movie-release-date">{release_date}</span> 
          <h6 className='movie-title'data-testid="movie-title">{title}</h6>
          <div className='rating'>
              <img src='imdb.png'/>
              <span className='imdb'>{vote_average}</span>

              <img src='tomato.png' />
              <span>97%</span>
              <p className='genre'>Action</p>
          </div>
          </Link>
  </div>
         
  )
}

export default Card