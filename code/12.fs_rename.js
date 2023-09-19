//fs.rename(oldPath, newPath, callback) //fs = 파일시스템

const fs = require('fs')

//fs에서는 3가지 방식으로 제공

//1. synchoronous : renameSync(old, new)
/* 
try {
  fs.renameSync('./test.txt','./test-new.txt') // 폴더이름 변경
  console.log('-- rename complete --');
} catch (error) {
  console.log('-- error --');
  console.log(error);
}
console.log('-- test!! --'); 
*/

//2. callback : rename(old, new, callback)
/* 
fs.rename('./test.txt',
          './test-new.txt',
          (error)=>{
            console.log(error);
          }); //null(보냈는데 받는애가 없음)
*/



//3. promise : rename(old, new) 가독성 좋아서 가장 많이 사용함..?
fs.promises
.rename('./test.txt','./test-new.txt')
.then(()=>console.log('--complete--'))
.catch(console.error) // = .catch((error)=>console.log(error)) 앞에 파라미터가 똑같을 경우 앞에 함수 생략가능
.finally(()=>console.log('-- terminate!! --'))