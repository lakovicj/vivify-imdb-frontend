import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, reactOnMovie, watchlist, addItem, removeItem }) => {
  const sliceDescription = description => {
    return description.length > 100 ? description.slice(0, 150) + "..." : description;
  }

  const getMovieGenre = movie => {
    return movie.genre ? movie.genre.name : "no genre";
  }

  const getReactionCount = (type) => {
    const likes = movie.reactions.filter((reaction) => reaction.type === type);
    return likes.length;
  }

  const handleReactionClick = (type) => {
    reactOnMovie({
      movie_id: movie.id,
      type: type
    })
  }

  const handleAddToWatchlistClick = () => {
    addItem({
      movie_id: movie.id
    })
  }

  const renderWatchlistButton = () => {
    let items = watchlist.filter(it => it.movie_id === movie.id);

    return items.length !== 0 ?
      <button className="btn btn-outline-danger btn-block" onClick={() => removeItem(items[0].id)}>Remove From Watchlist</button>
      :
      <button className="btn btn-outline-primary btn-block" onClick={() => handleAddToWatchlistClick()}>Add Movie To Watchlist</button>
  }

  const renderWatchedLabel = () => {
    let items = watchlist.filter(it => it.movie_id === movie.id);
    if (items.length) {
      return items[0].watched ? 
      <small className="text-secondary">You've watched this!</small>
      :
      null;
    }

  }

  return (
      <div className="card mb-4">
        <Link to={`/movie/${movie.id}`}>
        <img className="card-img-top" src={movie.image_url} alt="...."/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{sliceDescription(movie.description)}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <button className="btn btn-outline-primary" onClick={() => handleReactionClick('like')}>Like</button>
            <span>{getReactionCount('like')}</span> 
            <br/>
            <button className="btn btn-outline-secondary" onClick={() => handleReactionClick('dislike')}>Dislike</button>
            <span>{getReactionCount('dislike')}</span>
          </li>
          <li className="list-group-item">
            {renderWatchlistButton()}
            {renderWatchedLabel()}
          </li>
          
          <li className="list-group-item">
            <small className="text-muted">{movie.view_count} views</small>
          </li>
        </ul>
        <div className="card-footer">
            <small className="text-muted">{getMovieGenre(movie)}</small>
        </div>
      </div>
    
  );
};

export default MovieCard;
