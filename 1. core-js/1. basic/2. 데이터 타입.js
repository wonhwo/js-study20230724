let age1='5';
let age2=5;


let num=9;
console.log(typeof num);
console.log(5/2);

// 문자 타입
let s1='str1';
let s2='str2';
let s3='str3';
console.log(typeof s3);

let tag = '<ul>\n\t<li>\n\t<a href="#">link</a></li></ul>'
console.log(tag);

let tag_ = `<ul>
    <li>
        <a href="#">link2</a>
    <li>
        </ul>`;
console.log(tag_);
let userName = `뽀로로`;
let userAge=5;
// let message='제 이름은 '+userName+'이구요 나이는'+userAge+'입니다.';
let message=`제 이름은 ${userName}이구요~ 나이는${userAge}입니다.`
console.log(message);

let flag = false;
console.log(typeof flag);

// undefined타입과 null타입
// undefined: 변수 만들고 값 안 넣어놓은 상태
// null: 의도적으로 값이 없는 상태

let address='충남 청양군 읍내리';
address=null;
console.log(address);
