//********************* (Section-9)👉 Arrays in JavaScript  👈******************************/

// When we use var, we can stored only one value at a time.
// When we feel like storing multiple values in one variable 
// instead of var, we will use an Array.

// example 🏳️
// var myFrnd = ["vishal","varun","umang","hidayat"];
// console.log(myFrnd);

// 🙏 if we want to check the length of element of an array?

// var myFrnd = ["vishal","varun","umang","hidayat"];
//  console.log(myFrnd.length);

// 👻 Multidimensional Array 🏳️---> Array inside array is called multidimensional array.
//  var a = [
//       ["vishal",24,"Male","B.TECH"],
//       ["varun",19,"Male","BCA"],
//       ["umang",24,"Male","B.COM"],
//       ["Hidayt",17,"Male","B.A."]
// ];
// console.log(a)

// 1️⃣ Array Subsection 1 👉 Traversal in Array✌️ ****/
// navigate through an array.
// if we want to get the single data at a time and also if we want to change the data.

//  var myFrnd = ["vishal","varun","umang","hidayat"];
//  console.log(myFrnd[1]);

// 🙏 we use for loop to navigate:-
// var myFrnd = ['vishal','varun','umang','hidayat'];
// for( var i=0; i<myFrnd.length; i++){
//     console.log(myFrnd[i])
// }

// 😎 After ES6 we have for..in & for..of loop too ✌️

// 👻 for..in loop 🏳️  
//  for..in loop element ka index return krta hai.

//  var myFrnd = ['vishal','varun','umang','hidayat'];
//  for(let elements in myFrnd){
//   console.log(elements);  // output:- 0 1 2 3
//  }

// 👻 for..of loop 🏳️
//  for..of loop element return krta hai.
//  var myFrnd = ['vishal','varun','umang','hidayat'];
//  for(let elements of myFrnd){
//   console.log(elements);  // output:- vishal varun umang hidayat
//  }

// 👻 forEach() 🏳️
//  isme hum element ko bhi get kr skte hai unke index ko bhi get kr skte hai or wo array bhi get kr skte hai.

// var myFrnd = ['vishal','varun','umang','hidayat'];
//  myFrnd.forEach((element, index, array)=>{
//  console.log(element + " index :" + index + " array :" + array);
//  });

// let array1 = [1,2,3,4,5,6,7,8,9,10];
// let array2 = [];
//   array1.forEach((value)=>{
//   console.log(value);
//   array2.push(value*2);
//  })
//  console.log(array2);

 //          (OR)

//  let array1 = [1,2,3,4,5,6,7,8,9,10];
// let array2 = [];
//    array2 = array1.map((value)=>{
//  return value*2;
//  array2.push(value*2)
// })
//  console.log(array2);

// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 👈

// (1)🙋‍♂️ indexOf("Search iteam",Start)
// ye index no. return krta hai pr ye forward search krta hai. ager kuch match nh kia to return krega negative no. (-1)

//  var a = ['vishal','varun','umang','hidayat'];
//  var b = a.indexOf("umang", 0);
//  console.log(b)  // output:- 2

// (2)🙋‍♂️ lastIndexOf("Search iteam",Start)
// ye index no. return krta hai pr ye backward search krta hai. ager kuch match nh kia to return krega negative no. 

// var a = ['vishal','varun','umang','hidayat'];
// var b= a.indexOf("varun", 0);
// var c = a.lastIndexOf("verma");
// console.log(b)  // output:- 1
// console.log(c)  // output:- -1

// (3)🙋‍♂️ includes("Search item")
// ap jo bhi array dekhre ho usme ap kuch bhi data pass kr re ho kya wo usme included hai ya nh ye hume boolean value return krta hai.

// var a = ['vishal','varun','umang','hidayat'];
// var b = a.includes('varun');
// console.log(b)  // Output:- true

// (4)🙋‍♂️ find(Function Name) :
//   find() method returns the value of the first element in an array that pass a test or remaning element ko negletct krdega.
// ager match nh hoga to ye return krega undefine.

// var ages = [10,23,19,20];
// var b = ages.find(checkAdult);

// function checkAdult(ages){
//   return ages >= 18;
// }
// console.log(b);  // output:- 23
  
// (5)🙋‍♂️ findIndex(Function Name) :
// findIndex() method returns the index of the first element in an array that pass a test.
// ager match nh hoga to ye return krega (-1).

// var ages = [10,23,19,20];
// var b = ages.findIndex(checkAdult);

// function checkAdult(ages){
//   return ages >= 18;
// }
// console.log(b); // output:- 1

// (6)🙋‍♂️ Sort() :
//  sort() method is used for Systmatic way,alphabetical and ascending order.

// var a = ["sanjay","Aman","Rehman","vishal","hidayat"];
// a.sort();
// console.log(a)  // output:- [ 'Aman', 'Rehman', 'hidayat', 'sanjay', 'vishal' ]

// (7)🙋‍♂️ Reverse() :
//   reverse() method reverse the order of the elements in an array

// var a = ["sanjay","Aman","Rehman","vishal","hidayat"];
//  a.reverse();
//  console.log(a) // output:- [ 'hidayat', 'vishal', 'Rehman', 'Aman', 'sanjay' ]

// (8)🙋‍♂️ Concat() :
//  Concat is used for marge two arrays together.
//  var a = [1,2,3]
//  var b = a.concat(4,5)
//  console.log(b)

// (9)🙋‍♂️ Join() :
// Join is used for symbol between all array elements.
// var a = [1,2,3,4]
// var c = a.join(" / ");
// console.log(c)


// 4️⃣ Array Subsection 3 👉 Perform CRUD👈

// (10)🙋‍♂️ pop() :
//  pop() method Array ke last se element ko delete krdega, This method changes the length of the Array.

// var a = ["sanjay","Aman","rehman","vishal"]
//  a.pop("vishal")
// console.log(a)  // output:- [ 'sanjay', 'Aman', 'rehman' ]

// (11)🙋‍♂️ push() :
//  Push() method Array ke last mai element Add krdega, and returns the new length of the array.

// var a = ["sanjay","Aman","rehman","vishal"]
//   a.push("varun")
//   console.log(a)  // output:- [ 'sanjay', 'Aman', 'rehman', 'vishal', 'varun' ]

// (12)🙋‍♂️ shift() :
//  shift() method Sabse first value ko delete krega.

// var a = ["sanjay","Aman","rehman","vishal"]
// a.shift("sanjay");
// console.log(a)  // output:- [ 'Aman', 'rehman', 'vishal' ]

// (13)🙋‍♂️ unshift() :
//  unshift() method Starting mai value Add krega, and returns the new length of the array.

// var a = ["sanjay","Aman","rehman","vishal"]
//  a.unshift("sanjay");
//  console.log(a)  // output:- [ 'sanjay', 'sanjay', 'Aman', 'rehman', 'vishal' ]

// (14)🙋‍♂️ some(function name) :
//   Checks if any of the elements in an array pass a test.
//                 (OR)
//    ager ek bhi array ki value test ko pass krlegi to return krdega true.

// var ages = [10,13,18,20];
// var b = ages.some(checkAdult);
// function checkAdult(age){
//   return age>=18;
// }
// console.log(b);  // output:- true


// (15)🙋‍♂️ every(function name) :
//   jb tk sari value test ko pass nh kregi tb tk ye true return nh krega.

// var ages = [10,13,18,20];
// var b = ages.every(checkAdult);
// function checkAdult(age){
//   return age>=18;
// }
// console.log(b);  // output:- false

// (16)🙋‍♂️ isArray() :
// // The isArray() method is used to check the current variable is array or not.

// var a = [1,2,3,4];
// var b = Array.isArray(a);
// console.log(b)

// (17)🙋‍♂️ toString() :
// // The toString() method converts an array into a string and returns the result.

// var a = ["vishal","varun","umang","hidayat"]
//  a.toString();
//  console.log(a);

// (18)🙋‍♂️ valueOf :
// // The valueOf() method returns the array, it is default function.

// (19)🙋‍♂️ fill() :
//  The fill() method fills all the element in an array with a static value.
// var a = ["vishal","varun","uamng","kavya"];
// a.fill("ram");
// console.log(a); // output:- [ 'ram', 'ram', 'ram', 'ram' ]

// (20)🙋‍♂️ Slice(start, end) :
// // The slice() method returns selected elements in an array, as a new array, The slice() method does not change the original array.
// // ye end value se ek km nikalke deta hai jaise ager humne start 1 se kia or end 4 pe krna hai to ye 3 tk nikalke dega.
// // Or (-) negative value denge to ye backward chlega.

// const fruits =  ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newFruits = fruits.slice(1, 3);
// console.log(newFruits) // output: ---> [ 'Orange', 'Lemon' ]
//                    (OR)
// const fruits =  ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newFruits = fruits.slice(1);
// console.log(newFruits) // output: ---> ["Orange", "Lemon", "Apple", "Mango" ]

// (21)🙋‍♂️ Splice(start-index, howmany-delete,"new-value") method:-
// //  The splice() method adds and/or removes array elements, The splice() method overwrites the original array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits) // output: ---> [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// 😉: challenge Time 🏳️
// (1) Add Dec at the end of an array?
// (2) What is the return value of splice method?// output:-jo bhi data hum delete krte hai ye hue uss element ko return krta hai ek new array mai.
// (3) update march to March?
// (4) Delete June from an Array?

// const months = ['jan','march','Aprail','June','July'];

// sol 1:-
//         const newMonth = months.splice(5,0,"Dec");
//         const newMonth = months.splice(months.length,0,"Dec");
//         console.log(months)  // output:- [ 'jan', 'march', 'Aprail', 'June', 'July', 'Dec' ]

// sol 3:-
//    const indexOfMonth = months.indexOf('march');
//    console.log(indexOfMonth)
//    const updateMonth = months.splice(1,1,"March");
//    console.log(months)  // output:- [ 'jan', 'March', 'Aprail', 'June', 'July' ]

// sol 4:-
// const indexOfMonth = months.indexOf('June')
// console.log(indexOfMonth)
// const delMonth = months.splice(-2,1);
// console.log(months) // output :- [ 'jan', 'march', 'Aprail', 'July' ]


// 5️⃣ Array Subsection 4👉 Map , Filter and Reduce Method 👈

// (22)🙋‍♂️ Map() :
//  Map() Method returns a new array without changing the orignal array. you can attach reduce(), sort(), filter(), after performing a map() method on an Array. ye array 
//  ko return krta hai or for each sirf itrate krta hai return nh krta hai.

// const array1 = [1,4,9,16,25];
// let newArr = array1.map((curElm,index,arr)=>{
//   return curElm > 9;
// });
// console.log(array1);  // output:- [ 1, 4, 9, 16, 25 ]
// console.log(newArr);  // output:- [false, false, false, true, true]

// 😉: challenge Time 🏳️
// 1: Find the square root of each elements in an array?
// 2: Multiply each element by 2 and return only those elements which are greater than 10?

// sol1:
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((currElm)=>{
//     return Math.sqrt(currElm);
// })
// console.log(arrSqr);  // output:- [ 5, 6, 7, 8, 9 ]

// sol2:-
// let arr = [2,3,4,6,8];
// let arr2 = arr.map((curElm)=>{
//   return curElm * 2;
// }).filter((currElm)=>{
//     return currElm > 10;
// }).reduce((accumulator,curElm)=>{
//   return accumulator += curElm;
// })
// console.log(arr2)  // output:- [ 12, 16 ]
//                       output:- [28]

// (23)🙋‍♂️ Filter(Function Name)
//  filter() method creates an array filled with all array elements that pass a test.

// var ages = [10,23,9,20,50]
// var b= ages.filter(checkAdult);

// function checkAdult(ages){
//   return ages>= 18;
// }
// console.log(b)

// (24)🙋‍♂️ Reduce() method

// reduce method() does not chnage the orignal array, it's return a single value.

// let arr = [5,6,2];
// let sum = arr.reduce((accumulator,curElem,index,array)=>{
//         return accumulator += curElem;
// })
// console.log(sum);  // output:- 13


// 👻 flatten an array means to convert the 1d or 2d array into a one dimensional array 🏳️
// const arr = [
//   ['zone1','zone2'],
//   ['zone3','zone4'],
//   ['zone5','zone6'],
//   ['zone7','zone8'],
// ];

// let flatArr = arr.reduce((accum,curElm)=>{
//   return accum.concat(curElm);
// })
// console.log(flatArr)

// 👻 Convert Nested Array into Single Array 🏳️
// const arr = [
//   ['zone1','zone2'],
//   ['zone3','zone4'],
//   ['zone5','zone6'],
//   ['zone7',['zone8','zone9']],
//  ];
// console.log(arr.flat(Infinity));




// //***********************  👻 Now It's Time for Modern JavaScipt 😍😍 ************************* */
