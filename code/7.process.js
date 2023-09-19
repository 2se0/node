const process = require('process');

console.log(process.execPath); //실행경로
console.log(process.version);
console.log(process.pid);//프로세스 아이디
console.log(process.ppid);//프로세스 부모의 아이디
console.log(process.platform);
console.log(process.env);//모든 환경 변수
console.log(process.uptime());
console.log(process.cwd()); //현재 경로 출력
console.log(process.cpuUsage());

//setTimeout(콜백함수(3초뒤에 실행되는 모든함수), 3000); -> non-blocking 
//3초후에 'setTimeout!!' 출력

global.setTimeout(() => { //global 생략가능 process.은 지원X
  console.log('setTimeout!!');
  }, 3000);

//nextTick(콜백함수); -> non-blocking 콜백함수는 비동기식(다른곳에 던져놨다가 나중에 호출)
process.nextTick(()=>{ //process. 지원O
  console.log('nextTick!!'); //nextTick은 비동기식 함수중에 우선순위가 제일 높아서 setTimeout과 같이 실행시 먼저 실행됨
})
