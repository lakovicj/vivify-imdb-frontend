import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieById, reactOnMovie } from '../store/actions/MovieActions';

class MoviePage extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieById(movieId);
    }

    getReactionCount = (type) => {
        const likes = this.props.movie.reactions.filter((reaction) => reaction.type === type);
        return likes.length;
    }

    handleReactionClick = (type) => {
        this.props.reactOnMovie({
            movie_id: this.props.movie.id,
            type: type
        })
    }

    render() {
        return (
            this.props.movie &&
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{this.props.movie.title}</h1>
                    <p>{this.props.movie.genre.name}</p>
                    <div>
                        <button className="btn btn-outline-primary" onClick={() => this.handleReactionClick('like')}>Like</button>
                        <span>{this.getReactionCount('like')}</span>
                        <br />
                        <button className="btn btn-outline-secondary" onClick={() => this.handleReactionClick('dislike')}>Dislike</button>
                        <span>{this.getReactionCount('dislike')}</span>
                    </div>
                </div>
                <div className="float-left">
                    <img src={this.props.movie.image_url} alt="..." />
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
    getMovieById,
    reactOnMovie,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);
