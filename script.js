function getSum(a) {
    return function (b) {
        return a += b;
    }
}
let sum = getSum(0);
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));




