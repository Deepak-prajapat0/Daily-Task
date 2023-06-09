const p = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve(1)
    }, 2000);
})

const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("this is resolve")
    }, 3000);
})

const res = Promise.all([p1,p])
res.then(res=>console.log(res))

//  return result of which promise resolve first
const promiseRace = Promise.race([p,p1])
promiseRace.then(res=>console.log(res))



//  using async and await  

const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("this is from promise one")
    }, 3000);
})

async function asyncFunc(){
    try {
        let result = await promiseOne
        console.log("from async function")
    console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
asyncFunc()
