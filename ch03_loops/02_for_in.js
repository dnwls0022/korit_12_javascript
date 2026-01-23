let person = {lName: "김", fName: "영", age:20, score:4.5,}

//for-in구문형식
/**
 * for(const 변수명 in 반복가능객체){
  반복실행문
 * }
 */
for(const key in person){
  console.log(key);
}

/* value값을 뽑아내려면 어케하는가*/
for(const key in person){
  console.log(person.key);
}
/* 불가함 왜냐 person의 key는 lName
fName
age
score가 있지 person.key는없다 */ 
for(const key in person){
  console.log(person[key]);
}

/*그래ㅔ서 [key]는 가능하다  key가 변수로 선언되었고 거기의 값에 반복문시점마다 'iname'이라는 스트링 자료형이 들어가있기 때문에 person[key]로는 value가 호출가능 */

