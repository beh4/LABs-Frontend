const remainder = (a: number, b: number): number => {
    return a % b;
};

console.log(remainder(10, 3)); //  1
console.log(remainder(25, 7)); //  4

const num: number = 42;
const str: string = "Привет, мир!";
const isTrue: boolean = true;
const array: number[] = [1, 2, 3, 4, 5];
const obj: {name: string, age: number} = { name: "Роман", age: 18 };
const tuple: [string, number] = ["Возраст", 18];

let count: number = 0;
let message: string | null = null;

interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number | null;
    e2?: number;
}
const data: ToJsonStringify = {
    id: 6,
    e1: null,
    e2: 28
};

const jsonData: string = JSON.stringify(data);
console.log(jsonData);