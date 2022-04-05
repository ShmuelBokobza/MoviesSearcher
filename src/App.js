import { useEffect, useState } from "react";

import './App.css';
import MovieCard from "./components/MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=fd4272f';

const App = () => {
  
  const [searchInput, setSearchInput] = useState([]);
  const [movie, setMovie] = useState([]);

  const searchMovies = async(title) => {
    const response  = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovie(data.Search);
  }

useEffect(() => {
  searchMovies('avatar')
}, []);

  return (
    <div className="App">
      <h1>MovieSearch</h1>
      <div className="search">
        <button onClick={ () => searchMovies(searchInput) }>Search</button>
        <input 
          type="text" 
          placeholder="Search for movies" 
          value={searchInput} 
          onChange={ (e) => (setSearchInput(e.target.value))  } />
      </div>
      
        {
          movie?.length > 0 
          ? (
            <div className="container">{movie.map( (movie) => <MovieCard movie={movie}/>)} </div>) 
          : (
          <div className="empty"><h2>No movies found</h2></div>)
        }

    </div>
  );
}

export default App;
