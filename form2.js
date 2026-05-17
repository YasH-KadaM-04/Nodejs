const http=require('http');
const fs= require('fs');
http.createServer((req,resp)=>{
 if (req.url==="/"){
    fs.readFile("Web/Form2.html",'utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":'text/html'})
            resp.write('<h1> Internal ERROR</h1>')
            return resp.end();
        }
resp.writeHead(200,{"content-type":'text/html'})
         resp.write(data);
         resp.end();
    })
 }
 else if(req.url==='/submit'){
    resp.write('<h1>"Form Submited Sucessfully"</h1>');
 }

}).listen(4900)


