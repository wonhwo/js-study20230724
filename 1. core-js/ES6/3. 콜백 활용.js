const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
  },
];

// 4명의 회원 중 취미가 딱 2개인 사람들만 필터링
// 취미가 2개인 사람만 모아서 배열에 다시 담기

function filter(condition) {
    const filteredArray=[];
    for(let user of userList){
        if(condition(user)){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

// const result= filter((user)=>user.hobbys.length>=3);
// console.log(result);

const result2= filter((user)=>user.address==='서울'&&user.job==='게이머');
console.log(result2);
// const hobby2=filterByHas2Hobby();
// console.log(hobby2);

// 서울 사는 사람들만 필터링하고 새로운 배열에 담기

// 회원정보중에 회원 이름만 전부 모아서 배열에 담아줭

function map(callback){
    // 이름 담을 배열
    const mappedArray=[];
    for(const user of userList){
        mappedArray.push(callback(user));
    }
    return mappedArray;
}
const nameList = map(user=>user.userName);
console.log(nameList);
const addressList = map(user=>user.address);
console.log(addressList);