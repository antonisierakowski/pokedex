import React, { Component } from 'react';
import './App.scss';
import listOfAllPokemon from '../listOfPokemon'
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsSection from './ResultsSection';
import PokemonView from './PokemonView';
import Footer from './Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			isEmpty: true,
			isLoading: false,
			hits: [],
			displayDropdown: false,
			noResults: false,
			displayRandomPokemonInfo: false,
			randomPokemonData: [],
		};
		this.url = 'https://pokeapi.co/api/v2/pokemon/';
		this.matches = [];
		this.randomPokemon = '';
	}

	getSearchQuery = event => {
		this.setState({
			searchQuery: event.target.value,
		})
		// OBSŁUGA POKAZYWANIA AUTOCOMPLETE
		// if (event.target.value.length >= 2 && this.goThroughMainList(this.state.searchQuery).length > 0) {
		// 	this.setState({
		// 		displayDropdown: true,
		// 	})
		// } else {
		// 	this.setState({
		// 		displayDropdown: false,
		// 	})
		// }
	}

	goThroughMainList = query => {
		return listOfAllPokemon.filter(e => (e.indexOf(query.toLowerCase()) !== -1));
	}

	getSearchMatches = query => {
		if (query.length >= 1 && !isNaN(Number(query))) {
			if (Number(query) > 0 && Number(query) < listOfAllPokemon.length) {
				return [query];
			} else {
				return [];
			}
		} else if (query.length >= 1) {
			return this.goThroughMainList(query);
		} else {
			return [];
		}
	}

	fetchResults = (queryMatches) => {
		this.setState({
			isLoading: true,
		})
		let hits = [];
		Promise.all( queryMatches.map(nameOrId => {
			return fetch(this.url + nameOrId)
			.then(result => result.json())
			.then(result => {
				hits.push(result)

			})
		})
		).then( () => {
			this.setState({
				hits: hits,
				isLoading: false,
			})
			
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		this.matches = this.getSearchMatches(this.state.searchQuery);
		
		// WYSZUKANIE MATCHÓW Z FETCHA
		this.fetchResults(this.matches)


		// SPRAWDZENIE CZY NIE MA WYNIKÓW
		if (this.state.searchQuery.length > 0 && this.matches.length === 0) {
			this.setState({
				hits: [],
				noResults: true,
			})
		} else if (this.matches.length !== 0 || this.state.searchQuery.length === 0) {
			this.setState({
				noResults: false,
			})
		}
		
		// ZRESETOWANIE SEARCHBARA
		if (this.state.searchQuery === '') {
			this.matches.length = 0;
		}
		this.setState({
			isEmpty: (this.matches.length === 0),
			hits: [],
		})
	}

	handleGetRandom = event => {
		event.preventDefault();
		this.randomPokemon = [listOfAllPokemon[Math.floor(Math.random() * listOfAllPokemon.length -1)]]
		
		fetch(this.url + this.randomPokemon)
		.then(result => result.json())
		.then(result => {
			this.setState({
				randomPokemonData: result,
				displayRandomPokemonInfo: true,
			})
		})
	}

	handleCloseRandomPokemonInfo = () => {
		this.setState({
			displayRandomPokemonInfo: false,
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchBar 
					getSearchQuery={this.getSearchQuery}
					handleSubmit={this.handleSubmit}
					handleGetRandom={this.handleGetRandom}
					isEmpty={this.state.isEmpty}
					displayDropdown={this.state.displayDropdown} />
				<ResultsSection
					hits={this.state.hits}
					isLoading={this.state.isLoading} 
					noResults={this.state.noResults} />
				{this.state.displayRandomPokemonInfo && <PokemonView data={this.state.randomPokemonData} closeHandler={this.handleCloseRandomPokemonInfo}/>}
				<Footer />
			</div>
		);
	}
}

export default App;
