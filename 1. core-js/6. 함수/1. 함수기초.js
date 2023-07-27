// console.log(`김철수님 안녕하세요~~`);
// console.log(`오늘도 즐거운 하루되세용~`);

// console.log(`박영희님 안녕하세용~~`);
// console.log(`오늘도 즐거운 하루되세용~`);

// console.log(`홍길동님 안녕하세용~~`);
// console.log(`오늘도 수고하셧습돠`);

// 함수정의
sayHello('김철수',true);
console.log('=================');
sayHello('영희',false);
console.log('=================');
sayHello('흐암',true);
function sayHello(name,isMornong){
    console.log(`${name}님 안녕하세요~~`);
    if(isMornong){
        console.log(`오늘도 즐거운 하루되세용~`);
    }
    else{
        console.log(`오늘도 수고하셧습돠`);
    }
}
function drawLine() {
    console.log('===============================');
    
}
// input이 주어졌을 때 output데이터가 나와야 함
// 원의 넓이 구하기
function calcAreaCircle(r) {
    const PI = 3.14;
    const area= PI*r**2;
    return area;
}
let result = calcAreaCircle(5);
console.log(result);