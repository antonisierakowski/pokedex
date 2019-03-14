import React, { Component } from 'react';
import './PokemonView.scss';

export default class PokemonView extends Component {
    render() {
        return (
            <div className='pokemon-view-container'>
                <div className='pokemon-view-contents'>
                    <h1>{this.props.data.name}</h1>
                    
                    <h1 onClick={this.props.closeHandler}>ZAMK TO</h1>
                </div>
            </div>
        )
    }
}
