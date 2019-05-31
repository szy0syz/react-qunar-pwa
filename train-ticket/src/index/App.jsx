import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header.jsx';
import HighSpeed from './HighSpeed.jsx';
import DepartDate from './DepartDate';
import Journey from './Journey.jsx'
import Submit from './Submit.jsx';

function App(props) {
  return (
    <div>
      <Header></Header>
      <Journey></Journey>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
      return {};
  },
  function mapDispatchToProps(dispatch) {
      return {};
  }
)(App);