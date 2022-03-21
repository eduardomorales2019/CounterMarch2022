// redue to a simple valie!! more troky of all methods. recibe a call back function !!
// acummulator,  total of total acummulation.
//  current .. current item !!!

const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
];

newDevelopment.reduce((acc, current) => {
  curr = current.rooms;

  return acc;
}, 0);

const response = newDevelopment.reduce((acc, current) => {
  let accumulator = (acc = acc + current.name);

  return accumulator;
}, 0);

console.log(response, "soy RESPOSE ");

const array = response.slice(1);
console.log(array, "----> ");

const objectString = new String(array);
console.log(objectString, "soy OBJECT");

const array2 = array.split(" ");
const map = array2.map((item) => {
  return item;
});
console.log(map, "soy map ");

console.log(array2, "soy array2");

const separarG = createGroups(map, 4);
console.log(separarG, "soy separarG");

//!  function to split  a array into the grout I want for

function createGroups(arr, numGroups) {
  const perGroup = Math.ceil(arr.length / numGroups);
  return new Array(numGroups)
    .fill("")
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

// ================= separar rooms after 2 hour learning and playing with methods!!

const rooms = newDevelopment.reduce((acc, current) => {
  current.rooms = current.rooms;

  return current.rooms;
}, 0);

console.log(rooms, "soy rooms");

// const response = newDevelopment.reduce((acc, current) => {
//   let accumulator = (acc = acc + current.name);

//   return accumulator;
// }, 0);
