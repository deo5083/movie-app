import React, { Component, Fragment } from 'react';
// import SearchBar from './SearchBar';
// import SearchButton from './SearchButton';
// import SearchResult from './SearchResult';
// import { searchSuggest } from '../../../utlis/apis'
// import { selectSearchResult } from '../../../actions/actions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
      isSearched: false,
      searchResult: null
    }
  }

  render() {
    return (
      <div >
          {this.props.selectedSearchResult && this.props.selectedSearchResult.label}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      selectedSearchResult: state.simpleReducer.result
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Body);



