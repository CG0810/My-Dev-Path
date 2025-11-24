const text = document.getElementById("text-input");
const counter = document.getElementById("char-count");
text.addEventListener("input", () => {
  const charCount = text.value.length;
  counter.innerHTML = `Character Count: ${charCount}/50`;
  if (text.value.length >= 50) {
    text.value = text.value.slice(0, 50);
    counter.style.color = "red";  
  } else {
    counter.style.color = "black";
  } 
});


