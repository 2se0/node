const fs = require('fs')

const buf = Buffer.from('Hi~') 
console.log(buf);
console.log(buf.length); // 3 아스키코드표 참조
console.log(buf[0]); // 72
console.log(buf[1]); // 105
console.log(buf[2]); // 126

//문자열 출력
console.log(buf.toString('utf-8')); //Hi~ 문자열 출력, utf-8기준

const buf2 = Buffer.alloc(buf.length); //픽스값 최소화, 상수화 되어 있는 값을 이용하기
console.log(buf2.length);
console.log(buf2);
buf.copy(buf2) //buf의 내용을 복사하여 buf2에 저장
console.log(buf2);

const newBuf = Buffer.concat([buf,buf2]) //
console.log(newBuf);
console.log(newBuf.toString());
