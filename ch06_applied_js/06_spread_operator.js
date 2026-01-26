let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [...arr2, ...arr1];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
/*
배열, 문자열과 같이 literation(반복가능자료형)형태의 데이터를 element하나하나로 분해해서 사용가능
arr1,2는 자료형이 배열이다 -> ...arr1/ ...arr2는 배열이아니고 4,5,6,이라는 각각의 원소와 1,2,3이라는 각각의 element이다 즉 자료형을 착각하기쉽다

...args에서 spread연산자가 도입되어있다.
*/
let cd = 'CD';
let alphabets = ['A','B',...cd]; // 그러면 그 와중에 스프레드 연산자의 작성 순서도 중요하네요.
console.log(alphabets);
/**
 * 그럼 alphabets 내부의 element를 소문자로 바꾸고 싶다면 내부로 들어가서 .toLowerCase()를 적용하면 되겠네요.
 */
// 기본for문
for(let i = 0; i < alphabets.length; i++){
  console.log(alphabets[i].toLowerCase());
}
// 향상된 for문 in 객체 of배열
console.log('향상된 for-of문');
for (let alphabet of alphabets){
  console.log(alphabet.toLowerCase());
}
/**
 * alphabet내부의 element를 소문자로 바꾸고싶다면 내부로 들어가서 tolowercase를 적용
 */
