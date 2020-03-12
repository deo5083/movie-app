import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        
      

        <button className="btn btn-primary" type="button" onClick={() => this.props.handleButtonClick()}>{this.props.buttonTitle}</button>



    );
  }
}

export default SearchBar;



