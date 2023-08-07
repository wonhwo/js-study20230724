
// 화살표함수와 this
const dog = {
    name: '뽀삐',
    regularFn:function(){
        console.log('regular:',this);
    },
    arrowFn:()=>{
        console.log('arrow',this);
    }
};
dog.regularFn();
dog.arrowFn();

console.log('====================');
const cat = {
    name:'나비',
    introduce:function () {
        console.log(`intro this ${this}`);
        setTimeout(function(){
            console.log(`settime this: ${this}`);
            console.log(`안녕 제 이름은 ${this.name}입니다.`);
        },2000);        
    }
};
cat.introduce();

$modal.addEventListener('click',function(e){
    $ok.addEventListener('click',function(e){
        console.log(this);
    });
    $cancel.addEventListener('click',(e)=>{
        console.log(this);
    });
});