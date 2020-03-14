export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const selectSearchResult = (selected) => dispatch => {
  dispatch({
    type: 'SELECTED_RESULT',
    payload: selected
  })
}

export const getSelectionDetails = (details) => dispatch => {
  dispatch({
    type: 'GET_DETAILS',
    payload: details
  })
}
