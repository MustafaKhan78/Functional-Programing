// Example 1

// // Normal function
// function add(x, y) {
//     return x + y;
// }

// // Curried function
// function curryAdd(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// // Usage
// const sum = add(2, 3); // Normal function call
// const curriedSum = curryAdd(2)(3); // Curried function call

// console.log(sum); // Output: 5
// console.log(curriedSum); // Output: 5


// Example 2

// function volume(length, width, heigth) {
//     return length * width * heigth;
// }

// // Curried function
// function curryVolume(length) {
//     return (width) => {
//         return (heigth) => {
//             return length * width * heigth;
//         };
//     };
// }

// const normalVolume = volume(2,3,4)
// const currirdVolume = curryVolume(2)(3)(4)

// console.log(normalVolume);
// console.log(currirdVolume);