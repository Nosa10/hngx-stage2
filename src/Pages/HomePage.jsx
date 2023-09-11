import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../components/Card.css'
import axios from 'axios';
import './HomePage.css'

function HomePage() {
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=e09fe431c8f2cc40c10dae1995e31e3b'
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e09fe431c8f2cc40c10dae1995e31e3b`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(movies)
  const card = movies.slice(0,10)
  const handleMovieClick = (exampleId) => {
    navigate(`/movies/${exampleId}`);
    console.log(exampleId)
  };
  const cards = card.map((example) => {
    
    return(
      <div className='card' data-testid= "movie-card" key={example.id} onClick={() => handleMovieClick(example.id)}>
      {/* <Link > href={`/movies/${movie.id}`} */}
            <img src={API_IMG+example.poster_path} className='card--image' data-testid= "movie-poster"/>
            <p>USA ,</p><span data-testid= "movie-release-date">{example.release_date}</span> 
            <h6 className='movie-title'data-testid= "movie-title">{example.title}</h6>
            <div className='rating'>
                <img src='imdb.png'/>
                <span className='imdb'>86.0/100 </span>

                <img src='tomato.png' />
                <span>97%</span>
                <p className='genre'>Action</p>
            </div>
            {/* </Link> */}
    </div>
    )
    // return <Card 
    // key = {example.id}
    // {...example}
    // handleClick = {handleMovieClick}
    // />
   })
   

  return (
    <>
     <Search  />


     <h1>Featured Movies</h1>

        <section className='cardList' >
          {cards}
        </section>
        <Footer />
     
    </>
  )
}

export default HomePage

