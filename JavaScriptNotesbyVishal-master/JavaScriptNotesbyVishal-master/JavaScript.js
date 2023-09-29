// //  😎 What is JavaScript 😎?
// (Ans) JavaScript improves the user experience of the web page by converting it from a static page into an interactive one.
//                           (OR)
//       JavaScript adds behaviour to web pages.


//******************** (Section-1)👉 values and variables in JavaScript  👈 ********************/
// Variables:- variables are used to store the data and variables are therr types.
// var => Global and Function scope
// let and const => Block Scope(ES6)

// 1️⃣ VAR:- Redeclare bhi kar skte hai or value assign bhi kr skte hai, Var is Global Scope.
// 2️⃣ LET:- Redeclare nh kr skte pr value assign kr skte hai, Let is Block Scope.
// 3️⃣ CONST:- Dobara declare bhi nh kr skte or na hi value assign kr skte hai, Const is Block scope.


//******************** (Section-2)👉 Data Types in JavaScript 👈 ********************/
// 1️⃣ Primitives:- Undifiend,Boolean,Number,String,BigInt,Symbol.
// 2️⃣ Non-Primitives:-  Array,Objects

//  var x = "vishal";  --->  String
//  var x = 24;        --->  Number
//  var x = true;      --->  Boolean
//  var x = null;      --->  Null
//  var x;             --->  Undefined
//  var x = [1,2,3,4]  --->  Array
//  var x = {first:'jane',last:'doe'} ---> Object

//  BigInt(); ---> BigInt are used to store big integer values that are too big to be represented by a normal JavaScript Number.
//  var previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); ---> 9007199254740991n; 
//  var maxPlusOne = previousMaxSafe + 1n; ---> 9007199254740992n;

//  Symbol(); --->  used to add unique value.
//  var x = Symbol('Hello'); //---> Unique Value
//  var y = Symbol('Hello'); 
//  console.log(x == y) //---> False

//----😎 DataTypes Practice 😎----/

// console.log(10 + "20"); // ---> output:- 1020
// console.log(10 - "20");   // ---> output:- -10
// console.log("java" + "script"); // ---> output:- javascript

//---- ⭐ Interview Question ⭐----/
// Difference between null vs undefined ?
// (1️) null:- isme hum variable define krke usme hum value assign krte hai null.
// var iAmUseless = null;
// console.log(iAmUseless);

// (2️) undefined:- apne koi Variable define krdia pr usme koi value assign nh kia usko undefine khte Hai.
// var iAmStandBy;
// console.log(iAmStandBy);

// What will be the output, when we add a number and string ?
// sol 2:
//  console.log(5 + "vishal") // Output:- 5vishal


//******************** (Section-3)👉 Expressions And Operators in JavaScript 👈********************/

// 😎Expressions:- Combination of Operand And Operator is called Expressions.
//   5 + 20 (5 & 20 = Operand ) (+ = Operator)

// 1️⃣ Assignment Operators:-  An assignment operator assigns a value to its left operand based on the value of its right operand (=)

//  var x = 5;
//  var y = 5;
// console.log(`is both the x and y are equal :${ x == y}`);

// 2️⃣ Arithmetic Operators:- An arithmetic operator takes a numerical values (either variables) as their operands and return a single numerical value.
//   console.log(3+3);  // Addition
//   console.log(10-5); // Subtraction
//   console.log(20/5); // Division
//   console.log(5*6);  // Multiplication
//   console.log(3%3);  // Modulus (Remainder operator)
//   console.log(3**3)  // Exponentiation operator ---> 3*3*3=27

// 🙄 Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// (1) postfix:- The increment operator increments and returns the value before incrementing.(x++)
 //                        (OR)
 // postfix increment operator means the expression is evaluated first using the orignal value of the variable and then the variable is incremented(increased)
//var num = 15;
//var newNum = num++;
//console.log(num);
//console.log(newNum);
// output:- 16
//          15

// (2) prefix:- The increment operator increments and returns the value after incrementing.(++x)
//                         (OR)
// prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable
//var num = 15;
//var newNum = ++num;
//console.log(num);
//console.log(newNum);
// output:- 16
//          16

// 3️⃣ Comparison Operators:- A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!==)
// console.log(a !== b);

// Greater than (>)
// console.log(a > b);

// Greater than or equal (>=)
// console.log(a >= b);

// less than (<)
// console.log(a < b);

// less than or equal (<=)
// console.log(a <= b);


// 4️⃣ Logical Operators:- Logical operators are typically used with Boolean (logical) values;
// when they are, they return a boolean value.

//var a=30;
//var b=-20;

// (1) Logical AND(&&)
// The Logical AND (&&) operator for a set of operands is true if and only if all of its operands are true.
// console.log(a > b && b > 0);

// (2) Logical OR (||)
// The Logical OR (||) operator for a set of operands is true if and only if one or more of its operands are true.
// console.log(a > b || b > 0);

// (3) Logical Not (!)
// The Logical NOT (!) operator takes truth to falsity and vice versa.
// console.log(!(a > b));

// 5️⃣ String Concatenation (Operators):- The concatenation operator (+) concatenates two string values together,
// console.log("vishal" + "raut");

// 6️⃣ Conditional (Ternary) Operators:- The conditional (ternary) operator is the only JavaScript operator that takes three operands.
//    variablename = (condition)? true:false
// var age = 17;
//  if(age>=18){
//   console.log("you are eligible to vote");
//  }else{
//   console.log("you are not eligible to vote")
//  }
//                    OR
//  var age = 17;
// (age>=18)?"you can vote" : "you are not eligible to vote";

// 7️⃣ Nullish Operator (??) 
// The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null 
// or undefined , and otherwise returns its left-hand side operand.

// const foo = null ?? 'default string';
// console.log(foo);
// Expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// Expected output: 0

// 😧 Challenge Time 🏳️
// (1) What Will be the output of 3**3 ? (Exponentiation operator)
// sol 1:
// console.log(3**3); // 3*3*3=27

// (2) write a program to swap two numbers ?
// sol 3:
// var a = 5;
// var b = 10;
// var c = b;
// var b = a;
// var a = c;
// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// (3) write a program to swap two numbers without using third variable ?
// sol 4:
// var a = 5;
// var b = 10;
// var a = a + b;
// var b = a - b;
// var a = a - b;
// console.log(`the value of a is:${a}`);
// console.log(`the value of a is:${b}`);

// 🙋‍♀️🕵️‍♀️ Interview Question 🙋‍♀️🕵️‍♀️
// What is the Diffrence between == vs === ?
// (==) check only value & (===) check value and datatype.
// var num1 = 5;
// var num2 = '5';
// console.log(num1 === num2); // Output:- false


//******************** (Section-4)👉 Statement And Loops 👈********************/

// 1️⃣ If ...Else:- The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy, another statement can be executed.

// var tomr = 'rain';
// if(tomr == ''rain){
// console.log("take a raincoat");
// }else{
// console.log("no need to take raincoat");
// }

// 2️⃣ Switch Statement:- Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

// Find the Area of circle, traingle and rectangle?
// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//  case 'circle':
//     console.log("the area of the circle is : " + PI*r**2);
//     break;
//  case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//       break;
//  case 'rectangle':
//      console.log("the area of the rectangle is : " + (l*b));
//          break;
//   default:
//      console.log("please enter valid data");
//    }

// 3️⃣ Break Statement:- Terminates the current loop.
//                  (OR) 
//    ek bar jb condition fullfill hogyi to break humare switch case ko terminate krdeta hai and bki ke case ko wo check nh krta.

// 4️⃣ Countinue:- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next 
// iteration in the loop.
//                   (OR) 
//  jaise hume 1-10 ke beech mai agr hum continue ko 3 pe lga dete hai to wo continue ko itrate nh krega wo bakio ko print krdega.
// for(let i = 0; i<= 10; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i)
// }

// 5️⃣ While Loop Statement:- phle ye condition ko check kerta hai and then apne scope mai enter krke jo output dena hota hai deta hai,jb condition true hogi tbhi wo block scope mai enter krega otherwise nh krega.

// var num = 10;
// // block scope
// while(num <= 10){
//  console.log(num); // infinte loop
//  num++;
// }

// 6️⃣ Do-While Loop Statement:- chahe condition satisfied ho ya na ho hume output milta hi milta hai sirf ek br ke liy.
// var num = 0;
// do{
//   console.log(num);
//   num++;
// }while(num <= 10);

// 7️⃣ For Loop:- For Loop works like while loop first check condition then execute the code condition flase code will be not execute.
// for(initializer; condition; iteration)
// {
//   // code to be executed
// }

// for(var num = 0; num <= 10; num++){
// console.log(num);
// }

// 8️⃣ Nested Loop:- Loop inside Loops is known as Nested Loop.
// for ( var a = 1; a <= 5; a++){
//  for(var b = 1; b <= a; b++){
//      console.log(b + " ");
//  }
// console.log(<br/>)
// }

// 😧 Challenge Time 🏳️
//  JavaScript program to print table for given number (8)?
// const tableOf =8
// for (let num = 1; num<=10; num++){
//  console.log(`${tableOf}*${num}=${tableOf*num}`);
// }

//********************** (Section-5)👉 Alert, Prompt, Confirm 👈***************************/

// alert(); ---> alert is used to shows the message.
// prompt(); ---> prompt ki help se hum user se input le skte hai.
// confirm(); ---> The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
// The confirm() method returns true if the user clicked "OK", otherwise false.


//********************** (Section-6)👉 Type Conversion in JavaScript 👈**********************/
// (1) How to convert Number, Boolean into String ?
// let type = 4;
// let type = true;
// let newType = String(type);
// console.log(typeof newType) //---> output:- String

// (2) How to convert String, Boolean into Number ?
// let type = "vishal";
// let type = true;
// let newType = Number(type);
// console.log(typeof newType) //---> output:- Number

// (3) How to convert String, Number into Boolean ?
// let type = "vishal";
// let type = 1;
// let newType = Boolean(type);
// console.log(typeof newType) //---> output:- Boolean


//********************** (Section-7)👉 Functions in JavaScript 👈***************************/
// A JavaScript function is a block of code it is used to perform a perticular task.

// 🤔 Why Functions? 
// A Function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.  

// 🆓 How to create a function?
// Before we use a function, we need to define it also called a function declaration and Function Statement, after Defining a function it does not execute.
// A javaScript function is executed when "something" invokes it (calls it). 

// function sum(){  //  <-- Function Definition
//   var a= 10, b= 20;
//   var total = a+b;      
// console.log(total);
// }
// sum();           //  <-- Calling a Function 

// 1️⃣ Function Statement ---> This way of creating a function is called function statement. ---> var b = function a(){}
// 2️⃣ Function expressions ---> "Function expressions simply means a function put it into the variables". ---> var b = function a(){}
//  var funExp = function sum(a,b){
//  var total = a + b;
//  console.log(total);
// }
//  sum(20,30);
//    funExp;

// 3️⃣ Function Parameter Vs Function Arguments
// Function Parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

// function sum(a,b){  // <-- Parameters
//   var total = a+b;
//  console.log(total);
// }
// sum(20,30)          // <-- Arguments

// 4️⃣ Return Keyword ---> When JavaScript reaches a return statement,the function will stop executing.
// function sum(a,b){
//   return total=a+b;
// }
//  var funExp = sum(5,15);
// console.log(funExp);

// 5️⃣ Anonnymous Function ---> A Function without a name is called Anonymous Function. Anonnymous functions are used when the functions are used as values.

//  var funExp = function(a,b){
//   return total=a+b;
// }
//  var sum = funExp(5,15);
// console.log(sum);

// 6️⃣ Callback Function
//  Jb hum kisi ek function mai dusra function as a argument pass krte hai wo Callback function hota hai.
//                                    (OR)
// jb ap kisi function ko after a particular time call kr re ho to wo b Callback function hota hai. 

// function sayHello() {
//     return "Hello, ";
//   }
//   function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
//   }
//   greeting(sayHello, "JavaScript!"); //---> output:- Hello, JavaScript!   

// 7️⃣ Recursive Function ---> A recursive function is a function that calls itself 
// function recurse() {
// console.log("vishal")
//    recurse();
// }
// recurse();

// 8️⃣ Arrow Functions ---> Arrow functions were introduced in ES6.
// 👻 Normal Way of writing Function

//   function sum(){
//      var a=5; b=6;
//      let sum = a+b;
//      return (` the sum of two numbers is ${sum}`)
//  }
// console.log(sum());

// 👻 How to convert in into Fat Arrow Function 🏳️

// const sum = ()=>{
//   var a=10; b=10;
//   return(a+b);
//  }
// console.log(sum());

// 9️⃣ Function Currying:- sum(5)(3)(8)
// Currying is a technique to change a function with multiple arguments into a nested series of functions, each taking a single argument. 
// Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

// // For Example👇
// function sum(num1){
//                            //console.log(num1);
//     return function(num2){
//                            // console.log(num1,num2);
//        return function(num3){
//         console.log(num1,num2,num3);
//        }
//     }
// }
// sum(5)(3)(8);


// 🔟 CallBack Hell --->  Multiple CallBacks within a function is called a callBack Hell.

// setTimeout(()=>{
//     console.log("Work 1️⃣ in done")
//     setTimeout(()=>{
//         console.log("Work 2️⃣ in done")
//         setTimeout(()=>{
//             console.log("Work 3️⃣ in done")
//             setTimeout(()=>{
//                 console.log("Work 4️⃣ in done")
//                 setTimeout(()=>{
//                     console.log("Work 5️⃣ in done")
//                     setTimeout(()=>{
//                         console.log("Work 6️⃣ in done")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// 👻 how can we avoid callback hell in javascript ?🏳️
// (1) by using Promises and async/await
// (2) Splitting the functions 
// (3) by writting comments 


//****🙋‍♀️🙆‍♂️ Interview Question 🙋‍♀️🙆‍♂️****/ 
   
// 1️⃣ Diffrence between Function Statement and function expression ?
// Hoisting is the diffrence between function statement and function expression.
// function statement and function declaration is invoke before creating the function, but function expression are not invoke before creating 
// its show undefined. this is because of the hoisting.

// 2️⃣ Where we use Anonnymous Function is used?
// Anonnymous functions are used when the functions are used as values.

// 3️⃣ High Order Function
//  Jo Function kisi dusre function ko as a argument accept krta hai wo high order function hota hai.

// 4️⃣ What is First Class Function in JavaScript?
// when treating as a value and pass into another function or return from another function is called First Class functions, this ability is called first class function.

// 5️⃣ Diffrence Between Normal Function and Arrow Function?
// Normal Function are invoke before creating the function but arrow function are not invoke before creating its show undefined this is because 
// of the hoisting. Arrow function do not have their own this.

// 6️⃣ Fallback in JavaScript
// // A fallback is code that gets executed when other code fails for some reason, 
// e.g. when a validation fails or a database can't be reached.

// 7️⃣ Default Parameters
// Default Parameters allow named parameters to be initialized with default values if no value is passes.

// function mult(a,b=5){
//   return a*b;
// }
// console.log(mult(5));

// 8️⃣ CALL() ---> With call(), one object can use another objects methods. The call() method takes arguments separately.
//  With the call() method, an object can borrow a method from another object.. 
//  call() method call the functions directly.

// -->Example 1👇
// let userDetails = {
//     name: "vishal",
//     Age: 24,
//     Designation: "Software Engineer",
//     printDetails: function(){
//         console.log(this.name)
//     }
// }

//  userDetails.printDetails();

// let userDetails2 = {
//     name: "varun",
//     Age: 29,
//     Designation: "Software Engineer",
//     // printDetails: function(){
//     //     console.log(this.name)
//     // }
// }
// userDetails.printDetails.call(userDetails2) // ---> function borrowing

// -->Example 2👇
// let userDetails = {
//     name: "vishal",
//     Age: 24,
//     Designation: "Software Engineer",
// }
// printDetails= function(){ // ---> Genric functions
//     console.log(this.name)
// }
//  printDetails.call(userDetails)

// let userDetails2 = {
//     name: "varun",
//     Age: 29,
//     Designation: "Software Engineer",
// }
// printDetails.call(userDetails2) 

// 9️⃣ Apply()  ---> The apply() method accepts arguments in an array, The apply() method takes arguments as an array.

// Example👇
// let userDetails = {
//     name: "vishal",
//     Age: 24,
//     Designation: "Software Engineer",
// }
// printDetails= function(state,country){ // ---> Genric functions
//     console.log(this.name+" "+state+" "+country)
// }
//  printDetails.apply(userDetails,["Delhi","india"])

// let userDetails2 = {
//     name: "varun",
//     Age: 29,
//     Designation: "Software Engineer",
// }
// printDetails.apply(userDetails2,["Delhi","india"]) 

// 🔟 Bind() 
//  With the bind() method, an object can borrow a method from another object.
//  Bind method call method ki trha hi hota hai bus diffrence itna hai ki call mai hum direct function ko call ko krte hai, or bind khta hai ki direct function ko call 
// mt kro uski ek copy bnalo or jb apko lge to usko call krlo..

// Example👇
//   let userDetails = {
//     name: "vishal",
//     Age: 24,
//     Designation: "Software Engineer",
// }
// printDetails= function(state,country){ // ---> Genric functions
//     console.log(this.name+" "+state+" "+country)
// }
// // printDetails.bind(userDetails,"Delhi","india")
    
// let userDetails2 = {
//     name: "varun",
//     Age: 29,
//     Designation: "Software Engineer",
// }
// let newFun = printDetails.bind(userDetails2,"Delhi","india") // ---> function borrowing
//   newFun();



// //***********************  👻 Now It's Time for Modern JavaScipt 😍😍 ************************* */

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏 

// 1️⃣ Template literals (Template strings)

// JavaScript Program to print table for given number(8)?

// for(let num=1; num<=10; num++){
//   let tableOf = 12;
//   console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }
