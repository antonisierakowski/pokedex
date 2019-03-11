import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        {/* <MainSection /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
