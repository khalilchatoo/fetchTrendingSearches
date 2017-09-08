import { connect } from 'react-redux';
import App from '../components/App';
import { loadingHotTrends, updateHotTrends } from '../actions';

const mapStateToProps = (state) => {
  return {
  	loading: state.loading 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	loadingHotTrends: () => dispatch(loadingHotTrends()),
  	updateHotTrends: (data) => dispatch(updateHotTrends(data))
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer