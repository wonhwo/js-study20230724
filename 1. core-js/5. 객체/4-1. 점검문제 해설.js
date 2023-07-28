let userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};
//회원 객체 안에 있는 회원 배열
let users = userInfo.userList;
// 회원 아이디 입력받기

//   회원 배열을 반복해서 입력한 계쩡명과 일치하는 회원이 있는지 확인

let foundUser = null; //가입된 특정 유저의 정보
while (true) {
  let inputAccount = prompt(`아이디 입력`);
  for (let user of users) {
    if (inputAccount === user.account) {
      // console.log('가입된 사용자 발견');
      foundUser = user;
      break;
    }
  }
  if (foundUser === null) {
    console.log("가입된 유저가 아님");
    continue;
  }
  
  if (inputPassword === foundUser.password) {
    let inputPassword = prompt("비밀번호 입력");
    alert(`${foundUser.username}님 로그인 성공`);
    break;
  } else {
    alert("비밀번호 틀림");
  }
}
// // 패스워드 검사
// // 사용자에게 입력받은 패스워드
// let inputPassword = "kkk1234";
// if (inputPassword === foundUser.password) {
//   console.log(`로그인 성공`);
// } else {
//   console.log("비밀번호가 틀렸습니다.");
// }
