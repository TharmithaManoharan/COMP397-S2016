var objects;
(function (objects) {
    var Person = (function () {
        //constructors
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        //public methods
        Person.prototype.Speaks = function () {
            console.log(this._name + " says hello!");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
function init() {
    console.log("Game started now!");
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map