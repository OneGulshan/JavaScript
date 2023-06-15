// document.write("Hello Bro!!<br>");//1 //Statements

// document.write("<i>Hii</i><br>")//3

// var z = 'Hello Ram';//5
// z = "Hello Shyam";
// //let z = "Gulshan";

// document.write(z, "</br>");//7
// var x = 'Y';
// x = -36.89;
// x = false;
// x = undefined;
// x;
// x = ["Html", "CSS", "JS"];
// x = {
//     name : "Gulshan Kumar",
//     country : "India"
// }
// document.write(x, "<br>");
// document.write(typeof x, "<br>");

// var a, b, c;//8
// a = 200; b = 20; c = a / b; c = a * b; c = a + b; c = a - b; c = a ** b;  c = a % b; a++; a--; c = a + b; c = (a + b) * 2;
// document.write(c, "<br>");

// var d = 10, e = 3;//9
// d **= e;//d = e; d += e; d -= e; d *= e; d /= e; d %= e; d **= e;
// document.write(d + "<br>");

// console.time("Test");//10
// console.log(d);
// console.table([1,2,3]);
// console.error("Something went wrong.");
// console.warn("This is just warning.");
// console.timeEnd("Test");
// console.clear();

// var a = 10;//11
// var b = "10";
// console.log(a==b);
// console.log(a===b);
// console.log(2!=='2');
// console.log(20 > 20);
// console.log(20 >= 20);
// console.log(20 <= 20);
// console.log(null == undefined);
// console.log(null === undefined);//null means a value type but undefined means no value

// var x = 15;//12
// if(x>10){
//     console.log("X is Greater");
// }

// var age = 20;//13
// if(age >= 18 && age <= 21){
//     console.log("Yes you are eligible");
// }
// var age = 22;
// if(age >= 18 || age <= 21){
//     console.log("Yes you are eligible");
// }
// console.log(!age >=20 );

// var x = 15;//14
// if(x>30){
//     console.log("X is Greater");
// }
// else{
//     console.log("X is Smaller");
// }

// var per = 10;//15
// if(per >= 80 && per < 100){
//     console.log("You are in Merit.");
// }
// else if(per >= 60 && per < 80){
//     console.log("You are in Ist Division.");
// }
// else if(per >= 45 && per < 60){
//     console.log("You are in IInd Division.");
// }
// else if(per >= 33 && per < 45){
//     console.log("You are in IIIrd Division.");
// }
// else if(per < 33){
//     console.log("You are Fail.");
// }
// else{
//     console.log("Please Enter Valid Percentage");
// }

// var x = 15;//16
// var z;
// // (x > 10)? z = "True" : z = "False";
// z = "Value is " + (x > 10 ? "True" : "False");//making Ternary statement short here with message
// console.log(z);

// var day = 3;//17
// switch (day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//         case 2:
//             console.log("Today is Tuesday");
//         break;
//         case 3:
//             console.log("Today is Wednesday");
//         break;
//         case 4:
//             console.log("Today is Thursday");
//         break;
//         case 5:
//             console.log("Today is Friday");
//         break;
//         case 6:
//             console.log("Today is Saturday");
//         break;
//         case 7:
//             console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Enter the valid Week Day")
//         break;
// }
// var age = 25;
// switch (true) {
//     case (age >= 15 && age <= 20):
//         console.log("You are Eligible");
//         break;
//     case (age >= 21 && age <= 30):
//         console.log("You are Not Eligible");
//         break;
//     default:
//         console.log("Enter the valid Age.")
//         break;
// }

// // var a = 30;//18
// // var b = 20;
// // if(a > b){
// //     alert(a + " is Greater");
// // }
// // else{
// //     alert(b + " is Greater")
// // }
// //var a = confirm("Do you like our Website ?");//19
// // if(a){
// //     alert("Thanks");
// // }
// // else{
// //     alert("Sorry");
// // }
// // var a = prompt("What is your Name ?");//20
// // alert("Hello " + a)

// function hello(){//21
//     document.write("Hello EveryBody" + "<br>");
// }
// hello();
// hello();
// hello();

// function sum(a = 0, b = 0){//22 //0 is default value for ignoring NaN values
//     document.write(a + b + "<br>");
// }
// sum();
// sum(10,30);//here Overriding a and b variable values
// sum(30,50);
// function FullName(fname = "Gulshan", lname = "Kumar"){
// document.write("Hello " + fname + " " + lname + "<br>");
// }
// FullName("Sahil", "Mahor")

// function fullName(fname, lname){//23
// var a = "Hello " + fname + " " + lname + "<br>";
// return a;
// }
// document.write(fullName("Gulshan", "Kumar"));
// function Sum(math, eng, sc){//Percentage calculating using JS
// var s = math + eng + sc;
// return s;
// }
// function Percentage(tt){
//     var per = tt/300 * 100;
//     document.write(per + "<br>");
// }
// var total = Sum(55, 66, 77);
// Percentage(total);//Note:- After Calculating Sum Total Passing in Percentage method for calculating Percentage simple

// var a = "Gulshan Kumar" + "<br>";//24
// function call(){
//     var a = "Akash Padhak" + "<br>";
//     document.write(a);
// }
// call();
// document.write(a);

// function Alert(){//25
// alert("Hello Everyone")
// }

// var Number = [];//26
// var a = 10;
// while(a >= 1){
//     Number.push(a);
//     a--;
// };
// document.write(Number.join(", ") + "<br>");

// Numbers = [];//27
// var a = 1;
// do{
//     Numbers.push(a);
//     a++;
// }
// while(a >= 10);//after condition false statement is terminated
// document.write(Numbers.join(", ") + "<br>");

// Numbers = [];//28
// for(var a = 1; a <= 10; a++){
// Numbers.push(a);
// }
// document.write(Numbers.join(", ") + "<br>");

// Numbers = [];//29
// for(var a = 1; a <= 10; a++){
//     if(a == 3){
//         continue;
//     }
//     Numbers.push(a);
// }
// document.write(Numbers.join(", ") + "<br>");

// var evenNumbers = [];//30
// for (var a = 1; a <= 10; a++) {
//     if (a % 2 == 0) {
//         evenNumbers.push(a);
//     }
// }
// document.write(evenNumbers.join(", ") + "<br>");
// var oddNumbers = [];
// for (var a = 1; a <= 10; a++) {
//     if (a % 2 != 0) {
//         oddNumbers.push(a);
//     }
// }
// document.write(oddNumbers.join(", ") + "<br>");

// var Number = [];//31
// for (var a = 1; a <= 100; a = a + 10) {
//   for (var b = a; b < a + 10; b++) {
//     Number.push(b);
//     if (b < a + 9) {
//       Number.push(", ");
//     }
//   }
//   Number.push("<br>");
// }
// document.write(Number.join("") + "<br>");

// for(var i = 1; i <= 5; i++){//5 bar loop chalega
//     for(var j = 1; j <= i; j++){//har row ki starting 1 se hogi, jitna i hai utni baar j chalega
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// for(var i = 1; i <= 5; i++){
//     for(var j = 1; j <= i; j++){
//         document.write(i + " ");//same loop only changing printing value by i
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// for(var i = 5; i >= 1; i--){
//     for(var j = 1; j <= i; j++){
//         document.write(i + " ");//last loop reverce printing
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// for(var i = 5; i >= 1; i--){
//     for(var j = i; j >= 1; j--){
//         document.write(j + " ");//start with 5,4,3,2,1 end with 1
//     }
//     document.write("<br>");
// }

// // var array = [10, 20, 30, 40, 50]//33
// var array = [10, "Gulshan", true, null, 23.67]
// document.write(array[0], " ", array[2] + "<br>");
// var sum = 0;
// document.write("<ul>");
// for(var a = 0; a < 5; a++){
//     document.write("<li>"  + array[a] + "</li>");
//     // sum = sum + array[a];
// }
// document.write("</ul>");
// // document.write("Total Sum : " + sum);

// // var array = new Array(3);//34
// // array[0] = "Gulshan";
// // array[1] = true;
// // array[2] = 10;
// // for(var g = 0; g < 3; g++){
// //     array[g] = prompt("Enter the Value : ");//In Array getting values from user
// // }
// // array.push(array);
// // document.write(array.join(", ").replace(/,\s*$/, "") + "<br>");

// var array = [//35
//     ["Harry", 18, "Male", "B.Com"],
//     ["Sunny", 19, "Male", "BCA"],
//     ["Sarah", 18, "Male", "BCA"],
//     ["Tom", 17, "Male", "B.A"],
//     ["Gulshan", 27, "Male", "MCA"]
// ];
// // document.write(array.length);//for automatic detecting array length
// document.write("<table border='1px' cellspacing='0'>");//If outer side used double comma inner side use single commas always
// for(var a = 0; a < array.length; a++){
//     document.write("<tr>");
//     for(var b = 0; b < array[a].length; b++){//array[a].length for perticular row length detecting
//         document.write("<td>" + array[a][b] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>" + "<br>");
// // document.write(array[0][0]);//First index for perticular row , Second index for perticular column

// var array = ["Gulshan", 27, "Male", "MCA"];//36
// document.write(array + "<br>");
// array[0] = "Ankit";//For array perticular index element Modifing
// document.write(array + "<br>");
// delete array[1];//delete keyword in array used for removing perticular element of array from index, not deleted index by delete keyword
// document.write(array + "<br>");

// var array = ["Gulshan","Ankit","Sumit","Pankaj"];//37
// document.write(array + "<br>");
// array.sort();
// document.write(array + "<br>");
// array.reverse();
// document.write(array + "<br>");

// var array = ["Gulshan","Ankit","Sumit","Pankaj"];//38
// document.write(array + "<br>");
// array.pop();
// document.write(array + "<br>");
// array.push("Akhil");
// document.write(array + "<br>");

// var array = ["Gulshan","Ankit","Sumit","Pankaj"];//39
// document.write(array + "<br>");
// array.shift();
// document.write(array + "<br>");
// array.unshift("Akash");
// document.write(array + "<br>");

// var a = ["Gulshan","Ankit","Sumit"];//40
// document.write(a + "<br>");
// // var b = a.concat("Kamlesh","Pankaj");
// var b = ["Kamlesh","Pankaj"];
// var c = ["Radhika","Akansha","Anamika"];
// var d = b.concat(a,c)
// document.write(d + "<br>");
// var d = d.join(" <br> ");//Its a single string//-,/,$ etc.
// document.write(d + "<br>");

// var a = ["Sanjay","Aman","Rehman","Rahul","Karan"];//41
// document.write(a + "<br>");
// var b = a.slice(1, 4);//Here 4 tak nikalna hai 4 nahi nikalna, if we not define end value its auto gotcha
// document.write(b + "<br>");
// var c = a.slice(-4, -1);//array index writen from left to right like -5, -4, -3, -2, -1, but slice cut same from right to left
// document.write(c + "<br>");
// // a.splice(2, 0, "Aniket", "Payal");
// a.splice(-2, 2, "Aniket", "Payal");
// document.write(a + "<br>");

// var a = ["Sanjay","Aman","Rehman","Rahul","Karan"];//42
// // var  a = 10;
// // var  a = "Gulshan";
// document.write(a + "<br>");
// var b = Array.isArray(a);
// document.write(b + "<br>");
// if(Array.isArray(a)){
//     document.write("This is an Array" + "<br>");
// }else{
//     document.write("This not is an Array" + "<br>");
// }

// var a = ["Sanjay","Aman","Rehman","Aman","Rahul"];//43
// // var b = a.indexOf("Aman");
// var b = a.indexOf("Aman", 2);
// document.write(b + "<br>");
// var c = a.lastIndexOf("Aman");//searching from last of the array
// document.write(c + "<br>");
// var c = a.lastIndexOf("Aman", 2);
// document.write(c + "<br>");
// var c = a.lastIndexOf("Amqan", 2);
// document.write(c + "<br>");

// var a = ["Sanjay","Aman","Rehman","Rahul"];//44
// var b = a.includes("Rahul");
// document.write(b + "<br>");
// var b = a.includes("Neha");
// document.write(b + "<br>");

// var ages = [10, 13, 18, 20];//45
// var b = ages.some(checkAdult);
// document.write(b + "<br>");
// var ages = [20, 32, 18, 20];
// var b = ages.every(checkAdult);
// document.write(b + "<br>");
// function checkAdult(age){
//     return age >= 18;
// }

// var ages = [10, 13, 18, 20];//46
// document.write(ages + "<br>");
// var b = ages.find(checkAdult);
// document.write(b + "<br>");
// var b = ages.findIndex(checkAdult);
// document.write(b + "<br>");
// function checkAdult(age){
//     return age >= 18;
// }

// var ages = [10, 13, 18, 20];//47
// document.write(ages + "<br>");
// var b = ages.filter(checkAdult);
// document.write(b + "<br>");
// function checkAdult(age){
//     return age >= 18;
// }

// var a = ["Sanjay","Aman","Rehman","Rahul"];//48
// a.toString();
// document.write(a.valueOf() + "<br>");
// a.fill("Ram");
// document.write(a + "<br>");

// var a = ["Sanjay","Aman","Rehman","Rahul"];//49
// // a.forEach(function(value, index){//Creating Inbuild function
// //     document.write(index + " : " + value + "<br>");
// // });
// a.forEach(loop);
// function loop(value, index){//Creating Seprate function
//     document.write(index + " : " + value + "<br>");
// }

// var a = {//50
//     fname : 'Gulshan',//property name is fname and property valus is Gulshan
//     lname : 'Kumar',
//     age : 27,
//     email : 'gulshankumar.mailid01@gmail.com',
//     favMovies : ['Dhoom','Sholay','Hum'],
//     salary : function(){
//         return 25000;
//     },
//     fullname : function(){
//         return this.fname + " " + this.lname;
//     },
//     living : {//living is an object but object a's property
//         city : 'Chandigarh',
//         country : 'India'
//     }
// };
// console.log(a) + "<br>";
// document.write(a.fname + "<br>");
// document.write(a.favMovies + "<br>");
// document.write(a.favMovies[1] + "<br>");
// document.write(a.salary() + "<br>");
// document.write(a.fullname() + "<br>");
// document.write(a.living.city + "<br>");

// var person = new Object();//51
// person.firstName = 'Gulshan';
// person.lastName = 'Kumar';
// person.age = 27;
// document.write(person.firstName + "<br>"); //Used this one
// document.write(person['firstName'] + "<br>"); //Its a long process

// var student = [//52
//     {Name:"Ram",Age:15},
//     {Name:"Karam",Age:16},
//     {Name:"Rahul",Age:14}
// ];
// console.log(student);
// for(var a = 0; a < student.length; a++){
//     document.write(student[a].Name + " " + student[a].Age + "<br>");
// };

// const b = [10,20,30];//53
// b[1] = 25;//const canbe assign
// //b = [40,50,60];//const can't be assign
// document.write(b + "<br>");
// const c = {
//     name : "Ram",
//     age : 25
// };
// c.name = 'Gulshan';//can
// // c = {//can't
// //     name : "Karan",
// //     age : 35
// // };
// document.write(c.name + "<br>");

// var obj = {//54
//     firstName : "Gulshan",
//     lstName : "Kumar",
//     Age : 28,
//     email : "gulshankumar.mailid01@gmail.com"
// };
// for(var key in obj){//key for key, obj[key] for value using by for in loop, here obj is our object
//     document.write(key + " : " + obj[key] + "<br>");
// }

// var array = [11,4,9,16];//55
// var a = array.map(test);//external function
// document.write(a + "<br>");
// function test(x){
//     return x * 10;
// }
// //Note:- Array values maped in test function, returned value catched in var a and print it. using by map function performing calculation on existing array and maked a new array.
// var array2 = [
//     {fname : "Gulshan", lname : "Kumar"},
//     {fname : "Rajesh", lname : "Jaiswal"},
//     {fname : "Akash", lname : "Padhak"}
// ];
// var d = array2.map(test2);
// document.write(d + "<br>");
// function test2(x){
//     return x.fname + " " + x.lname;
// }

// var str = "JavaScript is a Great Language";//56, 57
// var a = str.length;//for string length count
// document.write(a + "<br>");
// var a = str.toLowerCase();//for converting string in lower case
// document.write(a + "<br>");
// var a = str.toUpperCase();//for converting string in upper case
// document.write(a + "<br>");
// var a = str.includes("ipt");//includes function used for searching in string, always return a boolean value, its a case sensitive function
// document.write(a + "<br>");
// var a = str.startsWith("Java");//used for start word/char searching
// document.write(a + "<br>");
// var a = str.endsWith("age");//used for ends word/char searching
// document.write(a + "<br>");
// var a = str.search("A");//search function used for exact position returning/means index, if not found obviously return -1
// document.write(a + "<br>"); 
// var a = str.match(/a/g);//match function search that word that's searched collect them and maked an array, searched by //(regular expression), g(find globally)
// document.write(a + "<br>"); 
// var a = str.indexOf("a");//indexOf function return index of string
// document.write(a + "<br>");
// var a = str.lastIndexOf("a");//lastIndexOf function return last index of string
// document.write(a + "<br>");
// var a = str.replace("JavaScript", "PHP");//replace function replace string with a new one string
// document.write(a + "<br>");
// var str2 = "    JavaScript is a Great Language   ";//trim function is used for triming extra space from start or end
// var a = str2.trim();//trim function is not worked with document.write function, trim is used in form when user enter extra space in site
// console.log(str2);
// console.log(a + "<br>");
// var a = str.charAt(4);//charAt function used for returning character that position we defined, if on position not any character then not return any character
// document.write(a + "<br>");
// var a = str.charCodeAt(4);//hamare keyboard me jitne characters hote hain unke liye apna ek ascii code hota hai, jiski madad se ham apna character print kara sakte hain, here we printing ascii code of our string character defining by its position
// document.write(a + "<br>");
// var a = String.fromCharCode(65);//here providing character using by ascii code
// document.write(a + "<br>");
// var str2 = "Hello";//concat function is used for concating(merge) two or more than two strings
// var str3 = "World";
// var a = str.concat(str2, str3);
// document.write(a + "<br>");
// var a = str.split("i");//split function is used for spliting string with replacing comma on that position, we defined
// document.write(a + "<br>");
// var a = str.repeat(5);//repeat function is used for repeating string
// document.write(a + "<br>");
// var a = str.slice(3);//slice function is used for picking a word from middle of the string using by string starting & ending position
// var a = str.slice(3, 10);
// var a = str.slice(0);//for returning compleate string
// var a = str.slice(-3);//for last charaters picking from the string
// document.write(a + "<br>");
// var a = str.substr(3,5);//substr function picking string from the end of the first string, of second string
// document.write(a + "<br>");
// var a = str.substring(3,7);//substring function picking starting of the string on second position, and not count end of the string position on second position
// document.write(a + "<br>");
// var str2 = 50;//toString method convert variable/int value into string
// var a = str2.toString();
// document.write(a + 20 + "<br>");
// var a = str.valueOf();//valueOf function used for printing string value, not usefull this function
// document.write(a + "<br>");

// var a = "99";//58
// var num = Number(a);//Number function used for converting string values into number
// document.write(num + 10 + "<br>");
// var a = false;//For knowing bool value
// var num = Number(a);
// document.write(num + "<br>");
// var a = "99 88 77";//picking first int value, using by parseInt function
// var a = "10.000";//parsing in int value
// var a = "50 years";//return first int value
// var a = "he was 50";//return NaN(Not a Number) if not found a number
// var num = parseInt(a);
// document.write(num + "<br>");
// var a = "10.33";
// var num = parseFloat(a);//parseFloat same as parseInt method only difference is parseFloat return float value & parseInt return int value
// document.write(num + "<br>");
// var a = /* 100,-100,"100" */100; //isfinite cheack its number countable or not, a number in any format like string, float, time, length, area etc.
// //var a = Infinity;//Infinity is not a finite value
// var num = Number.isFinite(a);
// document.write(num + "<br>");
// var a = /* "100",10.9,-50,100,10.5-5,true */100 - 50;//isInteger cheack its number integer or not
// var num = Number.isInteger(a);
// document.write(num + "<br>");
// var a = 5.56789;
// var num = a.toFixed(2);//toFixed function for fixing length of floating number, after decimal
// document.write(num + "<br>");
// var a = 5.56789;
// var num = a.toPrecision(10);//toPrecision function for fixing length of floating number, after and before decimal
// document.write(num + "<br>");

var a = Math.ceil(-5.7);//59
document.write(a + "<br>");
var a = Math.floor(-5.7);
document.write(a + "<br>");
var a = Math.round(2.4);
document.write(a + "<br>");
var a = Math.trunc(2.99);
document.write(a + "<br>");
var a = Math.max(8, 10, 2, 50, 25);
document.write(a + "<br>");
var a = Math.min(8, -10, -2, 50, 25);
document.write(a + "<br>");
var a = Math.sqrt(25);//sqrt(square root)
document.write(a + "<br>");
var a = Math.cbrt(125);//cbrt(cubic root)
document.write(a + "<br>");
var a = Math.pow(5, 3);//pow(5*5*5)
document.write(a + "<br>");
var a = Math.random();//random function return random value between 0 and 1 bydefault, but we can change it and set between other int values
var a = Math.random() * 10;
var a = Math.floor(Math.random() * 10) + 1;//plus 1 because value 1 se niche na jae//this formula always return us values between 1 to 10, if we want increase random value then we can increase
document.write(a + "<br>");
var a = Math.abs(/*5.45,-5.45,"-5.45","hello",2+5*/null);//abs(absolute value), means return always positive int value
document.write(a + "<br>");
var a = Math.PI;//PI is a property of Math Intrinsic object that returns a constant/static value(3.141592653589793)
document.write(a + "<br>");

var now = new Date();//60
document.write(now + "<br>");//this time picking from system not server because of js is client side script so, first load on system then run so picking time from system.
document.write(now.toDateString() + "<br>");//toDateString method for printing date in readable formate
document.write(now.getDate() + "<br>");//getDate method for printing date only
document.write(now.getFullYear() + "<br>");//getFullYear method for printing FullYear only
document.write(now.getMonth() + "<br>");//getMonth method for printing Month only
document.write(now.getDay() + "<br>");//getDay method for printing Day only
document.write(now.getHours() + "<br>");//getHours method for printing Hours only
document.write(now.getMinutes() + "<br>");//getMinutes method for printing Minutes only
document.write(now.getSeconds() + "<br>");//getSeconds method for printing Seconds only
document.write(now.getMilliseconds() + "<br>");//getMilliseconds method for printing Milliseconds only
now.setDate(31);
document.write(now + "<br>");
now.setFullYear(2024);
document.write(now + "<br>");
now.setMonth(6);
document.write(now + "<br>");
now.setHours(14);
document.write(now + "<br>");
document.write(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "<br>");
var now = new Date('July 4 1996');//Koi past date dalkar bhi ham date ki details jan sakte hain like Day, year, month etc using by date methods.
document.write(now.getDay() + "<br>");
document.write(now.getSeconds() + "<br>");//Note:- If we want to knowing time of past date like Hours, Minutes, Seconds, then always shows us 0 means 12.00(night ke).
