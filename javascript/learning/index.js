let person = [
  {
    firstname: "jagdish",
    lastname: "patil",
    age: 26,
    balance: 25000,
  },
  {
    firstname: "rakesh",
    lastname: "solanki",
    age: 26,
    balance: 9800000,
  },
  {
    firstname: "vijay",
    lastname: "solanki",
    age: 24,
    balance: 20000,
  },
  {
    firstname: "gautam",
    lastname: "parmar",
    age: 26,
    salary: 100000,
  },
  {
    firstname: "tushar",
    lastname: "parmar",
    age: 26,
    salary: 50000,
  },
];

let filterdArray = person.filter((a) => a.age <= 24);
console.log("filterdArray", filterdArray);

let mapArray = person.map((a) => a.firstname + a.lastname);
console.log("mapArray", mapArray);

let reduceArray = person.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("reducearray", reduceArray);

// spread operator

function sum(a, b) {
  console.log(a + b);
}

let arr = [10, 15];
sum(...arr);

// rest operator
function sumTwo(...args) {
  var sum = 0;
  for (const iterator of args) {
    sum = sum + iterator;
  }
  return sum;
}

console.log(sumTwo(2, 3, 5, 7, 1));
