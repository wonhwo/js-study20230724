
const userNames = ['김철수','강감찬','박영희'];

// userNames에서 각각의 요소들을 다시 변수로 저장시키고 싶다.
const kim = userNames[0];
const kang = userNames[1];
const park = userNames[2];

const [a,b,c]=userNames;
console.log(`a: ${a},b: ${b},c: ${c}`);

const [kk ,, gg] = userNames;
console.log(`kk:${kk} , gg:${gg}`);

let first = 10;
let second = 20;
[second,first]=[first,second];
console.log(`${first}, ${second}`);

// 맨 앞 2개는 각각의 변수에 저장하고
// 나머지는 묶어서 다시 배열로 만들고 싶으면?
const [one, three, ...rest] =[1,3,5,7,9,11];
console.log(`${one} ${three}|| ${rest}`);

// 스프레드를 활용한 배열 간편 복사
console.log(`==================`);
const foods = ['감튀','햄버거','코크'];

// const copyFoods = foods;//배열 포인터 복사
// const copyFoods = foods.map(f=>f);
// const copyFoods = foods.slice();
const copyFoods = [...foods];

console.log('foods: ',foods);
console.log('cpfoods: ',copyFoods);