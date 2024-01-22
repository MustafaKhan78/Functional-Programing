// Iterative-Function:
// function IterativeFactorial(n) {
//     let product = 1;
//     while (n > 0) {
//         product *= n;
//         n--
//     }
//     return product;
// }

// console.log(IterativeFactorial(3));

// Recursive-Function:
// function RecursiveFactorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * RecursiveFactorial(n - 1);
//     }
// }

// console.log(RecursiveFactorial(3));



// Exercise:
// function iterativeFibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     let previous = 0;
//     let current = 1;
//     for (let i = n; i > 1; i--){
//         let next = previous + current;
//         previous = current;
//         current = next;
//     }
//     return current;
// }

// console.log(iterativeFibonacci(20));

// iterativeFibonacci(2)should return 1
// iterativeFibonacci(6)should return 8
// iterativeFibonacci(10)should return 55
// iterativeFibonacci(20)should return 6765


// Exercise:
// function RecursiveFactorial(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return RecursiveFactorial(n -2) + RecursiveFactorial(n-1);
// }

// console.log(RecursiveFactorial(20));


// RecursiveFactorial(2) should return 1
// RecursiveFactorial(6) should return 8
// RecursiveFactorial(10) should return 55
// RecursiveFactorial(20) should return 6765

