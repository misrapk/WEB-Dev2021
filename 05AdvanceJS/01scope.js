//scope

//root scope
var b = "peeyush";

function bb() {

    //child scope
    var b = "hello";
    console.log(b);
}

function bbnew() {

    //child scope
    var b = "bbnew";
    console.log(b);
}
console.log(b);
bb();
bbnew();


const name = "PK"

const greet = `hello ${name} welcome toINDIA`;


//defaultarguments
function greeting(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} your age is ${age-10}`
}