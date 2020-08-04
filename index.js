/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  
  const timeStringHour = timeString.split(':');

  if (parseInt(timeStringHour[0]) < 12 ) {
    return 'Good Morning';
  }
  if (parseInt(timeStringHour[0]) >= 12 && parseInt(timeStringHour[0]) < 17) {
    return 'Good Afternoon';
  }
  if (parseInt(timeStringHour[0]) >= 17 ) {
    return 'Good Evening';
  } 
}



/* Write your implementation of displayMessage() */

function displayMessage (string) {
  let h1Greeting = document.getElementById('greeting')
  h1Greeting.innerText = string
}