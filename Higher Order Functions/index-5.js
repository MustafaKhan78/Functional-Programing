// Map In Functional Programing
function doubleAll(numbers) {
    return numbers.map((x) => {
        return x * 2
    });
}

const originalNumbers = [1,2,3,4,5];
const doubleNumbers  = doubleAll(originalNumbers);

console.log(doubleNumbers);