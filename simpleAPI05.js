const http=require('http');
http.createServer((req,resp)=>{
    const userData=[
        {
            name:"YasH",
            age:21,
            RollNO:20


        },
     {
            name:"UtkarsH",
            age:20,
            RollNO:24


        },
         {
            name:"Tejas",
            age:20,
            RollNO:51


        }
    
        ,
         {
            name:"VishaL",
            age:20,
            RollNO:69


        }


    ];
    resp.setHeader("Content-type","application/json");
    resp.write(JSON.stringify(userData))
    resp.end();
}).listen(51510,()=>console.log("Server is running on port 51510"));