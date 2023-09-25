//모듈을 가지고 온다
const http = require('http');
const fs = require('fs');

//서버생성 : createServer()
console.log('start server~!');
const server = http.createServer((req, res)=>{
  console.log('incoming...');
  console.log(req.headers);//현재 서버에 접속한 크롬 브라우저의 헤더를 확인하고싶다
  console.log(req.httpVersion);
  console.log(req.method);
  //console.log(req.url);
  const url = req.url;
  console.log(`url--->${url}`);

  //응답생성 - ur의 path별로 응답처리   /join(회원가입) /login(로그인)
  //res.write('welcome~!'); 
  res.setHeader('Content-Type', 'text/html');
  if(url === '/'){
    fs.createReadStream('./html/index.html').pipe(res); //html까지 하나의 청크생김, pipe
    // res.write('<html>');
    // res.write('<head><title>Node Server Test!</head></title>');
    // res.write('<body>');
    // res.write('<h1>Welcome~!</h1>');
    // res.write('</body>');
    // res.write('</html>');
    //res.end();
  }else if( url === '/courses'){
    fs.createReadStream('./html/courses.html').pipe(res);
    // res.write('<html>');
    // res.write('<head><title>Node Server Test!</head></title>');
    // res.write('<body>');
    // res.write('<h1>Courses~!</h1>');
    // res.write('</body>');
    // res.write('</html>');
    //res.end();
  }else{
    fs.createReadStream('./html/error.html').pipe(res);
    // res.write('<html>');
    // res.write('<head><title>Node Server Test!</head></title>');
    // res.write('<body>');
    // res.write('<h1>Not Found Page~</h1>');
    // res.write('</body>');
    // res.write('</html>');
    //res.end();
  }
});

//어떤 포트로 돌건지, url에 포트번호(서버는 계속 리스닝 하고 있어야함)
//localhost 대신 들어갈 수 인는 객체 = ip(127.0.0.1) = 사설ip (192.168..)
server.listen(8080); //http://localhost:8080

