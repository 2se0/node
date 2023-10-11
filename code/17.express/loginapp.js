const express = require('express')
const process = require('process')
const path = require('path')
const app = express();

let list = [];

//path root('/')이면  welcome 메세지 전송(res)
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/login',(req,res)=>{ 
  // console.log(path.join(__dirname, 'login.html')); //경로만 필요시 
  // console.log(path.join(process.cwd(), 'login.html'));// 다른 함수들도 부를시..
  res.sendFile(path.join(__dirname, 'login.html'))
});

app.get('/join',(req,res)=>{ 
  res.sendFile(path.join(__dirname, 'join.html'))
});

//받기 전에 실행되어야 의미 있음. POST 하부에 있으면 X
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/login',(req,res)=>{
  const {id,ps} = req.body
  // const id = req.body.id = html name과 같은 값임 
  // const ps = req.body.ps
  let result = 0;
  
  //list에서 id,ps 일치하면 -->1 일치하지 않으면 -->0
  for(let i=0; i<list.length; i++){
    let member = list[i];
    if(id === member.id && ps === member.ps){
      result = 1;
      i = list.length; //break;
    }
  }

  if(result == 1){
    //성공 --> index.html 이동
    res.redirect('/')
    //res.send('로그인성공')
  }else{
    //실패 --> loginFail.html 이동
    res.sendFile(path.join(__dirname, 'loginFail.html'))
    //res.send('로그인실패')
    //res.redirect('/error')//redirect는 /붙고, 다시 접속
  }
})

app.post('/join',(req,res)=>{
  const{name,id,ps,address} = req.body
  list.push({name,id,ps,address})
  console.log(list);
  res.redirect('/')

})

// 클라이언트가 호출하는게 아니라 내부에 있는 미들웨어가 호출
app.get('/error',(req,res)=>{
  res.sendFile(path.join(__dirname, 'error.html'))
})

app.listen(8080);