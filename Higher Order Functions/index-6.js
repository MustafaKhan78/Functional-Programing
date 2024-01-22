// Reduce In Functional Programing
function sumArray(numbers) {
    return numbers.reduce((sum, currentNumbers) => {
        return sum + currentNumbers
    }, 0);
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers)

console.log(totalSum);