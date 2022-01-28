const Action = require('./action');

class Attack extends Action {
    constructor(name, desc, bonus, damage, type) {
        super(name, desc);
        this.bonus = bonus;
        this.damage = damage;
        this.type - type;
    };

    rollAttack(target) {
        let attack = Math.floor(Math.random() * 20);
        if (attack >= target.ac) {
            console.log('Attack hits!');
            rollDamage(target); 
        }
        else {
            console.log('Attack missed!');
        }
    };

    rollDamage(target) {
        if (this.damage.includes('d')) {
            let dice = this.damage.split('d');
            console.log(dice);
            // if (dice[1].includes('+') || dice[1].includes('-')) {

            // }
            // dice = dice[0];

        }
    }
}