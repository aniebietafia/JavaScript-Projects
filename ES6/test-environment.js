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

const printSiblings = () => {
  const { siblings } = person;
  return siblings
    .map((sibling) => {
      return sibling;
    })
    .join(" ");
};
// console.log(printSiblings());

const greetUser = () => {
  const { firstName, lastName } = person;
  return `Welcome back! ${firstName} ${lastName}`;
};
console.log(greetUser());
