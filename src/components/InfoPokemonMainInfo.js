import React, { Component } from 'react';
import './InfoPokemonMainInfo.scss';
import BrowsePokemonArrow from './BrowsePokemonArrow';
import typeIcons from '../typeIcons'

export default class InfoPokemonMainInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genus: ''
        }
    }

    fetchSpeciesData = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                genus: response.genera[2].genus,
            })
        })
    }

    componentDidMount() {
        this.fetchSpeciesData(this.props.speciesUrl);
    }

    render() {
        const spriteBackground = {
            background: `url(${this.props.spriteUrl}) no-repeat center center`,
            backgroundSize: 'contain',
        }
        const currentTypes = this.props.types;
        const types = (currentTypes.length === 1) ? (
            <div className='type-list'>
                <span className='type-item'>
                    <img src={typeIcons[currentTypes[0].type.name]} className='type-icon' alt='type-icon1'/>&nbsp;{currentTypes[0].type.name.toUpperCase()}
                </span>
            </div>
        ) : (
            <div className='type-list background-opacity'>
                <span className='type-item'>
                    <img src={typeIcons[currentTypes[0].type.name]} className='type-icon' alt='type-icon1'/>&nbsp;{currentTypes[0].type.name.toUpperCase()}
                </span>
                <span className='type-item'>
                    <img src={typeIcons[currentTypes[1].type.name]} className='type-icon' alt='type-icon2'/>&nbsp;{currentTypes[1].type.name.toUpperCase()}
                </span>
            </div>
        );
    
        return (
            <div className='pokemon-main-info' style={spriteBackground}>
                <div className='name background-opacity'>
                    <span>{this.props.name.toUpperCase()}</span>
                    <span className='genus'>{this.state.genus}</span>
                </div>
                <div className='arrows'>
                    <BrowsePokemonArrow dir='left' browseHandler={this.props.browseHandler}/><BrowsePokemonArrow dir='right' browseHandler={this.props.browseHandler}/>
                </div>
                <div className='type-and-id'>
                    
                {types}

                    <span className='pokemon-id'>#{this.props.id}</span>
                </div>
            </div>
        )
    }
}
