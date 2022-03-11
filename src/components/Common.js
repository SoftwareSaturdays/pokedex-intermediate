import React from 'react';

import { read_team } from '../database';

const Header = () => {
    return (
        <div className="header">
            <h1>PokeDex Pokemon Viewer - Intermediate</h1>
            <a href="https://purdueieee.org/software"><img src="/pokedex-intermediate/ss-logo.svg" width="10%" height="auto" alt="Software Saturdays Logo"/></a>
            <h3>Developed during Software Saturdays Spring 2022</h3>
            <h3>For more information, visit <a href="https://purdueieee.org/software">our website</a>.</h3>
            <hr />
        </div>
    );
}

const PokeType = (props) => {

    let all_types = [];

    for (let type of props.types) {
        let bg_color = {"backgroundColor": "white"};
        switch (type.type.name) {
            case "normal": bg_color["backgroundColor"] = "#969696"; break;
            case "fire": bg_color["backgroundColor"] = "#db7f58"; break;
            case "water": bg_color["backgroundColor"] = "#90aaf5"; break;
            case "grass": bg_color["backgroundColor"] = "#85cc99"; break;
            case "electric": bg_color["backgroundColor"] = "#fae891"; break;
            case "ice": bg_color["backgroundColor"] = "#b7edeb"; break;
            case "fighting": bg_color["backgroundColor"] = "#d96a6a"; break;
            case "flying": bg_color["backgroundColor"] = "#d7b2ed"; break;
            case "poison": bg_color["backgroundColor"] = "#ad6f9c"; break;
            case "ground": bg_color["backgroundColor"] = "#e3e1a3"; break;
            case "bug": bg_color["backgroundColor"] = "#d5e096"; break;
            case "rock": bg_color["backgroundColor"] = "#bfb36b"; break;
            case "psychic": bg_color["backgroundColor"] = "#bd82a3"; break;
            case "ghost": bg_color["backgroundColor"] = "#9882bd"; break;
            case "dark": bg_color["backgroundColor"] = "#a69265"; break;
            case "steel": bg_color["backgroundColor"] = "#d9d9d9"; break;
            case "fairy": bg_color["backgroundColor"] = "#ffe8f9"; break;
            case "dragon": bg_color["backgroundColor"] = "#9e5ecc"; break;
            case "unknown": bg_color["backgroundColor"] = "#00000"; break;
            case "shadow": bg_color["backgroundColor"] = "#00000"; break;
            default:
                break;
        }
        all_types.push(<div key={`poketype_${props.name}_${type.type.name}`} style={bg_color} className="pokecard-type"><p>Type: {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p></div>)
    }

    return (
        <div>
            {all_types}
        </div>
    );
}

export { Header, PokeType }
