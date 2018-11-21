// Let's add some more sweet treats(pastries), as well as a "type" property

// let muffin = {
//     type: muffin;
// }

// In additionn to its special properties, every JavaScript object has an internal property called prototype. This is a link (known as reference) to another object. When trying to access another property that does not exist in an object JavaScript tries to find thid=s property in the prototype of this object.

var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anObject.a); 
// will show 2

// the JavaScript statement Object.create() is used to create the object anotherObject based on the prototype object anObject.

// If the prototype of an object does not have a desired property, then the research continues in its own prototype until we get to the end of proototype chain. If the property was found in object, access returns the value undefined.

var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anObject.a); 
// will show 2
console.log(anotherObject.b);
// will be undefined

// This type of relationship between JavaScript objects is called delegation: an object delegates part of its operation to its prototype.

// Cake Prototype

var Pastry = {
    type: "",
    flavor: "",
    layers: 0,
    price: "",
    occasion:"",

    // Describe the pastry

    Describe: function () {
        var descrption = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.layers = 1;
muffin.price = "R20";
muffin.occasion = "breakfast";

var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.layers = 3;
cake.price = "R310";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());

// we create an object named Pastry, which brings together the properties common to all the characters. The cake and muffin are created via Patry as a prototype, which delegates its features to them.
