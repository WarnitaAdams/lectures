// Up until now, all the code in our programs has been executed chronologically. Let's enrich our code by adding conditional execution!

// What's a condition?
// the state of something with regard to its appearance, quality, or working order. (real world definition...)

// What's a condition?
// Suppose we want to write a program that makes a user enter a number and then dispays a message.
// If the number is positve. Here is the corresponding algorithm.

// Enter a number
// If the number is positve
// Display a message

// If the message should display only if the number is positive: this means it's subject to a condition.

// The if statement

// Example:
// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// }

// Basic syntax:

// If (condition) {
//     Statements executed when the condition is true
// }

// The pair of opening and closing brackets defines what is called a block of code associated with an if statement. This statement represents a test. It can result in the following: "If the condition is true, then execute the instructions contained in the block of code"

// The condition is always placed in parentheses after the if.

// Conditions

// A condition is a expression thst evaluates whether something is true or false. When the value of a condition is true, we say that this condition is satisfied.

// We have already studied numbers and strings, two types of data in JavaScript. Booleans are another type. This type has two possible vaules: true or false.

// Any expressions producing a Booolean value(either true or false) can be used as a condition in an if statement. If associated with it is executed.

// Boolean expressions can be created using the comparison operators.

// === Equal to
// !== Not equal to
// < Less than 
// <= Less than or equal to
// > More than
// => More than or equal to

// var age = Number(prompt("Enter age:"));
// if (age < 12) {
//     console.log(" you are not allowed to watch the movie!");
// }

// if (condition){
//     code to run when the condition is true
// } else {
//     code to run when the condition is false
// }

// var age = Number(prompt("Enter age:"));
// if (age < 12) {
//     console.log(" you are not allowed to watch the movie!");
// } else {
//     console.log(" you are allowed to watch the movie!");
// }

// Nesting condition

// You can go next - level and display a specific message if the entered number is 0. Use the if for a second conditional. See this example, which has a positive test case, negative test case, and a last resort of the number being 0.

// Example
var number = Number(prompt("Enter a number:"));
if (number > 0){
    console.log(number + " is positive");
} else if (number < 0){
    console.log(number + " is negative");
} else{
    console.log(number + " is zero");
}

// Lets write a program, that helps students decide what to wear based on the weather, using if, else or else if:

// var weather = (prompt("What is the weather:"));
// if (weather === "sunny"){
//     console.log("wear short and short sleeve top");
// } else if (weather === "rainy") 
//     console.log("wear a long pants and long top with a jacket");
// } else{
//     console.log(" stay at home");
// }

let weather = prompt("What is the weather?")
if (weather === "sunny"){
    console.log("wear short and short sleeve top");
} else if (weather === "rainy") {
    console.log("wear a long pants and long top with a jacket");
} else{
    console.log(" stay at home");
}