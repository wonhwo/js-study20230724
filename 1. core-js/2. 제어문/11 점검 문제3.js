let c,result,p,a,b;
p = +prompt('난이도를 선택해주세욤 : 1-(1~10)|2-(1~50)|3-(1~100)');
while(true){
    if(p<4){
        if(p===1){
            a=Math.floor(Math.random()*10);
            b=Math.floor(Math.random()*10);
        }
        else if(p===2){
            a=Math.floor(Math.random()*(50))+1;
            b=Math.floor(Math.random()*(50))+1;
        }
        else if(p===3){
            a=Math.floor(Math.random()*100);
            b=Math.floor(Math.random()*100);
        }
    }
    else{
        alert('다시');
    }
    alert(`${a} + ${b} = ??`);
    result=a+b;
    c= +prompt('정답을 입력해주세요 : ');
    if(c===0){
        alert('게임을 종료합니다.');
        break;
    }
    if(result===c){
        alert('정답입니다.');
    }
    else{
        alert('오답입니다.');
    }

}