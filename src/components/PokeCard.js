import React from 'react';
import { PokeType } from './Common';
import { add_team } from "../database";

class PokeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name, height: 0, weight: 0, basexp: 0, imgsrc_mF: "", imgsrc_sF: "", alltype: []};

        this.getAPIData = this.getAPIData.bind(this);
        this.addTeamMember = this.addTeamMember.bind(this);
    }

    // Use async so your page can continue loading
    async getAPIData() {
        // This code is provided, it can be complicated
        const url = this.props.url; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        this.setState(
            {
                height: responseJSON.height,
                weight: responseJSON.weight,
                basexp: responseJSON.base_experience,
                imgsrc_mF: responseJSON.sprites.front_default,
                imgsrc_sF: responseJSON.sprites.front_shiny,
                alltype: responseJSON.types,
            }
        );
    }

    addTeamMember() {
        add_team(this.state.name);
    }

    componentDidMount() {
        this.getAPIData();
    }

    render () {
        // Get the images of the pokemon
        const front_img = <div><img src={this.state.imgsrc_mF} alt={this.state.name} width={"96px"} height={"auto"}/><img src={this.state.imgsrc_sF} alt={this.state.name} width={"96px"} height={"auto"}/></div>;

        // Card to display
        const pokeCard =
        <div className="pokecard">
            <div >
                {front_img}
            </div>
            <h4>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h4>
            <p>Height: {this.state.height}</p>
            <p>Weight: {this.state.weight}</p>
            <p>Base XP: {this.state.basexp}</p>
            <PokeType types={this.state.alltype} name={this.state.name}/>
            <div className="button" onClick={this.addTeamMember}><span className="button-text"><b>+</b> to team</span></div>
        </div>;


        // Return some JSX here...
        return pokeCard;
    }
}

export default PokeCard;
