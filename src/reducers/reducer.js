export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'SEARCH_RESULT':
      return {
        result: action.payload
      }
    case 'SELECTED_RESULT':
      return {
        ...state,
        selected_result: action.payload
      }
    case 'GET_DETAILS':
      return {
        ...state,
        selected_details: action.payload
      }
    default:
      return state
  }
}
