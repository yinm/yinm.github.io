var fruits = ["apple", "banana", "mango"];
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});

var removedItem = fruits.splice(0, 1);
  console.log(removedItem);
  console.log(fruits);

var addedItem = fruits.splice(0, 0, "apple");
  console.log(addedItem);
  console.log(fruits);
