//***************************** (Section-10)👉 Strings in JavaScript 👈**********************************/

// A JavaScript string is zero or more chracters written inside quotes.
// JavaScript strings are used for storing and manipulating text.
// You can use single or double Quotes.

// let myName = "vishal";
// console.log(myName);

// let name = new String("vishal rv"); // string constructor
// console.log(name);

// 👻 How to find the length of a string? 🏳️
// let name = "vishal raut";
// console.log(name.length); // output:- 11

// 🙋‍♂️👉 Escape Character 👈
// let anySentence = "we are the so-called \"vikings\" from the north.";
// console.log(anySentence)

// // if you dont want to mess, simply use the alternative quotes
// let anySentence = 'we are the so-called "vikings" from the north.';
// console.log(anySentence)

//**** 👉JavaScript String Methods 👈****/ 

// (*) length            (*) indexOf()           (*) concat()
// (*) toLowerCase()     (*) lastIndexOf()       (*) split()
// (*) toUpperCase()     (*) replace()           (*) repeat()
// (*) includes()        (*) trim()              (*) slice()
// (*) startsWith()      (*) charAt()            (*) substr()
// (*) endsWith()        (*) charCodeAt()        (*) substring()
// (*) search()          (*) fromCharCodeAt()    (*) toString()
// (*) match()                                   (*) valueOf()

// (1)👻 length 
// var str = "JavaScript Is a Great Language" 
// var a = str.length;
// console.log(a) ; // output:- 30

// (2)👻 toLowerCase() 
// var str = "JavaScript Is a Great Language" 
// var a = str.toLowerCase();
// console.log(a) ;

// (3)👻 toUpperCase() 
//var str = "JavaScript Is a Great Language" 
// var a = str.toUpperCase() ;
// console.log(a) ;

// (4)👻 includes()
// ye search krne ka kaam krta hai ise diya gya word agr isse mil jata hai to ye true return krdeta hai.

// var str = "JavaScript Is a Great Language" 
// var a = str.includes("Is") ;
// console.log(a); // true

// (5)👻 startsWith()
// ye string mai sbse phla word ko search krne mai kaam ata hai

// var str = "JavaScript Is a Great Language" 
// var a = str.startsWith("JavaScript") ;
// console.log(a); // true

// (6)👻 endsWith()
//  ye string mai end ka word search krega

// var str = "JavaScript Is a Great Language" 
// var a = str.endsWith("Language") ;
// console.log(a); // true

// (7)👻 search()
//   ye position return krega agr isko diya hua word mil jata hai, otherwise ye (-1) return krega.

// var str = "JavaScript Is a Great Language" 
// var a = str.search("Language") ;
// console.log(a); // output:- 22

// (8)👻 match()
//   It's create a new array with containing a results elements.in which we use regular expression,

// var str = "JavaScript is a Great is Language" 
// var a = str.match(/is/g) ;  
// console.log(a); // output:- [ 'is', 'is' ]

// (9)👻 indexOf()
//  ye starting se index return krega agr isko diya hua word mil jata hai, otherwise ye (-1) return krega.

// var str = "JavaScript is a Great is Language" 
// var a = str.indexOf("is") ;  
// console.log(a);  // output:- 11

// (10)👻 lastIndexOf()
//   lastIndexOf() method ye last se index return krega agr isko diya hua word mil jata hai, otherwise ye (-1) return krega.

// var str = "JavaScript is a Great is Language" 
// var a = str.lastIndexOf('is') ;  
// console.log(a);  // output:- 22

// (11)👻 replace()
//   replace() method ki help se hum kisi bhi word ko replace kr skte hai array mai.

// var str = "JavaScript is a Great Language" 
// var a = str.replace('JavaScript','PHP') ;  
// console.log(a); // output:- PHP is a Great Language

// (12)👻 trim()
//   trim() method Extra spaces ko htane ka kaam krta hai. left ya right se

//  var str = "   JavaScript  ";
//  var a = str.trim();  
// console.log(a);

// (13)👻 charAt()
//   charAt() method isme hum position denge or uss position pe jonsa bhai character hoga ye hume uss chracter ko return krdega.

// var str = "JavaScript is a Great is Language" 
// var a = str.charAt(3);  
// console.log(a);   // output:- a

// (14)👻 charCodeAt()
//   charCodeAt() method skycode return krega.

// var str = "JavaScript is a Great is Language" 
// var a = str.charCodeAt(1);  
// console.log(a);   // output:- 97

// (15)👻 fromCharCode()
//  fromCharCode() method isme skycode value dalnge or ye hume character return krega.
// iska inbult object hota hai String.fromCharCode()

// var a = String.fromCharCode(65);  
// console.log(a);   // output:- A

// (16)👻 concat()
// concat() method ka use hum 2 string ya usse jayda string ko merge krne ke liy krte hai.

// var str = "vishal";
// var a = str.concat(" raut");  
// console.log(a);   // output:- vishal raut

// (17)👻 repeat()
//   repeat() method string ko repeat krta hai jitni bar hum chahe.

// var str = "JavaScript is a Great Language" ;
// var a = str.repeat(2);  
// console.log(a);  // output:- JavaScript is a Great LanguageJavaScript is a Great Language

// (18)👻 split()
//   split() method ek string ka har word ko alg alg krke array mai convert krdeta hai.

// var str = "JavaScript is a Great is Language" ;
// var a = str.split(" ");  
// console.log(a);   // output:- [ 'JavaScript', 'is', 'a', 'Great', 'is', 'Language' ]

// (19)👻 slice()
//   slice() method ki help se hum kisi bhi array ke mid se hume koi word uthana ho to hum utha skte hai iski help se. it does not include the given end arguments.

// var str = "JavaScript is a Great is Language" ;
// var a = str.slice(4,12);  
// console.log(a);   // output:- Script i

// (20)👻 substr()
// substr() is similar to slice()
// The difference is that the second parameter specifies the length of the extracted part. it includes the given end arguments.

// var str = "JavaScript is a Great is Language" ;
// var a = str.substr(2,12);  
// console.log(a);   // output:- vaScript is 

// (21)👻 substring()
//   substring() is similar to slice().
//   The difference is that substring() cannot accept negative indexs.
//   If we give negative value then the characters are counted from the 0th position.

// var str = "JavaScript is a Great is Language" ;
// var a = str.substring(2,10);  
// console.log(a);   // output:- vaScript  

// (22)👻 toString()
//   toString() method  ye variable ko string mai convert krdeta hai.

// var a = 22;
// var b = a.toString();
// console.log(typeof(b)); // output:- string

// (23)👻 valueOf()
//   valueOf() method ye default function hai string ka. ye strting ki value ko as it's print krdeta hai.

// var str = "javascript is a great language";
// var a = str.valueOf();
// console.log(a);  // output:- javascript is a great language

// 😊11: challenge Time 🏳️
// (1) Display only 280 characters of a string like the one used in twitter?

// let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);

// (2) Converting a String into Array?
//  var txt = "a,b,c,d,e";
// console.log(txt.split(" "));



