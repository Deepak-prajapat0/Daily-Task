console.log("before")
console.log("after")

printName("deepak")

function printName(name){
    console.log(name)
        function callback(detail){
            console.log(detail)
            function address(msg){
                console.log(msg)
            }
            address("hlo")
        }
        setTimeout(()=>{
            callback({name:name,address:"Mohali"})
        },5000)
}


getUser(1,getApiData)

function getApiData(msg,cb){
    setTimeout(()=>{
        console.log(msg)
        cb([1,2,3,4])
    },3000)
}

function getUser(id,getApiData){
    setTimeout(()=>{
        console.log(id)
        getApiData("hii",(arr)=>{
            console.log(arr)
        })
    },2000)
}