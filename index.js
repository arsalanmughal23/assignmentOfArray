"use strict";
// Question 1
console.log('>> Q1: Create fruits Array');
let fruits = ['apple', 'banana', 'mango', 'orange'];
console.log('fruits:', fruits, '\n');
// Question 2
console.log('>> Q2: Create numbers Array');
let numbers = [10, 20, 30, 40];
console.log('numbers:', numbers, '\n');
// Question 3
// I have solve this question by 4 differnt methods
console.log('>> Q3: Access 3rd fruit element & saved it into new variable');
let fruitTargetElement = 3;
let thirdFruit1 = fruits[fruitTargetElement - 1];
// let thirdFruit2:string | undefined = fruits.slice(fruitTargetElement-1, fruitTargetElement).shift();
// let thirdFruit3:string | undefined = [...fruits].splice(fruitTargetElement-1, 1).pop();
// let thirdFruit4:string | undefined = fruits.find((value, index) => index == fruitTargetElement-1);
// console.log(thirdFruit1, thirdFruit2, thirdFruit3, thirdFruit4);
console.log('thirdFruit:', thirdFruit1);
console.log('fruits:', fruits);
console.log('\n');
// Question 4
console.log('>> Q4: Change 2nd element of the numbers');
let numberTargetElement = 2;
// console.log(numbers);
numbers.splice(numberTargetElement - 1, 1, 25);
console.log('numbers:', numbers, '\n');
// Question 5
console.log('>> Q5: Add new element (graps) in fruits array at last position');
fruits.push('graps');
console.log('fruits:', fruits);
console.log('\n');
// Question 6
console.log('>> Q6: Remove last element from fruits array & saved it into new variable');
let lastFruit = fruits.pop();
console.log('lastFruit:', lastFruit);
console.log('fruits:', fruits);
console.log('\n');
// Question 7
console.log('>> Q7: Remove first element from fruits array & saved it into new variable');
let firstFruit = fruits.shift();
console.log('firstFruit:', firstFruit);
console.log('fruits:', fruits);
console.log('\n');
// Question 8
console.log('>> Q8: Add new element (kiwi) in fruits array at beginning position');
fruits.unshift('kiwi');
console.log('fruits:', fruits);
console.log('\n');
// Question 9
console.log('>> Q9: Remove 2 elements from the fruits array, starting from index 1');
let removedFruits = fruits.splice(1, 2);
console.log('removedFruits:', removedFruits);
console.log('fruits:', fruits);
console.log('\n');
// Question 10
console.log('>> Q10: Insert elements (pineapple & pear) from index 2 in fruits array');
let newFruits = ['pineapple', 'pear'];
let q10RemovedFruits = fruits.splice(2, 0, ...newFruits);
console.log('newFruits:', newFruits);
console.log('removedFruits:', q10RemovedFruits);
console.log('fruits:', fruits);
console.log('\n');
// Question 11
console.log('>> Q11: Create new array named citrusFruits that contains first 2 elements of fruits array');
let citrusFruits = fruits.slice(0, 2);
console.log('citrusFruits:', citrusFruits);
console.log('fruits:', fruits);
console.log('\n');
// Question 12
console.log('>> Q12: Create new array named lastTwoFruits that contains last 2 elements of fruits array');
let lastTwoFruits = fruits.slice(-2);
console.log('lastTwoFruits:', lastTwoFruits);
console.log('fruits:', fruits);
console.log('\n');
