class Action {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    };

    getName() {
        return this.name;
    };

    getDesc() {
        return this.desc;
    };
};

module.exports = Action;