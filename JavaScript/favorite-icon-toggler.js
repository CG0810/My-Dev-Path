const icons = document.querySelectorAll(".favorite-icon");
icons.forEach(function(icon) {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("filled")) {
      icon.classList.remove("filled");
      icon.innerHTML = "&#9825;"; // empty heart
    } else {
        icon.classList.add("filled"); 
        icon.innerHTML = "&#10084;"; // filled heart   
    }   
    });
});
