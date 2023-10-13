console.log('person1:show ticket')
console.log('person2:show ticket')

const preMovie=async ()=>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket ')
        } , 3000)
    })
    const getPopcorn=new Promise((resolve , reject)=>resolve(` popcorn`))
    const getButter=new Promise((resolve , reject)=>resolve ("butter"))
    const getColdDrinks=new Promise((resolve, reject)=>resolve('cold drinks'))
    const ticket= await promiseWifeBringingTickets;
    
 let [Popcorn,Butter,coke]=await Promise.all([getPopcorn,getButter,getColdDrinks])
    console.log(`${Popcorn} ${Butter}${coke}`)
return ticket
}
preMovie().then((m)=>console.log(`person3 :${m}`))
console.log('person4:show ticket')
console.log('person5:show ticket')