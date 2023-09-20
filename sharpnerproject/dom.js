console.dir(document)
console.log(document)
console.log(document.timeline)
console.log(document.title)
//document.title="123"
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(Document.all)
console.log(document.forms[0])
console.log(document.links)
console.log(document.images)
header=document.getElementById('main-header')
var headerTitle=document.getElementById("header-title")
console.log(headerTitle)
headerTitle.textContent="Hello"
headerTitle.innerHTML="<b><i>Hello</i></b>"
header.style.borderBottom='solid 3px #000'
headerTitle.style.color='green'
console.log(header)
var items =document.getElementsByClassName("list-group-item")
console.log(items)
items[2].textContent="hello"
items[2].style.backgroundColor="green"
for(let i=0 ; i<items.length ; i++){
    items[i].style.fontWeight="bold"
}
var li =document.getElementsByTagName("li")

li[0].style.backgroundColor="green"
var input = document.querySelector("input")
input.value="hello world "
var submit =document.querySelector("input[type='submit']")
submit.value='Send'
var item=document.querySelector(".list-group-item")
item.style.color='red'
var seconditem=document.querySelector(".list-group-item:nth-child(2)")
seconditem.style.backgroundColor="red"
var thirditem=document.querySelector(".list-group-item:nth-child(3)")
thirditem.style.backgroundColor="white"

var titles=document.querySelectorAll('.title')
titles[0].textContent='hello'
var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')

var itemlist=document.querySelector("#items")
console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor="skyblue"
itemlist.parentNode.parentNode.style.backgroundColor="blue"

parentelement=document.querySelector('.list-group-item')
console.log(parentelement.parentElement)

console.log(itemlist.children)
itemlist.children[2].style.backgroundColor="pink"
itemlist.firstElementChild.textContent="I Am First child element"
//itemlist.firstChild.textContent="blank space"  //firstchild count spaces also

//itemlist.lastChild.textContent="blank space"  // count spaces also
itemlist.lastElementChild.style.backgroundColor="orange"
itemlist.lastElementChild.textContent="i am last child element"

//nextsibling
console.log(itemlist.nextSibling)
//nextelementsibling
console.log(itemlist.nextElementSibling)

//previoussibling
console.log(itemlist.previousSibling)
//previouselementsibling
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color="yellow"

//createElement
//create newdiv
var newdiv=document.createElement('div')

//createclass
newdiv.className="hello"

//createid
newdiv.id="newid"

//add attribute
newdiv.setAttribute('title','hellodiv')

//create text node
var newdivtext=document.createTextNode("hello world")

//add text to div
newdiv.appendChild(newdivtext)

//insert thingd in Dom
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newdiv , h1)
newdiv.style.fontSize="30px"



























