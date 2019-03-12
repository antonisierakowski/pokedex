import React, { Component } from 'react';
import './Entry.scss';



export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.colors = {
            normal : 'RosyBrown',
            fighting : 'LightCoral',
            flying : 'MediumSlateBlue',
            poison : 'DarkMagenta',
            ground : 'SandyBrown',
            rock : 'Olive',
            bug : 'DarkOliveGreen',
            ghost : 'Indigo',
            steel : 'CadetBlue',
            fire : 'DarkOrange',
            water : 'RoyalBlue',
            grass : 'MediumSpringGreen',
            electric : 'Yellow',
            psychic : 'DeepPink',
            ice : 'Aqua',
            dragon : 'DarkSlateBlue',
            dark : 'Gray',
            fairy : 'Violet',
        }
    }

    determineBgByType = types => {

        if (types.length === 1) {
            return this.colors[types[0].type.name];
        } else {

            return `linear-gradient(45deg, ${this.colors[types[0].type.name]} 50%, ${this.colors[types[1].type.name]} 50%)`
        }
    }

    render() {
        console.log(this.determineBgByType(this.props.data.types))
        // const style = {
        //     background: (this.determineBgByType(this.props.data.types)),
        //     backgroundImage: `url(${this.props.data.sprites.front_default})`,
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        // }
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
