
function sumFibs(num) {
    for (var a = 1, b = 1, sum = 0; a <= num;) {
        if (a % 2 !== 0) sum += a;
        a = (b += a) - a;
    }
    return sum;
}
console.log(sumFibs(10)); 
console.log(sumFibs(4));
console.log(sumFibs(75025));


