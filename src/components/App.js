import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/header/Header'
import Body from './body/index'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Body />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSearchResult: state.reducer.result
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
