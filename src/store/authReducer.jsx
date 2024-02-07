import { LOGIN } from "./authActions";

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
    default:
      return state;
  }
}

export default authReducer