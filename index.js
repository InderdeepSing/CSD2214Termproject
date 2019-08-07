const http = require('http');
const data ={
firstName:'Inderdeep',
lastName:'Singh'
}
const site = http.createServer(function(req,res){

console.log('Hello World');
console.log(req.headers);
console.log(req.url);
res.setHeader('Content-Type','application/json');
res.write(JSON.stringify(data));
res.end();
});

site.listen(3000);