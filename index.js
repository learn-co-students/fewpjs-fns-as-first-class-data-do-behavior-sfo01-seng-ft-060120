/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function displayMessage(msg) {
  console.log(document.querySelector('h1'))
  document.querySelector('h1').innerText = msg
}

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  const time = timeString.split(":")
  const timeHour = time[0]
  if (timeHour < 12){
    return "Good Morning"
  }else if (timeHour >= 12 && timeHour < 17){
    return "Good Afternoon"
  }else{
    return "Good Evening"
  }
}

// function displayMessage(msg) {
//   console.log(document.getElementById('time'))
//   document.getElementById('time').innerText = msg
// }
