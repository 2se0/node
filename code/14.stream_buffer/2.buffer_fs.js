const fs = require('fs')
//const fsp = require('fs').promises
const process = require('process')

//파일 읽기 전, 후 -> 메모리 사용량 체크
console.log(process.memoryUsage().rss); //프로미스가 없으니... callback함수로 작업
fs.readFile('./file.txt', //이 파일을 먼저 읽고 (자바스크립트 외부에 있으니(c드라이브))
(err, data)=>{ //읽은 내용을 버퍼에 담아서 /(_, data) 자리를 하나 명시적으로 준다 안그럼 err로 인식하기 때문에

  //읽은 데이터를 file2.txt 파일에 저장
    fs.writeFile('./file2.txt',data, ()=>{
      console.log(process.memoryUsage().rss); //메모리 테스트
    })
    //console.log('-- finished --');
    //console.log(data.toString());
});


//promise 형태로 변환하기
console.log(process.memoryUsage().rss);
fs.promises.readFile('./file.txt') // 상단에 const fsp = require('fs').promises 하면 앞에 fs.promise 안써도됨
//.writeFile('./file2.txt')
.then((data)=>{
  //파일저장 -> file3.txt
  fs.promises.writeFile('./file3.txt',data)
  .then(console.log(process.memoryUsage().rss))
  .catch(console.error)
})
.catch(console.error) 
