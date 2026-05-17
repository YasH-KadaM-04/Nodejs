
const http = require("http");
http.createServer((req,resp)=>{
resp.write("<h1>Hello   There I have Created my First Server  Hey i am Here to Help You Are You Okay</h1>")
    resp.end(" ");

}).listen(4900);



const other = require("http");
other.createServer((req,resp)=>{
resp.write("<h1> Hello I am YasH How Can i Help You...!</h1>")
    resp.end(" ");

}).listen(5900);