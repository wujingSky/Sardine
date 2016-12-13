import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
    <div>
      <Header /> 
       {this.props.children}
    </div>
    );
  }
}
