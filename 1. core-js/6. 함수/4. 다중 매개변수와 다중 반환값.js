
// multi parameter: 매개변수의 개수가 n개일 경우
// n개를 하나의 박스에 담아서 전달하기?
function add2(n1,n2) {
    return n1+n2;
}
// 정수 N개의 총합 (구버전)
function addAll(numbers) {
    let total = 0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}
console.log(addAll([4,5,6,7,8,9,40]));
// 신버전 - 스프레드 
function addAll2(... numbers) {
    let total = 0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}
console.log(addAll2(4,5,6,7,8,9,40));

// 다중 반환값
// 함수의 반환값은 언제나 하나여야한다.
// f(x) = 3a+5b+4c;

// 2개의 정수를 전달하면 두 수의 덧셈, 뺄셈, 곱셈, 나눗셈을 반환받고 싶다.
function operateAll(n1,n2){
    
    return{
        plus:n1+n2,
        minus:n1-n2,
        multi:n1*n2,
        divice:n1/n2
    };
}
let result=operateAll(20,10);
console.log(`덧셈결과: ${result.plus}`);
// console.log(`곱셈결과: ${operateAll(4,5)[2]}`);