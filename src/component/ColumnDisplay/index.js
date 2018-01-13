import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Column } from './Column';

import { NUMBER_OF_COLUMNS } from './constants';
import { GifObjectShape } from '../../App.constants';
import './styles.css';

class ColumnDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.initializeColumns(),
    }
  }

  initializeColumns() {
    const initialColumns = [];
    for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
      initialColumns.push([]);
    }
    return initialColumns;
  }

  componentWillReceiveProps(nextProps) {
    const columns = this.spreadGifsAmongColums(nextProps.gifs);
    this.setState({ columns });
  }

  spreadGifsAmongColums(gifs) {
    const initialColumns = this.initializeColumns();
    return gifs.reduce((allColumns, gif, index) => {
      const columnsIndex = index % NUMBER_OF_COLUMNS;
      const column = allColumns[columnsIndex];
      column.push({ ...gif });
      return allColumns;
    }, initialColumns);
  }

  render() {
    return (
      <div className="column-display">
        {
          this.state.columns.map((column, index) => {
            return <Column key={`column${index}`} gifs={column} />
          })
        }
      </div>
    );
  }
}

ColumnDisplay.propTypes = {
  gifs: PropTypes.arrayOf(GifObjectShape),
};

export default ColumnDisplay;
