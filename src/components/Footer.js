import React, { Component } from 'react';
import './Footer.scss';
import icon_github from '../images/icon_github.png';
import icon_linkedin from '../images/icon_linkedin.png';

export default class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                <a href='https://github.com/antonisierakowski'><img src={icon_github} alt='icon-github' /></a>
                <a href='https://www.linkedin.com/in/antoni-sierakowski/'><img src={icon_linkedin} alt='icon-linkedin' /></a>
            </section>
        )
    }
}
