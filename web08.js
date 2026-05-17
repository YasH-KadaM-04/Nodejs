const http=require('http');
const fs=require('fs');
http.createServer((req, resp)=>{
fs.readFile('Web/Homepage.html','utf-8',(err,data)=>{
    if(err){
        
    resp.writeHead(404,"Content-type","text/plain")
        resp.write('Server Down');
        resp.end();
    }
    resp.writeHead(200,"Content-type","text/html")
    resp.writeHead
    resp.write(data)  
    resp.end()
    
})
}).listen(44100)


