// Get the current time
var currentTime = new Date();
var hours = currentTime.getHours();

// Define the greeting based on the time
var greeting;
if (hours < 12) {
    greeting = "Good morning!";
} else if (hours < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

// Display the greeting in an alert box
alert(greeting);
