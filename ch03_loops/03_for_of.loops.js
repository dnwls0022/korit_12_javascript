let brands = ['애플','구글','메터','아이폰','삼성'];
for(const brand in brands){
  console.log(brand); //배열값나옴 1.2.3.4.5
  console.log(brands[brand]);
}
console.log("for-of")
for(const brand of brands){
  console.log(brand); // 배열값만나온다
}
//in들어가면 index뽑히고 , of하면 value나온다
/**
 * for-of문은 Array, Map, String 등 iterable(반복가능객체)에서 사용가능한 반복문에 해당합니다.
 * for-in은 key를 뽑아내기 때문에 보통 JS 객체에서 사용되는 편이고, 일반 배열에서 돌리게 될 경우에는 index 넘버가 추출됩니다.
 * 하지만 for-of를 쓸 경우 value가 그대로 나온다는 차이점이 있습니다.
 */

let language = "javascript";
for(const indexnumber in language){ //in인지 - 배열번호
  console.log(indexnumber);
}
for(const letter of language){   //of인지 - value값
  console.log(letter);
}

//원리는 알겟다 코드구성체크