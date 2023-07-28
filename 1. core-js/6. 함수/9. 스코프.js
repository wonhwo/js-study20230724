var x=10; //전역변수
function foo(z) {
    console.log(`지역변수 x 선언전${x}`); 
    var x=30;
    let y=20+x;//지역변수
    console.log(y-z);
    // x=30;
    console.log(`지역변수 x 선언후 ${x}`);
}
foo(17);
console.log(`함수 바깥쪽 x:${x}`);

// 중첩 함수: 함수 안에 함수를 또 정의한 형태
console.log('====================');

function outer(m) {
    let n= 'outer local n';
    let v= 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    function inner() {
        console.log(n);
        let m='inner local m';
        let v='inner local v';
        console.log(v);
    }
    inner();
}
let m='global m';
outer(m);
console.log('====================');

// 블록 스코프
let k = 100;
for(let k = 0;k<3;k++){
    console.log(`for문 안에서의 k : ${k}`);
}
console.log(`for문 밖에서의 k : ${k}`);
console.log('====================');

function abc() {
    k=99;
}
function def() {
    k='hello~';
}