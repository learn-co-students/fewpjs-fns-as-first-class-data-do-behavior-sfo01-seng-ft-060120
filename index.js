/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of displayMessage() */
function displayMessage(text) {
  document.getElementById("greeting").innerText = text;
}

/* Write your implementation of greet() */
function greet(time) {
  const time_parts = time.split(':');
  const parsed_hour = parseInt(time_parts[0]);
  if (parsed_hour < 12) {
    return "Good Morning"
  } else if (parsed_hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}
