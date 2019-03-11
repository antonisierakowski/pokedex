import React, { Component } from 'react';
import './Header.scss';
import icon_espeon from '../images/icon_espeon.png';
import icon_miltank from '../images/icon_miltank.png';
import icon_slowpoke from '../images/icon_slowpoke.png';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='content'>
                    <span>pokedex in react.js</span>
                    <div className='poke-icons'>
                        <img src={icon_espeon}/>
                        <img src={icon_miltank}/>
                        <img src={icon_slowpoke}/>
                    </div>
                </div>
            </div>
        )
    }
}
