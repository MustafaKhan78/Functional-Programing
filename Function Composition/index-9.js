// Function Composition
const f = (x) => x * 2;
const g = (x) => x + 3;

const h = (x) => f(g(x));

console.log(h(5));
