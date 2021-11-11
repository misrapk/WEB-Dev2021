//TODO: reference typ
var ob1 = { value: 10 };
var ob2 = ob1;
var ob3 = { value: 10 };

//TODO: context
/* 
context tells u where we are in object
 */
function b() {
    let a = 4;
}
const ob4 = {
    a: function() {
        // console.log(this);
    }
}
console.log(ob4.a());


//TODO: instantiation
/* make a copy of the object and reuse the code */
class Player {
    //first thing will run when you make a copy
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }

}

//Create a player Wizard
class Wizard extends Player {
    constructor(name, type) {
        // console.log('wizard', this);

        //whenever you extends a class "use SUPER to access the constructor of parent calss"
        super(name, type)
    }
    play() {
        console.log(`I am wizar of ${this.type}`);
    }

}
const wizard1 = new Wizard('Rocky', 'GOD');
const wizard2 = new Wizard('Rony', 'Magic');