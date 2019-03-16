import React, { Component } from 'react';
import './PokemonView.scss';
import InfoPokemonMainInfo from './InfoPokemonMainInfo'
import InfoPokemonDescription from './InfoPokemonDescription'
import InfoPokemonStats from './InfoPokemonStats'
import InfoPokemonEvolutionChain from './InfoPokemonEvolutionChain'
import Loading from './Loading'

export default class PokemonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: this.props.data,
            currentId: this.props.data.id,
            isLoading: false,
        }
        this.url = 'https://pokeapi.co/api/v2/pokemon/';
    }

    handleBrowsingArrows = dir => {
        this.setState({
            currentId: dir === 'left' ? this.state.currentId - 1 : this.state.currentId + 1,
            isLoading: true,
        }, () => {
            fetch(this.url + this.state.currentId)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    currentData: result,
                    isLoading: false,
                })
            })
        })
        

    }

    render() {
        return (
            <div className='pokemon-view-container'>
                <div className='close-button' onClick={this.props.closeHandler}>
                    <span className='cross-icon'>X</span>
                </div>
                
                {this.state.isLoading === false ?
                <div className='pokemon-view-contents'>
                    <InfoPokemonMainInfo 
                        name={this.state.currentData.name}
                        id={this.state.currentData.id}
                        spriteUrl={this.state.currentData.sprites.front_default}
                        types={this.state.currentData.types}
                        speciesUrl={this.state.currentData.species.url}
                        browseHandler={this.handleBrowsingArrows}/>
                    <InfoPokemonDescription
                        speciesUrl={this.state.currentData.species.url}/>
                    <InfoPokemonStats
                        weight={this.state.currentData.weight}
                        height={this.state.currentData.height}
                        baseExp={this.state.currentData.base_experience}
                        stats={this.state.currentData.stats}/>
                    <InfoPokemonEvolutionChain speciesUrl={this.state.currentData.species.url}/>
                </div>
                :
                <div className='pokemon-view-contents'>
                    <Loading isInDetailedView={true}/>
                </div>}
                
            </div>
        )
    }
}
