import React from "react";

class Search extends React.Component{
    state = {
        search: '',
        type: "all"
    }

    handleOnChangeSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleKey = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return(
            <div className="input-field col s6">
                <input
                    placeholder="Search"
                    type="search"
                    className="search"
                    value={this.state.search}
                    onChange={this.handleOnChangeSearch}
                    onKeyDown={this.handleKey}
                />
                <button
                    className='btn search-btn'
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                >Search</button>
                <div className='radio-button'>
                    <label>
                        <input name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
                        <span>All</span>
                    </label>
                    <label>
                        <input name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                        <span>Series</span>
                    </label>
                </div>
            </div>

        );
    }
}

export {Search}