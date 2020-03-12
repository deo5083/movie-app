import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import SearchResult from './SearchResult';
import { searchSuggest } from '../../../utlis/apis'

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
    const { searchTerm, isSearched } = this.state;
    if (searchTerm && searchTerm!=="") {

      var _this = this;
      searchSuggest(searchTerm.replace(/\s+/g, '_')).then(function (result) {

        let filteredResult = [];
        let count = 0;
        
        result && result.d && result.d.forEach(i => {
          if (!i.id.includes("/")) {
            filteredResult.push({ label: i.l, id: i.id, movies: i.s })
            count++;
          }

        })
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
        />
      </div>
    );
  }
}

export default Search;



