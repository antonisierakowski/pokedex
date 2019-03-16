import React, { Component } from 'react';
import './Stat.scss';

export default class Stat extends Component {

    getAppropriateValue = (num, min1, max1, min2, max2) => {
        return (((num - min1) * (max2 - min2)) / (max1 - min1)) + min2;
    };

    parseStatName = fetchedStatName => {
        switch (fetchedStatName) {
            case 'hp':
                return fetchedStatName.toUpperCase();
            case 'attack':
            case 'defense':
            case 'speed':
                return fetchedStatName.charAt(0).toUpperCase() + fetchedStatName.slice(1);
            case 'special-attack':
                return 'Special Attack'
            case 'special-defense':
                return 'Special Defense'
            default:
                return null;
        }
    }

    render() {
        const width = Math.floor(this.getAppropriateValue(this.props.value, 0, 255, 0, 110));
        const style = {width: `${width}%`,}
        const statCaption = this.parseStatName(this.props.name);
        return (
            <div className='stat-item'>
                <div className='stat-bar' style={style}>{this.props.value}</div>
                <div className='stat-caption'>{statCaption}</div>
            </div>
        )
    }
}
