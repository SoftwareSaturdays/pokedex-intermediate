import React from 'react';
import { read_team, remove_team } from '../database';

class PokeTeam extends React.Component {
    constructor(props) {
        super(props)

        this.state = {poke_team: [], error: ''};
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
       read_team(this.refresh);
    }

    refresh(data) {
        if (typeof(data) == 'string') {
            this.setState({error: data});
        } else {
            this.setState({poke_team:data, error: ''});
        }
    }

    remove(name) {
        remove_team(name);
    }

    render () {
        // Type your code here...
        let poke_team_card = []
        for (let member of this.state.poke_team) {
            poke_team_card.push(
                <div key={"poketeam_"+member.name} className="teamcard">
                    <h4>{member.name.charAt(0).toUpperCase() + member.name.slice(1)}</h4>
                    <p>Added at:</p>
                    <p>{member.timestamp}</p>
                    <div className='button' onClick={() => this.remove(member.name)}><span className='button-text'>Remove</span></div>
                </div>
            );
        }
        // Return some JSX here...
        return (
            <div>
                <h3>My Team:</h3>
                <b className='error-text'>{this.state.error}</b>
                <div className='teamtable'>
                    {poke_team_card}
                </div>
                <br></br>
                <hr></hr>
            </div>
        );
    }
}

export default PokeTeam;
