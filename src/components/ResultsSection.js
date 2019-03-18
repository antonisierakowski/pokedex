import React, { Component } from 'react';
import './ResultsSection.scss';
import Entry from './Entry.js';
import SortingSection from './SortingSection';
import NoResults from './NoResults';
import Loading from './Loading';
import PokemonView from './PokemonView';

export default class ResultsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorting: 'id',
            entryClicked: false,
            selectedPokemonData: [],
        }
    }    

    handleSorting = event => {
        this.setState({
            sorting: event.target.value,
        })
    }

    sortHits = data => {
        if (this.state.sorting === '') {
            return data;
        } else if (this.state.sorting === 'name') {
            return data.sort((a, b) => {
                if (a.name < b.name) return -1;
                else if (a.name > b.name) return 1;
                return 0;
            });
        } else if (this.state.sorting === 'id') {
            return data.sort((a, b) => a.id - b.id);
        } else if (this.state.sorting ==='type') {
            return data.sort((a, b) => {
                if (a.types[0].type.name < b.types[0].type.name) return -1;
                else if (a.types[0].type.name > b.types[0].type.name) return 1;
                return 0;
            });
        }
    }

    handleEntryClick = selectedData => {
        this.setState({
            entryClicked: true,
            selectedPokemonData: selectedData,
        })
    }

    handleEntryCloseClick = event => {
        if (event.target === event.currentTarget) {
            this.setState({
                entryClicked: false,
            })
        }
    }

    render() {
        let entries;
        if (this.props.hits.length > 0) {
            entries = this.sortHits(this.props.hits).map( e => {
                return (
                    <Entry
                        key={e.id}
                        data={e}
                        handleClick={this.handleEntryClick} />
                )
            })
        }

        return (
            <section className='results-section'>
                <div className='content'>
                    {this.props.isLoading && <Loading isInDetailedView={false}/>}
                    {(this.props.hits.length <= 1) ? 
                        null 
                        : 
                        <SortingSection 
                            handleSorting={this.handleSorting}
                            checked={this.state.sorting}
                            quantity={this.props.hits.length} />}
                    <ul className='entries'>
                        {(this.props.noResults) && <NoResults />}
                        {entries}
                    </ul>
                </div>
                {this.state.entryClicked
                    &&
                    <PokemonView
                        data={this.state.selectedPokemonData}
                        closeHandler={this.handleEntryCloseClick}
                    />
                }
            </section>
        )
    }
}
