

function fearNotLetter(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let start = alphabet.indexOf(string[0]);
  let end = alphabet.indexOf(string[string.length - 1]) + 1;
  let newAlphabet = alphabet.slice(start, end);
  for (let i = 0; i < newAlphabet.length; i++) {
    if (string.indexOf(newAlphabet[i]) === -1) {
      return newAlphabet[i];
    }   
}
}

