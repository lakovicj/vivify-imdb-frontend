import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { reactOnMovie } from '../store/actions/MovieActions';

class MovieList extends Component {

    movieCards = () => {
        return this.props.movies.map((m, i) =>
            <div key={m.id} className="col-md-4 d-flex">
                <MovieCard movie={m} reactOnMovie={this.props.reactOnMovie}/>
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
    };
};

const mapDispatchToProps = {
    reactOnMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
