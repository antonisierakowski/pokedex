import React, { Component } from 'react';
import './App.scss';
import listOfAllPokemon from '../listOfPokemon'
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
			isLoading: false,
			hits: [],
		};
		this.url = 'https://pokeapi.co/api/v2/pokemon/';
		this.matches = [];
		this.hits = [];
	}

	getSearchQuery = event => {
		this.setState({
			searchQuery: event.target.value,
		})
	}

	handleSubmit = event => {
		this.hits = [];
		// this.setState({
		// 	isLoading: true,
		// })
		// WYSZUKANIE MATCHÓW Z TABLICY
		event.preventDefault();
		this.matches = [];
		if (this.state.searchQuery.length >= 2) {
			this.matches = listOfAllPokemon.filter(e => (e.indexOf(this.state.searchQuery.toLowerCase()) !== -1))
		}

		// WYSZUKANIE MATCHÓW Z FETCHA
		
		if (this.matches.length >= 50) {
            this.matches.length = 50;
        }
        this.matches.forEach(e => {
            fetch(this.url + e)
            .then(result => result.json())
            .then(result => {
                this.hits.push(result)
                this.setState({
					hits: this.hits,
				})
				
			})
			.catch(error => {
				console.log(error)
			})
			// this.setState({
			// 	isLoading: false,
			// })
		})
		
		// ZRESETOWANIE SEARCHBARA
		if (this.state.searchQuery === '') {
			this.matches.length = 0;
		}
		this.setState({
			isEmpty: (this.matches.length > 0) ? false : true,
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchBar getSearchQuery={this.getSearchQuery} handleSubmit={this.handleSubmit} isEmpty={this.state.isEmpty}/>
				<ResultsSection hits={this.hits} isLoading={this.state.isLoading}/>
				<Footer />
			</div>
		);
	}
}

export default App;
