import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { reactOnMovie } from '../store/actions/MovieActions';
import { getUsersWatchlist, postNewWatchlistItem, removeWatchlistItem } from '../store/actions/WatchlistActions';

class MovieList extends Component {

    componentDidMount() {
        if (this.props.watchlist.length === 0) {
            this.props.getUsersWatchlist();
        }
    }

    movieCards = () => {
        return this.props.movies.map((m, i) =>
            <div key={m.id} className="col-md-4 d-flex">
                <MovieCard movie={m} 
                            reactOnMovie={this.props.reactOnMovie} 
                            watchlist={this.props.watchlist}
                            addItem={this.props.postNewWatchlistItem}
                            removeItem={this.props.removeWatchlistItem}/>
            </div>
        )
    }

    createLayout = () => {
        return (
            <div className="row">
                <div className="card-deck">
                    {this.movieCards()}
                </div>
            </div>
        )

    }

    render() {
        return (
            <div className="container">
                {this.createLayout()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        movies: state.movie.all,
        watchlist: state.watchlist.items
    };
};

const mapDispatchToProps = {
    reactOnMovie,
    getUsersWatchlist,
    postNewWatchlistItem,
    removeWatchlistItem
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
