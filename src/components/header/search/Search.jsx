import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import SearchResult from './SearchResult';
import { searchSuggest } from '../../../utlis/apis'
import { selectSearchResult } from '../../../actions/actions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
      isSearched: false,
      searchResult: null
    }
  }

  searchClickHandler = () => {
    const { searchTerm } = this.state;
    if (searchTerm && searchTerm!=="") {

      var _this = this;
      searchSuggest(searchTerm.replace(/\s+/g, '_')).then(function (result) {

        let filteredResult = [];
        result && result.d && result.d.forEach(i => {
          if (!i.id.includes("/")) {
            filteredResult.push({ label: i.l, id: i.id, details: i.s, img: (i.i !==undefined && i.i.length > 0) ? i.i[0] : undefined })
          }
        });
        _this.setState({
          isSearched: true,
          searchResult: filteredResult
        })
      });
    }else{
      this.setState({
        isSearched: true,
        searchResult: null
      })
    }
  }

  searchInputChanged = (event) => {
    this.setState({ searchTerm: event })
  }

  render() {

    return (
      <div style={{ width: "40em" }}>
        <div className="input-group" style={{ width: "100%" }}>

          <SearchBar
            placeholder="Search movies, shows, etc"
            handleSearchInputChanged={this.searchInputChanged}
            handleButtonClick={this.searchClickHandler}

          />

          <div className="input-group-append">
            <SearchButton
              buttonTitle="Search"
              handleButtonClick={this.searchClickHandler}
            />
          </div>

        </div>

        <SearchResult
          searchResult={this.state.searchResult}
          handleSearchClick={this.props.selectSearchResult}
        />
      </div>
    );
  }
}



function mapStateToProps(state){
  return {
      selectedSearchResult: state.selectedSearchResult
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectSearchResult: selectSearchResult
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);



