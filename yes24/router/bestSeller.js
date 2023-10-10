import express from 'express';
import ejs from 'ejs';
import * as list from './data.js';
/* 
import {
  bestSellerList, 
  realTimeBestSellerList, 
  dayBestSellerList, 
  monthWeekBestSellerList, 
  hotPriceBestSellerList, 
  steadySellerList
} from './data.js'; 

dayBestSellerList 제이슨안에
*/


const router = express.Router();

router.get('/',(req, res, next) => {
  ejs
  .renderFile('./template/list.ejs',{})
  .then((data)=>res.end(data));
});

router.get('/:page',(req, res, next) => {
  res.json(list.bestSellerList)
})

export default router;