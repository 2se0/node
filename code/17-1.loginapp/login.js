const express = require('express');
const process = require('process');
const path  = require('path');
const app = express();

let list = [];

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'login.html'))
});

app.get('/join',(req,res)=>{
  res.sendFile(path.join(__dirname,'join.html'))
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/login',(req,res)=>{
  const {id,ps} =req.body
  let result = 0

  for(let i=0; i<list.length; i++){
    let member = list[i];
    if(id === member.id && ps === member.ps){
      result = 1;
      i = list.length;
    }
  }
  
  if(result == 1){
    res.redirect('/')
  }else{
    res.sendFile(path.join(__dirname, 'loginfail.html'))
  }
})

app.post('/join',(req,res)=>{
  const{name,id,ps,address} = req.body
  list.push({name,id,ps,address})
  console.log(list);
  res.redirect('/')
})

app.listen(9000)