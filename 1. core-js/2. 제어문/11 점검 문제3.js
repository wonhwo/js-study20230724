let c,result,p,a,b,d,mark;
while(true){
    p = +prompt('난이도를 선택해주세욤 : 1-(1~10)|2-(1~50)|3-(1~100)');
    if(p<4&&p>0){
        if(p===1){
            a=Math.floor(Math.random()*10);
            b=Math.floor(Math.random()*10);
            c=Math.floor(Math.random()*(3))+1;
        }
        else if(p===2){
            a=Math.floor(Math.random()*(50))+1;
            b=Math.floor(Math.random()*(50))+1;
            c=Math.floor(Math.random()*(3))+1;
        }
        else if(p===3){
            a=Math.floor(Math.random()*100);
            b=Math.floor(Math.random()*100);
            c=Math.floor(Math.random()*(3))+1;
        }
    }
    else {
        alert('다시');
        continue;
    }
    if(c===1){
        mark='+';
        result=a+b;
    }
    else if(c===2){
        mark='-';
        result=a-b;
    }
    else if(c===3){
        mark='*';
        result=a*b;
    }
    d= +prompt(`${a} ${mark} ${b} = ??`);
    
    if(d===0){
        alert('게임을 종료합니다.');
        break;
    }
    if(result===d){
        alert('정답입니다.');
    }
    else{
        alert('오답입니다.');
    }

}