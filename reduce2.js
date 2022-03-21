const rooms = newDevelopment.map((item) => {
  item.rooms = item.rooms;
  return item.rooms;
});
console.log(rooms);

// filter.

// Rooms  that are true

const filter = rooms.filter(function (rooms) {
  return rooms.true;
});
console.log(filter, "soy filter ");

var arr1 = [1, 2, 3, 4],
  arr2 = [2, 4],
  res = arr1.filter((item) => !arr2.includes(item));
console.log(res, "soy res ");

var filtered = [1, 2, 3, 4].filter(
  function (e) {
    return this.indexOf(e) < 0;
  },
  [2, 4]
);
console.log(filtered, "soy filtered ");

// =============

var arr = [1, 2, 3, 4, 5, 6, 7];
var filteri = [4, 5, 6];

var filteredin = arr.filter(function (val) {
  for (var i = 0; i < filteri.length; i++) {
    if (val == filteri[i]) {
      return false;
    }
  }
  return true;
});

console.log(filteredin);
