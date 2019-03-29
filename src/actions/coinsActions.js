import axios from 'axios'

import {
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_ERROR
} from './actionTypes'

import { request, received, error } from '../shared/redux/baseActions'

export const fetchCoins = () => dispatch => {
  dispatch(request(FETCH_COINS_REQUEST))

  // AXIOS DATA
  const axiosData = {
    method: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json'
    }
  }

  return axios(axiosData).then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
  .catch(err => {console.log('AXIOS ERROR:',err.response)
  dispatch(error(FETCH_COINS_ERROR))
  })
}