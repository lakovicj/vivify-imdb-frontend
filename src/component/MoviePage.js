import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieById, reactOnMovie, incrementViews } from '../store/actions/MovieActions';
import { postNewWatchlistItem, removeWatchlistItem } from '../store/actions/WatchlistActions';
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

    handleAddToWatchlistClick = () => {
        this.props.postNewWatchlistItem({
            movie_id: this.props.movie.id
        })
    }

    renderWatchlistButton = () => {
        let items = this.props.watchlist.filter(it => it.movie_id === this.props.movie.id);

        return items.length !== 0 ?
            <button className="btn btn-outline-danger" onClick={() => this.props.removeWatchlistItem(items[0].id)}>Remove From Watchlist</button>
            :
            <button className="btn btn-outline-primary" onClick={() => this.handleAddToWatchlistClick()}>Add Movie To Watchlist</button>
    }

    renderWatchlistLabel = () => {
        let items = this.props.watchlist.filter(it => it.movie_id === this.props.movie.id);
        if (items.length) {
            return items[0].watched ?
                <small className="text-secondary">You've watched this!</small>
                :
                null;
        }
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
                    <hr />
                    <div>
                        {this.renderWatchlistButton()}
                        <br />
                        {this.renderWatchlistLabel()}
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
        watchlist: state.watchlist.items
    };
};

const mapDispatchToProps = {
    getMovieById,
    reactOnMovie,
    incrementViews,
    postNewWatchlistItem,
    removeWatchlistItem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);
