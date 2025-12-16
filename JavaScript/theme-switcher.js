const themes = [
    { name: "blue", message: "Blue Morning"},
    {name: "red", message: "Red Sleep"}
];
const switcherButton = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const container = document.getElementById("container");


switcherButton.addEventListener("click", () => {
    const isExpanded = switcherButton.getAttribute("aria-expanded") === "true";
    switcherButton.setAttribute("aria-expanded", String(!isExpanded));
    dropdown.hidden = isExpanded;
});
dropdown.querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", () => {
        document.body.classList.add(`theme-${themes[index].name}`);
        container.textContent = `Theme switched to: ${themes[index].message}`;
        switcherButton.setAttribute("aria-expanded", "false");
        dropdown.hidden = true; 
    })});
