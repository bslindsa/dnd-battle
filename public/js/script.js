

let monIndex;

const mod = (score) => {
    let mod = Math.floor((score - 10) / 2);
    return mod;
}

const getMonster = () => {
    let queryURL = `https://www.dnd5eapi.co/api/monsters/${monName}`

    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            name = data.name;
            size = data.size;
            type = data.type;
            ac = data.ac;
            hp = data.hit_points;
            str = data.strength;
            dex = data.dexterity;
            con = data.constitution;
            int = data.intelligence;
            wis = data.wisdom;
            cha = data.charisma;
            prof = data.proficiencies;
            vulnerable = data.damage_vulnerabilities;
            resistance = data.damage_resistances;
            immuneDamage = data.damage_immunities;
            immuneCondition = data.condition_immunities;
            cr = data.challenge_rating;
            xp = data.xp;
            actions = data.actions;
            legActions = data.legendary_actions;

            

            

        })


}




$('#monsterBtn').on("click", () => {
    monIndex = $('#search-mon').val().toLowerCase();
    monIndex = monName.replaceAll(" ", "-");
    search = true;
    getMonster();
})
