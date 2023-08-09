const todosUl = document.querySelector(".todo-list");
const URL = "http://localhost:5000/todos";
const $addBtn = document.getElementById("add");
const $delBtn = document.querySelector(".remove");
const rmBtn = document.querySelector("li");

// get 렌더링
fetch(URL)
  .then((res) => res.json())
  .then((todosList) => {
    const $todosTemplate = document.getElementById("single-post");
    todosList.forEach(({ id, text, done }) => {
      const $postLi = document.importNode($todosTemplate.content, true);
      $postLi.querySelector(".todo-list-item").dataset.id = id;
      console.log(id);
      $postLi.querySelector("span").textContent = text;
      todosUl.appendChild($postLi);
    });
  });
//   post 추가
$addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const payload = {
    text: document.getElementById("todo-text").value,
    done: false,
  };

  fetch(URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
});
// delete 삭제
const buttonHandler = (e) => {
  
  const id = e.target.closest(".todo-list-item").dataset.id;
  // 삭제
  if (e.target.matches(".lnr-cross-circle")) {
    console.log(id);
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        alert("삭제 성공!");
      } else {
        alert("삭제 실패!");
      }
    });
  }
  // 수정
  if (e.target.matches(".lnr-undo")) {
    const inputText = prompt("수정할 이름 입력");
    fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputText,
        done: false,
      }),
    }).then((response) => response.json());
  }
  // 체크박스 수정
  const $cb = document.querySelectorAll(".checkbox input");
  $cb.forEach((checkbox)=>{
    checkbox.addEventListener("change", (event) => {
      const xhr = new XMLHttpRequest();
      if(checkbox.checked){
        event.preventDefault();
        
        const fetchPost = () => {
          // 서버에 수정 요청 (PT,PATCH)
          const xhr = new XMLHttpRequest();
          xhr.open("PATCH", `http://localhost:5000/todos/${id}`);

          // 서버로 보낼 데이터(payload)
          const newPost = {
            done: true,
          };
          // payload 를 보낼 때는 js -> json으로 변환해서 보내야 한다.
          const payload = JSON.stringify(newPost);

          // 보내는 데이터가 무엇인지 요청 헤더에 적어야한다.
          xhr.setRequestHeader("content-type", "application/json");

          // 요청 송신 : 데이터를 실어보냄

          xhr.send(payload);
          
        };
          fetchPost();
        
      }
      
      
  
    });
  });

  
  
};

todosUl.addEventListener("click", buttonHandler);
