export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const search = (result) => dispatch => {
  dispatch({
    type: 'SEARCH_RESULT',
    payload: result
  })
}

export const selectSearchResult = (selected) => dispatch => {
  dispatch({
    type: 'SELECTED_RESULT',
    payload: selected
  })
}
