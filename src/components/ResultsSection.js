import React, { Component } from 'react';
import './ResultsSection.scss';
import Entry from './Entry.js';
import SortingSection from './SortingSection';
import NoResults from './NoResults';

export default class ResultsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorting: 'id',
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
        }
    }

    render() {
        let entries = '';
        if (this.props.hits.length !== 0) {
            entries = this.sortHits(this.props.hits).map(e => <Entry key={e.id} data={e} />)
        }
        
        return (
            <section className='results-section'>
                <div className='content'>
                    {(this.props.hits.length <= 1) ? null : <SortingSection handleSorting={this.handleSorting} checked={this.state.sorting}/>}
                    <ul className='entries'>
                        {(this.props.noResults) ? <NoResults /> : null }
                        {entries}
                    </ul>
                    
                </div>
            </section>
        )
    }
}
