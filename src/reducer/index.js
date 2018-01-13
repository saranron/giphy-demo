import { initialState } from './constants';
import * as actions from '../action/constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case actions.RESET_GIFS:
      return {
        ...state,
        ...initialState,
      };
    case actions.UPDATE_GIFS:
      return {
        ...state,
        isLoading: false,
        gifs: state.gifs.length > 0 ?
          [ ...state.gifs, ...action.gifs ] :
          [ ...action.gifs ],
        pagination: { ...action.pagination },
      };
    case actions.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
