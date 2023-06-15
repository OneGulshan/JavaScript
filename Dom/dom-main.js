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

//65