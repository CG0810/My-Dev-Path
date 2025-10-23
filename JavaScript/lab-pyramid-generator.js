

function pyramid(str, height, invert) {
  if (!Number.isInteger(height) || height <= 0 || typeof str !== 'string') {
    return "";
  }
  let lines = [];
  const maxWidth = 2 * height - 1; 
  for (let i = 0; i < height; i++) {
    let rowIndex = invert ? height - 1 - i : i;
    let charCount = 2 * (rowIndex + 1) - 1; 
    let spaces = " ".repeat((maxWidth - charCount) / 2); 
    let row = str.repeat(charCount);
    lines.push(spaces + row);
  }
  return "\n" + lines.join("\n") + "\n";
}

