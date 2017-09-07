class Cat {
    constructor (name) {
        this._name = name;
    }

    meow() {
        console.log(this._name + ': meow!');
    }
}

const maya = new Cat('Maya');
maya.meow();