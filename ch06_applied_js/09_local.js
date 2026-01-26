//로컬스토리지에 데이터를 저장하는 예제
if(typeof Storage != 'undefined'){
  localStorage.setItem('title','위대한개츠비');

}

const users = [
  {id: 1,name: 'kim'},
  {id: 2,name: 'Lee'}
];
localStorage.setItem('users',JSON.stringify(users));

console.log(users);
console.log(JSON.stringify(users));

// 받아오는부분

if(typeof Storage !== 'undefined'){
  console.log(localStorage.getItem('title')); // key를 통해 value를 확인합니다.
  console.log(localStorage.getItem('users'));
  // 당연히 'user' key를 통해서 불러오더라도
  // 결과값 : [{"id":1,"name":"Kim"},{"id":2,"name":"Lee"}] 이기는합니다. 하지만 얘는 기본적으로 string이기 때문에 users[0].id와 같은 연산이 불가능합니다
  console.log(JSON.parse(localStorage.getItem('users')));
  // JSON.parse 제이슨의 자바스크립트객체로바까준다

}

let user2 = JSON.parse(localStorage.getItem('users'));
let kim = user2[0].name; // 추가 연산을 한 사례
console.log(kim);

// 지울 때 쓰는 메서드는 removeItem(키);
localStorage.removeItem('title');

// localstorage에서 users만 있게된다.


