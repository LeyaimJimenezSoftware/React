import { combineReducers } from 'redux'
import coins from '../../reducers/coinsReducer'
import device from './deviseReducer'

const rootReducer = combineReducers({
  coins,
  device
})

export default rootReducer