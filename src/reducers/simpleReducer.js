import {searchOMDB} from './../utlis/apis'

export default (state = {}, action) => {
  // debugger
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

      // this.omdb = null;
      // const _this = this;
      // searchOMDB(action.payload.id).then(res => {
      //   _this.omdb = res;
      // });
      // console.log("this",this.omdb)
      
      

      return {
        result: action.payload
      }
    default:
      return state
  }
}
