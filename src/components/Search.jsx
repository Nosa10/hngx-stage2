import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Search.css'

function Search() {
  
  

  return (
    <div className='search'>
    <Container className='search'>
     <Row className='top'>
      <Col md ={6}>
      <div className='moviebox'><img src='tv.png'/> <h6>MovieBox</h6></div>
      </Col>
      <Col md={6} className='center'>
      <form>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> */}
        <input placeholder='what do you want to watch?' name='searchfield' id='searchField'/>
      </form>
      </Col>
     </Row>
     <div className='content'>
      <h1>John Wick 3 : Parabellum</h1>
      <div className='ratings'>
        <img src='imdb.png'/>
        <span className='imdb'>86.0/100 </span>

        <img src='tomato.png' />
        <span>97%</span>
      </div>
      <h6>John Wick is on the run after killing a member of the international assassins' guild, and with 
        a $14 million price tag on his head, he is the target of hit men and women everywhere.</h6>

        <button><img src='Button.png'/></button>
     </div>
    </Container>
    </div>
  )
}

export default Search