import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header.jsx';
import HighSpeed from './HighSpeed.jsx';
import DepartDate from './DepartDate';
import Journey from './Journey.jsx'
import Submit from './Submit.jsx';

// 注意：这里有自组装件的重渲染问题，必须使用useCallback包裹起来，这样不会在子组件里重复渲染

function App(props) {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
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