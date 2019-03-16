import React, { Component } from 'react';
import './SearchBar.scss';
import './AutosuggestStyles.scss';
import listOfAllPokemon from '../listOfPokemon';
import Autosuggest from 'react-autosuggest';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : listOfAllPokemon.filter(e =>
        e.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
    <div>
        {suggestion}
    </div>
);

export default class SearchBar extends Component {
    constructor() {
        super();
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            suggestions: []
        };
    }

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });     
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { suggestions } = this.state;
        const value = this.props.searchQuery;
        const inputProps = {
            id: 'mainSearchBar',
            value,
            type: 'text',
            placeholder: 'find pokemon by name or id...',
            onChange: this.props.getSearchQuery,
            autoComplete: "off",
        }

        return (
            <section className={(this.props.searchBarDown === true) ? 'search-section' : 'search-section moved-up'}>
                <form className='search-bar' onSubmit={this.props.handleSubmit}>
                    <div className='search-bar-container'>
                        {/* <input id='mainSearchBar' type='text' placeholder='find pokemon by name or id...' onChange={this.props.getSearchQuery} autoComplete="off"/>
                        {(this.props.displayDropdown) ? <AutoComplete hits={this.props.autocompleteHits}/> : null} */}
                        <Autosuggest
                            inputProps={inputProps}
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            />
                    </div>
                    <div className='buttons'>
                        <input id='mainSubmitBtn' type='submit' value='go!' />
                        <button id='randomPoke' onClick={this.props.handleGetRandom}>find random</button>
                    </div>
                </form>
            </section>
        )
    }
}
