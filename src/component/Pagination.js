import React, { Component } from 'react';

export class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: 3
        }
    }

    getTotalPages() {
        return Math.ceil(this.props.totalMovies / this.state.perPage);
    }

    handlePageClick(page) {
        this.props.getMoviesByPage({ page: page, perPage: this.state.perPage });
        this.setState({ currentPage: page });
    }

    createPaginationItems() {
        let items = [];
        for (let i = 1; i <= this.getTotalPages(); i++) {
            items.push(
                <li key={i}
                    className={i === this.state.currentPage ? "page-item active" : "page-item"}
                    onClick={() => this.handlePageClick(i)}>
                    <span className="page-link">
                        {i}
                    </span>
                </li>
            )
        }
        return items;
    }

    render() {
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    {this.createPaginationItems()}
                </ul>
            </nav>
        )
    }
}


export default Pagination;
