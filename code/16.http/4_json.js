const http = require('http')

let courses = [
  { name : 'HTML'},
  { name : 'CSS'},
  { name : 'Javascipt'},
  { name : 'Node'},
  { name : 'Express'},
];

const server = http.createServer((req,res)=>{
  const url = req.url;
  const method = req.method;

  if(url === '/courses'){
    if(method === 'GET'){
      const strCourses =  JSON.stringify(courses)//문자열로 변경(stringify)후 전달해야함.
      //res.write('') //json 데이터 위치
      res
      .writeHead(200, {
        'Content-Length' : Buffer.byteLength(strCourses), //https://www.postman.com/
        'Content-Type': 'application/json', 
      })
      .end(strCourses);//문자열타입으로 보내야함 
/* 
    response
  *   .writeHead(200, {
  *     'Content-Length': Buffer.byteLength(body),
  *     'Content-Type': 'text/plain', //변경부분
  *   })
  *   .end(body);//전송(content-length)
 */

    }else if(method === 'POST'){ //폼을만들거나 ajax필요 아니면 postmap 설치후 진행 필요
      //post 방식으로 요청이 오면 -> JSON 데이터 받기
      const body = [];
      req.on('data',(chunk)=>{
        console.log(chunk.toString);
        body.push(chunk);
      });
      req.on('end',()=>{
        const bodyStr = Buffer.concat(body).toString();
        const newCourse = JSON.parse(bodyStr);
        courses.push(newCourse);
        res.writeHead(201);
        res.end();
      })
    }
  }else{
    res.write('File Not Found~~');
    res.end();
  }

})
server.listen(8080);
