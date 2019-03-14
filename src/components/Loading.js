import React, { Component } from 'react';
import './Loading.scss';
import loadingIcon from '../images/icon-pokeball.png'

export default class Loading extends Component {
    
    render() {
        return (
            <div className='loading'>
                <div><img src={loadingIcon} /></div>
                <div><img src={loadingIcon} /></div>
                <div><img src={loadingIcon} /></div>
            </div>
        )
    }
}
