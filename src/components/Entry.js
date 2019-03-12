import React, { Component } from 'react';
import './Entry.scss';

export default class Entry extends Component {
    render() {
        return (
            <li className='entry'>
                <img src={this.props.data.sprites.front_default} />
                {this.props.data.name}
            </li>
        )
    }
}
