import React, { Component } from 'react';
import './SearchBar.scss';

export default class SearchBar extends Component {
    render() {
        return (
            <section className={(this.props.searchBarDown === true) ? 'search-section' : 'search-section moved-up'}>
                <form className='search-bar' onSubmit={this.props.handleSubmit}>
                    <div className='search-bar-container'>
                        <input id='mainSearchBar' type='text' placeholder='find pokemon by name or id...' onChange={this.props.getSearchQuery} autoComplete="off"/>
                        {/* <div className={(this.props.displayDropdown) ? 'dropdown' : null}>
                            <ul>
                                
                            </ul>
                        </div> */}
                    </div>
                    <div className='buttons'>
                        <input id='mainSubmitBtn' type='submit' value='go!' />
                        <button id='randomPoke' onClick={this.props.handleGetRandom}>find random</button>
                    </div>
                </form>
            </section>
        )
    }
}
