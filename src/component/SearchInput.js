import React, { Component } from 'react'
import { debounce } from 'lodash'

export class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            perPage: 3,
            page: 1
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.search = debounce(this.search, 750);
        this.getAllMovies = debounce(this.getAllMovies, 750);
        
    }
    
    search = (param) => {
        this.props.searchMovies({
            page: this.state.page,
            perPage: this.state.perPage,
            title: param
        })
    }

    getAllMovies = () => {
        this.props.getMoviesByPage({
            page: this.state.page,
            perPage: this.state.perPage
        });
    }
    

    handleOnChange(e) {     
        this.setState({
            searchInput: e.target.value
        });
        if (e.target.value === '') {
            this.getAllMovies();
        } else {
            this.search(e.target.value);
        }

    }

    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                    <div className="input-group">
                        <input 
                        className="input-group" 
                        type="text"
                        name="searchInput"
                        placeholder="Search..."
                        value={this.state.searchInput}
                        onChange={this.handleOnChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInput
