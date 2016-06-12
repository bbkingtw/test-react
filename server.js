var express=require('express')
var app=express()
var argv=require('optimist').argv
var port=argv.port||80
var path=require('path')

app.get('/', function(req,res){
	var file=path.join(__dirname,'2.html')
	res.sendfile(file)
})

console.log('listen',port)
app.listen(port)