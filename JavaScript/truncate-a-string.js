

function truncateString(string, secondN) {
  
    if (string.length > secondN) {
    return string.slice(0,secondN) + "...";
  } else {
    return string;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))



