import { LOGIN, LOGOUT } from "./authActions";

const initialState = {
  isLogIn: false,
  token: null
}

const authReducer = ( state=initialState, action ) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLogIn: true,
        token: action.payload.token
      }
    case LOGOUT: 
      return {
        ...state,
        isLogIn: false,
        token: null
      }
    default:
      return state;
  }
}

export default authReducer