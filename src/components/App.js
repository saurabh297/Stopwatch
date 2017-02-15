import React, { Component } from 'react';
import '../styles/App.css';
import Header from './app_components/Header';
import Footer from './app_components/Footer';
import Counter from './app_components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <Counter/>
        <Footer/>
      </div>
    );
  }
}

export default App;
