const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {



// Header Data  How to add Tab functional
let CollectRegData;
    fs.readFile('Web/sign.html', (err, Regdata) => {
       if(err){
        resp.writeHead(500,{"content-type":'text/plain'})
        resp.end('internal error');
       }

CollectRegDataData=Regdata;

    });


// here  upto for signin 
    fs.readFile('Web/Homepage.html', (err, data) => {
        if (req.url === '/') {
            
            if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Page not found');
        }
        
        
        
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(CollectRegDataData+""+data);
        }
        res.end();
        }
        else if (req.url === '/03style.css') {
            fs.readFile('Web/03style.css', (err, data) => {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.write(' CSS File not found');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.write(data);
                }
                res.end();
            });
        }
    });
}).listen(1000);