// Get the msg element
var msg = document.getElementById("timed");

// Initially hide the msg
msg.style.display = "none";

// Use setTimeout to make the msg visible after 5 seconds
setTimeout(function () {
  msg.style.display = "block";
}, 5000); // 5000 milliseconds = 5 seconds

// Get the msg element
var msg = document.getElementById("timed");

// Initially hide the msg
msg.style.display = "none";

// Use setTimeout to make the msg visible after 5 seconds
setTimeout(function () {
  msg.style.display = "block";
  setTimeout(function () {
    msg.style.opacity = "1";
  }, 100); // 100 milliseconds for the browser to render the element before starting the transition
}, 5000); // 5000 milliseconds = 5 seconds

// Get the msg element
var msg = document.getElementById("timed");

// Get the close button element
var close = document.getElementById("close");

// Initially hide the msg
msg.style.display = "none";
msg.style.opacity = "0";

// Use setTimeout to make the msg visible after 5 seconds
setTimeout(function () {
  msg.style.display = "block";
  setTimeout(function () {
    msg.style.opacity = "1";
  }, 100); // 100 milliseconds for the browser to render the element before starting the transition
}, 3000); // 5000 milliseconds = 5 seconds

// When the close button is clicked, hide the msg
close.onclick = function() {
  msg.style.opacity = "0";
  setTimeout(function () {
    msg.style.display = "none";
  }, 1000); // Wait for the transition to finish before hiding the element
}

// Automatically close the msg after 3 seconds
setTimeout(function () {
  close.click();
}, 9000); // 8000 milliseconds = 8 seconds (5 seconds delay + 3 seconds display)