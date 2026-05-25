console.log("~~~~~~~~~~ 1. Declare & Display ~~~~~~~~~~");

let Name: string = "Jiya";
let age: number = 21;
let city: string = "Surat";

console.log(`Name : ${Name}`);
console.log(`Age : ${age}`);
console.log(`City : ${city}`);

console.log();
console.log("~~~~~~~~~~ 2.Two numbers (+, -, *, /) ~~~~~~~~~~");

let a : number = 5;
let b : number = 2;

let add : number = a + b;
let sub : number = a - b;
let multi : number = a * b;
let div : number = a / b;
console.log(`a = ${a}, b = ${b}`);
console.log(`Addition : ${add}`);
console.log(`Subtraction : ${sub}`);
console.log(`Multiplication : ${multi}`);
console.log(`Division : ${div}`);


console.log();
console.log("~~~~~~~~~~ 4.Find Square and cube ~~~~~~~~~~");

let c : number = 3;
let square : number = c * c;
let cube : number = square * c;
console.log(`Number = ${c}`);
console.log(`Square : ${square}`);
console.log(`Cube : ${cube}`);

console.log();
console.log("~~~~~~~~~~ 5.Calculate Area of Rectangle ~~~~~~~~~~");

let len : number = 30;
let wid : number = 15;
let totalArea : number = len * wid;
console.log(`Length = ${len}, Width = ${wid}`);
console.log(`Area of rectangle : ${totalArea}`);


console.log();
console.log("~~~~~~~~~~ 6.TypeScript data type ~~~~~~~~~~");

let d : number = 5;
let e : string = "HELLO WORLD !";
let f : boolean = true ;

console.log(`a.Number : ${d}`);
console.log(`b.String : ${e}`);
console.log(`c.Boolean : ${f}`);


console.log();
console.log("~~~~~~~~~~ 7. Use of 'any' data type ~~~~~~~~~~");

let g : any = 101010;
let h : any = ["book" ,"pen","laptop"];

console.log(`Numbers : ${g}`);
console.log(`Array : ${h}`);


console.log();
console.log("~~~~~~~~~~ 8. Convert string into number and add ~~~~~~~~~~");

let value : string = "250";
let num : number = Number(value);
let sum : number = num + 50;
console.log(`String value = ${value}`);
console.log(`Result : ${sum}`);


console.log();
console.log("~~~~~~~~~~ 9. convert number into string and display type ~~~~~~~~~~");

let nums : number = 500;
let str : string = String(nums);
console.log(`Number = ${nums}`);
console.log(`Convert Value : ${str}`);
console.log(`Type : ${typeof str}`);


console.log();
console.log("~~~~~~~~~~ 10.Two string numbers addition ~~~~~~~~~~");

let str1 : string = "100";
let str2 : string = "200";
console.log(`Number 1 = ${str1}, Number 2 = ${str2}`);
let num1 : number = Number(str1);
let num2 : number = Number(str2);
let addition : number = num1 + num2;

console.log(`After conversion Addition : ${addition}`);


console.log();
console.log("~~~~~~~~~~ 11. All Arithmetic Operator use ~~~~~~~~~~");

let x : number = 5;
let y : number = 2;
console.log(`X = ${x}, Y = ${y}`);
console.log(`Addition : ${x + y}`);
console.log(`Subtraction : ${x - y}`);
console.log(`Multiplication : ${x * y}`);
console.log(`Division : ${x / y}`);
console.log(`Modulo : ${x % y}`);


console.log();
console.log("~~~~~~~~~~ 12. Swap Two number with third varible ~~~~~~~~~~");

let j : number = 10;
let m : number = 20;
console.log(`Before swap : a = ${j}, b = ${m}`);
let temp : number = j;
j = m;
m = temp;

console.log(`After swap : a = ${j}, b = ${m}`);


console.log();
console.log("~~~~~~~~~~ 13. Swap Two number without third varible ~~~~~~~~~~");

let n : number = 10;
let k : number = 20;
console.log(`Before swap : a = ${n}, b = ${k}`);

n = n + k;
k = n - k;
n = n - k;

console.log(`After swap : a = ${n}, b = ${k}`);


console.log();
console.log("~~~~~~~~~~ 14.Grade calculation ~~~~~~~~~~");

let marks1 : number = 85;
let marks2 : number = 74;
let marks3 : number = 50;

if(marks1 >= 80){
    console.log(`Marks : ${marks1} | Grade : A`);    
}
else if (marks1 >= 60){
    console.log(`Marks : ${marks1} | Grade : B`);    
}
else{
    console.log(`Marks : ${marks1} | Grade : C`);    
}

if(marks2 >= 80){
    console.log(`Marks : ${marks2} | Grade : A`);    
}
else if (marks2 >= 60){
    console.log(`Marks : ${marks2} | Grade : B`);    
}
else{
    console.log(`Marks : ${marks2} | Grade : C`);    
}

if(marks3 >= 80){
    console.log(`Marks : ${marks3} | Grade : A`);    
}
else if (marks3 >= 60){
    console.log(`Marks : ${marks3} | Grade : B`);    
}
else{
    console.log(`Marks : ${marks3} | Grade : C`);    
}


console.log();
console.log("~~~~~~~~~~ 15.Electicity Bill calculation ~~~~~~~~~~");

let unit1 : number = 150;
let bill : number;

if(unit1 <= 100){
    bill = unit1 * 5;
}
else{
    bill = (100 * 5) + ((unit1 - 100) * 8);
}
console.log(`Unit Consumed : ${unit1}`);
console.log(`Total Bill : ${bill}`);


console.log();
console.log("~~~~~~~~~~ 16.Employee salary calculation ~~~~~~~~~~");

let basicSalary : number = 15000;

let totalSalary = basicSalary + (basicSalary * 10/100) + (basicSalary * 5/100);
console.log(`Basic Salary : ${basicSalary}`);
console.log(`Total Salary : ${totalSalary}`);


console.log();
console.log("~~~~~~~~~~ 17.Eligiblity check for voting ~~~~~~~~~~");
let Age : number = 20;
console.log(`Age : ${Age}`);

if(Age >= 18){
    console.log(`You are eligile for voting..!!`);    
}
else{
    console.log(`You are not eligible for voting..`);    
}

console.log();
console.log("~~~~~~~~~~ 18.Discount calculation ~~~~~~~~~~");

let purchase : number = 10000;
let disc : number;
let total : number;

console.log(`Purchase : ${purchase}`);
if(purchase >= 5000){
    disc = purchase * 15/100;
    total = purchase - (purchase * 15/100);
    console.log(`Discount : ${disc}`);
    console.log(`Total : ${total}`);
    
}
else{
    disc = purchase * 5/100;
    total = purchase - (purchase * 5/100);
    console.log(`Discount : ${disc}`);
    console.log(`Total : ${total}`);
}


console.log();
console.log("~~~~~~~~~~ 19.Convert Celsius into Fahrenheit ~~~~~~~~~~");

let celsius : number = 30;
let fahrenheit : number = (celsius * 9/5) + 32;

console.log(`Celsius : ${celsius}`);
console.log(`Fahrenheit : ${fahrenheit}`);


console.log();
console.log("~~~~~~~~~~ 20.Convert minutes into hours and minutes ~~~~~~~~~~");

let totalMinutes : number = 135;
let hours : number = totalMinutes / 60;
let minutes : number = totalMinutes % 60;

console.log(`Total Minutes : ${totalMinutes}`);
console.log(`Hours : ${hours}`);
console.log(`Minutes : ${minutes}`);









