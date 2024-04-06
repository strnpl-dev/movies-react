import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Enter movie name"
            id="email_inline"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(evt) => this.setState({ search: evt.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
          <form className="category-form" action="#">
            <p>
              <label>
                <input
                  name="group1"
                  type="radio"
                  data-type="all"
                  defaultChecked
                  value={this.state.category}
                  onClick={this.handleFilter}
                />
                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="group1"
                  type="radio"
                  data-type="movie"
                  value={this.state.category}
                  onClick={this.handleFilter}
                />
                <span>Movies only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="group1"
                  type="radio"
                  data-type="series"
                  value={this.state.category}
                  onClick={this.handleFilter}
                />
                <span>Series only</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export { Search };
