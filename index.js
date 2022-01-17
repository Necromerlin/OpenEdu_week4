const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
var express = require('./node_modules/express');
var app = express();
app.use (function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});
app.post('/result4', function(req, res)
{
    console.log(req.body);
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', ...CORS });
    res.write(JSON.stringify({ "message": "nekromerlin", "x-result": req.headers["x-test"], "x-body": req.body }));
    res.end('');
});

app.post('/', function(req, res)
{
    console.log(req.body);
});
app.listen(4321);