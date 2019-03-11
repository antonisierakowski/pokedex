import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsSection from './ResultsSection';
import Footer from './Footer';

// dla juli 337 660 88

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      isEmpty: true,
      listOfPokemon: [],
    };
    this.listUrl='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964'
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getSearchQuery = event => {
    this.setState({
      searchQuery: event.target.value,
      isEmpty: (event.target.value === '') ? true : false,
    })
  }

  componentDidMount() { // UTWORZENIE LISTY WSZYSTKICH NAZW POKEMONÓW
    fetch(this.listUrl)
    .then(response => response.json())
    .then(response => {
      this.listOfPokemon = [];
      response.results.forEach(e => this.listOfPokemon.push(e.name))
      this.setState({
        listOfPokemon: this.listOfPokemon,
      })
    })
  }

  componentDidUpdate() {
    this.matches = [];
    if(this.state.searchQuery !== '') {
      this.matches = this.state.listOfPokemon.filter(e => (e.indexOf(this.state.searchQuery) !== -1))
    }

    console.log(this.matches)
    // fetch(this.url + this.state.searchQuery)
    // .then(response => response.json())
    // .then(response => {
    //   console.log(response)
    // })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar getSearchQuery={this.getSearchQuery} isEmpty={this.state.isEmpty}/>
        <ResultsSection />
        <Footer />
      </div>
    );
  }
}

export default App;
