// What is an object?

// a material that can be seen or touched
// something that as form
// A collection of properties within a variable...

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

// let pen = {
//     type: "ballpoint",
//     color: "blue",
//     brand: "Bic"
// };

// console.log(pen.type); 
// console.log(pen.color);
// console.log(pen.brand); 

// Create a new object in JavaScript by setting its properties within a pair of curly brackets { ... };

// console.log("I have a " + pen.type +  " pen."); 

// Since you now know how to access properties, you can start to combine

/* ===
Lets create a cake in JavaScript that has several properties:
    
    flavor, like vanilla, chocolate, etc.
    price in madibas
    layers(1, 2, 3 ... 10?)

=== */ 

// let cake = {
//     type : "round",
//     occasion : "birthday",
//     flavor1 : "chocolate",
//     flavor2 : "vanilla",
//     frosting : "chocolate",
//     topping : "strawberries",
//     number : "two",
//     price : "R300",
// };


// console.log("My cake shall be a " + cake.type, cake.occasion + " cake." + " It will have " + cake.number + " layers. The first layer will be " + cake.flavor1 + " and the second layer will be " + cake.flavor2 + " and the whole cake will be covered in " + cake.frosting + ". There will also be " + cake.topping + " on top of it.");

// Methods on objects

// We had to write lengthy console.log statements each time to show the cake discription. There's a clearer way to accomplish this.

// Adding a method to an object

// Describe a cake

// function descibe(cake){
//     var description = "The " + cake.occasion + " cake has a " + cake.flavor1 + " flavour, " + cake.number + " layers, and costs " + cake.price + ".";
//     return description;
// }

// console.log(descibe(cake));

//  The function describe() takes an object as a parameter. We pass it the cake, and it accessses that object's properties and prints them out in that sentence.

// Now for an alternative approach: creating a describe property

// let cake = {
//     type : "round",
//     occasion : "birthday",
//     flavor1 : "chocolate",
//     flavor2 : "vanilla",
//     frosting : "chocolate",
//     topping : "strawberries",
//     number : "two",
//     price : "R300",

// // Describe the cake
// describe: function (){
//     var description = "The " + this.occasion + " cake has a " + this.flavor1 + " flavor, " + this.layers + " layers, and costs " + this.price + ".";
//     return description;
//     }
// },

// console.log(cake.describe())
// // This cake is actually for a wedding!

// cake.occasion = "wedding";




let cake = {
    flavor: "sweet-vanilla & caramel",
    layers: 5,
    price: "R300",
    occasion: "birthday",

    // Describe the cake

    descibe: function (){
        var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.layers + " layers, and costs " + this.price + ".";
        return description;
    }
};

console.log(cake.descibe());

// The cake is actually for a wedding!
cake.occasion = "wedding";

// Now our object has a new property available to it describe. The value of the property is a function that returns a text description of the cake.

// A property whose value is a function is called a method.

/* ===
Remember the parentheses, even if it's empty, when calling a method.
=== */