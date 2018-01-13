import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../LoadingIndicator';

class ShowMoreButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onShowMore();
  }

  render() {
    const { isLoading, onShowMore, ...props } = this.props;
    return (
      isLoading ?
        <LoadingIndicator /> :
        <div onClick={this.onClick} { ...props }>Show more...</div>
    );
  }
}

ShowMoreButton.propTypes = {
  onShowMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default ShowMoreButton;
