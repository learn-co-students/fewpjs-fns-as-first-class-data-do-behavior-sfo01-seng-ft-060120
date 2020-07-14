/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let arr = time.split(':')
  let hour = parseInt(arr[0])

  if(hour >= 0 && hour < 12){
    return "Good Morning"
  }
  if(hour >= 12 && hour < 17){
    return "Good Afternoon"
  }
  else if(hour >= 17 && hour < 24){
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  const testContent = "TEST"
  let content = document.getElementById('greeting')
  if(greeting == undefined){
    content.innerText = testContent
  }  
  else{
    content.innerText = greeting
  } 
}