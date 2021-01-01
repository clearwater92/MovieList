import _ from 'lodash';
import {
  FETCH_MOVIE,
  FETCH_MOVIES,
  CREATE_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
		case FETCH_MOVIES:
			return { ...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_MOVIE:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_MOVIE:
      console.log('reducer')
			return { ...state, [action.payload.id]: action.payload};
    case EDIT_MOVIE:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_MOVIE:
			return _.omit(state, action.payload);
		default:
			return state;
  }
};
