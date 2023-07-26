
let petList=['댕댕이, 먕먕이, 냥냥이'];

console.log(petList);

// 맨 끝에 데이터 추가
petList.push('왈왈이','컹컹이');
console.log(petList);

// 맨 끝 데이터 지우기
let r1=petList.pop();
petList.pop();
let r3=petList.pop();
console.log(petList);
console.log(`r1: ${r1}`);
console.log(`r3: ${r3}`);
// 배열의 맨 첫 위치에 데이터 추가
petList.unshift('둘기');
console.log(petList);

// 맨 첫 데이터 제거
petList.shift();
console.log(petList);