/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/
let numList = [];
let total=0,inputNum;

while(true){
    inputNum = prompt(`덧셈할 숫자를 입력해주세요 : \n중단 하려면 그만을 입력해주세요`);
    if(inputNum==='그만'){
        break;
    }
    else if(isNaN(+inputNum)){
        alert('숫자를 입력해주세용');
        continue;
    }
    else{
        numList.push(+inputNum);
        total+=numList[numList.length-1];
        
        alert(`입력한 숫자 목록: ${numList}\n입력한 숫자 총합: ${total}`);
    
    }
}
alert(`중단 하였습니다.\n입력한 숫자 목록: ${numList}\n입력한 횟수 ${numList.length}\n입력한 숫자 총합: ${total}`);

