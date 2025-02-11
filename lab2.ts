function minPositive(numbers: number[]): number | null {
    const positives = numbers.filter(num => num > 0);
    return positives.length > 0 ? Math.min(...positives) : null;
}
console.log(minPositive([1,2,3,4,5]));

function boolMatrix(stringArray: string[][]): boolean[][] {
    return stringArray.map(row => row.map(item => item.length % 2 !== 0));
}

const exampleArray: string[][] = [
    ["apple", "banana", "kiwi"],
    ["orange", "peach", "grape"],
    ["strawberry", "melon", "berry"]
];
const boolResult = boolMatrix(exampleArray);
console.log("Результат:");
console.table(boolResult);

type NumberTuple = [number, number];

function compareDigitSum(tuple: NumberTuple): boolean {
    const digitSum = (num: number): number => {
        return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    };

    return digitSum(tuple[0]) === digitSum(tuple[1]);
}

const exampleTuple: NumberTuple = [123, 312]; //1+2+3=6 и 3+1+2=6
const areSumsEqual = compareDigitSum(exampleTuple);
console.log(`Сумма цифр чисел ${exampleTuple[0]} и ${exampleTuple[1]} равны: ${areSumsEqual}`); //true

const example2Tuple: NumberTuple = [123, 321]; //1+2+3=6 и 3+2+1=6
const areSumsEqual2 = compareDigitSum(example2Tuple);
console.log(`Сумма цифр чисел ${example2Tuple[0]} и ${example2Tuple[1]} равны: ${areSumsEqual2}`); //true

const example3Tuple: NumberTuple = [1234, 4321]; //1+2+3+4=10 и 4+3+2+1=10
const areSumsEqual3 = compareDigitSum(example3Tuple);
console.log(`Сумма цифр чисел ${example3Tuple[0]} и ${example3Tuple[1]} равны: ${areSumsEqual3}`); //true

const example4Tuple: NumberTuple = [123, 125]; //1+2+3=6 и 1+2+5=8
const areSumsEqual4 = compareDigitSum(example4Tuple);
console.log(`Сумма цифр чисел ${example4Tuple[0]} и ${example4Tuple[1]} равны: ${areSumsEqual4}`); //false

enum Nucleobases {
    Adenine = "Аденин",
    Guanine = "Гуанин",
    Cytosine = "Цитозин",
    Uracil = "Урацил"
}
console.log(Nucleobases.Adenine);

class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak(): string {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label: string = "AngryHunter";
    age: number = 8;

    speak(): string {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name: string = 'Barsik';
    age: number = 2;

    speak(): string {
        return "Miyau!";
    }
}
function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Имя: ${pet.name}, Возраст: ${pet.age}, Говорит: ${pet.speak()}`);
}

const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);

type AminoAcid = {
    name: string;
    base: Nucleobases;
    molecularWeight: number;
};

const leucine: AminoAcid = {
    name: "Лейцин",
    base: Nucleobases.Cytosine,
    molecularWeight: 131.17
};

console.log(JSON.stringify(leucine, null, 2));