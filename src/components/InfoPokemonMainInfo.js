import React, { Component } from 'react';
import './InfoPokemonMainInfo.scss';

export default class InfoPokemonMainInfo extends Component {
    render() {
        return (
            <div className='pokemon-main-info'>
                <div className='sprite-container'><img src={this.props.spriteUrl} alt='current-pokemon-sprite' /></div>
                <div className='name-id'>
                    <span>{this.props.name.toUpperCase()}</span>
                    <span>#{this.props.id}</span>
                </div>
            </div>
        )
    }
}
