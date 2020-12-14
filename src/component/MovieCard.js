import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = ({ movie }) => {
  console.log(movie);
  const sliceDescription = description => {
    return description.length > 100 ? description.slice(0, 150) + "..." : description;
  }

  const getMovieGenre = movie => {
    return movie.genre ? movie.genre.name : "no genre";
  }

  return (
      <div className="card mb-4">
        <img className="card-img-top" src={movie.image_url} alt="...."/>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{sliceDescription(movie.description)}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">{getMovieGenre(movie)}</small>
        </div>
      </div>
    
  );
};

export default MovieCard;
