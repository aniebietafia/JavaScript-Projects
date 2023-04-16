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

const greetUser = ({ firstName, lastName }) => `Welcome back! ${firstName} ${lastName}`;

// console.log(greetUser(person));

// New String methods
const fullName = "Aniebiet Afia";

const printFullName = () => {
  if (fullName.includes("ebi")) {
    return fullName;
  } else {
    return null;
  }
};
// console.log(printFullName());

for (const keys in person) {
  console.log([keys]);
}
