let foodList=['닭꼬치', '볶음밥','자장면','족발'];

let findTarget='볶음밥';

// for(let i = 0;i<foodList.length;i++){
//     if(findTarget===foodList[i]){
//         index=i;
//         break;
//     }
// }
// indexOf : 배열의 특정 요소가 몇번 인덱스에 있는지 탐색
let index = foodList.indexOf(findTarget);
console.log(`찾은 인덱스: ${index}`);

// includes() : 배열의 특정 요소가 존재하는지 논리여부 확인

let isPresent = foodList.includes('닭꼬치');
console.log(`존재 여부: ${isPresent}`);

// slice() : 배열을 일정부분 잘라내어, 복사본 배열을 반환
console.log('=========================');
foodList.push('오뎅', '국밥', '떡볶이');
console.log(foodList);
let copyList = foodList.slice(0,3);
console.log(copyList);console.log(foodList);

// 
let slice2 = foodList.slice(3);
console.log(slice2);

// 원본배열을 그대로 복사
let copyArr = foodList.slice();
console.log(copyArr);

// reverse(): 배열을 역순으로 정렬
console.log('====================');
let arr1=[10,20,30];
let arr2=[9,7,1,4,3,1];

console.log(arr1.reverse());
console.log(arr2.reverse());

let arr2Copy = arr2.slice();
arr2Copy.reverse();
console.log(arr2Copy);

// conact(): 배열 2개를 결합, 결합한 사본을 리턴
console.log('================================');
let concatArray = arr1.concat(arr2);
console.log(concatArray);

// splice() :배열의 특정요소를 제거, 삽입;
console.log('==================================');
console.log(foodList); 

foodList.splice(1,2);
console.log(foodList);

foodList.splice(0,1,'보쌈');
console.log(foodList);

foodList.splice(1,0,'마라탕');
console.log(foodList);

// clear()배열 전체 삭제
foodList.splice(0);
console.log(foodList);