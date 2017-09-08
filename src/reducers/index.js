const trendsReducer = (state = { trends: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_HOT_TRENDS':
            return {
                ...state,
                loading : true
            }
        case 'UPDATE_HOT_TRENDS':
            return {
                ...state,
                loading : false, 
                trends  : action.trends
            }
        default:
            return state
    }
}

export default trendsReducer