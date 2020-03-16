import React from 'react';
import { InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
    handleOnKeyUp = () => {
        this.props.handleSearchInputChanged(document.getElementById("searchInput").value)
        this.props.handleButtonClick()
    }

    render() {
        return (

            <InputGroup style={{ height: "auto", width: "80%" }} className="searchBarDiv">
                <input
                    className="form-control border-right-0"
                    type="text"
                    id="searchInput"
                    style={{ height: "38px", width: "80%" }}
                    placeholder={this.props.placeholder}
                    onChange={(input) => this.props.handleSearchInputChanged(input.target.value)}
                    onKeyUp={this.handleOnKeyUp}
                    autoComplete="off"
                    onFocus={() => this.props.handleSearchBarOnFocus(true)}
                    value={this.props.searchTerm ? this.props.searchTerm : ""}
                />
                <div className="input-group-append">
                    <span className="input-group-text bg-transparent"><img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="search"/></span>
                </div>
            </InputGroup>
        );
    }
}

export default SearchBar;



