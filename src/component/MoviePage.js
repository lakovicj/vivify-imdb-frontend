import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieById } from '../store/actions/MovieActions';

export class MoviePage extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieById(movieId);
    }

    render() {
        return (
            this.props.movie && 
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{this.props.movie.title}</h1>
                    <p>{this.props.movie.genre.name}</p>
                    <div>
                        {/* likes/dislikes  */}
                    </div>
                </div>
                <div className="float-left">
                    <img src={this.props.movie.image_url} alt="..."/>
                </div>
                <div>
                    <p>{this.props.movie.description}</p>
                </div>
                <div>
                    {/* comments section */}
                </div>
                <div>
                    {/* related movies component  */}
                </div>
                    
                

            </div>
 
        )
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie.selectedMovie,
    };
};

const mapDispatchToProps = {
    getMovieById
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);
