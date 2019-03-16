import React, { Component } from 'react';
import './InfoPokemonStats.scss';
import Stat from './Stat'

export default class InfoPokemonStats extends Component {

    render() {
        const stats = this.props.stats.map( stat => <Stat key={stat.stat.name} name={stat.stat.name} value={stat.base_stat}/> ).reverse();
        const total = this.props.stats.reduce((acc, val) => acc + val.base_stat, 0)
        return (
            <div className='stats'>
                <div className='exp-and-size'>
                    <span className='base-exp'>Base EXP: {this.props.baseExp}</span>
                    <div className='size'>
                        <span>{Math.floor(this.props.weight * 0.45)} kg</span>
                        <span>{Math.floor(this.props.height * 2.54)} cm</span>
                    </div>
                </div>
                
                {stats}
                <span>TOTAL: {total}</span>
            </div>
        )
    }
}
