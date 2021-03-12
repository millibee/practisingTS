var fullName: string = "Millissa Blanchard";
//this is my name//
// fullName = "Millissa Blanchard";

var sum: number = 5 + 4;
// this is a sum of two numbers//

alert("Hello World!");
//this is a alert message//

interface person {
  name: string,
  age: number
}

let friendsArray: person[] = [
  {
    name: "HeyHey",
    age: 21,
  },
  {
    name: "HeyHey1",
    age: 18,
  },
  {
    name: "HeyHey2",
    age: 19,
  },
  {
    name: "HeyHey3",
    age: 21,
  },
];

for (let i = 0; i < friendsArray.length; i++) {}

var pet = {
  name: "HeyHey",
  breed: "House cat",
};
console.log(pet);

var vegetables: string[] = [
  "Broccoli",
  "Squash",
  "Carrot",
  "Green Beans",
  "Collard Greens"
];
var text: string = "";
for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables);
}

function checkAge(name: string, age: number): void {
  if (age < 21) {
    alert("Sorry, " + name + " you aren't old enough to view this page!");
  }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John");

const states: number = 50;

console.log(fullName);
console.log(states);
console.log(sum);
