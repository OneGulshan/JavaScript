//************ (Section-14)👉 Document Object Model in JavaScript(DOM) 👈*************/

// 👻 Document Object Model(DOM)🏳️

// hume html se releated koi bhi operation krna hoga wo hum DOM mai krenge.     
                             
//                                                   DOCUMENT (HTML DOM Tree)
//                                                       |
//                                                   Root(Html)
//                                                       |
//                           |------------------------------------------------------------|
//                           |                                                            |
//                           |                                                            |
//                    element: <head>                                            element:<body>
//                           |                                                            |
//                    element: <title>                                    |------------------------------|
//                           |                                            |                              |
//                    Text: 'New Website'                          element: <nav>                 element: <h1>
//                                                                        |                              |
//                                                                 element: <a>                   Text: 'Welcome'
//                                                                        |                              |
//                            GET                                  text: 'About us'                attribute: 'id'
//                            SET                                         |                              |
//                      Add HTML Element                          attribute: 'class'              attribute: 'class'
//                     Delete HTML Element


// (1)👻 How to target Head,title,body,links,images,forms,URL?
//  sol:- document.head
//        document.title
//        document.body
//        document.links[0]
//        document.images
//        document.forms
//        document.doctype
//        document.URL
//        document.domain
//        document.baseURI  // return URL

// (2)👻 How to target ID,Class,Tag?
// sol2:- document.getElementById("header");
//        document.getElementsByClassName("footer");
//        document.getElementsByTagName("li");

// (3)👻 How to GET Value Methods in DOM?
// sol3:-  document.getElementById("header").innerText;
//         document.getElementById("header").innerHTML;
//         document.getElementById("header").getAttribute("onClick");             // xyz() ye sirf value return krt hai.
//         document.getElementById("header").getAttributeNode("onClick");         // onClick = "xyz()"
//         document.getElementById("header").Attributes[1].value;                 // isme array chlta hai isliye arguments nh dalte.
//         jitne bhi attribute lage honge sbko extract krke de dega ek hi bari mai, mtlab ek array bna dega.

// (4)👻 How to SET Value Methods in DOM?
// sol4:- document.getElementById("header").innerText = "vishal"; // isme hum tag lgynge to wo tag ke saat text dikhyega use innerHTML 
//        document.getElementById("header").innerHTML = "<h1>vishal</h1> ";
//        document.getElementById("header").setAttribute("class","xyz"); 
//        take to arguments first kisko set krna hai or value kya set krni hai.
//        document.getElementById("header").Attribute[1].value = "xyz"; 
//        document.getElementById("header").removeAttribute("style");            // used for removed any attributes.

//  (5)👻 How to target Values by using querySelector & querySelectorAll Methods in DOM?
// sol5:- document.querySelector("#header").innerText = "vishal";  // ye sirf first wle ko get krta hai
//        document.querySelectorAll(".list").;   // or ye sbko get krta like getElementsByClassName.

//  (6)👻 DOM CSS Styling Methods?
// sol6:- Style,className,classList(add,remove).
//        document.querySelector("#header").style.border;                    // Get
//        document.querySelector("#header").style.backgroundColor = "tan";   // Set

//        document.querySelector("#header").className;                       // Get (ye hume string return krega sri values ko uthake)
//        document.querySelector("#header").className = "abc";               // Set

//        document.querySelector("#header").classList;                       // Get  (ye hume array return krega sri values ko uthake)   
//        document.querySelector("#header").classList.add("xyz","abc");      // Set
//        document.querySelector("#header").classList.remove("xyz");

// 🙋‍♂️ Assign Events Using the HTML DOM:🏳️
//  document.getElementById(id).onClick = functionName;

//document.getElementById("header").onclick = abc;
// function abc(){
//  document.getElementById("header").style.backgroundColor = "green";
//  }

//  (7)👻 DOM addEventListner() Method?
//    document.getElementById(id).addEventListner("click",functionName);
//                    (Another way)
//    document.getElementById(id).addEventListner("click",function(){
//     statement
//  });
// 🙋‍♂️Example:-🏳️

//document.getElementById("header").addEventListner("click",abc);
// function abc(){
//  document.getElementById("header").style.backgroundColor = "green";
//  }

//  document.getElementById("header").addEventListner("mouseenter",function(){
//  document.getElementById("header").style.border = "10px solid red";
//  });

//  (8)👻 DOM classList() Method?

//  (*) add(class1,class2,...)      // document.getElementById("header").classList.add("xyz","efg")
//  (*) remove(class1,class2,...)   // document.getElementById("header").classList.remove("xyz")
//  (*) toggle(class)               // document.getElementById("header").classList.toggle("xyz");-- (click pe class or click pe class remove)
//  (*) contains(class)             // document.getElementById("header").classList.contains("xyz");--(return true when class exist else false)
//  (*) item(index)                 // document.getElementById("header").classList.item(1);-- (index pe konsi class hai return krta hui)
//  (*) length                      // document.getElementById("header").classList.length;-- (return actual class length)

// (9)👻 DOM Traversal Methods?
// (*) parentNode                     (*) lastElementChild
// (*) parentElement                  (*) nextElementSibling
// (*) Children                       (*) nextSibling
// (*) childNodes                     (*) previousElementSibling
// (*) firstChild                     (*) previousSibling
// (*) firstElementChild              (*) lastChild


//                                                        DOM Traversal
//                                                           [A]   <----- Parent Node
//                                                            |
//                             |------------------------------------------------------------|
//                             |               |              |             |               |
//                 null  <--  [B]             [C]       <--- [D]  --->     [E]             [F] --> null
//                             |               |                            |               |
//                       First-Child     Privious-Sibling               Next-Sibling    Last-Child


//  (*) 🏳️ How to Target parent 🏳️

//  (*) parentElement :- iska koi parent na ho to ye null dikhata hai.

//   var a = document.getElementById("inner").parentElement;  // Get
//   var a = document.getElementById("inner").parentElement.parent.style.background = "red";  // Set
//   console.log(a);

//  (*) parentNode :- iska koi parent na bhi to bhi ye kuch na kuch to return krega hi.

//   var a = document.getElementById("inner").parentNode;  // Get
//   var a = document.getElementById("inner").parentNode.parent.style.background = "red";  // Set
//   console.log(a);

//  (*) 🏳️ How to Target Child 🏳️

//  (*) Children :- ye sirf Html ke Tags hi return krega.

//   var a = document.getElementById("inner").Children;  // Get
//   var a = document.getElementById("inner").Children.style.background = "red";  // Set
//   console.log(a);

//  (*) childNodes :- ye tag ke saat saat text node bhi return krega.

//   var a = document.getElementById("inner").childNodes;  // Get
//   var a = document.getElementById("inner").childNodes.style.background = "red";  // Set
//   console.log(a);

//  (*) 🏳️ How to Target firstChild, firstElementChild & lastChild, lastElementChild 🏳️

//   (*) firstChild  :- wo textnode sbko tag krega usme space ho ya enter sbko.

//   var a = document.getElementById("inner").firstChild ;  // Get
//   var a = document.getElementById("inner").firstChild.style.background = "red";  // Set
//   console.log(a);

//   (*) firstElementChild  :- jiske ander bhi ap dekhre hai uska phla jo bhi tag hoga wo return krega

//   var a = document.getElementById("inner").firstElementChild;  // Get
//   var a = document.getElementById("inner").firstElementChild.style.background = "red";  // Set
//   console.log(a);


//  (*) lastChild :- wo textnode sbko tag krega usme space ho ya enter sbko.

//   var a = document.getElementById("inner").lastChild;  // Get
//   var a = document.getElementById("inner").lastChild.style.background = "red";  // Set
//   console.log(a);

//  (*) lastElementChild :-  jiske ander bhi ap dekhre hai uska last jo bhi tag hoga wo return krega
//   var a = document.getElementById("inner").lastElementChild;  // Get
//   var a = document.getElementById("inner").lastElementChild.style.background = "red";  // Set
//   console.log(a);

//  (*) 🏳️ How to Target nextSibling & preiviousSibling 🏳️

//   (*) nextSibling  :- 

//   var a = document.getElementById("inner").nextSibling;  // Get
//   var a = document.getElementById("inner").nextSibling.style.background = "red";  // Set
//   console.log(a);

//   (*) nextElementSibling  :- 

//   var a = document.getElementById("inner").nextElementSibling;  // Get
//   var a = document.getElementById("inner").nextElementSibling.style.background = "red";  // Set
//   console.log(a);


//  (*) preiviousSibling :-

//   var a = document.getElementById("inner").preiviousSibling;  // Get
//   var a = document.getElementById("inner").preiviousSibling.style.background = "red";  // Set
//   console.log(a);

//  (*) preiviousElementSibling :-  

//   var a = document.getElementById("inner").preiviousElementSibling;  // Get
//   var a = document.getElementById("inner").preiviousElementSibling.style.background = "red";  // Set
//   console.log(a);

//  (*) 🏳️ DOM Create Methods 🏳️

//        [Tag]                           [Text]                       [Comment]
//          |                               |                              |
//       <p></p>                     This is just Text             <!-- just Comment -->
//          |                               |                              |
//      createElement                  createTextNode                 createComment

//  var newElement = document.createElement("p");
//  console.log(newElement);

//  var newText = document.createTextNode("This is just text");
//  console.log(newText);

//  var newComment = document.createComment("p");
//  console.log(newComment);

//**** 🏳️ DOM Append Methods 🏳️****/
//  (1) appendChild   ----> Only Append
//  (2) insertBefore  ----> Only Append
//  (3)🏳️ insertAdjacentElement:-  ------->  create & Append
//  (4)🏳️ insertAdjacentHTML:-     ------->  create & Append
//  (5)🏳️ insertAdjacentText:-     ------->  create & Append




//        [Tag]                           [Text]                     
//          |          appendChild          |                              
//       <p></p>     <-------------   This is just Text             
//          |                               |                              
//      createElement                  createTextNode                

// (1) 🏳️appendChild:- jo bhi hum append krenge append method ka use krke wo humesha last mai append krega.

//  var newElement = document.createElement("p");
//  var newText = document.createTextNode("This is just text");
//   newElement.appendChild(newText);
//   document.getElementById("test").appendChild(newElement);
// console.log(newElement);

// (2)🏳️ insertBefore:- jo bhi hum append krenge insertBefore method ka use krke wo humesha starting mai append krega.

//   var newElement = document.createElement("p");
//  var newText = document.createTextNode("This is just text");
//   var target = document.getElementById("test");
//   target.insertBefore(newElement,target.childNodes[0]);

// (3)🏳️ insertAdjacentElement:- eg:- (<p></p>) p tag ko create krna chta hu or append bhi krna chta hu.
// (4)🏳️ insertAdjacentHTML:-    eg:-  Tag with text   (<p> This is Just text </P>)
// (5)🏳️ insertAdjacentText:-    eg:-  only text  (this is just text)

// 🏳️ DOM insertAdjacent Positions:-
//                                      <h1> This is Text </h1>
//                                    |---------------------------------|
//  * beforebegin                     |  <h1> This is Text </h1>        |
//  * afterbegin                      |                                 |
//  * beforeend                       |                                 |
//  * afterend                        |  <h1> This is Text </h1         |
//                                    |---------------------------------|
//                                        <h1> This is Text </h1>


// 🏳️ DOM Replace & Remove Methods:-
// * replaceChild()  //-----> target.replaceChild(newElement,oldElement);
// * removeChild()  //------> target.removeChild(oldElement);

// 🏳️ DOM cloneNode Method:-
// *cloneNode()  //----> target.cloneNode(true); true krne se wo ander ka text copy krega other wise element copy krega.
//                      clone krne ke baad hume use append krna hai jis bhi jagha hume ye chiye.

// 🏳️ DOM contains() Method:-
//  hume outer div ki help se inner div mai like koi id search krni hai to wo hum contain() method ki help se kr skte hai, agr wo exist krta hai //  to ye hume true return krdega otherwise false return krdega.(return boolean values)

// 🏳️ DOM hasAttribute() & hasChildNodes() Methods:-
//  hasAttribute() ---> <div id="test" class="abc"> Yahoo Baba </div>
//  iski help se hum ye check kr skte hai id ko target krke ki uss id ke saat koi or class ya attribute hai ya nhi.(it's return true / false)

//  hasChildNodes() 
// iski help se hum kisi bhi <div> mai uska childNode check kr skte hai agr hoga to true return krdega otherwise false. 

// 🏳️ DOM isEqualNode() Method:-
//  ager hume do list ke node ko compare krna hai to hum isEqualNode ka use krte hai agr node same hua to ye true return krega otherwise false.
// * same Node Type
// * same Node Name
// * same Node Value
// * same ChildNode
// * same attributes
// * same attributes values


