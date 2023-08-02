// index.html에서 활용할 이벤트 처리, 핸들러...
outputResult('30','5+25');

// 현재 계산기에 그려질 숫자
let currentResult = 0;
// 로그 이력을 만드는 함수
const writeToLog=(operation,prevResult,number,result,)=>{
    // 하나의 로그 객체(연산, 이전결과, 연산숫자, 연산결과)
    const logObject={
        operation,
        prevResult,
        number,
        result
    };
    logEntries.push(logObject);
    console.log(logEntries);
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
  
const calculationHandler = ()=>{
    return{
        add : ()=>{
            console.log('+ button click!');
            // 입력창에 입력한 숫자를 읽기
            const enteredNumber = getUserNumberInput();
            // 계산 전 값을 백업
            const originResult = currentResult;
            // 실제 계산 결과 반영
            currentResult += enteredNumber;
            createLogAndRenderOutput('+',originResult, enteredNumber);
            // 로그 이력 쌓기
            writeToLog('ADD',originResult,enteredNumber,currentResult);
    },
        sub : ()=>{
            console.log('- button click!');
            // 입력창에 입력한 숫자를 읽기
            const enteredNumber = getUserNumberInput();
            // 계산 전 값을 백업
            const originResult = currentResult;
            // 실제 계산 결과 반영
            currentResult -= enteredNumber;
            createLogAndRenderOutput('-',originResult, enteredNumber);
            writeToLog('SUB',originResult,enteredNumber,currentResult);
        
        },
        mul : ()=>{
            console.log('* button click!');
            // 입력창에 입력한 숫자를 읽기
            const enteredNumber = getUserNumberInput();
            // 계산 전 값을 백업
            const originResult = currentResult;
            // 실제 계산 결과 반영
            currentResult *= enteredNumber;
            createLogAndRenderOutput('*',originResult, enteredNumber);
            writeToLog('MUL',originResult,enteredNumber,currentResult);
        },
        div : ()=>{
            console.log('/ button click!');
            // 입력창에 입력한 숫자를 읽기
            const enteredNumber = getUserNumberInput();
            // 계산 전 값을 백업
            const originResult = currentResult;
            // 실제 계산 결과 반영
            currentResult /= enteredNumber;
            createLogAndRenderOutput('/',originResult, enteredNumber);
            writeToLog('DIV',originResult,enteredNumber,currentResult);
        },
    }
};
const calculation = calculationHandler();
// ===============이벤트 핸들러 바인딩===============//
$addBtn.addEventListener('click',calculation.add);
$subtractBtn.addEventListener('click',calculation.sub);
$multiplyBtn.addEventListener('click',calculation.mul);
$divideBtn.addEventListener('click',calculation.div);