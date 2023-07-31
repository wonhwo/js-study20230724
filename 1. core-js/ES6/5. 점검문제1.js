const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  let sum=0,count=0;
  const lineDraw = ()=>{
    count++;
    return console.log(`================연습${count}================`);
  }
  // 연습 1: 2022년에 발생한 모든 거래를 찾아 
  //   거래자 정보(이름, 도시)를 배열에 매핑해주세요 
lineDraw();

const y2022Traders  = traders
    .filter(n=>n.year===2022)
    .map(n=>n.trader);
console.log(y2022Traders);
  
  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
  lineDraw();
const cityName = traders.map(n=>n.trader.city)
console.log(new Set(cityName)); //중복 제거 new Set()
  
  
  // 연습 3: 대전에 근무하는 
  // 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
  lineDraw();
const daejeonTraders = traders
    .filter(n=>n.trader.city==="대전")
    .map(n=>n.trader);

console.log(daejeonTraders);

  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  lineDraw();
const allName = traders.map(n=>n.trader.name)
console.log(... new Set (allName));
  
  // 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
lineDraw();
// traders
//   .filter(n=>n.trader.city==="서울")
//   .map(n=>n.value)
//   .forEach(n=>sum+=n);

// reduce함수: 배열을 반복해서 각 요소에 콜백함수를 적용한결과를 누적하는 함수
sum= traders
  .filter(n=>n.trader.city==="서울")
  .reduce((acc,curr)=> acc + curr.value,0);

  console.log(`서울 거래액 총액: ${sum}원`);
  
  