import React, { Component } from 'react';
import './NoResults.scss';
import notFound from '../images/not-found.png'

export default class NoResults extends Component {
    
    render() {
        return (
            <div className='no-results'>
                <div><img src={notFound} alt='not-found' /></div>
                <span>there are no results... :&#40;</span>
            </div>
        )
    }
}
