import React from 'react';
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
        <input placeholder='what do you want to watch?' name='searchfield' id='searchField'/>
      </form>
      </Col>
      <Col><button className='byy'>Login</button></Col>
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