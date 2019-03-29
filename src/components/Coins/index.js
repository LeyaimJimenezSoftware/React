// Dependecias redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Component
import Coins from './Coins'
// Actions
import { fetchCoins } from '../../actions/coinsActions'
// Mapping our redux state to props
const mapStateToProps = store => {
  const result = store.coins.result
  return ({
    result,
    fetching: store.coins.fetching,
  })
}
// binding our fetchCoins action
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoins
 },
 dispatch
)

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Coins)