// While loops

// A while loop lets you repeat code while a certain condition is true.

console.log("start of program");
let number = 1;
while (number <= 1000){
    console.log(number);
    number++
}

console.log("end of program");

// Basic syntax

// while (condition){
//     code to run with the condition is true
// }

// Before each loop itertation (++), the condition in parentheses is evaluated to determine whether it's true or not. The code associated with a loop is called its body!

// If the condition's true, the code in the while loop's body runs. Afterward, the condition is re-evaluated to see if it's still true or not. The cycle continues!

// If the condition is false, the code in the loop stops running or doesnt work.

// Foor loop

// You'll often need to write loops with conditions that are based on what happens in the loop body, like in our example. JaveScript offers another loop type to account for this: the for loop.

// for (initialization; condition; final - expression){
    // code to run when condition is true
// }

// This is a little more complicated than the while loop syntax:

// Initialization only happens once, when the code first kicks off

// The condition is evaluated once before the loop runs each time. If its true, the code runs. If not, the code doesnt run

// The final expression is evaluated after the loop runs each time. It's often used to update a counter variable, as we see in the while loop example.

for (var counter = 1; counter <= 5; counter++){
    console.log(counter);
}

// Which loop should I use?

let letter = "";    
while (letter !== "X"){
    letter = prompt("Type in any letter or X to exit:");
    console.log(letter);
}










