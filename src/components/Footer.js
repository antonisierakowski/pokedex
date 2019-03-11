import React, { Component } from 'react';
import './Footer.scss';
import icon_github from '../images/icon_github.png';
import icon_linkedin from '../images/icon_linkedin.png';

export default class Header extends Component {
    render() {
        return (
            <section className='footer'>
                <div><img src={icon_github} alt='icon' /></div>
                <div><img src={icon_linkedin} alt='icon' /></div>
            </section>
        )
    }
}
