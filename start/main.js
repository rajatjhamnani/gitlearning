// const ul=document.querySelector('.items')
// //ul.lastElementChild.remove()
// ul.firstElementChild.textContent='Hello'
// ul.children[1].innerText="second list"
// ul.firstElementChild.innerHTML='<h4>Hello</h4>'
// ul.firstElementChild.style.color='green'
// ul.children[1].style.color='yellow'
// ul.children[1].innerHTML='<h5> second list</h5>'


// const btn=document.querySelector('.btn');
// btn.addEventListener('click',function(event){
//     event.preventDefault()
//     console.log(event.target)
// })
// const btn=document.querySelector('.btn');
// btn.addEventListener('mouseover',function(event){
//     event.preventDefault()
//     console.log(event.target)
// })
const btn=document.querySelector('.btn');
btn.addEventListener('mouseout',function(event){
    event.preventDefault()
    console.log(event.target)
})