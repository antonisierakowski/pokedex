import React, { Component } from 'react';
import './App.scss';
import listOfAllPokemon from '../listOfPokemon'
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsSection from './ResultsSection';
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
		};
		this.url = 'https://pokeapi.co/api/v2/pokemon/';
		this.matches = [];
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
		//queryMatches.length = (queryMatches.length > 50) ? 50 : queryMatches.length;
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

	render() {
		return (
			<div className="App">
				<Header />
				<SearchBar 
					getSearchQuery={this.getSearchQuery}
					handleSubmit={this.handleSubmit}
					isEmpty={this.state.isEmpty}
					displayDropdown={this.state.displayDropdown} />
				<ResultsSection
					hits={this.state.hits}
					isLoading={this.state.isLoading} 
					noResults={this.state.noResults} />
				<Footer />
			</div>
		);
	}
}

export default App;
