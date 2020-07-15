/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */




function greet(string){
  debugger
  // let parseMe = string.split(':');
  let parseTime = parseInt(string);

  if (parseTime < 12){
    return('Good Morning');
  } else if (parseTime >= 12 && parseTime <= 17){
    return('Good Afternoon')
  } else {
    return('Good Evening')
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.getElementById('greeting').innerText = string;
}