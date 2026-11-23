// 1.Even or Odd - This is a arrow function which gives reesult as even or odd, 
// based on the given number.
// const check = (num) => ( num % 2 == 0 ? "Even" : "Odd" );
// console.log(check(4));
// console.log(check(7));
// console.log(check(0));
// console.log(check(4));


// 2. Result Evaluator - This function will return pass,fail or null for invalid marks 
// basedon given marks by comparing it from 0-100
// function evaluateResult(marks) {
//     if(marks < 0 || marks > 100) {
//         return null;
//     } else if(marks >= 50) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// };

// console.log(evaluateResult(75) ?? "Invalid Marks");
// console.log(evaluateResult(40) ?? "Invalid Marks");
// console.log(evaluateResult(120) ?? "Invalid Marks");


// 3.Maximum Finder - This funtion will return the largest of given 3 Nos
// const findMax = (a, b, c) => {
//     let max = a;
//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }
//     return max;
// };

// console.log(findMax(10, 25, 15));
// console.log(findMax(5, 3, 8));
// console.log(findMax(9, 9, 2));

// 4.Accumulator - this functions returns the sum from 1 to n
// function sumToN (num) {
//     if(num == 0) return 0;
//     let sum = 0;
//     for(let i=1;i<=num;i++){
//         sum += i;
//     }
//     return sum;
// };

// console.log(sumToN(5));
// console.log(sumToN(10));

// 5.Multiplication table
// const printTable = function (num) {
//     for(i=1;i<=10;i++){
//         console.log(num, "X", i , "=", num*i);
//     }
// };
// printTable(3);

// 6.Digit Counter
// const countDigits = (num) => {
//     let count = 0;
//     if (num === 0) return 1;
//     while (num > 0) {
//         num = (num - (num % 10)) / 10;
//         count++;
//     }
//     return count;
// };
// console.log(countDigits(1234));
// console.log(countDigits(9));
// console.log(countDigits(10000));

// 7.Number reverser
// const reverseNumber = (num) => {
//     let reverse = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         reverse = (reverse * 10) + digit;
//         num = (num - digit) / 10;
//     }
//     return reverse;
// };

// console.log(reverseNumber(1234));
// console.log(reverseNumber(500));
// console.log(reverseNumber(91));

// 8.Factorial Engine
// const factorial = (num) => {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// };

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));

// 9.Prime Validator
// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(4));
// console.log(isPrime(3));

// 10.Pattern Builder
function printPattern(num) {
    for(i=1;i<=num;i++){
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }

        console.log(pattern);
    }
};
printPattern(4);