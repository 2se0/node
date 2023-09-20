const fs = require('fs');


//파일을 읽어오는 방법 -> Stream
const readSream 
  = fs.createReadStream('./file.txt',{highWaterMark:64,}); //c라이브에 있는 파일 찾아서 읽음(64kbi)
const buf = [];
readSream.on('data',(chunk) => { //data자리는 쓸수있는게 정해져있음/ chunk는 buffer덩어리
  buf.push(chunk)
  console.count('data');
  //console.log(chunk.toString()); //chunk는 buffer타입
  //readSream.close()//읽기작업 후 끝내는 작업
}); //io 나오면 무조건 non-blocking으로 빠져라..
/* 
readSream.on('close',()=>{ //함수 구연이 필요한 끝내는 작업
  console.log(buf.length);
  console.log(buf); // 배열
  console.log(buf.join(''));
  //console.log('--finished--');
})

 */

