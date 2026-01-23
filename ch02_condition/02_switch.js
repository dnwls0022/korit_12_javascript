let date = new Date();
console.log(day); 
let day = date.getDay();
let dayName = '';
console.log(day); //일요일이면  0 토요일이면 6 
switch(day){
  case 0 :
    dayName= "일요일";
    break;
    case 1 :
    dayName= "월요일";
    break;
    case 2 :
    dayName= "화요일";
    break;
    case 3 :
    dayName= "수요일";
    break;
    case 4 :
    dayName= "목요일";
    break;
    case 5 :
    dayName= "금요일";
    break;
    case 6 :
    dayName= "토요일";
    break;
    default:
    dayName="";
    break;
}
console.log("오늘은"+dayName+"입니다.");