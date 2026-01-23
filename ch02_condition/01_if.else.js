let age = 12;
let busFare =0;

if(age <7){
  busFare =0;
}else if(age <=7 && age <13){
  busFare =450;
}else if(age <=13 && age <19){
  busFare =720;
}else if(age <=19 && age <70){
  busFare = 1200;
}else if(age >70){
  busFare = 0;
}

console.log(busFare + "원")

//bmi 계산
let height = 183;
let weight = 83;

let bmi = 0;
let grade = "";
//연산
bmi = weight /(height*0.01)**2;
//원래는 cm지만 m로 바꿔서 연산해야해서 0.01을 곱해준다 height에
//조건
if(bmi< 18.5 ){
  grade= "저체중"
}else if(bmi< 23 ){
  grade= "정상"
}else if(bmi< 25 ){
  grade= "비만 전 단계"
}else if(bmi< 30 ){
  grade= "1단계비만"
}else if(bmi< 35 ){
  grade= "2단계"
}else{
  grade = "위험"
}

console.log("당신의 bmi 지수는"+ bmi.toFixed(2) + "이고"+ grade + "입니다.");
// 소수둘쨰자리까지표기하기위해 toFixed(2)

