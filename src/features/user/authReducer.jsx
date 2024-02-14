import { LOGIN, LOGOUT } from "./authActions";

const initialState = {
  isLogIn: false,
  token: null,
  memberType: ''
}

const authReducer = ( state=initialState, action ) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLogIn: true,
        token: action.payload.token,
        memberType: action.payload.memberType
      }
    case LOGOUT: 
      return {
        ...state,
        isLogIn: false,
        token: null,
        memberType: ''
      }
    default:
      return state;
  }
}

export default authReducer