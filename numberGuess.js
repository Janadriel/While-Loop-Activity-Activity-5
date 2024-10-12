function numberCheck() {
  let number = 3;
  let enter = prompt("Guess a number between 1 and 10:");
  while (enter != number) {
    if(enter < number) {
      alert("Too low")
    } else {
      alert("Too high")
    }
    enter = prompt("Guess a number between 1 and 10:");
  }
  alert("Correct");
}
