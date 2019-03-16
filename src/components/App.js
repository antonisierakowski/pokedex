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
			searchBarDown: true,
			isLoading: false,
			hits: [],
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
		
		this.setState({
			hits: [],
		})
		this.matches = this.getSearchMatches(this.state.searchQuery);
		
		// WYSZUKANIE MATCHÓW Z FETCHA
		this.fetchResults(this.matches)


		if (this.matches.length > 0) { // DUŻO WYNIKÓW
			this.setState({
				hits: [],
				noResults: false,
				searchBarDown: false,
			})
		} else if (this.state.searchQuery.length > 0 && this.matches.length === 0) { // SPRAWDZENIE CZY NIE MA WYNIKÓW
			this.setState({
				hits: [],
				noResults: true,
				searchBarDown: false,
			})
		} else if (this.state.searchQuery.length === 0 || this.matches.length > 1) { // POWRÓT SEARCHBARA JEŚLI SĄ WYNIKI LUB ZRESTETOWANIE
			this.setState({
				noResults: false,
				searchBarDown: false,
			})
		}
		if (this.state.searchQuery.length === 0) { // ZRESETOWANIE SEARCHBARA
			this.matches.length = 0;
			this.setState({
				searchBarDown: true,
			})
		}
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

	handleCloseRandomPokemonInfo = event => {
		if (event.target === event.currentTarget) {
			this.setState({
				displayRandomPokemonInfo: false,
			})
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchBar 
					getSearchQuery={this.getSearchQuery}
					handleSubmit={this.handleSubmit}
					handleGetRandom={this.handleGetRandom}
					searchBarDown={this.state.searchBarDown}
					autocompleteHits={this.autocompleteHits} 
					searchQuery={this.state.searchQuery}/>
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
