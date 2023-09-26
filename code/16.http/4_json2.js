//* postman을 이용해서 테스트 진행해주세요

const http = require('http')

//1. 주소록(address) 배열 객체 생성
let address = [];

//2. POST 방식으로 이름, 주소를 입력받아 address에 추가
const server = http.createServer((req,res)=>{
  const url = req.url;
  const method = req.method;
  
  if(url === '/address'){
    if(method === 'GET'){
      if(address.length != 0){
        res.writeHead(200,{
          'content-Type' : 'application/json'
        })
        .end(JSON.stringify(address));
      }else{
        res.end('--No data--');
      }
    }else if(method === 'POST'){
      const body = [];
      req.on('data', (chunk)=>{
        console.log(chunk.toString);
        body.push(chunk);
      })
      req.on('end',()=>{
        //const bodyStr = Buffer.concat(body).toString();
        //const newCourse = JSON.parse(bodyStr);
        address.push(JSON.parse(Buffer.concat(body).toString()));
        res.writeHead(201).end();
      })
    }
  }else{
    res.write('File Not Found~~');
    res.end();
  }
})

//3. GET 방식으로 주소록(address) 확인
server.listen(9000);