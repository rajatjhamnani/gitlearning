var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')
var filter =document.getElementById('filter')



form.addEventListener('submit' , additem)
itemlist.addEventListener('click', removeitem)
filter.addEventListener('keyup',filteritems)

function additem(e){
    e.preventDefault()
   var newitem=document.getElementById('item').value;
   var newitem1=document.getElementById('it').value
   var li=document.createElement('li');
   li.className='=list-group-item';
   li.appendChild(document.createTextNode(newitem+" "+newitem1))
   //li.appendChild(document.createTextNode(" "+newitem1))
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


function filteritems(e){
    var text=e.target.value.toLowerCase()
   var items=itemlist.getElementsByTagName('li')
   Array.from(items).forEach(function(item ){
    var itemname=item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text)!= -1){
       item.style.display='block'
    }else{
        item.style.display='none'
    }
    
   })
}

function filteritems(e){
    var text=e.target.value.toLowerCase()
   var items=itemlist.getElementsByTagName('li')
   Array.from(items).forEach(function(item ){
    var itemname=item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text)!= -1){
       item.style.display='block'
    }else{
        item.style.display='none'
    }
    
   })
}