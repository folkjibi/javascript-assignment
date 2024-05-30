var fruits = ["Apple", "Banana", "Coconut", "Lemon", "Mango"];
var targetFruit = "Lemon";
// var targetindex = 3;

// ฟังก์ชั่นเพิ่ม
function addFruit(val) {
  fruits.push(val);
  return fruits.length - 1;
}

// ฟังก์ชั่นลบ
function removeFruit(i) {
  if (i >= 0 && i < fruits.length) {
    fruits.splice(i, 1);
    return true;
  } else {
    return false;
  }
}

// ฟังก์ชั่นอัพเดต
function updateFruit(i, val) {
  if (i >= 0 && i < fruits.length) {
    fruits[i] = val;
    return true;
  } else {
    return false;
  }
}

// ฟังก์ชั่นค้นหา
function findFruit(val) {
  var targetindex = null;
  var targetFruit = null;

  for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === val) {
      targetindex = i;
      targetFruit = fruits[i];
      return { targetindex, targetFruit };
    }
  }

  return null;
}

// ฟังก์ชั่นสีผลไม้
function fruitColor(val) {
  switch (val) {
    case "Banana":
    case "Lime":
    case "Mango":
      return "Yellow";
    case "Apple":
      return "Red";
    case "Coconut":
      return "Green";
    default:
      return "Unknown";
  }
}

// Example Usage
console.log(fruitColor("Banana"));
console.log(fruitColor("Lime"));
console.log(fruitColor("Mango"));
console.log(fruitColor("Apple"));
console.log(fruitColor("Coconut"));
console.log(fruitColor("Pineapple"));

addFruit("Pineapple");
// var lastindex =  addFruit("Pineapple");
// console.log(lastindex);
// console.log(fruits);

// var wasRemoved = removeFruit(2);
// console.log(wasRemoved);
// console.log(fruits);

// wasRemoved = removeFruit(10);
// console.log(wasRemoved);
// console.log(fruits);

// var wasUpdate = updateFruit(1, "Blueberry");
// console.log(wasUpdate);
// console.log(fruits);

// wasUpdate = updateFruit(10, "Strawberry");
// console.log(wasUpdate);
// console.log(fruits);

// var foundFruit = findFruit("Lemon");
// console.log(foundFruit);

// findFruit = findFruit("Strawberry");
// console.log(foundFruit);
