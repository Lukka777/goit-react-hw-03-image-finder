import React from "react";
class SearchBar extends React.Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button  className="button" onClick={this.props.onClick}>
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.props.value}
            onChange={this.props.onChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
