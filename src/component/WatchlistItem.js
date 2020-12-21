import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistItem = ({ watchlistItem, editItem, removeItem }) => {

    const sliceDescription = description => {
        return description.length > 100 ? description.slice(0, 150) + "..." : description;
    }

    const handleWatchedClick = (watched) => {
       
        editItem({
            itemId: watchlistItem.id,
            watched: watched
         })
    }


    const renderWatchedLabel = () => {
        return watchlistItem.watched ?
            <small className="text-secondary">You've watched this!</small>
            :
            <small className="text-secondary">You haven't watched this!</small>
    }

    const renderWatchedButton = () => {
        return watchlistItem.watched ?
            <button className="btn btn-outline-danger btn-block" onClick={() => handleWatchedClick(false)}>Unwatch</button>
            :
            <button className="btn btn-outline-primary btn-block" onClick={() => handleWatchedClick(true)}>Watched!</button>
    }

    return (
        <div className="card mb-4">
            <Link to={`/movie/${watchlistItem.movie.id}`}>
                <img className="card-img-top" src={watchlistItem.movie.image_url} alt="...." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{watchlistItem.movie.title}</h5>
                <p className="card-text">{sliceDescription(watchlistItem.movie.description)}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <button className="btn btn-outline-danger btn-block" onClick={() => removeItem(watchlistItem.id)}>Remove From Watchlist</button>
                </li>
                <li className="list-group-item">
                    <small className="text-muted">{watchlistItem.movie.view_count} views</small>
                </li>
                <li className="list-group-item">
                    {renderWatchedButton()}
                </li>
            </ul>
            <div className="card-footer">
                {renderWatchedLabel()}
            </div>
        </div>

    );
}

export default WatchlistItem
