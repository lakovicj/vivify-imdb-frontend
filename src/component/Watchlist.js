import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersWatchlist, postNewWatchlistItem, removeWatchlistItem, editWatchlistItem } from '../store/actions/WatchlistActions';
import WatchlistItem from './WatchlistItem';

class Watchlist extends Component {

    componentDidMount() {
        this.props.getUsersWatchlist();
    }

    renderWatchlistItems = () => {
        return this.props.watchlist.map(item => 
            <div key={item.id} className="col-md-4 d-flex">
                <WatchlistItem watchlistItem={item} 
                                editItem={this.props.editWatchlistItem}
                                removeItem={this.props.removeWatchlistItem}/>
            </div>
        )
    }

    createLayout = () => {
        return (
            <div className="row">
                <div className="card-deck">
                    {this.renderWatchlistItems()}
                </div>
            </div>
        )

    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Watchlist</h1>
                    <hr />
                </div>
                <div className="container">
                    {this.createLayout()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist.items
    };
};

const mapDispatchToprops = {
    getUsersWatchlist,
    postNewWatchlistItem,
    removeWatchlistItem,
    editWatchlistItem
}

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(Watchlist);
