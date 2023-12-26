// import {add} from './basic.js'
// console.log(add(20,3))

// import {readFile} from 'node:fs';
// readFile('./text.txt','utf8',(er,data)=>{
// if(er) throw er;
// console.log(data)
// })

// process.on('uncaughtException', er=>{
//     console.error(`There was an uncaught error:${er}`)
//     process.exit(2);
// })

const fs=require('fs')
fs.writeFileSync('text.txt','hello world this is brabha. From today onwards learning the node.js')