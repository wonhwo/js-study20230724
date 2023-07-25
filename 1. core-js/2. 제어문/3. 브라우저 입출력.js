// 사용자에게 입력받는 함수 prompt

let userName = prompt('이름을 입력해주세요 : ');
alert(`입력한 이름: ${userName}`);

// 숫자로 변환할 때는 앞에 + 기호 붙이기
let userAge= +prompt('나이를 입력해주세요 : ');
alert(`나이 +100 : ${userAge+100}`);
alert(`당신은 ${2023-userAge}년 생이시군요?`);