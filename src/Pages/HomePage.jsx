import React from 'react';
import { useEffect, useState } from 'react'
import Search from '../components/Search';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../components/Card.css'
import axios from 'axios';
import Loading from '../components/Loading';
import './HomePage.css';

function HomePage() {
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=e09fe431c8f2cc40c10dae1995e31e3b'
  
    useEffect(() => {
      try {
        setLoading(true)
        const apiKey = 'e09fe431c8f2cc40c10dae1995e31e3b'; 
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, 
        {timeout:5000}
        )
          .then((res) => {
          setMovies(res.data.results);
          setLoading(false)
          
          
          
        })
        .catch((error) => {
          console.log(error);
        });
      } catch(err) {
        setLoading(false);
        console.error("There was an error fetching top movies:",error)
        
      } 
    }, []);
  
  
  const card = movies.slice(0,10)
 
  
  const ErrorBox = () => {
    return (
      <div className="blacks">
        <p className="black-texts">
          There was an error fetching the movie Error:{error}
        </p>
      </div>
    );
  }; 
   

  return (
    <>
     <Search  />


     <h1>Featured Movies</h1>

        <section className='cardList' >
          {loading ? <Loading /> : error ? (
            <ErrorBox />
          ) : card.map((example) => {
              return(
                <Card 
                key={example.id}
                  {...example}
                />
              )
            })}
        </section>
        <Footer />
     
    </>
  )
}

export default HomePage

