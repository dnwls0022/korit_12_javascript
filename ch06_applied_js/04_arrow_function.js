// 함수선언식 (가장 기초적인 함수정의방식)
function hello1(name){
  return `Hello ${name}`;
}
//함수 표현식 (화살표 함수랑 합쳐져서 많이쓰인다.)
// 함수결과값이아닌 함수자체를

const hello2 = function(name){
  return `오오오 ${name}`;
}
//화살표 함수의 정의방식 -> 람다식과 유사

//모든 소중괄호가 다 표기
const hello3 = (name) => {return `안녕하세요 ${name}`};

//매개변수가 하나일 떄는소괄호 생략
const hello4 = name => {return `또 안녕하세요 ${name}`};

//실행문이 한줄일때 중괄호 생력  / 근데 return문일 경우 return도 생략
const hello5 = name => `또또 안녕 ${name}`;

//매개변수가없으면 비어잇는 소괄호 사용
// default넣고싶으면 아래와같이
const helloEveryone = (name= '여러분') => `안녕하세요 ${name}`;