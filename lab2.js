var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function minPositive(numbers) {
    var positives = numbers.filter(function (num) { return num > 0; });
    return positives.length > 0 ? Math.min.apply(Math, positives) : null;
}
console.log(minPositive([1, 2, 3, 4, 5]));
function boolMatrix(stringArray) {
    return stringArray.map(function (row) { return row.map(function (item) { return item.length % 2 !== 0; }); });
}
var exampleArray = [
    ["apple", "banana", "kiwi"],
    ["orange", "peach", "grape"],
    ["strawberry", "melon", "berry"]
];
var boolResult = boolMatrix(exampleArray);
console.log("Результат:");
console.table(boolResult);
function compareDigitSum(tuple) {
    var digitSum = function (num) {
        return num.toString().split('').reduce(function (sum, digit) { return sum + Number(digit); }, 0);
    };
    return digitSum(tuple[0]) === digitSum(tuple[1]);
}
var exampleTuple = [123, 312]; //1+2+3=6 и 3+1+2=6
var areSumsEqual = compareDigitSum(exampleTuple);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0446\u0438\u0444\u0440 \u0447\u0438\u0441\u0435\u043B ".concat(exampleTuple[0], " \u0438 ").concat(exampleTuple[1], " \u0440\u0430\u0432\u043D\u044B: ").concat(areSumsEqual)); //true
var example2Tuple = [123, 321]; //1+2+3=6 и 3+2+1=6
var areSumsEqual2 = compareDigitSum(example2Tuple);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0446\u0438\u0444\u0440 \u0447\u0438\u0441\u0435\u043B ".concat(example2Tuple[0], " \u0438 ").concat(example2Tuple[1], " \u0440\u0430\u0432\u043D\u044B: ").concat(areSumsEqual2)); //true
var example3Tuple = [1234, 4321]; //1+2+3+4=10 и 4+3+2+1=10
var areSumsEqual3 = compareDigitSum(example3Tuple);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0446\u0438\u0444\u0440 \u0447\u0438\u0441\u0435\u043B ".concat(example3Tuple[0], " \u0438 ").concat(example3Tuple[1], " \u0440\u0430\u0432\u043D\u044B: ").concat(areSumsEqual3)); //true
var example4Tuple = [123, 125]; //1+2+3=6 и 1+2+5=8
var areSumsEqual4 = compareDigitSum(example4Tuple);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0446\u0438\u0444\u0440 \u0447\u0438\u0441\u0435\u043B ".concat(example4Tuple[0], " \u0438 ").concat(example4Tuple[1], " \u0440\u0430\u0432\u043D\u044B: ").concat(areSumsEqual4)); //false
var Nucleobases;
(function (Nucleobases) {
    Nucleobases["Adenine"] = "\u0410\u0434\u0435\u043D\u0438\u043D";
    Nucleobases["Guanine"] = "\u0413\u0443\u0430\u043D\u0438\u043D";
    Nucleobases["Cytosine"] = "\u0426\u0438\u0442\u043E\u0437\u0438\u043D";
    Nucleobases["Uracil"] = "\u0423\u0440\u0430\u0446\u0438\u043B";
})(Nucleobases || (Nucleobases = {}));
console.log(Nucleobases.Adenine);
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("\u0418\u043C\u044F: ".concat(pet.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(pet.age, ", \u0413\u043E\u0432\u043E\u0440\u0438\u0442: ").concat(pet.speak()));
}
var dog = new Dog();
var cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);
var leucine = {
    name: "Лейцин",
    base: Nucleobases.Cytosine,
    molecularWeight: 131.17
};
console.log(JSON.stringify(leucine, null, 2));
