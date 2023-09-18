const { table, dir, time, trace } = require("console");

console.log('logging...')

//log level
console.log('log');     // 개발하는 환경에서 디버깅 할때
console.info('info');   // 정보, 사용법..
console.warn('warn');   // 경고
console.error('error'); // 에러

//개발서버, 배포(실행)서버와 다름.
//개발서버에선 괜찮지만 배포서버에는 모든 log 삭제 권장한다.

console.clear(); //log 삭제

//assert
console.assert(2 === 2,'일치'); //조건식 결과값이 true이면 출력안됨
console.assert(2 === 3,'불일치'); //false인 경우만 출력

//print object
const student = {name:'홍길동', age:20, color:{default:'red'}}//{default:'red'}감추겠다.
console.log(student);
console.table(student);
console.dir(student, {showHidden:true, color:false, depth:0}); //일반 로그와 같지만

//time (간단히.. 진행 속도확인)
console.time('for loop');
for(let i=0; i<10; i++){
  i++;
}
console.timeEnd('for loop');

//trace
function f1(){
  f2();
}
function f2(){
  f3()
}
function f3(){
  console.log('function 3!!');
  console.trace(); //누구부터 실행되는가(콜스택에 쌓인순서대로. 쌓여있음)
}
f1();