import React, { Component } from 'react';
import './PokemonView.scss';
import InfoPokemonMainInfo from './InfoPokemonMainInfo'
import InfoPokemonTypes from './InfoPokemonTypes'
import InfoPokemonSize from './InfoPokemonSize'
import InfoPokemonStats from './InfoPokemonTypes'

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
                    {/* <span>{this.state.currentData.name}</span> */}
                    <InfoPokemonMainInfo />
                    <InfoPokemonTypes />
                    <InfoPokemonSize />
                    <InfoPokemonStats />
                </div>
            </div>
        )
    }
}
