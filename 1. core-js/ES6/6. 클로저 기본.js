// 자바스크립트 함수는 또 다른 함수를 리턴 할 수 있당.


// function Calculater() {
//     return  (n1,n2)=>n1+n2;
// }
// const Calculater=() =>(n1,n2)=>n1+n2;

// Calculater();
// const result = Calculater();
// console.log(Calculater()(7,4));
// let count=0;
// 카운트를 증가시키는 함수

/*
const increase = ()=> ++count;
console.log(increase());
console.log(increase());
count = 999;
console.log(increase());

const increase = ()=>{
    let count=0;
    return ++count;
}*/
// 카운트를 증가시키는 함수를 리턴하는 클로저를 생성
const incereaseClosure = ()=>{
    let count = 0;
    return()=>++count;
};
const a=incereaseClosure();
console.log(a);
console.log(a);
console.log(a);
// 즉시실행 함수 : 1회성 호출 함수를 만들 때 주로 사용
// function (n1,n2) {
//     return n1+n2;
// }
const r1 = (function (n1,n2) {
    return n1+n2;
})(10,20);
console.log(r1);
const increase = (()=>{
    let count=0;
    return()=>++count;
})();