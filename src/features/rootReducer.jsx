import { combineReducers } from 'redux'
import authReducer from './user/authReducer'
import totalPriceReducers from './price/totalPriceReducers'

const rootReducer = combineReducers({
  auth: authReducer,
  price: totalPriceReducers
})

export default rootReducer