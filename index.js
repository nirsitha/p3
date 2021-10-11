var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
const app=express();
const PORT =process.env.PORT || 3000;

app.get('/',(req,res)=>{
    fs.readFile('./index.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        })
})
app.get('/one',(req,res)=>{
    fs.readFile('./one.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
       
    })
})
app.get('/second',(req,res)=>{
    fs.readFile('./second.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        
    })
})
app.get('/three',(req,res)=>{
    fs.readFile('./three.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        
    })
})

console.log(PORT);
app.listen(PORT);