import express from 'express';
import ejs from 'ejs';

const router = express.Router();
let dwitterList = [
/*   {
    pid : 100,
    id : 'james',
    name : '제임스',
    date : '2023. 10. 5',
    content : '안녕하세요!',
  },
  {
    pid : 101,// 삭제나 편집을 위해 pid를 사용함
    id : 'hond',
    name : '홍길동',
    date : '2023. 10. 5',
    content : '안녕하세요! 홍길동입니다',
  },*/
] 

router.use(express.json());
router.use(express.urlencoded());

// 1. GET: /Dwitter - All Dwitter List
router.get('/',(req, res, next) => {
  //index.ejs(틀) + 동적 데이터
  const renderList = dwitterList
  ejs
  .renderFile('./template/index.ejs',{renderList})
  .then((data)=>{res.end(data);});
  //res.send('hello~~!!')
});

// 2. POST: /Dwitter - tweet create
router.post('/',(req, res, next) => {
  const {id, name, content} = req.body;
  const pid =  Math.trunc(Math.random() * 1000)
  let date = new Date(Date.now());
  date = date.toLocaleDateString();
  dwitterList.push({pid, id, name, date, content});
  //console.log(dwitterList);
  res.redirect('/dwitter')
})

// 3. GET: /Dwitter?id=본인아이디 - My Dwitter List
//    GET: /Dwitter/:id
router.get('/:id',(req, res, next) => {
  const {id} = req.params;/* 등록된 내용을 가지고 옴, */
  const renderList = dwitterList.filter((dwitter) => dwitter.id === id) // {dwitter.id === id}있으면 데이터가 쌓여서 다지워짐
/*   
    dwitterList.filter((dwitter) => {
      if(dwitter.pid === parseInt(pid)){
        return dwitter;
    }
  }) */
  ejs
  .renderFile('./template/index.ejs',{renderList})
  .then((data)=>res.end(data))
})

// 4. PUT: /Dwitter/:id - MY Dwitter update
router.put('/',(req, res, next) => {
  const {pid,content} =req.body;
  //console.log({pid,content});
  dwitterList.filter((dwitter) => {
    if(dwitter.pid === parseInt(pid)){/* 데이터가 넘어갈때는 숫자든 문자든 다 문자로 처리함, 그래서 데이터 타입이 달라서 오류나서 parseinit */
      console.log('--->>');
      dwitter.content = content;
    }
  });

  //console.log(dwitterList);
  res.status(204).send('update success!!');
})

// 5. DELETE: /Dwitter/:id - My Dwitter delete
router.delete('/',(req, res, next) => {
  const {pid} = req.body;
  dwitterList = dwitterList.filter((dwitter) => dwitter.pid !== parseInt(pid))/* 블럭으로 묶이면 한번에 같이 삭제됨 */
  res.status(204).send('delete success!')
  //console.log(dwitterList);
  //console.log({pid});
});

export default router;