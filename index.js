const fs = require('node:fs')


// ____________________ append data in file or create if not exist __________________

const opt = fs.appendFile('./newDir/file.txt',"I can write in it",(err,result)=>{
    if(err) console.log(err);
    else console.log(result)
})

fs.readFile('./file.txt',"utf-8",(err,res)=>{
    if(err) console.log(err);
    console.log(res)
})

fs.mkdir('./newDir',(err,res)=>{
    if(err) console.log(err);
    console.log(res)
})

// ___________________checking the changes in file ________________
fs.watchFile('./file.txt',(err,res)=>{
    if(err) console.log(err);
    console.log(res)
})
//  _________________ overwrite the data in the file ___________________
fs.writeFile('./file.txt'," new words added",(err,res)=>{
    if(err) console.log(err);
    console.log(res)
})                                                                                                                                                                                                                   

fs.rmdir('./newDir',(err,res)=>{
    if(err) console.log(err)
})

const os= require("os");

// ___________ return achitechecture of system ______________
console.log(os.arch())

console.log(os.cpus())

console.log(os.freemem(),os.totalmem())

console.log(os.machine())

console.log(os.userInfo())

console.log(os.loadavg())



const path = require("node:path");

console.log(path.dirname('./newDir/text'))
console.log(path.extname('./file.txt'))
console.log(path.join("newDir","text","file"))
console.log(path.parse())


const crypto = require("node:crypto");

// ------------- Create random id of 36 length-----------------
console.log(crypto.randomUUID().length)


const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
},);
myEmitter.emit('event');


const https = require("node:https")

const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

https.get('https://jsonplaceholder.typicode.com/todos',option,
(res) => {
    res.on('data', (d) => {
        fs.writeFile('./file.txt',d,(err,res)=>{
                if(err) console.log(err);
            }) 
    });
  
  }).on('error', (e) => {
    console.error(e);
  }
)



const process = require('node:process');

process.on('exit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});


console.log('This message is displayed first.');
console.log('This message is displayed first.');
process.on('beforeExit', (code) => {
  console.log('Process exit event with code: ', code);
});
console.log('This message is displayed first.');
console.log('This message is displayed first.');


const http = require('node:http');
const options = {
  host: 'www.google.com',
};
const req = http.get(options);
req.end();
req.once('response', (res) => {
  const ip = req.socket.localAddress;
  const port = req.socket.localPort;
  console.log(`Your IP address is ${ip} and your source port is ${port}.`);
  // Consume response object
});

const url = require("node:url");

console.log(url.format({protocol:"https",hostname:"better-mart.netlify.com",}));

const EventEmitter = require("node:events")

const event = new EventEmitter();

event.on("clicked",(args)=>{
    console.log("event is occured" + " "+args.name)
})
event.emit("clicked",{name:"deepak"})


