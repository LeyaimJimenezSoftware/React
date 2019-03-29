import React, { Component } from 'react'
import { array } from 'prop-types'

// import { isFirstRender } from '../../shared/utils/frontend'

import './Coins.css'

class Coins extends Component {
  static propTypes = {
    coins: array
  }

  componentWillMount(){
    const { fetchCoins } = this.props
    fetchCoins()
  }

  render() {
    const { result, fetching } = this.props
    console.log({ result, fetching })
    // if (isFirstRender(result)) {
    //   return null
    // }
    return (
      <div className="Coins">
        <h1>Top 100 Coins</h1>
        {
          !fetching && result.length > 0 && (
            <ul>
              {result.map((coin, key) => (
                <li key={key}>
                  <span className="left">
                  {coin.rank} {coin.name} {coin.symbol}
                  </span>
                  <span className="right">${coin.price_usd}</span>
                </li>
              ))}
            </ul>
          )
        }
        {
          fetching && "Cargando..."
        }
      </div>
    )
  }
}

export default Coins