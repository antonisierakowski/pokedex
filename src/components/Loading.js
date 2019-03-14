import React, { Component } from 'react';
import './Loading.scss';
import loadingIcon from '../images/icon-pokeball.png'

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <div className='loading-icon1'><img src={loadingIcon} alt='loading-icon'/></div>
                <div className='loading-icon2'><img src={loadingIcon} alt='loading-icon'/></div>
                <div className='loading-icon3'><img src={loadingIcon} alt='loading-icon'/></div>
            </div>
        )
    }
}
