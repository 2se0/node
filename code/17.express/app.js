const express = require('express');
const server = express();

let courses = [
  { name : 'HTML'},
  { name : 'CSS'},
  { name : 'Javascipt'},
  { name : 'Node'},
  { name : 'Express'},
];

//미들 체이닝
server.get('/', (req, res)=>{
  // console.log(req.headers); //headers를 줘야 node처럼 실행
  res.send('hello world~!');
})

//객체지향의 캡슐화..?
server.get('/course', (req, res)=>{
  res.setHeader('content-Type' , 'application/json');
  res.status(200);
  res.json(courses);
})

server.post('/course',(req,res)=>{
  const body = [];
  req
  .on('data',(chunk)=>{
    body.push(chunk);
  })
  .on('end',()=>{
    courses.push(JSON.parse(Buffer.concat(body).toString()));
    res.status(201).end();
  });
})

server.listen(3300);

