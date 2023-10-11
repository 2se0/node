import express from 'express';

const router = express.Router();
const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid',(req, res, next) => {
  const nid = req.params.nid;
  const rlist = replyList.filter(reply => reply.nid === nid);
  res.json(rlist);
})

//댓글등록: /POST: /reply
router.post('/',(req, res, next) => {
  const {nid, replyContent} = req.body;
  //console.log({nid, replyContent});
  replyList.unshift({nid, replyContent});
  res.status(201).send('success~'); 
  /*   
  res.json(replyList)
  console.log(replyList);
  */
});

export default router;