import React, { Component } from 'react';
import './HoverInfo.scss';

export default class HoverInfo extends Component {
    render() {
        return (
            <div className='hover-info'>
                {this.props.text}
            </div>
        )
    }
}
