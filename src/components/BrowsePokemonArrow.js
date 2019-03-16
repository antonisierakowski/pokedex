import React, { Component } from 'react';
import './BrowsePokemonArrow.scss';

export default class BrowsePokemonArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dir: this.props.dir,
        }
    }
    render() { 
        return (
            <div className='browse-pokemon-arrow' onClick={ dir => this.props.browseHandler(this.state.dir) }>
                {this.state.dir === 'left' && '<'}
                {this.state.dir === 'right' && '>'}
            </div>
        )
    }
}