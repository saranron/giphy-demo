import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBar from './component/SearchBar';
import ColumnDisplay from './component/ColumnDisplay';
import ShowMoreButton from './component/ShowMoreButton';
import { getTrendingGifs, searchGifs } from './api';
import actions from './action';
import { GifObjectShape, PAGE_LIMIT } from './App.constants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      isSearching: false,
    };

    this.onSearch = this.onSearch.bind(this);
    this.onShowMore = this.onShowMore.bind(this);
  }

  componentDidMount() {
    this.fetchGifs();
  }

  onSearch(searchQuery) {
    const isSearching = Boolean(searchQuery);

    this.setState({ isSearching, searchQuery });
    this.props.resetGifs();

    this.fetchGifs(searchQuery, isSearching);
  }

  onShowMore() {
    this.fetchGifs(this.state.searchQuery, this.state.isSearching, false);
  }

  fetchGifs(searchQuery, isSearching = false, resetGifs = true) {
    if (this.props.isLoading) {
      return;
    }

    const offset = !resetGifs ? this.props.offset + PAGE_LIMIT : 0;

    this.props.setLoading();
    const fetchPromise = isSearching ?
      searchGifs(searchQuery, offset, PAGE_LIMIT) :
      getTrendingGifs(offset, PAGE_LIMIT);

    fetchPromise
      .then((data) => { this.props.updateGifs(data) })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <SearchBar onSearch={this.onSearch} />
        </div>
        <div className="app-body">
          {
            this.state.isSearching ?
            <div className="app-body__query-title">
              <div className="app-body__query">
                { this.state.searchQuery }
              </div>
              <div className="app-body__count">
                {`${this.props.total_count} GIFs`}
              </div>
            </div> :
            <div className="app-body__trending-title">TRENDING NOW</div>
          }
          <ColumnDisplay gifs={this.props.gifs} />
        </div>
        <div className="app-footer">
          {
            !this.props.isLoading && this.props.gifs.length === 0 ?
              <div>Nothing here</div>:
              <ShowMoreButton
                className="app-footer__button"
                onShowMore={this.onShowMore}
                isLoading={this.props.isLoading}
              />
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  gifs: PropTypes.arrayOf(GifObjectShape),
  offset: PropTypes.number,
  total_count: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  resetGifs: PropTypes.func.isRequired,
  updateGifs: PropTypes.func.isRequired,
}

const maptStateToProps = (state, ownProps) => {
  return {
    gifs: state.gifs,
    offset: state.pagination.offset,
    total_count: state.pagination.total_count,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (isLoading) => { dispatch(actions.setLoading(isLoading)); },
    resetGifs: () => { dispatch(actions.resetGifs()); },
    updateGifs: (data) => { dispatch(actions.updateGifs(data)); },
  };
};

export default connect(maptStateToProps, mapDispatchToProps)(App);
