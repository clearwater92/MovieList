import movies from '../apis/movies';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
} from './types';
// 액션 생성함수
// 액션을 만드는 함수입니다. 단순히 파라미터를 받아와서
// 액션 객체 형태로 만들어 줍니다.
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const createMovie = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await movies.post('/movies', formValues);
//   dispatch({ type: CREATE_MOVIE, payload: response.data });
// };

export const createMovie = (formValues) => {
  return async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await movies.post('/movies', { ...formValues, userId });
    dispatch({ type: CREATE_MOVIE, payload: response.data })
  };
};

export const fetchMovies = () => async (dispatch) => {
  const response = await movies.get('/movies');
  dispatch({ type: FETCH_MOVIES, payload: response.data });
};
