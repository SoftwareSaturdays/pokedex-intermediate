let poke_team = [];

let refresh = () => {};

function read_team(callback) {
    refresh = callback;
    refresh(poke_team);
}

function add_team(pokeid) {
    if (poke_team.length >= 6) {
        refresh("Pokemon Team already has 6 members!");
        return;
    }
    for (let poke of poke_team) {
        if (poke.name === pokeid) {
            refresh("Pokemon already exists in team");
            return;
        }
    }
    poke_team.push({name:pokeid, timestamp: (new Date()).toISOString()});
    refresh(poke_team);
}

function remove_team(pokeid) {
    for (let poke of poke_team) {
        if (poke.name === pokeid) {
            let idx = poke_team.indexOf(poke);
            poke_team.splice(idx, 1);
        }
    }
    refresh(poke_team);
}

export { read_team, add_team, remove_team };
