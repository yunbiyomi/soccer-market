import { DECLARE, MINUS, PLUS, RESET } from "./totalPriceActions";

const initialState = {
  totalProductFee: 0,
  totalShippingFee: 0
}

const totalPriceReducers = ( state=initialState, action ) => {
  switch(action.type) {
    case PLUS:
      return {
        ...state,
        totalProductFee: state.totalProductFee + action.payload.productFee,
        totalShippingFee: state.totalShippingFee + action.payload.shippingFee
      }
    case MINUS:
      return {
        ...state,
        totalProductFee: state.totalProductFee - action.payload.productFee,
        totalShippingFee: state.totalShippingFee - action.payload.shippingFee
      }
    case DECLARE:
      return {
        ...state,
        totalProductFee: action.payload.productFee,
        totalShippingFee: action.payload.shippingFee
      }
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default totalPriceReducers