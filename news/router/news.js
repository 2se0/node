import express from 'express';
import ejs from 'ejs'

const router = express.Router()
const newsList = []; // nid, url, title, content, rdate

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid',(req, res, next) => {
  const {nid} = req.params
  const newsContent = newsList.filter((news)=>news.nid === parseInt(nid))[0];//[0]으로 객체타입이 달라짐 json타입으로 바뀜
  //console.log(newsContent);
  ejs
  .renderFile('./template/content.ejs',{newsContent})
  .then((data)=>res.end(data))
})

router.post('/register',(req, res, next) => {
  const {url, title, content} = req.body;//name 값을 잘 맞춰야함
  const nid =  Math.trunc(Math.random() * 1000)
  let rdate = new Date(Date.now());
  newsList.push({nid, url, title, content, rdate});
  res.redirect('/news')
})

router.get('/',(req, res, next) => {
  ejs.renderFile('./template/list.ejs',{newsList})
  .then((data)=>{res.end(data);})
})



export default router;