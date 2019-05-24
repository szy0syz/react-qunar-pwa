import React from 'react';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  return <span>App</span>
}

export default connect(
  function mapStateToProps(state) {
      return {};
  },
  function mapDispatchToProps(dispatch) {
      return {};
  }
)(App);