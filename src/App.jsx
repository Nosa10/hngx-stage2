import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './components/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import { ReactDOM } from 'react';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/moviedetails';
import PageNotFound from './PageNotFound';

function App() {

const { id } = useParams()
  return (
  
    <div>
      <BrowserRouter>
        <Routes>
        <Route index  element={<HomePage />}/>
          <Route path="/home"  element={<HomePage />}/>
          <Route path={`/movies/:id`}element={<MovieDetails />}/>
          <Route path="/404" element={<PageNotFound />} />
          	<Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
