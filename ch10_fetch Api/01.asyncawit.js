function myfunction1(){
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(responce =>  responce.json())
    .then(json=> console.log(json));

}
myfunction1();
//위엔get요청을 해서  서버로부터 응답이 오면 콘솔에 찍는 함수

/**
 * 밑에는 서버로 요청을 보내고 응답을 보낸후 응답받은 결과를 바탕으로 다시서버로 요청을보낸다.왜 굳이두번일해?
 */

function myFunction2() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(json => {
    console.log(json);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
      
        title: '이제 슬슬 무슨 말하는지 모르겠다',
        body: '그냥 한 숨 잤으면 좋겠다',
        
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(json => console.log(json));
  })
}


// 결과적으로 get 요청이후에 결과값을 가지고 put요청을 새로 한 후에 put의 결과를 확인할수있도록 get요청을 다시 날린형태임 가독성저하
// async await

async function myfunction3(){
  const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const res1JSON = await res1.json();
  console.log(res1JSON);
  // get요청부분에 해당한다 async / await를 빼면 일반적인 자바스크립트처럼 함수 실행 결과값을 변수에담는것처럼 보임


const res2 = await  fetch('https://jsonplaceholder.typicode.com/posts/2',{
  method : 'PUT',
  body: JSON.stringify({
    id:2,
    title:'나', 
    body:'응',
    userid:1,
  }),
  headers:{
          'Content-type': 'application/json; charset=UTF-8 ',
        },
});
const res2JSON = await res2.json();
console.log(res2JSON);

}
myfunction3();
