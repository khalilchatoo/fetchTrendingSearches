import { connect } from 'react-redux';
import HotTrendsList from '../components/HotTrendsList.js';

const mapStateToProps = (state) => {
  return {
    trends: state.trends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const HotTrendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotTrendsList)

export default HotTrendsListContainer