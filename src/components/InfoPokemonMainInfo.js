import React, { Component } from 'react';
import './InfoPokemonMainInfo.scss';
import BrowsePokemonArrow from './BrowsePokemonArrow';
import bug from '../images/type-icons/Bug.png';
import dark from '../images/type-icons/Dark.png';
import dragon from '../images/type-icons/Dragon.png';
import electric from '../images/type-icons/Electric.png';
import fairy from '../images/type-icons/Fairy.png';
import fighting from '../images/type-icons/Fighting.png';
import fire from '../images/type-icons/Fire.png';
import flying from '../images/type-icons/Flying.png';
import ghost from '../images/type-icons/Ghost.png';
import grass from '../images/type-icons/Grass.png';
import ground from '../images/type-icons/Ground.png';
import ice from '../images/type-icons/Ice.png';
import normal from '../images/type-icons/Normal.png';
import poison from '../images/type-icons/Poison.png';
import psychic from '../images/type-icons/Psychic.png';
import rock from '../images/type-icons/Rock.png';
import steel from '../images/type-icons/Steel.png';
import water from '../images/type-icons/Water.png';

export default class InfoPokemonMainInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genus: ''
        }
    }

    fetchSpeciesData = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                genus: response.genera[2].genus,
            })
        })
    }

    getTypeImageSrc = type => {
        switch (type) {
            case 'bug':
                return bug;
            case 'dark':
                return dark;
            case 'dragon':
                return dragon;
            case 'electric':
                return electric;
            case 'fairy':
                return fairy;
            case 'fighting':
                return fighting;
            case 'fire':
                return fire;
            case 'flying':
                return flying;
            case 'ghost':
                return ghost;
            case 'grass':
                return grass;
            case 'ground':
                return ground;
            case 'ice':
                return ice;
            case 'normal':
                return normal;
            case 'poison':
                return poison;
            case 'psychic':
                return psychic;
            case 'rock':
                return rock;
            case 'steel':
                return steel;
            case 'water':
                return water;
            default:
                break;
        } 
    }

    componentDidMount() {
        this.fetchSpeciesData(this.props.speciesUrl);
    }

    render() {
        const spriteBackground = {
            background: `url(${this.props.spriteUrl}) no-repeat center center`,
            backgroundSize: 'contain',
        }
        const currentTypes = this.props.types;
        const types = (currentTypes.length === 1)
            ?
            <div className='type-list'>
                <span className='type-item'>
                    <img src={this.getTypeImageSrc(currentTypes[0].type.name)} className='type-icon' alt='type-icon1'/> {currentTypes[0].type.name.toUpperCase()}
                </span>
            </div>
            : <div className='type-list background-opacity'>
                <span className='type-item'>
                    <img src={this.getTypeImageSrc(currentTypes[0].type.name)} className='type-icon' alt='type-icon1'/> {currentTypes[0].type.name.toUpperCase()}
                </span>
                <span className='type-item'>
                    <img src={this.getTypeImageSrc(currentTypes[1].type.name)} className='type-icon' alt='type-icon2'/> {currentTypes[1].type.name.toUpperCase()}
                </span>
            </div>;
    
        return (
            <div className='pokemon-main-info' style={spriteBackground}>
                <div className='name background-opacity'>
                    <span>{this.props.name.toUpperCase()}</span>
                    <span className='genus'>{this.state.genus}</span>
                </div>
                <div className='arrows'>
                    <BrowsePokemonArrow dir='left' browseHandler={this.props.browseHandler}/><BrowsePokemonArrow dir='right' browseHandler={this.props.browseHandler}/>
                </div>
                <div className='type-and-id'>
                    
                {types}

                    <span className='pokemon-id'>#{this.props.id}</span>
                </div>
            </div>
        )
    }
}
