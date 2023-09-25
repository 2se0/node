//1. http://127.0.0.1:9000
//   주소로 동작하는 노드 서버를 생성하시고, 실행해주세요

// 2. 접속한 클라이언트의 URL에 따라 결과를 전송해 주세요.
//    /        ---> ./test/main.html
//    /courses ---> ./test/courses/courses.html
//    /login   ---> ./test/login/login.html
//    기타주소 ---> ./test/error.html

const http = require('http');
const fs = require('fs');

console.log('start server');
const server = http.createServer((req,res)=>{
  console.log('imcomming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  const url = req.url;
  console.log(`url--->${url}`);

  res.setHeader('content-type','text/html');
  if(url === '/'){
  fs.createReadStream('./test/main.html').pipe(res);
  }else if(url === '/courses'){
    fs.createReadStream('./test/courses.html').pipe(res);
  }else{
    fs.createReadStream('./test/error.html').pipe(res);
  }
});

server.listen(9000)