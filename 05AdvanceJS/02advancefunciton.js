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