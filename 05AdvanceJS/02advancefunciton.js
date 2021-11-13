const arr = [1, 2, 10, 12];

const double = []

const newArr = arr.forEach((num) => {
    double.push(num * 2);
})

console.log(double);


//map filter reduce
const mapArray = arr.map((num) => {
    return num * 2;
})

//filter
const filterArray = arr.filter(num => num === 5);
console.log('filter', filterArray);

//reduce

const reduceArr = arr.reduce((accumulator, num) => {
        return accumulator + num
    }, 0) //defualt value of accumulator

console.log('reduce', reduceArr);