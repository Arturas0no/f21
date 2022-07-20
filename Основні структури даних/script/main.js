// Основні структури даних

// 1) Використання масиву для зберігання колекції даних

// let yourArray = ["a", 2, true, "c", null, { name: "john" }];


// 2) Доступ до вмісту масиву за допомогою нотації в дужках

// let myArray = ["a", "b", "c", "d"];
// myArray[1] = "not b anymore";
// console.log(myArray);


// 3)Додайте елементи до масиву за допомогою push() і unshift()

// function mixedNumbers(arr) {
//     arr.unshift("I", 2, "three");
//     arr.push(7, "VIII", 9);
//     return arr;
//   }
//   console.log(mixedNumbers(["IV", 5, "six"]));


// 4)Видалення елементів із масиву за допомогою pop() і shift()

// function popShift(arr) {
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted, popped];
//   }
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));


// 5)Видалити елементи за допомогою splice()

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(1, 4);
// console.log(arr);


// 6)Додати елементи за допомогою splice()

// function htmlColorNames(arr) {
//     arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//     return arr;
//   }
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// 7)Копіювати елементи масиву за допомогою slice()

// function forecast(arr) {
//     return arr.slice(2, 4);
//   }
//   console.log(
//     forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
//   );


// 8)Скопіюйте масив за допомогою оператора Spread

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       newArr.push([...arr]);
//       num--;
//     }
//     return newArr;
//   }
//   console.log(copyMachine([true, false, true], 2));


// 9)Комбінуйте масиви за допомогою оператора Spread

// function spreadOut() {
//     let fragment = ["to", "code"];
//     let sentence = ["learning", ...fragment, "is", "fun"];
//     return sentence;
//   }
//   console.log(spreadOut());


// 10)Перевірте наявність елемента за допомогою indexOf()

// function quickCheck(arr, elem) {
//     return arr.indexOf(elem) >= 0 ? true : false;
//   }
//   console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


// 11)Перебір усіх елементів масиву за допомогою циклів For

// function filteredArray(arr, elem) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(elem) == -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// 12)Створюйте складні багатовимірні масиви

// let myNestedArray = [
//     ["unshift", false, 1, 2, 3, "complex", "nested"],
//     ["loop", "shift", 6, 7, 1000, "method"],
//     ["concat", false, true, "spread", "array", ["deep"]],
//     ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//     ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
//   ];


// 13)Додайте пари ключ-значення до об’єктів JavaScript

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
//   };
//   foods["bananas"] = 13;
//   foods["grapes"] = 35;
//   foods["strawberries"] = 27;
//   console.log(foods);


// 14)Змінити об’єкт, вкладений в об’єкт

// let userActivity = {
//     id: 23894201352,
//     date: "January 1, 2017",
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
//   };
//   userActivity.data.online = 45;
//   console.log(userActivity);


// 15)Доступ до назв властивостей із нотацією в дужках

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
//   function checkInventory(scannedItem) {
//     return foods[scannedItem];
//   }
//   console.log(checkInventory("apples"));


// 16)Використовуйте ключове слово delete, щоб видалити властивості об’єкта

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
//   console.log(foods);


// 17)Перевірте, чи має об’єкт властивість

// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
//   function isEveryoneHere(userObj) {
//     if (
//       userObj.hasOwnProperty("Alan") &&
//       userObj.hasOwnProperty("Jeff") &&
//       userObj.hasOwnProperty("Sarah") &&
//       userObj.hasOwnProperty("Ryan")
//     ) {
//       return true;
//     }
//     return false;
//   }
//   console.log(isEveryoneHere(users));


// 18)Перебір ключів об’єкта за допомогою оператора for...in

// function countOnline(usersObj) {
//     let result = 0;
//     for (let user in usersObj) {
//       if (usersObj[user].online === true) {
//         result++;
//       }
//     }
//     return result;
//   }
//   console.log(countOnline(users));


// 19)Створіть масив усіх ключів об’єктів за допомогою Object.keys()

// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function getArrayOfUsers(obj) {
//     return Object.keys(obj);
//   }
//   console.log(getArrayOfUsers(users));


// 20)Змінити масив, що зберігається в об’єкті

// let user = {
//     name: "Kenneth",
//     age: 28,
//     data: {
//       username: "kennethCodesAllDay",
//       joinDate: "March 26, 2016",
//       organization: "freeCodeCamp",
//       friends: ["Sam", "Kira", "Tomo"],
//       location: {
//         city: "San Francisco",
//         state: "CA",
//         country: "USA"
//       }
//     }
//   };
  
//   function addFriend(userObj, friend) {
//     userObj.data.friends.push(friend);
//     return userObj.data.friends;
//   }
//   console.log(addFriend(user, "Pete"));






















