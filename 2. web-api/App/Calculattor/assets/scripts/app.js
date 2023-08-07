// index.html에서 활용할 이벤트 처리, 핸들러...
outputResult('30','5+25');
// 연산타입 상수로 관리
const ADD = 'ADD';
const SUB = 'SUB';
const MUL = 'MUL';
const DIV = 'DIV';

// 현재 계산기에 그려질 숫자
let currentResult = 0;

// operation 문자로 기호를 생성하는 함수
const convertOperationToMark = (operation)=>{
    let mark;
    switch(operation){
        case ADD:
            mark = '+';
            break;
        case SUB:
            mark = '-';
            break;
        case MUL:
            mark = '*';
            break;
        case DIV:
            mark = '/';
            break;
    }
    return mark;
}
// 로그 이력을 렌더링하는 함수
let count=1;
const renderToLog = ({operation,prevResult:firstnum,number:secondnum,result})=>{
    const $logLi = document.createElement('li');
    $logLi.classList.add('test-class');
    
    $logLi.textContent=`#${count++}. ${firstnum} ${convertOperationToMark(operation)} ${secondnum} = ${result} `;

    $logOutputBox.appendChild($logLi);

}
// 로그 이력을 만드는 함수
const writeToLog=(operation,prevResult,number,result)=>{
    // 하나의 로그 객체(연산, 이전결과, 연산숫자, 연산결과)
    const logObject={
        operation,
        prevResult,
        number,
        result
    };
    logEntries.push(logObject);
    console.log(logEntries);
    renderToLog(logObject);
};
// 계산 이력을 모아둘 배열
const logEntries = [];
// 사용자의 입력값을 읽어오는 함수
const getUserNumberInput = ()=>+$userInput.value;

// 계산 로그를 만들고 화면에 렌더링하는 함수
const createLogAndRenderOutput = (operaterMark,originResult, calcNumber) => {
    // 로그 생성 :  0 + 11
    const calcDescriptionLog = `${originResult} ${operaterMark} ${calcNumber}`;
    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
  };
//   계산기능 헬퍼 함수
const calculate = (type)=>{
    // 계산 전 값을 백업
    const originResult = currentResult;
    // 입력창에 입력한 숫자를 읽기
    const enteredNumber = getUserNumberInput();
    let mark;
    if(type===ADD){
        mark='+';
        currentResult += enteredNumber;
    }
    else if(type===SUB){
        mark='-';
        currentResult -= enteredNumber;
    }
    else if(type===MUL){
        mark='*';
        currentResult *= enteredNumber;
    }
    else if(type===DIV){
        mark='/';
        currentResult /= enteredNumber;
    }
    console.log(`${mark} button click!`);
    // 실제 계산 결과 반영
    createLogAndRenderOutput(mark,originResult, enteredNumber);
    // 로그 이력 쌓기
    writeToLog(type,originResult,enteredNumber,currentResult);
}

const calculationHandler = ()=>{
    return{
        add : ()=>calculate(ADD),
        sub : ()=>calculate(SUB),
        mul : ()=>calculate(MUL),
        div : ()=>calculate(DIV)
    };
};
const calculation = calculationHandler();
// ===============이벤트 핸들러 바인딩===============//
$addBtn.addEventListener('click',calculation.add);
$subtractBtn.addEventListener('click',calculation.sub);
$multiplyBtn.addEventListener('click',calculation.mul);
$divideBtn.addEventListener('click',calculation.div);