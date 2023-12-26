//console.log("hello");
//console.log(global)
// const os=require('os')
// const path=require('path')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
 
// const add=(a,b)=>a+b;
// module.exports={add}


const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
 //console.log(req.url);
     //console.log(req.method);
    //  console.log(req.headers);
    // process.exit()
    const url=req.url;
    const method=req.method;
    
    if(url==='/'){
        res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title> UserForm</title></head>')
   // res.write('<body><form enctype="multipart/form-data" action="/nextpage" method="POST"><div><input type="text" name="fname" placeholder="enter your firstname"> </div><br/><div><input type ="text" name="lname" placeholder="enter your lastname"></div><br/><div><input type="file" name="file"></div><input type="submit" value="send"></body>')
   res.write('<body> <form action="/nexpage" method="POST"><div><input type="text" name="name" placeholder="enter your name"></div><input type="submit" value="send"></form>  </body>')
   res.write('</html>')
    return res.end()
    }
    if(url==='/nextpage' && method=='POST'){

        const body=[]
        req.on('data',(chunk)=>{
            // console.log("chunk:")
            // console.log(chunk)
            body.push(chunk)//chunk data can be stored in the empty array
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString()// concat the chunk data and make it to human readable
            const message=parseBody.split('=') //parsebody can be split based on = (ex: message=test these two values can be splited and store in message array based on the index [0]=message [1]=test)
           fs.writeFileSync('hello.txt',message[0])
            // console.log(parseBody)

        })
        fs.writeFileSync('hello.txt','hello user welcome to this page')
        res.setHeader('Location','/')
        res.statusCode=302;
        return res.end()
       }
   
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Node server</title></head>')
    res.write('<body><h1>Your answers submitted successfully! </h1></body>')
    res.write('</html>')
    res.end()
});
server.listen(3050);