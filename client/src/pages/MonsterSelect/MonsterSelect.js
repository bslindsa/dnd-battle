import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
import { GET_MONSTER } from '../../utils/queries';
// import Auth from '../../utils/auth'

// 5e API graphQL URL: https://www.dnd5eapi.co/graphql
const queryURL = 'https://www.dnd5eapi.co/graphql';

const MonsterSelect = () => {
    const [monIndex, setMonIndex] = useState('');

    // const { loading, data } = useQuery(GET_MONSTER, {
    //     variables: {
    //         filter: {
    //             index: monIndex
    //         }
    //     }
    // });

    const handleMonSearchChange = (event) => {
        // eslint-disable-next-line
        const { name, value } = event.target;
        setMonIndex(value);
        console.log(monIndex);
    }

    const handleFormSubmit = () => {
        fetch(queryURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                GET_MONSTER,
                variables: {
                    filter: {
                        index: monIndex
                    }
                }
            })
        }).then(response => {
            return response.json();
        }).then(data => {
            const monster = data?.monster
            console.log(monster);


        });

        
    }

    return (
        <div>
            <input type='text' value={monIndex} onChange={handleMonSearchChange} />
            <button
                className='custom-btn'
                style={{cursor: 'pointer'}}
                type='submit'
                onSubmit={handleFormSubmit}
            >
                Search
            </button>

        </div>

    )



}

export default MonsterSelect;
