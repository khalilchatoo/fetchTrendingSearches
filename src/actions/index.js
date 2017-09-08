export const loadingHotTrends = () => {
    return {
        type: 'LOADING_HOT_TRENDS'
    }
}

export const updateHotTrends = (trends) => {
    return {
        type: 'UPDATE_HOT_TRENDS',
        trends
    }
}