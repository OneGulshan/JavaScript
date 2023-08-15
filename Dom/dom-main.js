var element;//62
element = document;//for full document targeting
element = document.all;//for all document tags targeting and returning in an array
element = document.all[8];//For targeting document element by its index number
element = document.head;
element = document.title;
element = document.body;
element = document.links;//For knowing total ancher tags in document
element = document.links[0];//For targeting perticular ancher tag
element = document.images;//For targeting images
element = document.images[0];
element = document.forms;//No forms in our document know
element = document.doctype;//For knowing html document type
element = document.URL;//For targeting Website Url
element = document.domain;//For knowing Domain name of website, Domain name means for knowing website by its name
element = document.baseURI;//baseURI same as URL used for targeting Website Url
element = document.getElementById("header");//Targeting by id
element = document.getElementsByClassName("list");//Targeting by classname, In a document can be multiple class, so here maked array collection of class, array collection can hold heterogeneous elements
element = document.getElementsByClassName("list")[0];//Here targeting perticular list from array collection
element = document.getElementsByTagName("ul")[2];
console.log(element);

//Dom Get Methods
element = document.getElementById("content").innerText;//63//For Dom elements inner Text getting, without elements/html
element = document.getElementById("header").innerHTML;//For getting inner html of Dom element
element = document.getElementById("header").getAttribute("onclick");//for getting attribute value like id, class, style and onclick etc.
element = document.getElementById("header").getAttributeNode("onclick").value;//getAttributeNode method is not useful we can use getAttribute method for getting attribute value
element = document.getElementById("header").attributes;//For getting all attributes of Dom element
element = document.getElementById("header").attributes[1];//For perticular attribute getting
element = document.getElementById("header").attributes[1].value;//For perticular attribute value getting
element = document.getElementById("header").attributes[1].name;//For perticular attribute name getting
//Dom Set Methods
document.getElementById("header").innerHTML = "<h1>Wow</h1>";//inner html text value change here
element = document.getElementById("header").innerHTML;
document.getElementById("header").setAttribute("class", "xyz");//class name change here
document.getElementById("header").setAttribute("style", "border:10px dotted yellow");//css style changing this method not usefull
element = document.getElementById("header").attributes[1].value = "xyz";//this method attribute changing value also not usefull because of here we required to remembering index value, but last used method is usefull
document.getElementById("header").removeAttribute("style");//for removing attribute
element = document.getElementById("header").getAttribute("class");
console.log(element);

document.querySelector("#header").innerHTML = "<h1>Wow</h1>";//64
element = document.querySelector("#header").getAttribute("class");
element = document.querySelector(".list");//Sabse phela jo selector milega use return karega, only one selector return
element = document.querySelectorAll(".list");//For All selectors targetting
element = document.querySelectorAll(".list")[1];//Index wise targeting
element = document.querySelectorAll(".list")[1].innerHTML;//innerHTML Returning
element = document.querySelectorAll("#header h1");//Advance Selector
element = document.querySelectorAll("#header h1")[0].innerHTML;
console.log(element);

element = document.querySelector("#menu").style;//65//Style
element = document.querySelector("#menu").style.border;
document.querySelector("#menu").style.backgroundColor = "green";
document.querySelector("#menu").style.color = "blue";
element = document.querySelector("#menu").style.color;
document.querySelector("#sidebar").className = "yxz";//ClassName
document.querySelector("#sidebar").className = "yxz zxy";//Last Class Priority
element = document.querySelector("#sidebar").className;
document.querySelector("#sidebar").classList = "yxz zxy";//ClssList
document.querySelector("#sidebar").classList.add("asd","efg");
document.querySelector("#sidebar").classList.remove("yxz", "zxy");
element = document.querySelector("#sidebar").classList;
element = document.querySelector("a[href='#navhome']").style.background = 'blue';
console.log(element);

document.getElementById("menu").onclick = abc;//66
document.getElementById("menu").onmouseleave = abc;
function abc(){
    document.getElementById("menu").style.background = "pink";
}
document.getElementById("menu").addEventListener("click", abc);//Event(without on) with Function
document.getElementById("menu").addEventListener("click", function(){//addEventListener with In Body Function & same event
    // document.getElementById("menu").style.border = "10px solid gold";
    this.style.border = "10px solid gold";//this means by same object
});
document.querySelector("#outer").addEventListener("click", function(){
    alert('Outer Div');
}, true);

document.querySelector("#inner").addEventListener("click", function(){
    alert('Inner Div');
}, true);

document.querySelector("#sidebar").addEventListener("mouseleave", aaa); 
document.querySelector("#sidebar").addEventListener("click", bbb); 
function aaa(){
    document.querySelector("#sidebar").style.background = "silver";
}
function bbb(){//On Click mouseleave event removed
    document.querySelector("#sidebar").removeEventListener('mouseleave', aaa);
}

document.getElementById("sidebar").addEventListener("click", abc);//67
function abc(){
    document.querySelector("a[href='#sidehome']").classList.add("pp", "cdf");
    document.querySelector("a[href='#sidehome']").classList.remove("cdf");
    var a = document.querySelector("a[href='#sidehome']").classList.length;
    document.querySelector("a[href='#sidehome']").classList.toggle("dfg");
    var b = document.getElementById("sidebar").classList.item(1);
    var c = document.getElementById("sidebar").classList.contains("asd");
    console.log(a);
    console.log(b);
    console.log(c);
}

a = document.getElementById("o").parentElement;//68
a = document.body.parentElement;
document.getElementById("i").parentElement.style.background = "red";
a = document.getElementById("i").parentElement;
document.getElementById("child-c").parentElement.style.background = "green";
a = document.getElementById("child-c").parentElement;
document.getElementById("child-c").parentElement.style.background = "green";
a = document.getElementById("child-c").parentElement;
document.getElementById("child-c").parentNode.style.background = "purple";
a = document.getElementById("child-c").parentNode;
a = document.getElementById("main").parentNode;
a = document.getElementById("main").parentElement;
console.log(a);

a = document.getElementById("o").children;//69
a = document.getElementById("i").children;
a = document.getElementById("i").children[1];
a = document.getElementById("i").children[0].style.background = "blue";
a = document.getElementById("i").children[1].style.background = "green";
a = document.getElementById("i").children[0].innerHTML;
b = document.getElementById("i").children;
c = document.getElementById("i").childNodes;
a = document.getElementById("i").childNodes[0].innerHTML;//undefine(bec of Enter)
a = document.getElementById("i").childNodes[5].style.background = "pink";
console.log(a);
console.log(b);
console.log(c);

a = document.getElementById("i").firstElementChild;//70
a = document.getElementById("i").firstElementChild.innerHTML;
a = document.getElementById("i").firstElementChild.innerHTML;
a = document.getElementById("i").firstElementChild.style.background = "gray";
a = document.getElementById("i").lastElementChild.style.background = "yellow";
a = document.getElementById("o").firstElementChild.style.background = "silver";
a = document.getElementById("o").lastElementChild.style.background = "blue";
a = document.getElementById("i").firstChild;
a = document.getElementById("i").lastChild;
// a = document.getElementById("i").lastChild.style.background = "blue";
a = document.getElementById("child-c").fistChild;//Same value 'C' return because of no space(no any child) simple
a = document.getElementById("child-c").lastChild;
console.log(a);

a = document.getElementById("child-c").previousElementSibling; //71//child-head <- also null
a = document.getElementById("child-c").nextElementSibling.style.background = "red";
a = document.getElementById("child-c").nextElementSibling.innerHTML;//child-e <- No Next Elemment so return nulls
a = document.getElementById("child-c").previousSibling;//Count text node like space/Enter/Comment etc.
console.log(a);

var newElement = document.createElement("h2");//72
var newText = document.createTextNode("This is just text");
var newComment = document.createComment("this is comment");
console.log(newElement);
console.log(newText);
console.log(newComment);

newElement.appendChild(newText);//73
console.log(newElement);
document.getElementById("test").appendChild(newElement);//After targeting appendChild overridden
document.getElementById("test").appendChild(newComment);
var target = document.getElementById("test");
target.insertBefore(newElement, target.childNodes[2]);

var newElement2 = "<h2>This is Heading</h2>";//74
target.insertAdjacentHTML("beforebegin", newElement2);
target.insertAdjacentHTML("afterbegin", newElement2);
target.insertAdjacentHTML("afterend", newElement2);
target.insertAdjacentHTML("beforeend", newElement2);
var newText = "This is Heading";//Same as for text/comment
target.insertAdjacentText("afterbegin", newText);

var newElement3 = document.createElement("li");//75
var newText = document.createTextNode("Wow new Text");
newElement3.appendChild(newText);
var target = document.getElementById("list");
var oldElement = target.children[0];
target.replaceChild(newElement3, oldElement);
var oldElement2 = target.children[1];
target.removeChild(oldElement2);

var target2 = document.getElementById("list").children[1];//76
//var copyElement = target2.cloneNode(false);//only element & attributes clone not html
var copyElement = target2.cloneNode(true);//html also clone
document.getElementById("list2").appendChild(copyElement);
//document.getElementById("test2").appendChild(copyElement);//Only Once clone/copy
