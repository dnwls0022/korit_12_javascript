// 1. toString() 생략
// 2. join()
let names = ['김일','김이','김삼']
console.log(names.join(' / '));
//3. pop()
let scores = [100,90,80];
let lastScores = scores.pop(); // 배열 냐에서 맨마지막 값을 삭제하고 그 값을 리턴
console.log(scores);     // 결과 100, 90
console.log(lastScores);  // 첨 배열의 마지막값 80
//4.push()
scores.push(70);
console.log(scores);
//5. shift() 
let firstscores =scores.shift();  // 첫ㄱ번째 값 삭제하거 그값을 리턴
console.log(scores);         
console.log(firstscores);
//6. unshift()
let newindex = scores.unshift(4.5); // 0번지에 새 element추가 하고 +1된 새로운 length 값을 리턴
console.log(scores);
console.log(newindex);
//7. 배열요소변경
scores[2]= 'A+';
console.log(scores); //결과: [ 4.5, 90, 'A+' ]
// 8. splice()
scores.splice(1,0, 'B+','100점', 4.0); // 1번지에 아무것도 삭제하지않고 (0), 'B+', '100점', 4.0이라는 3개의 element를 스코어 배열에 추가
console.log(scores); //결과: [ 4.5, 'B+', '100점', 4, 90, 'A+' ]
//9. concat()
let vege = ['토마토', '수박', '양파'];
let meet = ['소고기', '양고기', '돼지고기'];
let fruits = ['사과', '포도', '바나나'];
let newfoods = vege. concat(meet, fruits);
console.log(newfoods);
//결과[
  '토마토', '수박',
  '양파',   '소고기',
  '양고기', '돼지고기',
  '사과',   '포도',
  '바나나'
//10.


//11.

//12. filter()
let words = ['spray','limit','elite', 'extraordinary','destruction','present'];
let result = words.filter(function(word){
    return word.length > 6;
})
console.log(result);
//결과: [ 'extraordinary', 'destruction', 'present' ]
/* */ 
//필터 예시
let persons = [
  {
    name: '김영',
    point: 70,
    city: '서울',
  },
  {
    name: '김이',
    point: 60,
    city: '부산',
  },
  {
    name: '김삼',
    point: 50,
    city: '인천',
  },
  {
    name: '김사',
    point: 40,
    city: '제주',
  },
  {
    name: '김오',
    point: 90,
    city: '강원',
  },
];

let personResult = persons.filter(function(person){
  return person.point>80;
})
console.log(personResult); 

/**
 * [
  { name: '김일', point: 98, city: '서울' },
  { name: '김삼', point: 81, city: '부산' }
]
 * 
 */

// 13. map()
let userlist = [
  {
    fName: '영',
    lName: '김',
    email: '@naver1',
  },
  {
    fName: '일',
    lName: '김',
    email: '@naver2',
  },
  {
    fName: '이',
    lName: '김',
    email: '@naver3',
  },
  {
    fName: '삼',
    lName: '김',
    email: '@naver4',
  },
  {
    fName: '사',
    lName: '김',
    email: '@naver5',
  },

];

let modifiedUserList =  userlist.map(function(user){
  return{
    fullName: user.lName+user.fName,
    lName:user.lName,
    fName:user.fName,
    email:user.email,
  };
})
console.log(modifiedUserList);
console.log(userlist);
/**
[
  { fullName: '김영', lName: '김', fName: '영', email: '@naver1' },
  { fullName: '김일', lName: '김', fName: '일', email: '@naver2' },
  { fullName: '김이', lName: '김', fName: '이', email: '@naver3' },
  { fullName: '김삼', lName: '김', fName: '삼', email: '@naver4' },
  { fullName: '김사', lName: '김', fName: '사', email: '@naver5' }
]
[
  { fName: '영', lName: '김', email: '@naver1' },
  { fName: '일', lName: '김', email: '@naver2' },
  { fName: '이', lName: '김', email: '@naver3' },
  { fName: '삼', lName: '김', email: '@naver4' },
  { fName: '사', lName: '김', email: '@naver5' }
] 
  결과값  

* 
 */