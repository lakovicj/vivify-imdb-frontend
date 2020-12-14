import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies, getMoviesByPage, searchMovies } from '../store/actions/MovieActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from '../component/MovieList';
import Pagination from '../component/Pagination';
import SearchInput from '../component/SearchInput';

class Home extends Component {
  componentDidMount() {
    this.props.getMoviesByPage({ page: 1, perPage: 3 });
  }


  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">Welcome to Pocket IMDB</h2>
        </div>
        <SearchInput searchMovies={this.props.searchMovies} getMoviesByPage={this.props.getMoviesByPage}/>
        <MovieList movies={this.props.movies} />
        <Pagination totalMovies={this.props.totalMovies} getMoviesByPage={this.props.getMoviesByPage}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all,
    totalMovies: state.movie.totalMovies
  };
};

const mapDispatchToProps = {
  getMovies,
  getMoviesByPage,
  searchMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
