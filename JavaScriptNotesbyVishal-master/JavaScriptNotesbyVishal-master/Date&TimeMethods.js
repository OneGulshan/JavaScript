//************ (Section-11)👉 Date and Time in JavaScript 👈***********************/

// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
// Months:- january is 0, December is 11.

//**** 👉JavaScript Date and Time Methods 👈****/ 

// (*) toDateString()   // output:- Sun Mar 19 2023           (*) getMilliseconds()   // output:- 938       
// (*) getDate()        // output:- 19                        (*) setMilliseconds()   
// (*) getFullYear()    // output:- 2023                      (*) setFullYear()
// (*) getMonth()       // output:- 1(Feb)                    (*) setMonth()
// (*) getDay()         // output:- 1(monday)                 (*) setSeconds()
// (*) getHours()       // output:-  0(12)                    (*) setMinutes()
// (*) getMinutes()     // output:-  25                       (*) setDate() 
// (*) getSeconds       // output:-  29                       (*) setHours()                    

// 👉 Creating Date Objects:
// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
// it takes 7 arguments

//const curDate = new Date();
// //**** 👉 How to Get the indivisual Date 👈****/

// console.log(curDate.toLocaleString());  // 19/3/2023, 6:03:57 pm
// console.log(curDate.getFullYear());     // 2023
// console.log(curDate.getMonth());        // 2 (0-11 jan to dec)
// console.log(curDate.getDate());         // 19
// console.log(curDate.getDay());          // 0(sunday)

// //**** 👉  How to Set the indivisual Date 👈****/

// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString(2022));


// 👉Time Method:

// const curTime = new Date();
// //**** 👉  How to Get the indivisual Time 👈****/

// console.log(curTime.getTime());    // // The getTime() methods returns the number of milliseconds since January 1, 1970.
// console.log(curTime.getHours());   // // The getHours() method returns the hours of a date as a number(0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// //**** 👉  How to Set the indivisual Time 👈****/

// console.log(curTime.setTime(5));    
// console.log(curTime.setHours(5));   
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// Challenge Time NOT yet decided
// (function(){
//     setInterval(()=>{
//         console.log(new Date().toLocaleTimeString());
//     },1000)
// })();

// // Practise Time
// new Date().toLocaleTimeString();  //  11:18:48 AM
// // ---
// new Date().toLocaleDateString();  //  19/03/2023
// // ---
// new Date().toLocaleString();     //    19/03/2023,  11:18:48 AM

