let num1=+prompt('첫번째 숫자 입력!');
let num2=+prompt('두번째 숫자 입력!');
let result=0;
let temp;
let i;
if(num1>num2){
    temp=num1;
    num1=num2;
    num2=temp;

    i=num1;
}
else{
    i=num1
}

for(i;i<=num2;i++){
    result+=i;
}

alert(`${num1}~${num2}까지의 누적합: ${result}`);