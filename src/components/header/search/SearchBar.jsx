import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnKeyUp = () => {
        this.props.handleSearchInputChanged(document.getElementById("searchInput").value)
        this.props.handleButtonClick()
    }

    render() {
        return (
            <div style={{ height: "auto", width: "80%" }}>
                <input 
                    type="text" 
                    id="searchInput" 
                    style={{ height: "38px", width: "100%" }} 
                    placeholder={this.props.placeholder} 
                    onChange={(input) => this.props.handleSearchInputChanged(input.target.value)} 
                    onKeyUp={this.handleOnKeyUp} 
                    autoComplete="off"
                />
            </div>
        );
    }
}

export default SearchBar;



