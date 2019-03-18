import React, { Component } from 'react';
import './HoverInfo.scss';

export default class HoverInfo extends Component {
    render() {
        return this.props.link === true ? 
            <div className='hover-info'>
                <a href={this.props.url}>{this.props.text}</a>
            </div> 
            :
            <div className='hover-info'>
                {this.props.text}
            </div> 
    }
}
