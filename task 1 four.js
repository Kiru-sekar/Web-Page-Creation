// Create a button element
var button = document.createElement("button");
button.textContent = "Click me!";

// Add some basic styling to the button (optional)
button.style.padding = "10px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";

// Add an event listener to change the button color when clicked
button.addEventListener("click", function() {
    // Generate a random color (hex format)
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Set the button's background color to the random color
    button.style.backgroundColor = randomColor;
});

// Append the button to the body of the document
document.body.appendChild(button);
