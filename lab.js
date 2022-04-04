function sum(aarray) {
  return aarray.reduce(function (sum, elem) {
    return elem > 20 ? sum + elem : sum + 0;

  }, 0);
}

console.log(sum([1, 2, 3, 4, 5])); // Prints 0
console.log(sum([1, 2, 3, 4, 5, 32, 36, 42, 69])); // Prints 179

const getNewArray = function (array) {
  return array.filter(function (elem) {
    return elem.length >= 5 && elem.includes('a') ? elem : undefined;
  });
};

console.log(getNewArray(["Hi", "my", "name", "is", "Slim Shaddy"])); // Prints Slim Shaddy
console.log(getNewArray(["Hi", "my", "name", "is", "Slim Slimmy"])); // Prints Empty List




