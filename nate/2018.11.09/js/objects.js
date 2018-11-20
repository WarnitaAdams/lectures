// What is an object?

// a material that can be seen or touched
// something that as form

// var pen = {
//     color:"black",
//     type:"ballpoint",
//     brand:"bic",
//     crown:"regular"
// }

// What is an object?

// Think about objects in the non-programming sense, like a pen. A pen can have different ink colors, be manufactured by different people, have a different tip, and many other properties.

// Similarly, an object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with the object (the colour of the pen) or action (the pens ability to write).

// What does this have to do with code?

// Object - oriented programming(OOP for short) is a way to write programs using objects. When using OOP, you write, create, and modify objects, and the objects make up your program.

// OOP changes the way a program is written and organized. So far, you've been writing function-based code, sometimes callled the...

// JavaScript and objects

// Like many other languages, JavaScript involves programming objects, so we can say it's an object-orientated langauge. It provides a number of predefined objects while also letting you create your own.

// Creating an object
// Here is the JavaScript representation of a blue Bic ballpoint pen

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log(pen.type); 
console.log(pen.color);
console.log(pen.brand); 

// Create a new object in JavaScript by setting its properties within a pair of curly brackets { ... };

console.log("I have a " + pen.type +  " pen."); 

// Since you now know how to access properties, you can start to combine

/* ===
Lets create a cake in JavaScript that has several properties:
    
    flavor, like vanilla, chocolate, etc.
    price in madibas
    layers(1, 2, 3 ... 10?)

=== */ 

let cake = {
    type : "round",
    occasion : "birthday",
    flavor1 : "chocolate",
    flavor2 : "vanilla",
    frosting : "chocolate",
    topping : "strawberries",
    number : "two",
};


console.log("My cake shall be a " + cake.type, cake.occasion + " cake." + " It will have " + cake.number + " layers. The first layer will be " + cake.flavor1 + " and the second layer will be " + cake.flavor2 + " and the whole cake will be covered in " + cake.frosting + ". There will also be " + cake.topping + " on top of it.");