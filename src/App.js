import React, { Component } from 'react';

import SearchBar from './component/SearchBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(searchQuery) {
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
