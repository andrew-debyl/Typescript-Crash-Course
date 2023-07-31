//Basic Types
let age: number = 25;
let hobby: string = "soccer";
let isAdult: boolean = true;
let fruit: any = "apple";

//Arrays
let fruits: string[] = ["apple", "orange"];
let arr: any[] = ["hi", true, 19];
let numArr: number[][] = [[1], [2], [3]];

//Tuples (ordered set of values)
let employee: [number, string] = [13, "jack"];
let employees: [number, string][] = [
  [12, "bob"],
  [2, "joe"],
];

//Custom types
type Car = {
  brand: string;
  year: number;
};

let car1: Car = {
  brand: "lexus",
  year: 2020,
};

//Interface (BETTER THAN CUSTOM TYPES)
interface Car1 {
  brand: string;
  year: number;
}

let car2: Car1 = {
  brand: "lexus",
  year: 2020,
};

//Union
let x: string | number = 22;
let y: string | number = "22";

type occupation = "employed" | "student";
let jackOcc = "student";

//Type Assertion
let i: any = "a";
y = <number>22;

//Functions
function add(x: number, y: number): number {
  return x + y;
}

function doNothing(): void {
  console.log("hi");
}

//Generics
function copyArr<T>(arr: T[]): T[] {
  return [...arr];
}
let numCopy = copyArr<number>([1, 2, 3]);
let stringCopy = copyArr<string>(["1", "2", "3"]);

//Enums
enum EyeColor {
  brown = "Common eye color",
  blue = "Rare eye color",
  green = "Very rare eye color",
}

interface Student {
  name: string;
  age?: number;
  eyeColor: EyeColor;
}

function displayStudent(student: Student): void {
  const info: string =
    student.name + "\n" + student.age + "\n" + student.eyeColor + "\n";
    document.body.innerText = info
}

displayStudent({
    name: 'jack',
    age: 21,
    eyeColor: EyeColor.brown
})