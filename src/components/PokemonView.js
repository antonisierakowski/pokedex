import React, { Component } from 'react';
import './PokemonView.scss';

export default class PokemonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: this.props.data,
        }
    }
    render() {

        return (
            <div className='pokemon-view-container'>
                <div className='pokemon-view-contents'>
                    <h1>{this.state.currentData.name}</h1>

                    <h1 onClick={this.props.closeHandler}>kliknij tu zeby zamknąć, póki co tak</h1>
                </div>
            </div>
        )
    }
}
