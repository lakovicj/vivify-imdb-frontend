import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieById, reactOnMovie, incrementViews } from '../store/actions/MovieActions';
import '../App.css';
import CommentsSection from './CommentsSection';

class MoviePage extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieById({
            id: movieId
        });
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
                    <small>{this.props.movie.genre.name}</small>
                    <hr />
                    <div className="reaction-btns-div">
                        <button className="btn btn-outline-primary reaction-btn" onClick={() => this.handleReactionClick('like')}>Like</button>
                        <span>{this.getReactionCount('like')} likes</span>
                        <br />
                        <button className="btn btn-outline-secondary reaction-btn" onClick={() => this.handleReactionClick('dislike')}>Dislike</button>
                        <span>{this.getReactionCount('dislike')} dislikes</span>
                    </div>
                    <div>
                        <small className="text-muted">{this.props.movie.view_count} views</small>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="img-div-movie-page">
                                        <img className="img-fluid" src={this.props.movie.image_url} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <p>{this.props.movie.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <CommentsSection />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-3"> 
                            {/* related movies ce ovde biti */}
                        </div>
                    </div>
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
    incrementViews
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);
