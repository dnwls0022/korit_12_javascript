var x =5;
var y =6;
var z =x+y;
console.log(z);

var x = 7;
z = x+y;
console.log(z);

console.log(a); //오류가안된다
var a = '안녕하세요'
console.log(a);

/*
10번라인에서 선언되지도않은 a란 변수를 console에 찍을 것을 요구했음에도 오류로그가 뜨지않고 a변수에 저장된 값이 undefined라고 이야기한다.
*/
/*
 var은 javascript의 데이터 선언자중 하나인데 변수를나타낼때 쓴다.  근데 console.log(a); //오류가안된다
var a = '안녕하세요'
console.log(a);
처럼 오류가 뜨지않고 underfield가 뜬다. 

*/