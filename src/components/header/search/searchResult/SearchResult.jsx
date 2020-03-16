import React from 'react';
import _ from 'lodash';
import ResultItem from './ResultItem'

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            showDropdown: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.result !== prevState.result || (this.props.searchBarHasFocus === false && prevProps.searchBarHasFocus === true) || (!_.isEqual(this.props.selectedSearchResult, prevProps.selectedSearchResult))) {
            this.toggleShowDropdown(false)
        } else if (this.props.searchTerm !== prevProps.searchTerm || (this.props.searchBarHasFocus === true && prevProps.searchBarHasFocus === false)) {
            this.toggleShowDropdown(true)
        }
    }

    toggleShowDropdown(val) {
        this.setState({
            showDropdown: val
        })
    }

    onSearchResultSelected = (result) => {
        this.setState({ result: result });
        this.props.handleSearchClick(result)
        this.props.handleSearchBarOnFocus(false)
        this.props.searchInputChanged(result.label);
        this.props.handleUserSelectedSearchResult(result.id);
    }

    generateListItem(result) {
        if (result.img === undefined) {
            result.img = "http://placehold.jp/24/cccccc/ffffff/40x50.png?text=N/A"
        }
        return (
            <li className="list-group-item list-group-item-action" key={result.id} style={{ cursor: "pointer" }} onClick={() => this.onSearchResultSelected(result)}>
                <ResultItem
                    result = {result}
                />
            </li>
        )
    }

    render() {
        let { searchResult } = this.props;

        if (searchResult === undefined || searchResult === null) searchResult = [];
        var list = [];
        searchResult.forEach(sr => {
            list.push(this.generateListItem({ 
                label: sr.label, 
                img: sr.img, 
                details: sr.details, 
                id: sr.id,
                type: sr.type,
                year: sr.year
            }));
        })
        return (
            <div style={{ width: "80%", maxHeight: "30em", overflow: "auto", position: "absolute", zIndex: "1000" }}>
                {this.state.showDropdown === true &&
                    <ul className="list-group">
                        {list}
                    </ul>
                }

            </div>
        );
    }
}

export default SearchResult;