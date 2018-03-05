
// librarySystem tests

var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);


describe("The isPrototypeOf() method checks if an object exists in another \
    object's prototype chain.", function() {

    it("myDog isPrototypeOf dog returns true ", function() {

        var native =        dog.isPrototypeOf(myDog);  // native function returns true
        var alternative =   isPrototypeOf(dog, myDog); // your function does the same

        expect( native ).toBe( alternative );
    });

    it("empty isPrototypeOf dog return false", function() {

        // These two lines, similarly should return the same thing.
        var emptyNative = dog.isPrototypeOf(empty);  // native function returns false
        var emptyAlternative = isPrototypeOf(dog, empty); // your function does the same

        expect( emptyNative ).toBe( emptyAlternative );
    });

    it("empty isPrototypeOf dog return false", function() {

        // This should work too.
        var objectNative = Object.prototype.isPrototypeOf(myDog);  // native function returns true
        var objectAlternative = isPrototypeOf(Object.prototype, myDog); // your function does the same

        expect( objectNative ).toBe( objectAlternative );
    });

    it("empty isPrototypeOf dog return false", function() {

        // This should work too.
        // Also make sure that your function will work for any number of prototype links.
        var deepNative = isPrototypeOf(canine, myDog) // true
        var deepAlternative = Object.prototype.isPrototypeOf(myDog); // true

        expect( deepNative ).toBe( deepAlternative );
    });


});
