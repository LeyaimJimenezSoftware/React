import {
  FETCH_COINS_SUCCESS,
  FETCH_SINGLE_COIN_SUCCESS,
  FETCH_COINS_REQUEST
} from '../actions/actionTypes'

import { getNewState } from '../shared/utils/frontend'

const initialState = {
  result: [],
  fetching: false,
}

export default function coinsReducer(state = initialState, action)
{
  switch (action.type) {
    case FETCH_COINS_REQUEST: {
      return { ...state, fetching: true }
    }
    case FETCH_COINS_SUCCESS: {
      const { payload: result } = action

    return getNewState(state, { 
      result,
      fetching: false,
    })
  }
  default: 
    return state
  }
}