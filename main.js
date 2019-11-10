// Q1
let user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

// Q2
let fruit = {
apple: 20,
pear: 20,
peach: 10
};
cosnt num = Object.keys(fruit).reduce((num, key) => num + parseInt(fruit[key]), 0)
console.log(num);
