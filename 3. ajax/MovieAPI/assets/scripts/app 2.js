const URL = "http://localhost:5000/todos";

const $todoList = document.querySelector(".todo-list");
// db.json에 있는 todos를 화면에 렌더링
const fetchTodos = (url, method = "GET", payload = null) => {
  const requestInit = {
    method: method,
    headers: { "Content-type": "application/json" },
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿 가져오기
  const $liTemplate = document.getElementById("single-post");

  todoList.forEach(({ id, text, done }) => {
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector("li").dataset.id = id; //id속성 부여
    $newLi.querySelector(".text").textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector(".checkbox input[type=checkbox]");
    $checkbox.checked = done;
    if (!done) $checkbox.parentNode.classList.add("checked");
    $todoList.appendChild($newLi);
  });
};

// =====이벤트 관련 함수 ===== //
const addTodoHandler = (e) => {
  const $textInput = document.getElementById("todo-text");

  const inputText = $textInput.value;
  const payload = {
    text: inputText,
    done: false,
  };
  fetchTodos(URL, "POST", payload).then((res) => {
    if (res.status === 200 || res.status === 201) {
      console.log("성공");
    } else {
      console.log("실패");
    }
  });
};

// step2. 할 일 등록 기능
const $addBtn = document.getElementById("add");
$addBtn.addEventListener("click", addTodoHandler);.

// =========앱 실행 =============//
const init = () => {
  fetchTodos(URL)
    .then((res) => res.json())
    .then((todos) => {
      renderTodos(todos);
    });
};

init();
