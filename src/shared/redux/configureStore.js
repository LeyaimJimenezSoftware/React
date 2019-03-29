
// Dependencies
import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// Root Reducer
import rootReducer from '../reducers'

export default function configureStore(initialState){
  const midddleware = [
    thunk
  ]

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...midddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}