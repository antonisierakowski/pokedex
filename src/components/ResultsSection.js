import React, { Component } from 'react';
import './ResultsSection.scss';
import Entry from './Entry.js';

export default class ResultsSection extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        let entries = '';
        if (this.props.hits.length !== 0) {
            entries = this.props.hits.map(e => <Entry key={e.id} data={e} />)
            //console.log(this.props.hits)
        }
        
        return (
            <section className='results-section'>
                <div className={this.props.isLoading === false ? 'content' : 'content loading'}>
                    <ul className='entries'>
                        {entries}
                    </ul>
                </div>
            </section>
        )
    }
}
