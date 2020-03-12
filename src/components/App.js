import React, { Component } from 'react';
import { connect } from 'react-redux';

// import logo from './logo.svg';
// import './App.css';

import { simpleAction } from '../actions/simpleAction'
import Header from '../components/header/Header'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/* <input type="button" onClick={this.simpleAction}/> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
