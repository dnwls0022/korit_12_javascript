function getPerson(){
  return{
    fName: '영',
    lName: '김',
    age: 20,
    email: '@aaa',
    city : '부산',
    contry : '한국',
  };
}
//email값과 city의 값을 출력한다면 ... 
// 해당지원자는 부산살고있으며 email은 @aaa입니다.출력
//1.
let kim0= getPerson(); //함수 호출 결과가 object니까 걔를 변수에 대입한 다음

console.log(`해당지원자는 ${kim0.city}에 살고있으며 emial은 ${kim0.email}입니다.`);//객체명.key값을 통해서 해당 value를 불러냈습니다.


//2.
let kimEmail = getPerson().email;  // 
//  애초에 객체의 특정 key의 value만 변수에 저장하고
// 특정 key---

let kimCity = getPerson().city;
console.log(`해당지원자는 ${kimCity}에 살고있으며 emial은 ${kimEmail}입니다.`);
// 콘솔에 찍힐 수 있도록 했습니다.

//3.
//객체의 추출하고자 하는 key와 동일한 변수를 선언합니다. {} 내에.
let {email, city} = getPerson();// 이렇게 쓰면 email이라고 하는 변수에 getPerson().email의 value 값이, city라고 하는 변수에 getPerson().city의 변수값이 들어갑니다.
console.log(`해당지원자는 ${city}에 살고있으며 emial은 ${email}입니다.`);



//4.
function displayFullName({fName,lName}){ // 매개변수가 구조분해되어있음을 {}로 알 수 있음
  console.log(`${lName} ${fName}`);
}

displayFullName(getPerson()); // 그러면 인수로는 key로 fName lName을 가지고 있는애가 필수적으로 요구된다. 호출시 argument와 정의 시에 매개변수차이점

//1.2.3등의 방법으로 선언해도 결과는 같다. 편하고 유용한방법으로 쓸것
//맨위에서 함수를 정의했고 function...return으로 그리고 다양한방법으로 호출하는것