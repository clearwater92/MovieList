import movies from '../apis/movies';
import history from '../history';
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
    const { userId } = getState().auth;
    const response = await movies.post('/movies', { ...formValues, userId });
    dispatch({ type: CREATE_MOVIE, payload: response.data });
    history.push('/');
  };
};

export const fetchMovies = () => async (dispatch) => {
  const response = await movies.get('/movies');
  dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = (id) => {
  return async (dispatch) => {
    const response = await movies.get(`/movies/${id}`);
    dispatch({ type: FETCH_MOVIE, payload: response.data });
  };
};

export const editMovie = (id, formValues) => {
  return async (dispatch) => {
    const response = await movies.put(`/movies/${id}`, formValues);
    dispatch({ type: EDIT_MOVIE, payload: response.data });
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await movies.delete(`/movies/${id}`);
    dispatch({ type: DELETE_MOVIE, payload: id });
  };
};
