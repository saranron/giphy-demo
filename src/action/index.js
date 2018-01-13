import * as actions from './constants';

const setLoading = (isLoading = true) => {
  return {
    type: actions.SET_LOADING,
    isLoading,
  };
};

const resetGifs = () => {
  return {
    type: actions.RESET_GIFS,
  }
};

const updateGifs = ({ data, pagination } = {}) => {
  return {
    type: actions.UPDATE_GIFS,
    gifs: data,
    pagination,
  };
};

export default {
  setLoading,
  resetGifs,
  updateGifs,
};
