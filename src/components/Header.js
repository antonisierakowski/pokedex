import React, { Component } from 'react';
import './Header.scss';
import HoverInfo from './HoverInfo'
import icon_espeon from '../images/icon_espeon.png';
import icon_miltank from '../images/icon_miltank.png';
import icon_slowpoke from '../images/icon_slowpoke.png';
import { timeout } from 'q';



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHoverInfo: false,
            hoverInfo: '',
            isDesktop: !window.matchMedia('(max-width: 999px)').matches,
        }
        this.githubUrl = 'https://github.com/antonisierakowski/pokedex';
        
        this.info1 = "Hey, my name is Antoni and I'm a beginner front-end developer. I love doing a lot of stuff in my life, and among making music and programming, there's a soft spot for old Pokémon games in my heart.";
        this.info2 = "This Pokédex was made in React.js thanks to PokéAPI, which enabled me to fetch all the info. Try to find your favorite Pokémon simply by entering its name in the search field. If you don't know any, the autosuggestion will help you finding one. You can enter a single letter or two, and have fun browsing lots of different Pokémon.";
        this.info3 = <a href={this.githubUrl}>When you get the search results, simply click or tap one of the found Pokémon to get detailed in-game info about it. For more instructions on using this app see readme.md file on my github.</a>
    }

    handleMouseEnter = info => {
        this.setState({
            displayHoverInfo: true,
            hoverInfo: info,
        })
    }

    handleMouseLeave = () => {
        this.setState({
            displayHoverInfo: false,
        })
    }

    handleTouchStart = event => {
        this.timeoutId = setTimeout( () => {
            this.longTouch = true;
        }, 1500)
    }

    handleTouchEnd = () => {
        if (this.longTouch) {
            window.open(this.githubUrl);
        }
        this.longTouch = false;
        clearTimeout(this.timeoutId);
    }

    componentDidMount() {
        this.tabletAndDown = window.matchMedia('(max-width: 999px)')
        this.tabletAndDown.addListener( () => {
            this.setState({
                isDesktop: !this.tabletAndDown.matches
            })
        })
    }

    componentWillUnmount() {
        this.tabletAndDown.removeListener( () => {
            this.setState({
                isDesktop: !this.tabletAndDown.matches
            })
        })
        clearTimeout(this.timeoutId);
    }

    render() {
        
        // console.log(tabletAndDown.matches)
        return (
            <section className='header'>
                <div className='content'>
                    <span>pokédex in react.js</span>
                    <div className='poke-icons'>
                        <img alt='icon-espeon'
                            src={icon_espeon}
                            onMouseEnter={info => this.handleMouseEnter(this.info1)}
                            onMouseLeave={this.handleMouseLeave}/>
                        <img alt='icon-miltank'
                            src={icon_miltank}
                            onMouseEnter={info => this.handleMouseEnter(this.info2)}
                            onMouseLeave={this.handleMouseLeave}/>
                        { this.state.isDesktop ?
                            <a href={this.githubUrl}><img alt='icon-slowpoke'
                                src={icon_slowpoke}
                                onMouseEnter={info => this.handleMouseEnter(this.info3)}
                                onMouseLeave={this.handleMouseLeave}/></a> 
                            :
                            <img onTouchStart={this.handleTouchStart}
                            onTouchEnd={this.handleTouchEnd}
                            alt='icon-slowpoke'
                            src={icon_slowpoke}
                            onMouseEnter={info => this.handleMouseEnter(this.info3)}
                            onMouseLeave={this.handleMouseLeave}/>
                        }
                        {this.state.displayHoverInfo && <HoverInfo text={this.state.hoverInfo}/>}
                    </div>
                    
                </div>
            </section>
        )
    }
}
