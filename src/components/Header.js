import React, { Component } from 'react';
import './Header.scss';
import HoverInfo from './HoverInfo'
import icon_espeon from '../images/icon_espeon.png';
import icon_miltank from '../images/icon_miltank.png';
import icon_slowpoke from '../images/icon_slowpoke.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHoverInfo: false,
            hoverInfo: '',
        }

        
        this.info1 = 'Gummies pie cake dragée candy. Donut ice cream lemon drops oat cake chocolate muffin donut chocolate cake.'
        this.info2 = 'Marzipan cupcake soufflé sweet roll topping gummies. Dragée biscuit toffee bonbon cotton candy. Sweet roll lollipop chupa chups cheesecake carrot cake caramels. Cookie pudding cake tiramisu sugar plum sesame snaps soufflé. Chocolate cake jelly powder brownie fruitcake dessert. Jelly beans gingerbread pastry pastry.'
        this.info3 = 'Candy canes halvah fruitcake chocolate bar sesame snaps lollipop. Macaroon chocolate bar pie cheesecake tootsie roll sesame snaps. Tart marzipan marshmallow biscuit tart apple pie sweet roll croissant sesame snaps.'
    }

    handleMouseEnter = info => {
        this.setState({
            displayHoverInfo: true,
            hoverInfo: info,
        })
    }

    handleMouseLeave = event => {
        this.setState({
            displayHoverInfo: false,
        })
    }

    render() {
        return (
            <section className='header'>
                <div className='content'>
                    <span>pokedex in react.js</span>
                    <div className='poke-icons'>
                        <img alt='icon-espeon'
                            src={icon_espeon}
                            onMouseEnter={info => this.handleMouseEnter(this.info1)}
                            onMouseLeave={this.handleMouseLeave}/>
                        <img alt='icon-miltank'
                            src={icon_miltank}
                            onMouseEnter={info => this.handleMouseEnter(this.info2)}
                            onMouseLeave={this.handleMouseLeave}/>
                        <img alt='icon-slowpoke'
                            src={icon_slowpoke}
                            onMouseEnter={info => this.handleMouseEnter(this.info3)}
                            onMouseLeave={this.handleMouseLeave}/>
                        {this.state.displayHoverInfo && <HoverInfo text={this.state.hoverInfo}/>}
                    </div>
                    
                </div>
            </section>
        )
    }
}
