let num=1234567;
let x=30, y=40;

num=num.toString();
console.log(`자리수: ${num.length}`);

// let count=0;
// while(true){
//     num = Math.floor(num/10);
//     count++;
//     let rest=num%10;
//     if(rest===0)break;
// }
// console.log(`자리수 ${count}`);

let result = String(x) + y.toString();
console.log(`result: ${result}`);

let z= `100`;
let result2 = z.toString()+200;
console.log(`result2: ${result2}`);

// 논리로 변환
let money=7000;
let hasMoney=!!money;
console.log(`도니 있능가? ${hasMoney}`);