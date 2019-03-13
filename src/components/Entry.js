import React, { Component } from 'react';
import './Entry.scss';



export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.colors = {
            normal : '#FDCAC2',
            fighting : '#FE4F7E',
            flying : '#9CC5E2',
            poison : '#9263B5',
            ground : '#D09EA5',
            rock : '#574144',
            bug : '#7FD1AE',
            ghost : 'Indigo',
            steel : '#5C6678',
            fire : '#FE4F7E',
            water : 'DodgerBlue',
            grass : '#7FD1AE',
            electric : '#FFF9DA',
            psychic : '#F4C0FF',
            ice : '#D6FFF9',
            dragon : 'DarkSlateBlue',
            dark : '#2F4858',
            fairy : '#FFCEFF',
        }
    }

    determineBgByType = types => {

        if (types.length === 1) {
            return this.colors[types[0].type.name];
        } else {

            return `linear-gradient(45deg, ${this.colors[types[0].type.name]} 49%, ${this.colors[types[1].type.name]} 51%)`
        }
    }

    render() {
        const style = {
            background: `url(${this.props.data.sprites.front_default}) no-repeat center center, ${this.determineBgByType(this.props.data.types)}`,
            backgroundSize: 'cover',
        }
        return (
            <li className='entry' style={style}>
                <div className='name-container'>
                    <span>#{this.props.data.id}</span>
                    <span>{this.props.data.name}</span>
                </div>
            </li>
        )
    }
}
