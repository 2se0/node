//운영체제 정보
const os = require('os') //빌트인 객체니깐 require

console.log(os.EOL === '\n'); //맥, 리눅스
console.log(os.EOL === '\r\n'); //윈도우 // end over line
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname()); //계정이름*한글X
console.log(os.type());
console.log(os.cpus());
console.log(os.uptime());
console.log(os.version());