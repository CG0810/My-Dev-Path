const getIndexToIns = (aar, num) => {
    const sortedAar = aar.slice().sort((a, b) => a - b);
    for (let i = 0; i < sortedAar.length; i++) {
        if (num <= sortedAar[i]) {
            return i;
        }
    } 
    return sortedAar.findIndex(() => true) + 1;
}
console.log(getIndexToIns([40, 60], 50)); 
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); 
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));   
console.log(getIndexToIns([5, 3, 20, 3], 5));