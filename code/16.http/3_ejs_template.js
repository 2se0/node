const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const name = 'hong!'
let courses = [//프로퍼티 해당, name
  { name : 'HTML'},
  { name : 'Node.js'},
  { name : 'CSS'},
  { name : 'JavaScript'},
];
let scoreList = [
  { name : 'HTML', grade:'A'},
  { name : 'Node.js', grade:'B'},
  { name : 'CSS', grade:'A+'},
  { name : 'JavaScript', grade:'A'},
];

//서버 생성 : port-3000
console.log('-- server start --');
const server = http.createServer((req,res)=>{//서버 변수를 만든이유는 계속 리스닝을 하기 위해서
  console.log('incomming...');
  //1. 클라이언트 요청 URL 받아옴
  const url = req.url

  //2. 클라이언트 전송타입 
  res.setHeader('content-type','text/html') //json 타입이라면, html->jsom으로 변경해야함

  //3. 패스체크 : / --> index.ejs (if문으로 체크)
  if(url === '/'){
    //4. ejs.renderFile(매개변수) <=프로미스 타입
    ejs.renderFile('./template/index.ejs',{name}) //html로 만들어진 
    .then((data) =>{
      console.log(data);
      res.end(data)})
    .catch(console.error)
  }else if(url === '/courses'){
    ejs.renderFile('./template/courses.ejs',{courses})
    .then((data)=>{
      console.log(data);
      res.end(data)})
    .catch(console.error)
  }else if(url === '/scoreList'){
    ejs.renderFile('./template/scoreList.ejs',{scoreList})
    .then((data)=>{
      console.log(data);
      res.end(data)})
    .catch(console.error)
  }else{
    //패스가 다르면 --> File Not Found~~ Hong!
    ejs.renderFile('./template/error.ejs',{name})
    .then((data)=>{
      console.log(data);
      res.end(data)})
    .catch(console.error)
  }
  
  // console.log(req.hearders);
  // res.write('Welcome')
  // res.end();

})
server.listen(3000);