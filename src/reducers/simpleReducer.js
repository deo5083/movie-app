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
        result: action.payload
      }
    default:
      return state
  }
}
