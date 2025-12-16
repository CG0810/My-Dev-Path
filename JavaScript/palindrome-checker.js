const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};
checkButton.addEventListener("click", () => {
    const userInput = inputField.value;
    if (isPalindrome(userInput)) {
        resultDiv.textContent = `"${userInput}" is a palindrome`;
    } else {
        resultDiv.textContent = `"${userInput}" is not a palindrome`;
    }
})
checkButton.addEventListener("click", () => {
    const userInput = inputField.value;
    if (userInput === "") {
        alert("Please input a value");
    } else if (isPalindrome(userInput)) {
        resultDiv.textContent = `"${userInput}" is a palindrome`;
    } else {
        resultDiv.textContent = `"${userInput}" is not a palindrome`;
    }
})