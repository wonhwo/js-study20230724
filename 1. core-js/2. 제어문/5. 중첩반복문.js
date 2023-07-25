// 구구단을 외장
let cnt=0;
for(let i=0;i<3;i++){
    for(let j=0;j<2;j++){
        for(let k=0;k<4;k++){
            cnt++;
        }

    }
}
console.log(`총 반복 횟수: ${cnt}회`);

for(let i=2;i<10;i++){
    console.log(`=====${i}단=====`);
    for(let j=1;j<10;j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
    console.log(`\n`);
}