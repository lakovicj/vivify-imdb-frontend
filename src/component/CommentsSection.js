import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { fetchMoreComments, postComment } from '../store/actions/MovieActions';

class CommentsSection extends Component {

    constructor() {
        super();
        this.state = {
            commentText: ''
        }
    }

    formatDateToStr = (strDate) => {
        const date = new Date(strDate);
        return `${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString()}`;
    }

    handleLoadMoreClick = () => {
        this.props.fetchMoreComments({
            id: this.props.movie.id,
            page: this.props.movie.currentPage + 1,
            perPage: this.props.movie.perPage
        })
    }

    handlePostClick = (e) => {
        e.preventDefault();
        this.props.postComment({
            movie_id: this.props.movie.id,
            text: this.state.commentText
        });
        this.setState({
            commentText: ''
        });
    }

    renderLoadMoreBtn = () => {
        const total = this.props.movie.totalComments;
        const currPage = this.props.movie.currentPage;
        const perPage = this.props.movie.perPage;

        if (currPage === Math.ceil(total/perPage)) {
            return false;
        }
        return true;
    }

    renderSubmitBtn = () => {
        return this.state.commentText;
    }

    renderComments = () => {
        return this.props.comments ? this.props.comments.map((comment) => {
            return (
                <div key={comment.id} className="media">
                    <div className="media-body">
                        <h4 className="media-heading">{comment.user.name}</h4>
                        <p>{comment.text}</p>
                        <ul className="list-unstyled list-inline media-detail pull-left">
                            <li>{this.formatDateToStr(comment.created_at)}</li>
                        </ul>
                    </div>
                </div>
            )
        }) : null;
    }

    render() {
        return (
            <div>
                <section className="content-item" id="comments">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-lg-10">
                                <form onSubmit={this.handlePostClick}>
                                    <h3 className="pull-left">New Comment</h3>
                                    <fieldset>
                                        <div className="row">
                                            <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                                                <textarea id="message" 
                                                            className="form-control" 
                                                            placeholder="Comment..."
                                                            value={this.state.commentText}
                                                            onChange={(e) => this.setState({commentText: e.target.value})} 
                                                            required
                                                ></textarea>
                                            </div>
                                        </div>
                                        {this.renderSubmitBtn() ? 
                                            <button type="submit" className="btn btn-outline-primary">Post</button>
                                            :
                                            null
                                        }
                                        
                                    </fieldset>
                                </form>
                                <h3>Comments</h3>
                                {this.renderComments()}
                                {this.renderLoadMoreBtn() ? 
                                    <button className="btn btn-outline-primary" onClick={this.handleLoadMoreClick}>More Comments</button>
                                    :
                                    null
                                }        
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie.selectedMovie,
        comments: state.movie.selectedMovie.comments
    };
};

const mapDispatchToProps = {
    fetchMoreComments,
    postComment
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsSection);
