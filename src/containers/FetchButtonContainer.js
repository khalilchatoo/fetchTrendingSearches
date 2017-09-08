import { connect } from 'react-redux';
import FetchButton from '../components/FetchButton.js';
import { loadingHotTrends, updateHotTrends } from '../actions';

const mapStateToProps = (state) => {
  return { 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	loadingHotTrends: () => dispatch(loadingHotTrends()),
  	updateHotTrends: (data) => dispatch(updateHotTrends(data))
  }
}

const FetchButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchButton)

export default FetchButtonContainer