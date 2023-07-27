let phone = {
    comapny: '삼성',
    color: '퍼플',
    model: '갤럭시 z4 플립',
    price: 1200000
};
phone.comapny='사과';
phone['model']='아이폰14';
console.log(phone);

// 프로퍼티 동적 추가
phone.madeDate = '2023-03-05';
console.log(phone);

// 프로퍼티 동적 삭제
delete phone.price;
console.log(phone);
console.log('=========================');
// 객체의 반복문 for ~ in
for (let x in phone){
    console.log(`key: ${x}`);
    console.log(`value: ${phone[x]}`);
    // console.log(typeof x); 결과값 : string
}
console.log('======================');
// 객체에 key 존재 유무 확인
let flag = 'model' in phone;
console.log(flag);
let key = 'company'

if(key in phone){
    console.log('이러면 수정');
}
else{
    console.log('요로면 추가');
}
