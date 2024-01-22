// Closed Function

function outerFunction(x) {
    function innerFunction(y) {
        return x + y
    }
    return innerFunction;
}

const closureExample = outerFunction(5)
const result = closureExample(3);

console.log(result);