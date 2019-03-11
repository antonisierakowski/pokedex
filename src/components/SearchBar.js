import React, { Component } from 'react';
import './SearchBar.scss';
//import magnyfingGlass from '../images/icon_magnifying_glass.png'

export default class Header extends Component {
    render() {
        return (
            <section className='search-section'>
                <form className='search-bar'>
                    <input id='mainSearchBar' type='text' placeholder='find pokemon by name or id...'/>
                    <div className='magnyfing-glass'></div>
                    {/* <div><img src={magnyfingGlass} alt='icon-search'/></div> */}
                </form>
            </section>
        )
    }
}
