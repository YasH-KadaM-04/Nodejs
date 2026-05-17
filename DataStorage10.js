



const http=require('http');
const fs= require('fs');
const queryString=require('querystring');
http.createServer((req,resp)=>{
 if (req.url==="/"){
    fs.readFile("Web/Form2.html",'utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":'text/plain'})
            resp.write('<h1> Internal ERROR</h1>')
            return resp.end();
        }
resp.writeHead(200,{"content-type":'text/html'})
         resp.write(data);
         resp.end();
    })
 }
 else if(req.url==='/submit'){

     let dataBody=[];
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    })
    req.on('end',()=>{
        let rawData=Buffer.concat(dataBody).toString();
        let readableData=queryString.parse(rawData);

        let dataString="My Name Is "+readableData.firstName+" My Email is "+readableData.email;
        console.log(readableData);
        console.log(dataString);
        fs.writeFileSync("TXT/"+readableData.firstName+".txt",dataString);
     //  Printing Deatils on screen
     // resp.write(JSON.stringify(readableData));

        resp.end();
    })
    resp.write('<h1>"Form Submited Sucessfully"</h1>');
 }

}).listen(5800)


