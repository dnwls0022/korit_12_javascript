function sum1(x1,x2){
  let y = x1+x2;
  return y;
}

console.log(sum1(5,7));

function sum2(x1,x2,x3,x4){
  let y = x1+x2+x3+x4;
  return y;
}

console.log(sum2(5,7,1,3));

/**
 * 일반적인 함수 정의는 매개변수를 몇개 선언할지 미리 지정한다. 2개지정하면 무조건 인수가 두개 4개지정하면 인수가 4개필요
 * 즉 정해인 인수를 충족하는 선에서 미리써서 몇번 호출할지를 고민해야한다. 범위를 벗어나게되면 계산자체가 불가능
 * 
 * ->이를 해결하기 위한것이 rest parameter의 개념이다 몇 개의 매개변수가 전달될지 모르는 경우사용
 */

function sum3(...args){  // 매개변수를 이렇게 설정하면 함수호출시 매개변수개수에 상관없이 할당 가능 이렇게 지정된값은 '배열'로 저장된다.
  let total = 0;
  for(let x of args){
      total += x;
  }
  return total;

}

console.log(sum3(1,2,3,4,5,6,7,8,9,10));
console.log(sum3(1,2,3,4,5,6,7,8,9,10,23,4,5,6,6,7,7,4,5,6,67,5,77,75,7,));