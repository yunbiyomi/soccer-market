export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(token, memberType) {
  return {
    type: LOGIN,
    payload: {
      token,
      memberType
    }
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}