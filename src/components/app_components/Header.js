import React, { Component } from 'react';
import logo from '../../images/logo.png';
import '../../styles/Header.css';


class Header extends Component {
  render() {
    return (<div>
      <nav  className="navbar Header-color">
  <div className="container-fluid text-center">

    <img src={logo} className="App-logo" alt="logo"/>
          <h3>Timer App</h3>

    </div>
</nav></div>);
  }
}

export default Header;
