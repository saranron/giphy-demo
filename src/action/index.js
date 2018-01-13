import * as actions from './constants';

const setLoading = (isLoading = true) => {
  return {
    type: actions.SET_LOADING,
    isLoading,
  };
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
  updateGifs,
};
