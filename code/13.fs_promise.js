const fs = require('fs').promises;

//test.txt 파일을 읽어 콘솔에 출력 //promises타입은 무조건.then,.catch
fs.readFile('./test.txt','utf-8')
.then((data)=>{console.log(data)})
.catch(console.error);

//test.txt 파일에 문자열 덮어쓰기
/* 
fs.writeFile('./test.txt','hello~ javascript coders!!')
.then(console.log('--write complete--'))
.catch(console.error);
*/
promise
//test.txt 파일에 데이터 추가하기

fs.appendFile('./test.txt','hello~ javascript coders!! + os.EOL') //\r\n 줄바꿈
.then(console.log('--append complete--'))
.catch(console.error);


//test.txt 파일을 복사하기
/* 
fs.copyFile('./test.txt','./test-copy.txt')
//.then() 이런경우 then 생략
.catch(console.error)
*/

// 'sub-folder' 생성
/* 
fs.mkdir('sub-folder')
.then(console.log)
.catch(console.error)
 */