let numbers=[10,20,30,40,50,60,70,80];
console.log(typeof numbers);
console.log(numbers);
console.log(numbers.length);
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
console.log(`첫번째 데이터: ${numbers[0]}`);
console.log(`마지막 데이터: ${numbers[numbers.length-1]}`);
console.log('================================');
let foods=['오렌지', '짬뽕', '포도', '라임', '레먼'];
// 배열 요소(element) 수정
foods[1] = '파인애플';
// 수정 시 주의사항(인덱스 값을 벗어나면 비어있는 상태로 추가 됨);
// foods[4]='자몽';

// 배열 내부 데이터 전체 참조(순회)
// console.log(foods);
// for (let i=0;i<foods.length;i++){
//     console.log(`${i+1}번째 요소: ${foods[i]}`);
// }

// for(let f of foods){
//     console.log(`저장된 과일: ${f}`);
// }

// ES6 : 모던 자바스크립트 문법
foods.forEach((f,i)=>{
    console.log(`${i+1}번째 과일: ${f}`);
});



