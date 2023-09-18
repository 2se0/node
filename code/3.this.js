function hello(num){
  this.num = num;
  console.log(num);
  //console.log(this)
}
//console.log(num); //정의가 안되어 있기때문에 error
hello(100);//호출하는 부모를 나타냄
console.log(num);

class test{// global 밑에 생성이 됨
  constructor(name){
    this.name = name;
    console.log(this); //객체 가지가신을 의미한다.
  }
}

const t = new test('hong');