import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
//리듀서가 여러개일 때는 Redux의 내장함수인 combineReducers를
// 사용하여 리듀서를 하나로 합치는 작업을 합니다.
// 스토어를 만들 때는 루트 리듀서를 주입합니다.

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  movies: movieReducer,
});
