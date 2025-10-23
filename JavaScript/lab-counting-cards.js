
let count = 0; 
function cc(card) {
  
  if ([2, 3, 4, 5, 6].includes(card)) {
    count++;
  } else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count--;
  }
  return count + (count > 0 ? " Bet" : " Hold");
}
count = 10
console.log(cc(5))

