// Iteration:
// function sum(number) {
//     let total = 0;
//     for (i = 0; i < number.length; i++){
//         total += number[i]
//     }
//     return total;
// }

// console.log(sum([0,1,2,3,4]));


// Recursion:
function sum(number) {
    if (number.length == 1) {
        return number[0]
    } else {
        return number[0] + sum(number.slice(1))
    }
}

console.log(sum([0, 1, 2, 3, 4]));