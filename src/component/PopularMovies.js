import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PopularMovies extends Component {

    renderMovieLinks = () => {
        return this.props.popularMovies ? this.props.popularMovies.map((movie, index) => {
            return <li key={movie.id}>{`${index + 1}. `}<Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
        }) : null;
    }

    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Popular Movies</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                {this.renderMovieLinks()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularMovies
