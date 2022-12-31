console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//Exercise 1

let x = window.prompt("I am thinking of a number between 1 and 10. Guess which one.")
if (x < 6) {
  console.log("Too low!")
}
else if (x > 6) {
  console.log("Too high!")
}
else {
  console.log("Congratulations!")
}



//Exercise 2
let birthMonth = window.prompt("What is your birth month?")
switch (birthMonth) {
case 'January':
  console.log("You were born in winter.");
  break;
case 'February':
  console.log("You were born in winter.");
  break;
case 'March':
  console.log("You were born in winter.");
  break;
case 'April':
  console.log("You were born in springtime.");
  break;
case 'May':
  console.log("You were born in springtime.");
  break;
case 'June':
  console.log("You were born in springtime.");
  break;
case 'July':
  console.log("You were born in summer.");
  break;
case 'August':
  console.log("You were born in summer.");
  break;
case 'September':
  console.log("You were born in autumn.");
  break;
case 'October':
  console.log("You were born in autumn (spooky season!)");
  break;
case 'November':
  console.log("You were born in winter.");
  break;
case 'December':
  console.log("You were born in winter.");
default: 'Are you a ghost?'
break;                                                                                                             
}



//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
   default:
     type = "Other"; 
}
switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
case "S":
  size = "Small"
  break;
  case "M":
  size = "Medium"
  break;
  case "L":
  size = "Large"
  break;
  case "XL":
  size = "Extra Large"
  break;
  default:
  size = "One Size Fits All"
}

console.log(`Product: ${size} ${color} ${type}`);