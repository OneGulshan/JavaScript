//***************************** (Section-11)👉 Objects in JavaScript 👈**********************************/

// 1️⃣ Objects :
//  In real Life, a car is an object.
//  A car has properties like weigth and color, and methods like start and stop.

// You have already learned that JavaScript variables are containers for data values.
// Objects are variables too. But Objects can contain many values.

// // For Example👇
// const car = {
//       type:"fiat",
//       model:"500",
//       color:"white"
// };
// console.log(car.type) // output:- fiat

// 👻 How to Add or delete in Objects:-🏳️
// const a = {
//    name : "Ram",
//    age : 25,
// }
//   a.name = "Siya-Ram" // ---> Add
//   delete a.age        // ---> Delete
//  console.log(a)

// 👻 Array of Objects 🏳️

// // For Example👇
// var student = [
//   {name : "Ram", age : 15},
//   {name : "Vishal", age : 24},
//   {name : "Varun", age : 24},
// ];
// console.log(student);

// 🙋‍♂️ Print in a Loop :
// for( a=0; a<student.length; a++){
//    console.log(student[a])
// }

// 2️⃣ Objects Properties:-  Properties are the values associated with a JavaScript object. 
//  The syntax for accessing the property of an object is:---> person.age

// 3️⃣Objects Methods:- JavaScript methods are actions that can be performed on objects, A JavaScript method is a property containing a function 
// definition.

// // Example👇
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// 4️⃣ This Keyword : 
// This keyword indicate krta hai same object ko .
// This keyword ka use hum object ki values ko access krne ke liy krte hai.
// This is used in Objects MEthods.
// Alone this refers to the global objects.


// 8️⃣ Object Constructor: ---> Constructor is used to create a object. 

// function Person(name,age,salary){ // ---> Constructor function first alphabet is capital is the sign to analize the constructor function....
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// 9️⃣ New Keyword: ---> The new keyword is used to create a object from a constructor function.

// function Person(name,age,salary){ // ---> Constructor function first alphabet is capital is the sign to analize the constructor function....
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// // Create an object
// var obj = new Person("vishal",24,50000);
// // Display the result
// console.log(obj.name)


// 🔟 Object getter and setter:
// 




//********************* (Section-12)👉 Math Object in JavaScript 👈 *************************/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

//**** 👉JavaScript Math Methods 👈****/ 

// (*) Math.PI                   (*) Math.ceil()  
// (*) Math.pow(x,y)             (*) Math.floor()                  
// (*) Math.sqrt()               (*) Math.min()      
// (*) Math.abs()                (*) Math.max()       
// (*) Math.random()             (*) Math.round() 
// (*) Math.trunc()              (*) Math.cbrt() 
      
                
// (1) Math.PI; 🙋‍♂️
//  it's a property not a method.
// console.log(Math.PI);  // output:- 3.14

// (2) Math.round(); 🙋‍♂️
// returns the value of x rounded to its nearest integer.
// let num = 10.400;
// console.log(Math.round(num)); // output:- 10

// let num2 = 10.500;
// console.log(Math.round(num2)); // output:- 11

// (3) Math.pow(); 🙋‍♂️
//  Math.pow(x,y) returns the value of x to the power of y.

// console.log(Math.pow(2,3));  // output:- 8

// (4) Math.sqrt(); 🙋‍♂️
//  Math.sqrt(x) returns the square root of x.

// console.log(Math.sqrt(25));  // output:- 5
// console.log(Math.sqrt(81));  // output:- 9

// (5) Math.abs(); 🙋‍♂️
//  Math.abs(x) convert negative value into positive value.

//  console.log(Math.abs(-10));  // output:- 10

// (6) Math.ceil(); 🙋‍♂️
//  Mtah.ceil(x) ye ek increment krke value return krta hai.

// console.log(Math.ceil(10.1));  // output:- 11

// (7) Math.floor(); 🙋‍♂️
//  ye (.) point ke aage ki value return krta hai humesha.

// console.log(Math.floor(10.50));  // output:- 10

// (8) Math.min(); 🙋‍♂️
//  Math.min() can be used to find the lowest value in a list of arguments.

// console.log(Math.min(0,150,30,-8,20,-200));  // output:- -200

// (9) Math.max(); 🙋‍♂️
//  Math.max() can be used to find the highest value in a list of arguments.

// console.log(Math.max(0,150,30,-8,20,-200));  // output:- 150

// (9) Math.random(); 🙋‍♂️
//  Math.random() returns a random number between 0 and 1.

// console.log(Math.random());  // 0 to 1
// console.log(Math.random()*10);  // 0.0 to 9.0
// console.log(Math.floor(Math.random()*10));  // 0 to 9

// (10) Math.trunc(); 🙋‍♂️
//  The trunc() method return the integer part of a number.

// console.log(Math.trunc(4.7));  // output:- 4
// console.log(Math.trunc(-99.1)); // output:- -99


