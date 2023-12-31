import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './App.css'
import HomePage from './Pages/HomePage';
import MovieDetail from './Pages/MovieDetail';
import PageNotFound from './PageNotFound';

function App() {

const { id } = useParams()
  return (
  
    <div>
      <BrowserRouter>
        <Routes>
        <Route index  element={<HomePage />}/>
          <Route path="/home"  element={<HomePage />}/>
          <Route path={`/movies/:id`}element={<MovieDetail />}/>
          <Route path="/404" element={<PageNotFound />} />
          	<Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
