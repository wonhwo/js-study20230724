function addNumber(n1,n2){
    // 반환값: 함수 호출이 끝나면 함수 호출부로 전달 될 값
    return n1+n2;
    // 반환문은 함수의 탈출문
    let n3=50;
    console.log('asdf');
}
console.log(addNumber(5,7));

// 함수의 중첩 호출
// 안쪽부터 실행, 같은 레벨이면 왼쪽부터
let r2 = addNumber(addNumber(addNumber(3, 2), 10), addNumber(5, 8));console.log(r2);

// 리턴이 없는 함수 : void함수
function multi(n1,n2){
    let result = n1*n2;
    console.log(`${n1} x ${n2} = ${result}`);
}
// void함수는 다른 변수에 담지도 말고 다른 함수의 매개값으로 쓰지도 말기
let r3=multi(4,6);
console.log(r3);

// return 탈출의 의미
function callName(nickName){
    // 금지어 목록
    let prohibits = ['돌아이','멍청이'];
    if(prohibits.includes(nickName)){
        console.log('잘하자^^');
        return;
    }
    console.log(`${nickName}님 하이`);
}
console.log('=======================');
callName('멍청이');

function stopLoop(){
    while(true){
        let flag = prompt('명령어를 입력하세요');
        if(flag==='스톱'){
            return;
        }
        alert(flag);
    }
    alert('수고');
}
stopLoop();