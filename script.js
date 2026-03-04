// script.js

// Display a message in console
console.log("JavaScript is working!");

// Function to change text when button is clicked
function changeText() {
    document.getElementById("message").innerHTML = "Hello Suhas! Welcome to JavaScript.";
}

// Event listener for button click
document.getElementById("btn").addEventListener("click", changeText);