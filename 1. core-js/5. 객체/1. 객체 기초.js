let myPet={
    name:"뽀삐",
    age:3,
    favorite:["산책","간식"],
    kind:"진돗개",
    injection: true
}
let yourPet={
    name:"콩순이",
    age:4,
    favorite:["낮잠","털뭉치"],
    kind:"러시안블루",
    injection: true,
    '싱기방기':'싱기싱기'
}
console.log(typeof myPet);
// 객체에 저장된 데이터 참조
console.log(myPet.kind);
console.log(yourPet.kind);
console.log(yourPet.name);
console.log(yourPet.favorite);

myPet.favorite.push('꼬리흔들깅');
console.log(myPet);

// 키값쌍 == 프로퍼티
// 프로퍼티 참조 2
console.log('================');
console.log(myPet.injection);
console.log(yourPet['싱기방기']);

let myPetName='name';
console.log(myPet[myPetName]);