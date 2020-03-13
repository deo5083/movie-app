import React from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { searchSuggest, searchOMDB } from '../../../utlis/apis'
import { selectSearchResult } from '../../../actions/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.THIS = this;
    this.state = {
      searchTerm: null,
      isSearched: false,
      searchResult: null,
      searchBarHasFocus: false,
      selectedResult: null
    }
  }

  searchClickHandler = () => {
    const { searchTerm } = this.state;
    if (searchTerm && searchTerm !== "") {
      const query = searchTerm.toLowerCase().replace(/\s+/g, '_');


      searchSuggest(query).then(res => {
        this.THIS.setState({
              isSearched: res.isSearched,
              searchResult: res.searchResult
        });
      });

    } else {
      this.setState({
        isSearched: true,
        searchResult: null
      })
    }
  }

  handleUserSelectedSearchResult = (selectedId) => {
    console.log("searchOMDB(selectedId)",searchOMDB(selectedId).then(res => {return res}) )

    // searchOMDB(selectedId).then(res => {
    //   console.log("res",res)

    //   this.THIS.setState({
    //       selectedResult: res
    //   });
    // });
    
  }

  handleSearchBarOnFocus = (val) => {
    this.setState({
      searchBarHasFocus: val
    })
  }

  searchInputChanged = (event) => {
    this.setState({ searchTerm: event })
  }

  render() {
    return (
      <div style={{ width: "40em", position: "relative" }}>
        <div className="input-group" style={{ width: "100%" }}>

          <SearchBar
            placeholder="Search movies, shows, etc"
            handleSearchInputChanged={this.searchInputChanged}
            handleButtonClick={this.searchClickHandler}
            handleSearchBarOnFocus={this.handleSearchBarOnFocus}
            searchTerm={this.state.searchTerm}

          />

        </div>

        <SearchResult
          searchResult={this.state.searchResult}

          selectedSearchResult={this.props.selectedSearchResult}
          searchTerm={this.state.searchTerm}
          searchBarHasFocus={this.state.searchBarHasFocus}

          handleSearchClick={this.props.selectSearchResult}
          handleSearchBarOnFocus={this.handleSearchBarOnFocus}
          searchInputChanged={this.searchInputChanged}
          handleUserSelectedSearchResult = {this.handleUserSelectedSearchResult}
        />
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    selectedSearchResult: state.simpleReducer.result
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectSearchResult: selectSearchResult
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);



