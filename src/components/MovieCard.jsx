import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Title}</p>
            </div>

            <div>
                <img src={movie.Poster} alt="Movie Poster" />
            </div>
            <div>
                <span>{movie.Type} | {movie.Year}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;