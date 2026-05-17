
// ////USED when data is small and passed through Js
const http=require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":'text/html'})
    //console.log(req.url);
    if(req.url=='/'){
resp.write(`
         <form action="/submit "  method="post" >
        <input type="text" placeholder="Enter Your Name" name='name'/>
   
        <input type="text" placeholder="Enter Your Mail" name='email'/>
        <button>Submit</button>
        </form>
      `);
    }
       else if(req.url=="/submit"){
        resp.write("<h1> Form Submited  Successfully</h1>")
       }
       else{
        resp.write('<h1>Internal server error</h1>')
       }
 
      resp.end();
}).listen(41410)








