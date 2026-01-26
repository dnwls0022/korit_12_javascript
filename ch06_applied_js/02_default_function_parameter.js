//02_default_function_parameter.js//
//함수 정의
function say(message){
  if(message != undefined)console.log(message);
  else console.log('매개변수가 넘어오지않았다.');


}
//함수호출
say();

/*
함수의 매개변수인 message값을 전달하지않으면 message는 undefined가 된다. 만약 매개변수가 특정기능을 구현하기위해 반드시 값이 필요하다면 매개변수값이 비어있을 때는 오류가발생한다. say()내에 값이  있나없나를 체크하는로직이요구된다.

default function parameter 는 함수 호출시 argument가 아에없다면 미리등록되어있는 값을 대입
*/

function say2(message = '매개변수가넘어오지않음2'){
  console.log(message);
}

say2();
say2('argument에 값을넣음')