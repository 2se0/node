console.log('code1');
setTimeout(()=>{
  console.log('setTimeout!');
},0);

console.log('code2');
setImmediate(()=>{
  console.log('setImmediate!');
});

console.log('code3');

process.nextTick(()=>{ //우선순위 제일 높음
  console.log('nextTick!');
})