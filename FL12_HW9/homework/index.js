// Task 1
function convert() {
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      array.push(String(arguments[i]))
    } else if (typeof arguments[i] === 'string') {
      array.push(Number(arguments[i]))
    }
  }
  return array;
}
console.log(convert('1', 2, 3, '4'));

//Task 2
function executeforEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    func(element, i, array)
  }
}
executeforEach([1, 2, 3], function (el) {
  console.log(el * 2)
})

//Task 3
function mapArray(array, callback) {
  var newArray = [];
  executeforEach(array, function (element, i, arr) {
    newArray.push(callback(parseInt(element), i, array));
  });
  return newArray;
}
console.log(mapArray([2, '5', 8], function (el) {
  return el + 3
}));

//Task 4
function filterArray(array, func) {
  var filteredArray = [];
  executeforEach(array, function (element) {
    if (func(element) === true) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
console.log(filterArray([2, 5, 8], function (el) {
  return el % 2 === 0
}));

//Task 5
function flipOver(string) {
  var backwardString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    backwardString += string[i];
  }
  return backwardString;
}
console.log(flipOver('hey world'));

//Task 6
function makeListFromRange(array) {
  var newArray = [];
  for (var i = array[0]; i <= array[1]; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(makeListFromRange([2, 7]));

//Task 7
var actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
function getArrayOfKeys(array, key) {
  var newArray = [];
  executeforEach(array, function (element) {
    newArray.push(element[key])
  });
  return newArray;
}
console.log(getArrayOfKeys(actors, 'name'));

//Task 8
function substitute(array) {
  var newArray = [];
  mapArray(array, function (element) {
    if (element < 30) {
      newArray.push('*');
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}
console.log(substitute([58, 14, 48, 2, 31, 29]));