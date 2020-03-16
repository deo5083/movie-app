import React from 'react';
import SearchBar from './SearchBar';
import SearchResult from './searchResult/SearchResult';
import { searchSuggest, searchOMDB } from '../../../utlis/apis'
import { selectSearchResult, getSelectionDetails } from '../../../actions/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends React.Component {
  constructor(props) {
    super(props);

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
      const _this = this;
      searchSuggest(query).then(res => {
        _this.setState({
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
    searchOMDB(selectedId).then(res => {
      this.props.getSelectionDetails(res)
    })
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
      <div style={{ position: "relative", width: "40em" }}>
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
          handleUserSelectedSearchResult={this.handleUserSelectedSearchResult}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSearchResult: state.reducer.result
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectSearchResult: selectSearchResult,
    getSelectionDetails: getSelectionDetails
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);