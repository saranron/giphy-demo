import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({
      queryString: event.target.value,
    });
  }

  onClick() {
    this.props.onSearch(this.state.queryString.trim());
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-bar__input" type="text" onChange={this.onChange} value={this.state.queryString} />
        <input className="search-bar__button" type="button" onClick={this.onClick} value="Search" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
