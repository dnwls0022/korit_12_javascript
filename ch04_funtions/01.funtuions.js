let sum00 = add(10, 5); // 정의된 함수는 저 밑에 있는데 연산이 됩니다.
console.log(sum00);   



// 함수의 정의
function add(a, b) {
  let sum = a + b;
  return sum;
}
// 함수의 호출 - add(a, b) {
  //let sum = a + b;
  //return sum; 라는 add(a,b)는 이것이라는 식을 함수로정의해줬으므로 15,3이나온다
let sumNum = add(1, 2);
console.log(sumNum);
//3이된다

/**
 * calcSum과 calcAvg를 정의하시오.
 * 실행 예 
 * 총합은 55입니다.
 * 평균은 5.5입니다.
 */
//스코어라는 배열 10가지 1-10
scores = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// calcSum이라는 함수  score배열로선언
function calcSum(scoreArray) {
  //일단 sum = 0이라고 초기화
  let sum = 0;
  // 자바의 향상된 for문과 비슷하다  const score of scoreArray ch03-03을 보면 for-of가 있는데 이는 scores의 값들을 보여준다 근데 우리는 총합을 구해야하니까 값이필요하고 그래서for-of문을 쓴다
  // 그리고 이거는 for(const 배열명 of 매개변수명)으로 쓴다 
  for (const score of scoreArray) {
    //그리고 이건 총합구하는 식 함수에서식을 정의해준다.
    sum+=score;
  }
  return sum;
}

function calcAvg(scoreArray) {
  let sum = calcSum(scoreArray);
  let avg = sum / scoreArray.length;
  return avg;
}

function printScores(scoreArray) {
  let sum = calcSum(scoreArray);
  let avg = calcAvg(scoreArray);
  console.log('총합은 ' + sum + '입니다.');
  console.log('평균은 ' + avg + '입니다.');
}
//총합 : 55
console.log('총합 : ' + calcSum(scores));
//총합은 55입니다.
//평균은 5.5입니다.라고 printscores라는 함수를 한번에 통째로 만들어서 (총합과 평균을 출력할수있도록했다.)
printScores(scores);
// 함수(메서드) 하나 당 기능은 한 개씩