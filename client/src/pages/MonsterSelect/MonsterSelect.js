import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_MONSTER } from '../../utils/queries';
// import Auth from '../../utils/auth'

// 5e API graphQL URL: https://www.dnd5eapi.co/graphql
// const queryURL = 'https://www.dnd5eapi.co/graphql';

const MonsterSelect = () => {
    const [monIndex, setMonIndex] = useState('');

    const handleMonSearchChange = (event) => {
        // eslint-disable-next-line
        const { name, value } = event.target;
        setMonIndex(value);
    };

    const fetchMonster = () => {

        const monName = monIndex.toLowerCase().split(' ').join('-');
        const queryMonsterURL = `https://www.dnd5eapi.co/api/monsters/${monName}`
        fetch(queryMonsterURL)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                
                console.log(data)

                let name = data.name;
                let str = data.strength;

            })


    }

    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        fetchMonster();

    }

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


        </div>

    )



}

export default MonsterSelect;
