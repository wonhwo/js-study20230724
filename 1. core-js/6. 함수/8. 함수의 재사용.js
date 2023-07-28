let foods = ['짬뽕','초밥','김치찌개','족발'];
// let index=foods.indexOf('짬뽕');
const NOT_FOUND =-1;
// 배열에서 특정 요소가 어디 인데긋에 있는지 인덱스를 반환
function myIndexOf(array, serchElement) {
    for(let i =0;i<array.length;i++){
        if(serchElement===array[i]){
            return i;
        }
    }
    return NOT_FOUND;
}
// 배열에서 특정 요소가 존재하는지 유무 확인
function myIncludes(array,serchElement) {
    return myIndexOf(array,serchElement)!==NOT_FOUND;
    
}
console.log(`찾은 인덱스${myIndexOf(foods,'김치찌개')}`);
console.log(`존재유무: ${myIncludes(foods,'김치찌개')}`);