import express from 'express';
import * as list from './data.js';
// import {
//   bestSellerList, 
//   realTimeBestSellerList, 
//   dayBestSellerList, 
//   monthWeekBestSellerList, 
//   hotPriceBestSellerList, 
//   steadySellerList
// } from './data.js';

const router = express.Router();

router.get('/:page',(req, res, next) => {
  res.json(list.hotPriceBestsellerList)
})

export default router;