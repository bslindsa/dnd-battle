import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
  me {
    _id
    username
    email
    games {
      _id
      title
      owner
      description
      platform
      price
      images
      datePosted
    }
  }
}
`;

export const GET_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    games {
      _id
      title
      owner
      description
      platform
      price
      images
      datePosted
    }
  }
}
`;

export const GET_USERS = gql`
query users {
  users {
    _id
    username
  }
}
`;


// 5eAPI graphQL query to get one monster.
export const GET_MONSTER = gql`
query Monster($filter: FilterFindOneMonsterInput) {
    monster(filter: $filter) {
      name
      actions {
        attack_bonus
        damage {
          damage_dice
          damage_type {
            name
          }
        }
        desc
        name
      }
      armor_class
      charisma
      condition_immunities {
        name
      }
      constitution
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      dexterity
      hit_points
      intelligence
      legendary_actions {
        attack_bonus
        desc
        name
      }
      proficiencies {
        proficiency {
          name
        }
        value
      }
      reactions {
        name
        desc
      }
      size
      special_abilities {
        name
        desc
      }
      strength
      type
      subtype
      wisdom
    }
  }  
`

