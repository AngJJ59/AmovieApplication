import React, { useState, useEffect } from "react";
import './App.css'
import Layout from "./components/Layout";
import { Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home";

function App() {
  const [movies, setMovies] = useState()

  const getMoviesFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/movies');
      const data = await response.json();
      console.log(data);
  
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoviesFromAPI()
  })

  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Layout/>}>
        <Route path="/" element={<Home movies={movies}/>}></Route>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
