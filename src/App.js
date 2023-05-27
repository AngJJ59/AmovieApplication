import React, { useState, useEffect } from "react";
import api from './api/axiosConfig'
import Layout from "./components/Layout";
import { Routes, Route} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState()

  const getMoviesFromAPI = async () => {
    try {
    const response = await api.get('api/v1/movies')
    console.log(response.data)

    setMovies(response.data)


    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getMoviesFromAPI()
  })

  return (
    <div>
      <Routes>
        <Route path ='/' element={Layout} />
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
