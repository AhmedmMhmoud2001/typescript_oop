var Animal = /** @class */ (function () {
    //constructor
    function Animal(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
    //properties
    Animal.prototype.getPrice = function () {
        return this.width * 10 * this.width / 18;
    };
    return Animal;
}());
var animal = new Animal("dog", 20, 15);
console.log(animal.getPrice());
