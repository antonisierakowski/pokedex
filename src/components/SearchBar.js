import React, { Component } from 'react';
import './SearchBar.scss';
import magnyfingGlass from '../images/icon_magnifying_glass.svg'

export default class Header extends Component {

    preventSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <section className={(this.props.isEmpty === true) ? 'search-section' : 'search-section moved-up'}>
                <form className='search-bar' onSubmit={this.preventSubmit}>
                    <input id='mainSearchBar' type='text' placeholder='find pokemon by name or id...' onChange={this.props.getSearchQuery}/>
                    {/* <div className='magnyfing-glass'></div> */}
                    {/* <div><img src={magnyfingGlass} alt='icon-search'/></div> */}


                </form>
            </section>
        )
    }
}
