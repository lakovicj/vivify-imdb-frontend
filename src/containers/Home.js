import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from '../component/MovieList';

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }


  render() {
    return (
      <div>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        <MovieList movies={this.props.movies}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all
  };
};

const mapDispatchToProps = {
  getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
