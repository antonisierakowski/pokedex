import React, { Component } from 'react';
import './Loading.scss';
import loadingIcon from '../images/icon-pokeball.png'

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                {this.props.isInDetailedView === true ? null : <div className='loading-icon'><img src={loadingIcon} alt='loading-icon'/></div>}
                {this.props.isInDetailedView === true ? null : <div className='loading-icon'><img src={loadingIcon} alt='loading-icon'/></div>}
                <div className='loading-icon3'><img src={loadingIcon} alt='loading-icon'/></div>
            </div>
        )
    }
}
