/**
 * Created by lifan on 2015/12/6.
 */

var http=require('http');
var fs=require('fs');


function statusCode(num,res){
    switch(num)
    {
        case 404:
            res.writeHead(num,{'Content-Type':'text/plain'});
            res.write('404');
            res.end();
        break;

    }

}
http.createServer(function(req,res){


    var URL=req.url=='/'?'/index.html':req.url;

    fs.readFile('www'+URL, function (err, data) {
        if(err){
            statusCode(404,res);
        }else{
            res.write(data);
            res.end();
        }
    })
}).listen(80);

        
