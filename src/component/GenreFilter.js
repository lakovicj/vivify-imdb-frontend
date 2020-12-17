import React, { Component } from 'react';

export class GenreFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGenre: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e) {
        this.setState({
            selectedGenre: e.target.value
        })

        if (e.target.value === "0") {
            this.props.getAll({
                page: 1,
                perPage: 3
            });
        } else {
            this.props.filterMovies({
                filter: e.target.value,
                page: 1,
                perPage: 3
            });
        }


    }

    renderGenres = () => {
        let options;
        if (this.props.genres) {
            options = this.props.genres.map((genre) => {
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })
        }
        options.unshift(<option key="0" value="0" defaultValue="0">ALL</option>)
        return options;
    }

    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Filter</h5>
                <div className="card-body">
                    <div className="input-group">
                        <select onChange={this.handleChange} value={this.state.selectedGenre}>
                            {this.renderGenres()}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenreFilter;
