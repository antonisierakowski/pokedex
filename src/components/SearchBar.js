import React, { Component } from 'react';
import './SearchBar.scss';
import magnifyingGlass from '../images/icon_magnifying_glass.svg'

export default class SearchBar extends Component {

    // preventSubmit = event => {
    //     event.preventDefault();
    // }

    render() {
        return (
            <section className={(this.props.isEmpty === true) ? 'search-section' : 'search-section moved-up'}>
                <form className='search-bar' onSubmit={this.props.handleSubmit}>
                    <div>
                        <input id='mainSearchBar' type='text' placeholder='find pokemon by name or id...' onChange={this.props.getSearchQuery} autocomplete="off"/>
                    </div>
                    <div className='buttons'>
                        <input id='mainSubmitBtn' type='submit' value='go!' />
                        <button id='randomPoke' >go random!</button>
                    </div>
                </form>
            </section>
        )
    }
}
