

function largestOfAll(arrayOfArrays) {
 let largestNumbers = [];
 for (let i = 0; i < arrayOfArrays.length; i++) {
   let largestNumber = arrayOfArrays[i][0];
   for (let j = 1; j < arrayOfArrays[i].length; j++) {
     if (arrayOfArrays[i][j] > largestNumber) {
       largestNumber = arrayOfArrays[i][j];
     }
   }
   largestNumbers.push(largestNumber);
 } return largestNumbers; 
}

