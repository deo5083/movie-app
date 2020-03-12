/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      console.log("simple action")
      return {
        result: action.payload
      }
    default:
      return state
  }
}
