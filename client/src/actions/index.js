import { SIGN_IN, SIGN_OUT } from './types';
// 액션 생성함수
// 액션을 만드는 함수입니다. 단순히 파라미터를 받아와서
// 액션 객체 형태로 만들어 줍니다.
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
