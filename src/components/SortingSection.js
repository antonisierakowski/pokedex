import React, { Component } from 'react';
import './SortingSection.scss';

export default class SortingSection extends Component {
    render() {
        return (
            <form className='sorting'>
                <span>sort by:</span>
                <label>
                    <input type="radio" value="id" checked={this.props.checked === 'id'} onChange={this.props.handleSorting}/> id
                </label>
                <label>
                    <input type="radio" value="name" checked={this.props.checked === 'name'} onChange={this.props.handleSorting}/> name
                </label>                
            </form>
        )
    }
}
