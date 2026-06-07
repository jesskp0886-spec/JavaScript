"use strict";
console.log('------ 1. Print Number from 1 to 10 ------');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('------ 2. Print Number from 10 to 1 ------');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('------ 3. Print Even Number between 1 to 10 ------');
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log('------ 4. Print Odd Number between 1 to 10 ------');
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log('------ 5. Print Name 10 Times ------');
for (let i = 1; i <= 10; i++) {
    console.log('Jiya');
}
console.log('------ 6. Print  Number between 1 to 100 ------');
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log('------ 7. Print Number divisible by 5 between 1 to 50 ------');
for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}
console.log('------ 8. Print Number divisible by 3 & 5 between 1 to 100 ------');
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}
console.log('------ 9. find sum of numbers from 1 to 10 ------');
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum :", sum);
console.log('------ 10. Sum of Even Number from 1 to 50 ------');
let add = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        add += i;
    }
}
console.log("Sum :", add);
console.log('------ 11. Sum of Odd Number from 1 to 50 ------');
let Add = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        Add += i;
    }
}
console.log("Sum :", Add);
console.log('------ 12. Multiplication Table Of 5 ------');
let mul = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${mul} X ${i} = ${mul * i}`);
}
console.log('------ 13. Multiplication Table from 1 to 10 ------');
for (let i = 1; i <= 10; i++) {
    console.log(`=== Table of ${i} ===\t\t`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}\t`);
    }
    console.log();
}
console.log('------ 14. Factorial Of 5 ------');
let fact = 1;
for (let k = 1; k <= 5; k++) {
    fact = fact * k;
}
console.log(`Factorial : ${fact}`);
console.log('------ 15. Count the total digits in a number ------');
let num1 = 123456;
let count = 0;
while (num1 > 0) {
    count++;
    num1 = (num1 - (num1 % 10)) / 10;
}
console.log("Total Digits :", count);
console.log('------ 16. Reverse the number ------');
let num = 46821;
let reverse = 0;
let digit;
console.log(`Actual Number is : ${num}`);
while (num > 0) {
    digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num - digit) / 10;
}
console.log(`Reverse Number is : ${reverse}`);
console.log('------ 17. Find Largest Digit ------');
let max = 0;
let digit1;
for (let A = 85461; A > 0; A = (A - digit1) / 10) {
    digit1 = A % 10;
    if (digit1 > max) {
        max = digit1;
    }
}
console.log("Largest Digit =", max);
console.log('------ 18. Find Smallest Digit ------');
let small = 9;
let digit3;
for (let b = 85461; b > 0; b = (b - digit3) / 10) {
    digit3 = b % 10;
    if (digit3 < small) {
        small = digit3;
    }
}
console.log("Smallest Digit =", small);
console.log('------ 19. Check Palindrome or not ------');
let n = 12321;
let rev = 0;
let d;
for (let org = n; org > 0; org = (org - d) / 10) {
    d = org % 10;
    rev = (rev * 10) + d;
}
if (n == rev) {
    console.log(`${n} is Palindrome`);
}
else {
    console.log(`${n} is not Palindrome`);
}
console.log('------ 20. Check whether a number is an Armstrong number or not ------');
let original = 153;
let sum1 = 0;
let digit2;
for (let num = original; num > 0; num = (num - digit2) / 10) {
    digit2 = num % 10;
    sum1 = sum1 + (digit2 * digit2 * digit2);
}
if (sum1 == original) {
    console.log(sum1, "Armstrong Number");
}
else {
    console.log(sum1, "Not Armstrong Number");
}
