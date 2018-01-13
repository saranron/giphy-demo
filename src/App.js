import React, { Component } from 'react';

import SearchBar from './component/SearchBar';
import { getTrendingGifs, searchGifs } from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    getTrendingGifs()
      .then((data) => { console.log(data); })
      .catch((error) => {
        console.error(error);
      });
  }

  onSearch(searchQuery) {
    if (searchQuery) {
      searchGifs(searchQuery)
        .then((data) => { console.log(data); })
        .catch((error) => {
          console.error(error);
        });
    } else {
      getTrendingGifs()
        .then((data) => { console.log(data); })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <SearchBar onSearch={this.onSearch} />
        </div>
        <div className="app-body">

        </div>
      </div>
    );
  }
}

export default App;
