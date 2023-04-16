// Swap variables
let first = "Aniebiet";
let second = "Susan";

// Method 1
// let temp = first;
// first = second;
// second = temp;

// Method 2
[first, second] = [second, first];
// console.log(first, second);

// Object Destructuring
const person = {
  firstName: "Samuel",
  lastName: "Jonathan",
  siblings: ["David", "James", "Sarah", "Mary"],
  role: "Data Analyst",
};

const { siblings } = person;
console.log(siblings);
