import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBar from './component/SearchBar';
import ColumnDisplay from './component/ColumnDisplay';
import { getTrendingGifs, searchGifs } from './api';
import actions from './action';
import { GifObjectShape } from './App.constants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    getTrendingGifs()
      .then((data) => { this.props.updateGifs(data) })
      .catch((error) => {
        console.error(error);
      });
  }

  onSearch(searchQuery) {
    if (searchQuery) {
      searchGifs(searchQuery);
    } else {
      getTrendingGifs();
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <SearchBar onSearch={this.onSearch} />
        </div>
        <div className="app-body">
          <ColumnDisplay gifs={this.props.gifs} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  gifs: PropTypes.arrayOf(GifObjectShape),
  offset: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  updateGifs: PropTypes.func.isRequired,
}

const maptStateToProps = (state, ownProps) => {
  return {
    offset: state.pagination.offset,
    gifs: state.gifs,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (isLoading) => { dispatch(actions.setLoading(isLoading)); },
    updateGifs: (data) => { dispatch(actions.updateGifs(data)); },
  };
};

export default connect(maptStateToProps, mapDispatchToProps)(App);
