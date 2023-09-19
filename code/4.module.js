const counter = require('./4.counter.js');
//const fs = require('os')

counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());
//첫글자가 대문자면 클래스