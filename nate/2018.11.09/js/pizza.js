// Using objects and prototypes create 3 pizzas:+ veggie, halaal and meaty

var Pizza = {
    init: function(base, type, toppings, layers, price, occasion){
        this.base = base;
        this.type = type;
        this.toppings = toppings;
        this.layers = layers;
        this.price = price;
        this.occasion = occasion;
    },

    // describe: function(){
    //     var description = "The " + this.base + " pizza. "
    //     + "The " + this.type + " is a " + this.occasion + " pizza, has a " + this.toppings + " toppings, " + this.layers + " layer(s), and costs " + this.price + ".";
    //     return description;
    // }

    describe: function(){
        var description = "The " + this.base + " pizza is a " + this.type + " pizza .The toppings is, " + this.toppings + " and it has " + this.layers + " layers. The price of the pizza is " + this.price + ". " + this.occasion;
        return description;
   }
};

var veggie = Object.create(Pizza);
veggie.init("thick base", "veggie", "3 cheese and mushroom", 1, "R50", "Pizza all day, everyday!");

var halaal = Object.create(Pizza);
halaal.init("thick base", "meaty", "cheese, mushroom and a saucy chicken", 1, "R60", "Pizza all day, everyday!");

var meaty = Object.create(Pizza);
meaty.init("thick base", "meaty", "cheese, chicken, biltong and bacon", 1, "R70", "Pizza all day, everyday!");

console.log(veggie.describe());
console.log(halaal.describe());
console.log(meaty.describe());

var eat = {
    init: function(utensils, how, extra){
        this.utensils = utensils;
        this.how = how;
        this.extra = extra;
    },

describe: function () {
    var description = "There is absolutly no need for " + this.utensils + ". " + this.how + ". ";
    return description
    }
};

var howTo = Object.create(eat);
howTo.init("a knife and fork", " 1. Grab a slice of pizza. 2. Simply eat the pizza. 3. Enjoy");

console.log(howTo.describe());