import React from 'react';

const MonsterCard = (monster) => {


    return (
        <div>
            <div key={monster.name}>{monster.name}</div>
            <div key={`${monster.name}-attributes`}>STR: {monster.strength} | DEX: {monster.dexterity} | CON: {monster.constitution} | WIS: {monster.wisdom} | INT: {monster.intelligence} | CHA: {monster.charisma}</div>
            <div key={`${monster.name}-hp`}>HP: {monster.hit_points} | AC: {monster.armor_class}</div>
            {monster.proficiencies.map(prof => {
                // console.log(prof.proficiency.name);
                return <div key={prof.proficiency.name}>{prof.proficiency.name}: {prof.value}</div>
            })}
        </div>
    )
};

export default MonsterCard;