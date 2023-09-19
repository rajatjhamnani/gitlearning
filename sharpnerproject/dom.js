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