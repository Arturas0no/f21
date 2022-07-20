// Сценарії базового алгоритму

// 1)Перетворіть градуси Цельсія у Фаренгейти

// function convertToF(celsius) {
//     let fahrenheit = celsius * (1.8) + 32;
//     return fahrenheit;
//   }
//   convertToF(30);


// 2)Перевернути рядок

// function reverseString(str) {
//     return str
//       .split("")
//       .reverse()
//       .join("");
//   }


// 3)Розкладіть число на множники

// function factorialize(num) {
//     if (num === 0) {
//       return 1;
//     }
//     return num * factorialize(num - 1);
//   }
//   factorialize(5);


// 4)Знайди найдовше слово в рядку


// function findLongestWordLength(str) {
//     return Math.max(...str.split(" ").map(word => word.length));
//   }
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");


// 5)Повертає найбільші числа в масивах

// function largestOfFour(arr) {
//     const results = [];
//     for (let i = 0; i < arr.length; i++) {
//       let largestNumber = arr[i][0];
//       for (let j = 1; j < arr[i].length; j++) {
//         if (arr[i][j] > largestNumber) {
//           largestNumber = arr[i][j];
//         }
//       }
//       results[i] = largestNumber;
//     }
  
//     return results;
//   }

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// 6)Підтвердьте закінчення

// function confirmEnding(str, target) {
//     return str.slice(str.length - target.length) === target;
//   }
//   confirmEnding("He has to give me a new name", "name");


// 7)Repeat a String Повторити рядок

// function repeatStringNumTimes(str, num) {
//     if (num < 1) {
//       return "";
//     } else {
//       return str + repeatStringNumTimes(str, num - 1);
//     }
//   }
//   repeatStringNumTimes("abc", 3);


// 8)Обрізати рядок

// function truncateString(str, num) {
//     if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   }
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);


// 9)Шукачі Зберігачі

// function findElement(arr, func) {
//     return arr.find(func);
//   }
// findElement([1, 2, 3, 4], num => num % 2 === 0);


// 10)Бу хто

// function booWho(bool) {
//     return typeof bool === "boolean";
//   }
//   booWho(null);


// 11)Заголовний відмінок речення

// function titleCase(str) {
//     const newTitle = str.split(" ");
//     const updatedTitle = [];
//     for (let st in newTitle) {
//       updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
//   }
//   titleCase("I'm a little tea pot");


// 12)Нарізати та зрощувати

// function frankenSplice(arr1, arr2, n) {
//     let localArray = arr2.slice();
//     for (let i = 0; i < arr1.length; i++) {
//       localArray.splice(n, 0, arr1[i]);
//       n++;
//     }
//     return localArray;
//   }
//  frankenSplice([1, 2, 3], [4, 5, 6], 1);


// 13)Фальшивий вишибала

// function bouncer(arr) {
//     return arr.filter(Boolean);
//   }
// bouncer([7, "ate", "", false, 9]);


// 14)Де я належу

// function getIndexToIns(arr, num) {
//     return arr.filter(val => num > val).length;
//   }
// getIndexToIns([40, 60], 50);


// 15)Мутації

// function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }
//   mutation(["hello", "hey"]);


// 16)Кремезна мавпа

// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     while (arr.length > 0) {
//       newArr.push(arr.splice(0, size));
//     }
//     return newArr;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
















