// // Filter In Functional Programing

function filter(predicateFn, array) {
    if (array.length === 0) return [];
    const firstItem = array[0];
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return filteredFirst.concat(filter(predicateFn, array.slice(1)));
}

function isEven(n) {
    return n % 2 === 0;
}

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = filter(isEven, wholes);

console.log(evens);

const odds = filter(n => { 
    return !isEven(n)
}, wholes)

console.log(odds);

const greaterThanFour = filter(n => n > 4, wholes)
console.log(greaterThanFour);


function isprime(n) {
    if (n <= 1) return false;
    const wholes = [0,1,2,3,4,5,6,7,8,9,10];
    const possibleFactors = filter(m => m > 1 && m < n, wholes);
    const factors = filter(m => n % m === 0, possibleFactors);
    return factors.length === 0 ? true : false;
}

const primes = filter(isprime, wholes);

console.log(primes);


