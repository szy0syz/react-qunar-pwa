import React from 'react';
import { connect } from 'react-redux';

import Nav from '../common/Nav.jsx';
import List from './List.jsx';
import Bottom from './Bottom.jsx';

import './App.css';

function App(props) {
  return (
    <div>
      <Nav />
      <List />
      <Bottom />
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);