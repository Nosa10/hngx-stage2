import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
  try {
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e09fe431c8f2cc40c10dae1995e31e3b`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  } catch(err) {
    console.log("Unable to access the api pls hold on")
  }
  
  const card = movies.slice(0,10)
 
  const cards = card.map((example) => {
    // console.log(example.id)
    return(
      <Card 
      key={example.id}
        {...example}
      />
    )
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

