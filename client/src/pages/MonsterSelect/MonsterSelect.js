import { React, useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_MONSTER } from '../../utils/queries';
// import Auth from '../../utils/auth'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
const queryClient = new QueryClient();

// 5e API graphQL URL: https://www.dnd5eapi.co/graphql
// const queryURL = 'https://www.dnd5eapi.co/graphql';



const MonsterSelect = () => {
    const [monIndex, setMonIndex] = useState('');

    const handleMonSearchChange = (event) => {
        // eslint-disable-next-line
        const { name, value } = event.target;
        setMonIndex(value);
    };

    // const [monStats, setMonStats] = useState({
    //     monsterName: null,
    //     proficiencies: null,
    //     vulnerable: null,
    //     resist: null,
    //     immuneDamage: null,
    //     immuneCondition: null,
    //     actions: null,
    //     actionsLegendary: null
    // });


    const fetchMonster = () => {

        const monName = monIndex.toLowerCase().split(' ').join('-');
        const queryMonsterURL = `https://www.dnd5eapi.co/api/monsters/${monName}`
        fetch(queryMonsterURL)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {

                // console.log(data)

                if (data.status === 'NOT_FOUND') {
                    const notFound = () => {
                        return (
                            <div>
                                <p className='not-found-message'>{data.message}</p>
                            </div>
                        )
                    }
                }

                let monsterName = data.name;
                let proficiencies = [data.proficiencies]
                let vulnerable = [data.damage_vulnerabilities];
                let resist = [data.damage_resistances];
                let immuneDamage = [data.damage_immunities];
                let immuneCondition = [data.condition_immunities];
                let actions = [data.actions];
                let actionsLegendary = [data.legendary_actions];

                const monStats = {
                    monsterName: monsterName,
                    proficiencies: proficiencies[0],
                    vulnerable: vulnerable[0],
                    resist: resist[0],
                    immuneDamage: immuneDamage[0],
                    immuneCondition: immuneCondition[0].name,
                    actions: actions[0],
                    actionsLegendary: actionsLegendary[0]
                };

                console.log(monStats)

                const renderMonster = (mon) => {
                    console.log(mon.proficiencies);
                    return (
                        <div>
                            <div key={mon.name}>{mon.name}</div>
                            <div key={`${mon.name}-attributes`}>STR: {mon.strength} | DEX: {mon.dexterity} | CON: {mon.constitution} | WIS: {mon.wisdom} | INT: {mon.intelligence} | CHA: {mon.charisma}</div>
                            <div key={`${mon.name}-hp`}>HP: {mon.hit_points} | AC: {mon.armor_class}</div>
                            {mon.proficiencies[0].map(prof => {
                                console.log(prof.proficiency.name);
                                return <div key={prof.proficiency.name}>{prof.proficiency.name}: {prof.value}</div>
                            })}
                        </div>
                    )
                }

                // renderMonster(monster);
            })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        fetchMonster();
    };



    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Search Monster: </label>
                <input type='text' value={monIndex} onChange={handleMonSearchChange} />
                <button
                    className='custom-btn'
                    style={{ cursor: 'pointer' }}
                    type='submit'
                >
                    Search
                </button>
            </form>
            {/* {notFound()} */}
            <div>
                {/* {fetchMonster()} */}
                <div>
                    <div>Orc</div>
                    <div>STR: 10 | DEX: 10 | CON: 10 | WIS: 10 | INT: 10 | CHA: 10</div>
                    <div>HP: 10 | AC: 10</div>
                    <div>Intimidation: 7</div>
                    <div>Vulnerabilities: None</div>
                    <div>Resistances: None</div>
                    <div>Damage Immunities: None</div>
                    <div>Condition Immunities: None</div>
                    <div>Actions:
                        <ul>
                            <li>Greataxe: +3, 1d12 Slashing</li>
                            <li>Lance: +3, 1d6 Piercing</li>
                        </ul>
                    </div>
                    <div>Legendary Actions:
                        <ul>
                            <li></li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default MonsterSelect;
