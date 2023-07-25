for(let i=0;i<10;i++){
    if(i%2===0)continue;
    console.log(i);
}
console.log('반복문 끝!');


while(true){
    let n=+prompt('숫자 입력:')
    if(n===0)break;
    else if(n===1)continue;
    alert('안끝났');
}
alert('끝남');