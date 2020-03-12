import React, { Component } from 'react';
// import SearchBar from './SearchBar';
// import SearchButton from './SearchButton';
// import { searchSuggest } from '../../../utlis/apis'



class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //   searchTerm: null,
        //   isSearched: false,
        //   searchResult: null
        // }
    }

    generateListItem(label){
        return <li class="list-group-item list-group-item-action" style={{cursor: "pointer"}}>{label}</li>
    }


    render() {
        let {searchResult}=this.props;
        if(searchResult === undefined || searchResult === null) searchResult=[];

        var list = []
        searchResult.forEach(sr=>{
            list.push(this.generateListItem(sr.label))
        })

        return (

            <div style={{ width: "80%" }}>
                <ul class="list-group">
                    {list}
                </ul>
            </div>

        );
    }
}

export default SearchResult;



