import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies, getMoviesByPage, searchMovies, filterMovies, getPopularMovies } from '../store/actions/MovieActions';
import { getAllGenres } from '../store/actions/GenreActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../component/MovieList';
import Pagination from '../component/Pagination';
import SearchInput from '../component/SearchInput';
import { GenreFilter } from '../component/GenreFilter';
import PopularMovies from '../component/PopularMovies';

class Home extends Component {
  componentDidMount() {
    this.props.getMoviesByPage({ page: 1, perPage: 3 });
    this.props.getAllGenres();
    this.props.getPopularMovies();
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">Welcome to Pocket IMDB</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <MovieList movies={this.props.movies} />
              <Pagination totalMovies={this.props.totalMovies} getMoviesByPage={this.props.getMoviesByPage} />
            </div>
            <div className="col-lg-4">
              <SearchInput searchMovies={this.props.searchMovies} getMoviesByPage={this.props.getMoviesByPage} />
              <GenreFilter genres={this.props.genres} filterMovies={this.props.filterMovies} getAll={this.props.getMoviesByPage} />
              <PopularMovies popularMovies={this.props.popularMovies} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all,
    totalMovies: state.movie.totalMovies,
    genres: state.genre.all,
    popularMovies: state.movie.popularMovies
  };
};

const mapDispatchToProps = {
  getMovies,
  getMoviesByPage,
  searchMovies,
  getAllGenres,
  filterMovies,
  getPopularMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
