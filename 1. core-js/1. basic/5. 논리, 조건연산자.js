
// && : 양쪽이 모두 참일 경우 참
// || : 둘중 하나가 참인 경우 참

// 아이디검증 && 패스워드 검증
// true             true    ==>    true
// true             false   ==>   true
// true             true    ==>    false
// true             false   ==>   false

let t=true;
let f=false;
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// 논리 반전
console.log('=============================');
console.log(!t);

let money=5000;
if(!money){
    console.log('집에서 쉴거얌');
}
else{
    console.log('쇼핑을 할거얌');
}
// 조건 연산자(3항연산)
console.log('================================');

let food;//먹고시픈음식
// if(money>6000){
//     food='돈까스'
// }
// else{
//     food="라면"
// }

console.log(`선택된 음식: ${money>6000?'돈까스':'라면'}`);