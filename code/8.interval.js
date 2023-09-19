//1초에 정수를 하나씩 증가하여 출력하는 함수 생성
let num = 1; 
const interval = setInterval(() => {
  console.log(num++); //종료하려면 clearInterval을 사용해야함
}, 1000);

//6초후에 출력을 종료
setTimeout(()=>{
  console.log('-- Timeout! --');
  clearInterval(interval)// 
}, 6000)