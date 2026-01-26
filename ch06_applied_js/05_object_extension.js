//05_object_extension.js

let fName = 'john';  //임의적데이터 값 
let lName = 'Doe';    // 브라우저의 입력을 받게 될 것이기 때문에 변수의 선언과 값 대입이 필수적

let person = {
  firstName : fName,
  lastName : lName,
};
console.log(fName);
console.log(person.firstName);
console.log(person['firstName']); // KEY 가 string이라는것을 알수잇음

/**
 * object상에서는 변수에 할당된 값을 key값으로 치환해서 사용은불가
 * 
 * 하지만 object literal syntax extansion 을 사용하면 object의 키로 변수에 할당된 '문자열'값을 사용할수있다. 대괄호 []사용
 */
let type = 'student';
let score = {
  [type]: 'jane',
  score: 95,

}
console.log(score.score);

console.log(score); 
console.log(score.student); 

/**
 * object의 key를 동적으로 생성가능  : input태그를 통해서 객체의 key 생성가능
 */
