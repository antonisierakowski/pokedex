import React, { Component } from 'react';
import './InfoPokemonDescription.scss';

export default class InfoPokemonDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
        }
        this.englishIndex = null;
    }

    fetchSpeciesData = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            let i = 0;
            while (this.englishIndex === null) {
                this.englishIndex = (response.flavor_text_entries[i].language.name === 'en') ? i : null;
                i++;
            }
            this.setState({
                description: response.flavor_text_entries[this.englishIndex].flavor_text,
            })
        })
    }

    componentDidMount() {
        this.fetchSpeciesData(this.props.speciesUrl);
    }

    render() {
        return (
            <div className='pokemon-description'>
                <span>{this.state.description}</span>
            </div>
        )
    }
}
