var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')

form.addEventListener('submit' , additem)
itemlist.addEventListener('click', removeitem)

function additem(e){
    e.preventDefault()
   var newitem=document.getElementById('item').value;
   var li=document.createElement('li');
   li.className='=list-group-item';
   li.appendChild(document.createTextNode(newitem))
   itemlist.appendChild(li)
//creating edit button 
var editbutton=document.createElement("button")
editbutton.className="btn btn-group-sm float-right";
editbutton.appendChild(document.createTextNode('Edit'))
li.appendChild(editbutton)
//creating delete butten
   var deletebtn=document.createElement('button')
    deletebtn.className="btn btn-danger btn-sm float-right delete" 
    deletebtn.appendChild(document.createTextNode("X"))
    li.appendChild(deletebtn)

   
}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
           var li=e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}