
// UL태그
const $postUi = document.querySelector('.posts')
// 서버와 통신하기
const xhr =  new XMLHttpRequest();

// 통신정보 전달
/*
    HTTP method
    -GET : 리소소를 조회(게시물 조회, 마이페이지 회원)
    -POST : 리소스를 등록(게시물 쓰기, 회원가입, 장비)
    -PUT : 리소스 일괄 수정(게시물의 모든정보를 통채로)
    -PATCH : 리소스를 일부수정(게시물의 제목만 수정)
    -DELETE :  리소스를 삭제 (게시물 지우기, 회원탈퇴, )*/

    // 요청정보 초기화
    xhr.open('GET','http://localhost:5000/posts');

    xhr.send();

    // 응답 데이터 가져오기
    xhr.onload = e=>{
        // 요청이 끝난후 xhr객체를 보면 응답정보가 들어있음
        // console.log(xhr.response);

        // 서버에서 온 데이터는 js가 아니라 json이다
        // js에서 사용하려면 json을 js로 변환해야 한다.

        // JSON -> JS : JSON.parse()
        // JS -> JSON : JSON.stringify()
        const postList = JSON.parse(xhr.response);
        // console.log(postList);

        postList.forEach(post => {
            const $postLi = document.createElement('li');
            $postLi.classList.add('post-item');
            $postLi.innerHTML=`
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button>DELETE</button>
            `;
            $postUi.appendChild($postLi);
        });
    }