const path = require('path');

//윈도우 : c:\dev\node\code\test.js
//맥,리눅스 : /users/test/

path.dirname + '/image'
console.log(__dirname); // global에 있는 디렉토리
console.log(__filename); // global에 있는 파일

console.log(path.sep); // 경로구분자
console.log(path.delimiter); // 환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//dirname
console.log(path.dirname(__dirname));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename) //오브젝트 형태로 출력
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed); //string 형태로 변환
console.log(str);

// normalize
console.log(path.normalize('./folder//////sub'));

// join
//console.log(__dirname + '/' + 'image'); //권장X
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image','test'));



