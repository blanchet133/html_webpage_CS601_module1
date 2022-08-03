function launchCalc() {
  let continueProgramAns = true;
  showAlert();
  const name = getName();
  name ? welcomeAlert(name) : console.log("no name entered!")
  while (continueProgramAns) {
    const numbers = getNumbers();
    const sum = addNumbers(numbers);
    showSum(numbers, sum);
    sum > 10 ? bigAlert() : smallAlert();
    continueProgramAns = continueProgram();
  }
}

//alerts----------
function showAlert() {
    alert ("Welcome to the calculator page!");
  }
function showSum(numbers, sum) {
  alert(`The sum of ${numbers[0]} and ${numbers[1]} is ${sum}`)
}
function bigAlert() {
    alert ("That is a big number.");
}
function smallAlert() {
    alert ("That is a small number.");
}
function welcomeAlert(name) {
  alert ("Welcome " + name + "!")
} 
//alerts----------

//prompts----------
function continueProgram() {
  let continueProgramAns = prompt("Would you like to continue? (Y/N)");
  if (continueProgramAns.toLowerCase() === "y" || continueProgramAns.toLowerCase() === "yes") {
    return true;
  } else {
    document.getElementById("heading").innerHTML = "Thanks for using the program!";
    document.getElementById("message").innerHTML = "You can refresh the page or navigate away now"
    return false;
  }
}
function getName() {
  let name = prompt("What's your name? ");
  console.log(name)
  if(name) {
    document.getElementById("heading").innerHTML = name;
    return name;
  }
}
  function getNumbers() {
    let numbers = [];
    let number1 = prompt("Enter a number ");
    // check if a number was entered and that it was actually a number
    while(number1 === "" || (isNaN(Number(number1)))){
        number1 = prompt("Invalid input: please try again ");
    }
    numbers.push(Number(number1));

    let number2 = prompt("Enter another number ");
    while(number2 === "" || (isNaN(Number(number2)))){
        number2 = prompt("Invalid input: please try again ");
    }
    numbers.push(Number(number2));
    return numbers;
  }
  //prompts----------

  //calculations----------
  function addNumbers(numbers) {
    return  numbers[0] + numbers[1];
  }
  //calculations----------