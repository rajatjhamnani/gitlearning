const details=[]

function createPost(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
           details.push({title:"rajat"})
           
           resolve(details[details.length-1].title)
        },1000)
    })
}
function createPost2(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
           details.push({title:"rahul"})
           
           resolve(details[details.length-1].title)
        },1000)
    })
}

let user={
    username: 'raj',
    lastactivitytime:'13 of november'
}

function updateLastUserActivityTime(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime()
            resolve(user.lastactivitytime)
            
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            details.pop()
            resolve(details)
        },2000)
    })
}
// function userupdatepost(){
//     Promise.all([createPost(),updateLastUserActivityTime(),'\n',createPost2(),updateLastUserActivityTime(),"\n",deletePost()])
//     .then(([x,y,u, z,t ,v,val])=>{
//     console.log(x,y, u,z, t,v,val)
//      })
//      .catch((err)=>console.log(err))
    
// }
// userupdatepost()
async function userupdates(){
    try{
        await createPost().then((x)=>console.log(x))
        await updateLastUserActivityTime().then((y)=>console.log(y))
        await createPost2().then((z)=>console.log(z))
        await updateLastUserActivityTime().then((t)=>console.log(t))
        await deletePost().then((val)=>console.log(val))
    } catch(err){
        console.log(err)
    }
}
userupdates()