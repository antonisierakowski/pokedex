import React, { Component } from 'react';
import './PokemonView.scss';
import InfoPokemonMainInfo from './InfoPokemonMainInfo'
import InfoPokemonTypes from './InfoPokemonTypes'
import InfoPokemonSize from './InfoPokemonSize'
import InfoPokemonStats from './InfoPokemonTypes'
import InfoPokemonEvolutionChain from './InfoPokemonEvolutionChain'

export default class PokemonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: this.props.data,
            currentId: this.props.data.id,
        }
    }
    render() {

        return (
            <div className='pokemon-view-container'>
                <div className='close-button' onClick={this.props.closeHandler}>
                    <span className='cross-icon'>X</span>
                </div>
                <div className='pokemon-view-contents'>
                    <InfoPokemonMainInfo 
                        name={this.state.currentData.name}
                        id={this.state.currentData.id}
                        spriteUrl={this.state.currentData.sprites.front_default}/>
                    <InfoPokemonTypes types={this.state.currentData.types}/>
                    <InfoPokemonSize
                        weight={this.state.currentData.weight}
                        height={this.state.currentData.height}/>
                    <InfoPokemonStats baseExp={this.state.currentData.base_experience}
                        stats={this.state.currentData.stats}/>
                    <InfoPokemonEvolutionChain speciesUrl={this.state.currentData.species}/>
                </div>
            </div>
        )
    }
}
